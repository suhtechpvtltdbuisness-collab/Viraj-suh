"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Banner from "@/components/sections/Banner";
import { Toaster } from "@/components/ui/sonner";
import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

// Lazy load below-fold components for better performance
// Using subtle loading states to maintain perceived performance
const About = dynamic(() => import("@/components/sections/About"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const DoorStepService = dynamic(
  () => import("@/components/sections/DoorStepService")
);
const FloatingActions = dynamic(
  () => import("@/components/sections/FloatingActions")
);
const Footer = dynamic(() => import("@/components/sections/Footer"));
const GoldCheck = dynamic(() => import("@/components/sections/GoldCheck"));
const LoanCalculatorPage = dynamic(() => import("@/components/sections/Loan"));
const SellGoldPage = dynamic(() => import("@/components/sections/SellGold"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const adsenseClient = "ca-pub-xxxxxxxxxxxxxxxx";
  const adsenseSlot = "1234567890";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (window as any).scrollToSection = scrollToSection;
  }, []);

  useEffect(() => {
    if (!adsenseClient || !adsenseSlot) return;

    let attempts = 0;
    const maxAttempts = 15;

    const initializeAd = () => {
      const adElement = document.getElementById("home-map-adsense-slot");
      if (!adElement) return;

      const width = adElement.getBoundingClientRect().width;
      if (width <= 0 && attempts < maxAttempts) {
        attempts += 1;
        window.setTimeout(initializeAd, 200);
        return;
      }

      if (adElement.getAttribute("data-adsbygoogle-status")) return;

      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch {
        // Ignore duplicate/early push errors from ad script loading race.
      }
    };

    initializeAd();
  }, [adsenseClient, adsenseSlot]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero scrollY={scrollY} />
      <Banner />
      {/* Cash for Gold in Lajpat Nagar Delhi Section */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-900">
          #1 Cash for Gold in Lajpat Nagar Delhi
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          <strong>Viraj Jewellers</strong> is Delhi most trusted destination for{" "}
          <strong>cash for gold in Lajpat Nagar Delhi</strong>. We provide
          transparent XRF testing in your presence, instant cash/UPI/bank
          transfer payment, and highest market-linked rates guaranteed.
        </p>
        <div className="mt-6 bg-yellow-50 p-5 rounded-lg border border-yellow-100">
          <h3 className="text-xl font-semibold text-gray-900">
            Why We are the Best Cash for Gold Service in Lajpat Nagar Delhi:
          </h3>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Highest gold rates in Lajpat Nagar Delhi - guaranteed 5-10% above
              market average
            </li>
            <li>
              Same-day cash payment with proper documentation and KYC compliance
            </li>
            <li>
              100% transparent XRF testing in your presence for accurate gold
              evaluation
            </li>
            <li>Private evaluation area and secure transaction process</li>
            <li>
              Trusted since 1995 with 10,000+ satisfied customers across Delhi
              NCR
            </li>
          </ul>
        </div>
        <p className="mt-4 text-gray-700">
          Serving all areas in and around <strong>Lajpat Nagar Delhi</strong>{" "}
          including Nehru Place, CR Park, Greater Kailash, Defence Colony,
          Kalkaji, and South Delhi with the best cash for gold rates.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/services/cash-for-gold"
            className="rounded bg-yellow-600 px-5 py-3 text-white font-medium hover:bg-yellow-700"
          >
            Cash for Gold Lajpat Nagar Delhi
          </a>
          <a
            href="/best-gold-buyer-lajpat-nagar"
            className="rounded border border-yellow-600 px-5 py-3 font-medium hover:bg-yellow-50"
          >
            Best Gold Buyer in Lajpat Nagar
          </a>
          <a
            href="/gold-rates-today"
            className="rounded border px-5 py-3 hover:bg-gray-50"
          >
            Gold Rates Today
          </a>
          <a
            href="/blog/cash-for-gold-lajpat-nagar-delhi-guide"
            className="rounded border px-5 py-3 hover:bg-gray-50"
          >
            Cash for Gold Guide
          </a>
        </div>
      </section>
      <div id="gold-check">
        <GoldCheck />
      </div>
      <div id="doorstep-service">
        <DoorStepService />
      </div>
      <div id="loan-calculator">
        <LoanCalculatorPage />
      </div>
      <div id="sell-gold">
        <SellGoldPage />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <section className="mt-10 px-4">
        <div className="mx-auto max-w-5xl rounded border border-yellow-200 bg-white p-4">
          <Script
            id="adsense-js"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <ins
            id="home-map-adsense-slot"
            className="adsbygoogle"
            style={{ display: "block", height: "auto" }}
            data-ad-client={adsenseClient}
            data-ad-slot={adsenseSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </section>
      {/* Map Embed on Homepage */}
      <section className="mt-10 px-4 pb-8">
        <div className="mx-auto max-w-5xl h-80 w-full overflow-hidden rounded border">
          <iframe
            src="https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            aria-label="Map of Viraj Jewellers Lajpat Nagar"
          />
        </div>
      </section>
      <Footer />
      <FloatingActions /> {/* ✅ Floating button section added here */}
      <Toaster />
      {/* <TestimonialsPage/> */}
    </main>
  );
}
