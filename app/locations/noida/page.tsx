import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Award, CheckCircle, Phone, Shield, TrendingUp, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Cash for Gold in Noida | Silver & Diamond Buyers | Viraj Jewellers",
  description:
    "Trusted Cash for Gold, Silver & Diamond buyers in Noida with XRF testing, instant payment, and highest market rates. Same-day service across Noida sectors. Call: +91-9810100561",
  alternates: { canonical: "https://virajjewellers.com/locations/noida" },
  keywords: "cash for gold noida, gold buyers noida, sell gold noida, diamond buyers noida, silver buyers noida, cash for diamond noida, gold buyer near me noida, best gold rates noida",
  openGraph: {
    title: "Cash for Gold in Noida | Silver & Diamond Buyers | Viraj Jewellers",
    description: "Trusted Cash for Gold, Silver & Diamond buyers in Noida with instant payment & highest rates",
    url: "https://virajjewellers.com/locations/noida",
    type: "website",
  }
};

export default function NoidaLocationPage() {
  const services = [
    {
      title: "Cash for Gold in Noida",
      description: "Sell gold jewelry, coins, or ornaments at the highest market price with complete transparency using advanced XRF purity testing.",
      icon: Award,
      link: "#cash-for-gold-noida"
    },
    {
      title: "Cash for Silver in Noida",
      description: "Instant cash for silver articles, utensils, coins, and jewelry at fair market valuation with no hidden charges.",
      icon: Shield,
      link: "#cash-for-silver-noida"
    },
    {
      title: "Diamond Buyers in Noida",
      description: "Premium cash for certified diamonds and diamond jewelry with expert gemologist evaluation and instant payment.",
      icon: TrendingUp,
      link: "#diamond-buyers-noida"
    }
  ];

  const benefits = [
    "XRF purity testing in your presence - no melting required",
    "Instant payment via Cash, UPI, or Bank Transfer",
    "Highest market-linked rates - 5-10% above local buyers",
    "Same-day service across all Noida sectors",
    "40+ years of trusted service since 1985",
    "Full KYC compliance and legal documentation"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-amber-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cash for Gold, Silver & Diamond in Noida
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl">
            Viraj Jewellers offers trusted and transparent cash for gold, silver, and diamond services 
            across all Noida sectors with instant payment and the highest market rates guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:+919810100561" 
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              <Phone className="h-5 w-5" />
              Call: +91-9810100561
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
            >
              Schedule Home Visit
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Services in Noida</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <service.icon className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <a href={service.link} className="text-yellow-600 font-semibold hover:text-yellow-700">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cash for Gold in Noida - Detailed Section */}
      <section id="cash-for-gold-noida" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cash for Gold in Noida</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              <strong>Viraj Jewellers</strong> is a trusted and well-recognized name for <strong>Cash for Gold in Noida</strong>, 
              offering customers a secure, transparent, and highly profitable way to sell gold. We understand that selling gold 
              is often an important financial decision, which is why we focus on honesty, clarity, and customer comfort at every step.
            </p>
            <p>
              Whether you want to sell old gold jewelry, broken ornaments, gold coins, biscuits, or inherited gold assets, 
              we ensure a smooth and worry-free experience. Our evaluation process is powered by advanced <strong>XRF purity 
              testing technology</strong>, which allows us to test gold accurately in your presence without melting or damaging it.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us for Cash for Gold in Noida</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              Once the valuation is finalized, payments are made instantly through cash, UPI, or direct bank transfer, 
              as per your convenience. All transactions are conducted under strict KYC norms with proper documentation, 
              ensuring legal compliance and customer safety.
            </p>
          </div>
        </div>
      </section>

      {/* Cash for Silver in Noida */}
      <section id="cash-for-silver-noida" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cash for Silver in Noida</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Viraj Jewellers offers professional and transparent <strong>Cash for Silver in Noida</strong>, helping 
                customers convert their silver assets into instant cash at the best possible market rates.
              </p>
              <p>
                We buy all types of silver items including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Silver jewelry and ornaments</li>
                <li>Silver coins and bars</li>
                <li>Silver utensils and articles</li>
                <li>Silver idols and decorative items</li>
                <li>Antique silver pieces</li>
              </ul>
              <p>
                Our silver valuation process involves accurate weight measurement, purity testing, and pricing aligned 
                with real-time silver market rates. We clearly explain the valuation process to customers, ensuring 
                complete transparency and confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Silver Selling Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bring Your Silver</h4>
                    <p className="text-gray-700 text-sm">Visit our store or request doorstep service</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Purity Testing</h4>
                    <p className="text-gray-700 text-sm">Accurate weight and purity assessment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instant Payment</h4>
                    <p className="text-gray-700 text-sm">Receive cash, UPI, or bank transfer immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Buyers in Noida */}
      <section id="diamond-buyers-noida" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diamond Buyers in Noida</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              <strong>Viraj Jewellers</strong> is a trusted and professional <strong>Diamond Buyer in Noida</strong>, 
              offering customers a secure, transparent, and rewarding way to sell diamond jewelry at the best possible market value.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">We Purchase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Certified and non-certified diamonds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Solitaire rings and engagement rings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Bridal diamond jewelry sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Loose diamonds of all sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Inherited and antique diamond pieces</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Evaluation</h3>
                <p className="text-gray-700 mb-4">
                  Our diamond evaluation is conducted by experienced gemologists using internationally accepted grading standards:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Cut:</strong> Quality and symmetry of diamond cut</li>
                  <li><strong>Clarity:</strong> Internal and external characteristics</li>
                  <li><strong>Color:</strong> Diamond color grading scale</li>
                  <li><strong>Carat:</strong> Precise weight measurement</li>
                </ul>
              </div>
            </div>
            <p>
              We ensure complete transparency by clearly explaining how the diamond's value is calculated based on the 4Cs 
              and current market demand. All offers are aligned with real-time diamond market trends, with no hidden charges 
              or deductions.
            </p>
            <p>
              Once the valuation is approved, customers receive instant payment through cash, UPI, or secure bank transfer. 
              All transactions follow strict KYC compliance with proper documentation for complete legal protection.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Service Coverage Across Noida</h2>
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8">
            <p className="text-gray-700 text-center mb-6">
              We provide doorstep and in-store services across all major sectors and localities in Noida:
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-900">Sectors 1-62</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-900">Greater Noida</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-900">Noida Extension</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-gray-900">Noida Expressway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Gold, Silver, or Diamond in Noida?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get instant cash with transparent valuation and the highest market rates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919810100561" 
              className="inline-flex items-center gap-2 bg-white text-yellow-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
            >
              <Phone className="h-6 w-6" />
              Call: +91-9810100561
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-yellow-700 transition text-lg"
            >
              <MapPin className="h-6 w-6" />
              Schedule Visit
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Main Branch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Address</h3>
                  <p className="text-gray-700">
                    SHOP: O-14, LAJPAT NAGAR - II<br />
                    NEAR GOLDEN DRAGON RESTAURANT<br />
                    NEW DELHI - 110024
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday to Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Phone: +91-9810100561<br />
                    Email: cashforgolddelhi@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                aria-label="Map of Viraj Jewellers Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/services/cash-for-gold" className="text-yellow-600 hover:text-yellow-700 hover:underline">
              Cash for Gold Delhi
            </Link>
            <Link href="/locations/lajpat-nagar" className="text-yellow-600 hover:text-yellow-700 hover:underline">
              Cash for Gold Lajpat Nagar
            </Link>
            <Link href="/services/diamond-buyers" className="text-yellow-600 hover:text-yellow-700 hover:underline">
              Diamond Buyers Delhi
            </Link>
            <Link href="/gold-rates-today" className="text-yellow-600 hover:text-yellow-700 hover:underline">
              Gold Rates Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
