"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { DollarSign, MapPin, Menu, Phone, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [liveGoldPrice, setLiveGoldPrice] = useState("₹10,609");
  const [pricesLoading, setPricesLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch live gold prices from GoldAPI.io
  const fetchLiveGoldPrice = async () => {
    setPricesLoading(true);
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
        const price24k = Math.round(data.price_gram_24k);
        setLiveGoldPrice(`₹${price24k.toLocaleString("en-IN")}`);
      }
    } catch (error) {
      console.error("Failed to fetch gold prices:", error);
    } finally {
      setPricesLoading(false);
    }
  };

  // Fetch prices on mount and set up auto-refresh
  useEffect(() => {
    fetchLiveGoldPrice();

    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchLiveGoldPrice();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Gold Check", href: "gold-check" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-yellow-200"
          : "bg-transparent"
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto px-3 sm:px-4 flex flex-wrap justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-3 text-[11px] sm:text-sm">
            {/* Phone Clickable */}
            <a
              href="tel:+919810100561"
              className="flex items-center gap-1 sm:gap-2 hover:underline cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>+91-9810100561</span>
            </a>

            {/* Map Clickable */}
            <a
              href="https://www.google.com/maps/dir//Viraj+Jewellers+-+Cash+for+Gold+Lajpat+Nagar+I+Cash+for+Gold+Delhi+I+Silver+buyers,+Gold+buyers+near+me,+Greater+Kailash+C-159,Roxy+chowk+Veer+Savarkar+Marg,+near+Chicago-Pizza,+near+Chicago-+Pizza,+Lajpat+Nagar+II+New+Delhi,+Delhi+110024/@30.9541397,75.7444184,14.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce3b18dbf5fa7:0x9daa4984b8d451e9!2m2!1d77.2400167!2d28.5708028?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 sm:gap-2 hover:underline cursor-pointer"
            >
              <MapPin className="h-4 w-4" />
              <span>Lajpat Nagar, New Delhi</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm">
            <span className={`${pricesLoading ? "animate-pulse" : ""}`}>
              🔥 Best Gold Prices Today: {liveGoldPrice}/gram
            </span>
            <button
              onClick={fetchLiveGoldPrice}
              disabled={pricesLoading}
              className="ml-1 hover:scale-110 transition-transform duration-300 disabled:opacity-50"
              title="Refresh live price"
            >
              <RefreshCw
                className={`h-3 w-3 ${pricesLoading ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 p-[2px] shadow-lg hover:shadow-gold transition-all duration-500">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/imageViraj.jpg"
                  alt="Viraj Jewellers Lajpat Nagar - Trusted Gold Buyer in Delhi Since 1985"
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1
                className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent ${
                  isScrolled ? "" : "text-white"
                }`}
              >
                Viraj Jewellers
              </h1>
              <p
                className={`text-xs sm:text-sm ${
                  isScrolled ? "text-gray-600" : "text-yellow-100"
                }`}
              >
                Trusted Since 1985
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className={`transition-colors duration-300 hover:text-yellow-600 cursor-pointer font-medium ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("sell-gold")}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer text-sm sm:text-base"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Sell Gold
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-xl border border-yellow-200 p-3 sm:p-4 space-y-2">
            {/* Live Price in Mobile Menu */}
            <div className="mb-3 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-700">
                    🔥 Live Gold Price:
                  </span>
                  <span
                    className={`text-sm font-bold text-amber-700 ${
                      pricesLoading ? "animate-pulse" : ""
                    }`}
                  >
                    {liveGoldPrice}/g
                  </span>
                </div>
                <button
                  onClick={fetchLiveGoldPrice}
                  disabled={pricesLoading}
                  className="hover:scale-110 transition-transform duration-300 disabled:opacity-50"
                >
                  <RefreshCw
                    className={`h-3 w-3 text-amber-600 ${
                      pricesLoading ? "animate-spin" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className="block w-full text-left py-2 sm:py-3 text-gray-700 hover:text-yellow-600 transition-colors duration-300 cursor-pointer font-medium text-sm sm:text-base"
              >
                {item.name}
              </button>
            ))}

            <Button
              onClick={() => {
                scrollToSection("sell-gold");
                setIsMenuOpen(false);
              }}
              className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-2 sm:py-3 rounded-full cursor-pointer text-sm sm:text-base"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Sell Gold
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
