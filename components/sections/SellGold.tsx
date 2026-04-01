"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  DollarSign,
  RefreshCw,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface SellGoldResult {
  transactionId: string;
  customerName: string;
  customerPhone: string;
  goldType: string;
  weight: number;
  sellingPrice: number;
  goldValue: number;
  status: string;
}

interface GoldRates {
  "24k": { rate: number; purity: number };
  "22k": { rate: number; purity: number };
  "18k": { rate: number; purity: number };
  "14k": { rate: number; purity: number };
  "10k": { rate: number; purity: number };
}

export default function SellGoldPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerAddress: "",
    goldType: "",
    weight: "",
    purity: "",
    currentPrice: "",
    sellingPrice: "",
    idProof: "",
    idNumber: "",
  });
  const [result, setResult] = useState<SellGoldResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [goldRates, setGoldRates] = useState<GoldRates>({
    "24k": { rate: 6500, purity: 99.9 },
    "22k": { rate: 6200, purity: 91.7 },
    "18k": { rate: 4650, purity: 75.0 },
    "14k": { rate: 3600, purity: 58.3 },
    "10k": { rate: 2580, purity: 41.7 },
  });
  const [pricesLoading, setPricesLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Fetch live gold prices directly from Gold-API in INR
  const fetchLiveGoldPrices = async () => {
    setPricesLoading(true);
    try {
      const response = await fetch("https://api.gold-api.com/price/XAU/INR", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch gold prices");
      }

      const data = await response.json();

      if (
        data &&
        (typeof data.price_gram_24k === "number" ||
          typeof data.price === "number")
      ) {
        const pricePerGram24k =
          typeof data.price_gram_24k === "number"
            ? data.price_gram_24k
            : data.price / 31.1034768;
        const pricePerGram22k =
          typeof data.price_gram_22k === "number"
            ? data.price_gram_22k
            : pricePerGram24k * (22 / 24);
        const pricePerGram18k =
          typeof data.price_gram_18k === "number"
            ? data.price_gram_18k
            : pricePerGram24k * (18 / 24);
        const pricePerGram14k =
          typeof data.price_gram_14k === "number"
            ? data.price_gram_14k
            : pricePerGram24k * (14 / 24);
        const pricePerGram10k =
          typeof data.price_gram_10k === "number"
            ? data.price_gram_10k
            : pricePerGram24k * (10 / 24);

        const newRates: GoldRates = {
          "24k": { rate: Math.round(pricePerGram24k), purity: 99.9 },
          "22k": { rate: Math.round(pricePerGram22k), purity: 91.7 },
          "18k": { rate: Math.round(pricePerGram18k), purity: 75.0 },
          "14k": { rate: Math.round(pricePerGram14k), purity: 58.3 },
          "10k": { rate: Math.round(pricePerGram10k), purity: 41.7 },
        };

        setGoldRates(newRates);
        setLastUpdated(new Date());

        // Update current price in form if gold type is selected
        if (formData.goldType) {
          setFormData((prev) => ({
            ...prev,
            currentPrice:
              newRates[
                formData.goldType as keyof typeof newRates
              ].rate.toString(),
          }));
        }

        toast.success("Live gold prices updated!");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to fetch gold prices:", error);
      }
      toast.error("Failed to update prices. Using default rates.");
    } finally {
      setPricesLoading(false);
    }
  };

  // Fetch prices on mount and set up auto-refresh
  useEffect(() => {
    fetchLiveGoldPrices();

    // Auto-refresh every 5 minutes
    const interval = setInterval(
      () => {
        fetchLiveGoldPrices();
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  const calculateValue = () => {
    if (formData.weight && formData.goldType && formData.currentPrice) {
      const weight = parseFloat(formData.weight);
      const price = parseFloat(formData.currentPrice);
      const goldInfo = goldRates[formData.goldType as keyof typeof goldRates];

      if (goldInfo) {
        const grossValue = weight * price;
        const deductions = grossValue * 0.2; // 20% total deductions
        const netValue = grossValue - deductions;

        setEstimatedValue(Math.round(netValue));
        setFormData((prev) => ({
          ...prev,
          purity: goldInfo.purity.toString(),
          sellingPrice: Math.round(netValue).toString(),
        }));
      }
    }
  };

  useEffect(() => {
    calculateValue();
  }, [formData.weight, formData.goldType, formData.currentPrice]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      // Auto-update current price when gold type changes
      if (field === "goldType" && value) {
        const rate = goldRates[value as keyof typeof goldRates]?.rate;
        if (rate) {
          updated.currentPrice = rate.toString();
        }
      }

      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/gold-sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          weight: parseFloat(formData.weight),
          purity: parseFloat(formData.purity),
          currentPrice: parseFloat(formData.currentPrice),
          sellingPrice: parseFloat(formData.sellingPrice),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success("Gold selling request submitted successfully!");
      } else {
        toast.error(data.error || "Failed to submit gold selling request");
      }
    } catch (error: any) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      customerAddress: "",
      goldType: "",
      weight: "",
      purity: "",
      currentPrice: "",
      sellingPrice: "",
      idProof: "",
      idNumber: "",
    });
    setResult(null);
    setEstimatedValue(0);
  };

  const currentRates = [
    {
      karat: "24K",
      rate: goldRates["24k"].rate,
      purity: goldRates["24k"].purity,
    },
    {
      karat: "22K",
      rate: goldRates["22k"].rate,
      purity: goldRates["22k"].purity,
    },
    {
      karat: "18K",
      rate: goldRates["18k"].rate,
      purity: goldRates["18k"].purity,
    },
    {
      karat: "14K",
      rate: goldRates["14k"].rate,
      purity: goldRates["14k"].purity,
    },
    {
      karat: "10K",
      rate: goldRates["10k"].rate,
      purity: goldRates["10k"].purity,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sell Your Old Gold
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the best market prices for your old gold jewelry with instant
            cash payment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-xl border border-yellow-200 sticky top-8">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Live Gold Rates
                    </CardTitle>
                    <p className="text-yellow-100 text-sm mt-1">
                      {lastUpdated
                        ? `Updated ${lastUpdated.toLocaleTimeString()}`
                        : "Loading..."}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-yellow-500"
                    onClick={fetchLiveGoldPrices}
                    disabled={pricesLoading}
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${
                        pricesLoading ? "animate-spin" : ""
                      }`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      pricesLoading ? "bg-yellow-500" : "bg-green-500"
                    } animate-pulse`}
                  ></span>
                  <span className="text-sm text-gray-600">
                    {pricesLoading ? "Updating..." : "Live • Real-time rates"}
                  </span>
                </div>

                {currentRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {rate.karat} Gold
                      </p>
                      <p className="text-xs text-gray-600">
                        Per gram ({rate.purity}% pure)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-amber-700">
                        ₹{rate.rate.toLocaleString()}
                      </p>
                      <p className="text-xs font-medium text-green-600">
                        Live Rate
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 text-center font-medium">
                    💡 Powered by SuhTech
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-amber-600" />
                  Sell Gold Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Customer Information
                    </h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="customerName">Full Name *</Label>
                        <Input
                          id="customerName"
                          placeholder="Enter your full name"
                          value={formData.customerName}
                          onChange={(e) =>
                            handleInputChange("customerName", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="customerPhone">Phone Number *</Label>
                        <Input
                          id="customerPhone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.customerPhone}
                          onChange={(e) =>
                            handleInputChange("customerPhone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customerEmail">Email (Optional)</Label>
                      <Input
                        id="customerEmail"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.customerEmail}
                        onChange={(e) =>
                          handleInputChange("customerEmail", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customerAddress">Address</Label>
                      <Textarea
                        id="customerAddress"
                        placeholder="Enter your address"
                        value={formData.customerAddress}
                        onChange={(e) =>
                          handleInputChange("customerAddress", e.target.value)
                        }
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Gold Information
                    </h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="goldType">Gold Type *</Label>
                        <Select
                          value={formData.goldType}
                          onValueChange={(value) =>
                            handleInputChange("goldType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gold type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="24k">
                              24K Gold (99.9%) - ₹{goldRates["24k"].rate}/g
                            </SelectItem>
                            <SelectItem value="22k">
                              22K Gold (91.7%) - ₹{goldRates["22k"].rate}/g
                            </SelectItem>
                            <SelectItem value="18k">
                              18K Gold (75.0%) - ₹{goldRates["18k"].rate}/g
                            </SelectItem>
                            <SelectItem value="14k">
                              14K Gold (58.3%) - ₹{goldRates["14k"].rate}/g
                            </SelectItem>
                            <SelectItem value="10k">
                              10K Gold (41.7%) - ₹{goldRates["10k"].rate}/g
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (grams) *</Label>
                        <Input
                          id="weight"
                          type="number"
                          step="0.01"
                          placeholder="Enter weight"
                          value={formData.weight}
                          onChange={(e) =>
                            handleInputChange("weight", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentPrice">
                        Current Gold Price (₹/gram) *
                      </Label>
                      <Input
                        id="currentPrice"
                        type="number"
                        placeholder="Auto-filled from live rates"
                        value={formData.currentPrice}
                        onChange={(e) =>
                          handleInputChange("currentPrice", e.target.value)
                        }
                        required
                        className="bg-yellow-50"
                      />
                      <p className="text-xs text-gray-500">
                        Auto-updated when you select gold type
                      </p>
                    </div>

                    {estimatedValue > 0 && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Estimated Value:
                        </h4>
                        <p className="text-2xl font-bold text-green-700">
                          ₹{estimatedValue.toLocaleString()}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          After deductions (making charges & wastage ~20%)
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white"
                      disabled={
                        loading ||
                        !formData.customerName ||
                        !formData.customerPhone ||
                        !formData.goldType ||
                        !formData.weight
                      }
                    >
                      {loading ? "Submitting..." : "Submit for Selling"}
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {result && (
              <Card className="shadow-lg border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-6 w-6" />
                    Gold Selling Request Submitted
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-medium">
                        {result.transactionId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer:</span>
                      <span className="font-medium">{result.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gold Type:</span>
                      <span className="font-medium">{result.goldType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-medium">{result.weight}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Selling Price:</span>
                      <span className="font-medium text-green-600">
                        ₹{result.sellingPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your gold selling request has been submitted successfully.
                      Our team will contact you within 24 hours to schedule the
                      evaluation.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg border border-yellow-200 text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Live Market Rates</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time pricing updated automatically
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-yellow-200 text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">100% Safe</h3>
                  <p className="text-gray-600 text-sm">
                    Secure transactions with proper documentation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
