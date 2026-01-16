"use client";

import { Clock, RefreshCw, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface GoldRate {
  purity: string;
  price: string;
  priceNum: number;
  change: string;
  trend: string;
}

export default function GoldRatesTodayPage() {
  const [rates, setRates] = useState<GoldRate[]>([
    {
      purity: "24K",
      price: "₹10,609",
      priceNum: 10609,
      change: "+0.68%",
      trend: "up",
    },
    {
      purity: "22K",
      price: "₹9,725",
      priceNum: 9725,
      change: "+0.68%",
      trend: "up",
    },
    {
      purity: "18K",
      price: "₹7,957",
      priceNum: 7957,
      change: "+0.65%",
      trend: "up",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Fetch live gold prices from GoldAPI.io
  const fetchLiveGoldPrices = async () => {
    setLoading(true);
    try {
      const GOLD_API_KEY = "goldapi-19qv28smgn8uruu-io";
      const GOLD_API_URL = "https://www.goldapi.io/api";

      const response = await fetch(`${GOLD_API_URL}/XAU/INR`, {
        headers: {
          "x-access-token": GOLD_API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch gold prices");
      }

      const data = await response.json();

      if (data && data.price_gram_24k) {
        const changePercent = data.chp
          ? `${data.chp > 0 ? "+" : ""}${data.chp.toFixed(2)}%`
          : "+0.00%";
        const trend = data.chp >= 0 ? "up" : "down";

        const newRates: GoldRate[] = [
          {
            purity: "24K",
            price: `₹${Math.round(data.price_gram_24k).toLocaleString(
              "en-IN"
            )}`,
            priceNum: Math.round(data.price_gram_24k),
            change: changePercent,
            trend,
          },
          {
            purity: "22K",
            price: `₹${Math.round(data.price_gram_22k).toLocaleString(
              "en-IN"
            )}`,
            priceNum: Math.round(data.price_gram_22k),
            change: changePercent,
            trend,
          },
          {
            purity: "18K",
            price: `₹${Math.round(data.price_gram_18k).toLocaleString(
              "en-IN"
            )}`,
            priceNum: Math.round(data.price_gram_18k),
            change: changePercent,
            trend,
          },
        ];

        setRates(newRates);
        setLastUpdated(new Date());
        toast.success("Live gold prices updated!");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to fetch gold prices:", error);
      }
      toast.error("Using cached rates");
    } finally {
      setLoading(false);
    }
  };

  // Fetch prices on mount and set up auto-refresh
  useEffect(() => {
    fetchLiveGoldPrices();

    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchLiveGoldPrices();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Gold Rates Today - Lajpat Nagar",
    description: "Live gold rate per gram for 24K/22K in Lajpat Nagar, Delhi",
    dateModified: new Date().toISOString(),
    creator: { "@type": "Organization", name: "Viraj Jewellers" },
    temporalCoverage: new Date().toISOString().split("T")[0],
    about: {
      "@type": "Product",
      name: "Gold",
      offers: rates.map((r) => ({
        "@type": "Offer",
        price: r.priceNum,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        description: `${r.purity} Gold per gram`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-yellow-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-3">
                  <TrendingUp className="h-8 w-8" />
                  Gold Rates Today — Lajpat Nagar
                </h1>
                <p className="mt-2 text-amber-100 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Updated:{" "}
                  {lastUpdated ? lastUpdated.toLocaleString("en-IN") : today}
                </p>
              </div>
              <button
                onClick={fetchLiveGoldPrices}
                disabled={loading}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50"
                title="Refresh prices"
              >
                <RefreshCw
                  className={`h-6 w-6 ${loading ? "animate-spin" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Live Indicator */}
          <div className="bg-green-50 border-b border-green-200 px-6 py-3">
            <div className="flex items-center justify-center gap-2">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  loading ? "bg-yellow-500" : "bg-green-500"
                } animate-pulse`}
              ></span>
              <span className="text-sm font-medium text-green-700">
                {loading
                  ? "Updating live prices..."
                  : "Live Market Rates • Powered by Suhtech"}
              </span>
            </div>
          </div>

          {/* Rates Grid */}
          <div className="p-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {rates.map((r) => (
                <div
                  key={r.purity}
                  className="relative rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Purity Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-600 text-white text-xs font-bold">
                      {r.purity}
                    </span>
                  </div>

                  <p className="text-gray-900 font-bold text-lg mb-2">
                    {r.purity} Gold
                  </p>
                  <p className="text-amber-700 text-3xl font-bold mb-2">
                    {r.price}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">per gram</p>

                  {/* Change Indicator */}
                  <div
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      r.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {r.change} {r.trend === "up" ? "↗️" : "↘️"}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/services/cash-for-gold"
                className="flex-1 text-center rounded-lg border-2 border-amber-600 px-6 py-4 font-bold text-amber-700 hover:bg-amber-50 transition-all duration-300 hover:scale-105"
              >
                💰 Sell at Best Rates
              </a>
              <a
                href="/contact"
                className="flex-1 text-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-4 font-bold text-white hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🚀 Get Instant Cash Today
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-900 font-semibold mb-1">
                  ✓ XRF Testing
                </p>
                <p className="text-blue-700 text-sm">
                  On-spot purity verification
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-green-900 font-semibold mb-1">
                  ✓ Instant Payment
                </p>
                <p className="text-green-700 text-sm">Cash/UPI/Bank transfer</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-purple-900 font-semibold mb-1">
                  ✓ Best Rates
                </p>
                <p className="text-purple-700 text-sm">Market-linked pricing</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs text-gray-600 text-center">
                Prices are indicative and subject to change. Final rates
                determined after purity testing. Auto-refreshes every 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </main>
  );
}
