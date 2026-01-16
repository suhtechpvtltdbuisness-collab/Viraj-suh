"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-1000">
        {/* Logo */}
        <div className="relative">
          <div className="w-23 h-23 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-white font-bold text-4xl font-playfair">
              <Image
                className="rounded-full"
                src="/images/virajLogo.jpg"
                alt="Viraj Jewellers - Best Cash for Gold Buyer in Lajpat Nagar Delhi"
                width={90}
                height={90}
                priority
              />
            </span>
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
        </div>

        {/* Company Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-playfair">
            Viraj Jewellers
          </h1>
          <p className="text-amber-700 font-medium tracking-wide">
            Trusted Since 1985
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full animate-[loadingbar_2s_ease_infinite]"></div>
        </div>

        <p className="text-amber-600 font-medium animate-pulse">
          Loading your gold trading platform...
        </p>
      </div>

      <style jsx>{`
        @keyframes loadingbar {
          0% {
            transform: translateX(-100%);
            width: 0%;
          }
          50% {
            transform: translateX(0%);
            width: 100%;
          }
          100% {
            transform: translateX(100%);
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
