import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, Award, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Diamond Buyers in Delhi | Expert Valuation | Viraj Jewellers",
  description:
    "Trusted diamond buyers in Delhi offering expert gemologist evaluation, instant payment, and fair market pricing for certified & non-certified diamonds. Call: +91-9810100561",
  alternates: { canonical: "https://virajjewellers.com/services/diamond-buyers" },
  keywords: "diamond buyers delhi, sell diamond delhi, diamond buyer near me, cash for diamond delhi, diamond valuation delhi, certified diamond buyers, solitaire buyers delhi",
  openGraph: {
    title: "Diamond Buyers in Delhi | Expert Valuation | Viraj Jewellers",
    description: "Trusted diamond buyers with expert evaluation and instant payment",
    url: "https://virajjewellers.com/services/diamond-buyers",
    type: "website",
  }
};

export default function DiamondBuyersPage() {
  const benefits = [
    "Expert gemologist evaluation using 4Cs grading standards",
    "Fair market pricing for certified and non-certified diamonds",
    "Instant payment via Cash, UPI, or Bank Transfer",
    "Complete confidentiality and secure transactions",
    "40+ years of trusted service since 1985",
    "Full KYC compliance and legal documentation"
  ];

  const diamondTypes = [
    {
      title: "Certified Diamonds",
      description: "GIA, IGI, HRD certified diamonds with grading reports",
      icon: Award
    },
    {
      title: "Solitaire Rings",
      description: "Engagement rings and solitaire diamond jewelry",
      icon: TrendingUp
    },
    {
      title: "Loose Diamonds",
      description: "Unset diamonds of all sizes and qualities",
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: "How do you evaluate diamonds?",
      answer: "Our experienced gemologists assess each diamond using the 4Cs - Cut, Clarity, Color, and Carat weight. We examine brilliance, symmetry, polish, and overall condition using professional grading tools. The evaluation is transparent and explained in detail to ensure you understand how the value is determined."
    },
    {
      question: "Do you buy non-certified diamonds?",
      answer: "Yes, we purchase both certified and non-certified diamonds. For non-certified diamonds, our gemologists conduct thorough in-house evaluation using the same grading standards. While certified diamonds often command higher prices due to third-party verification, we ensure fair market pricing for all diamond types."
    },
    {
      question: "What documents do I need to sell diamonds in Delhi?",
      answer: "To sell diamonds, you need a valid government ID (Aadhar, PAN, Driving License) for KYC compliance. If you have diamond certificates (GIA, IGI, etc.) or original purchase bills, please bring them as they help in valuation. However, certificates are not mandatory - we can evaluate diamonds without documentation."
    },
    {
      question: "How is the payment processed?",
      answer: "Once the diamond valuation is approved, payment is processed immediately. You can choose your preferred payment method: instant cash (up to applicable limits), UPI transfer, or direct bank transfer. All transactions are documented with proper receipts and KYC records for legal compliance."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diamond Buyers in Delhi
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl">
            <strong>Viraj Jewellers</strong> - Professional diamond buyers offering expert gemologist evaluation, 
            transparent 4Cs grading, and instant payment at fair market prices for certified and non-certified diamonds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:+919810100561" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <Phone className="h-5 w-5" />
              Call: +91-9810100561
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Schedule Evaluation
            </a>
            <a 
              href="/locations/noida" 
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Diamond Buyers Noida
            </a>
          </div>
        </div>
      </section>

      {/* Diamond Types We Buy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Diamonds We Purchase</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {diamondTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition">
                <type.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">We Buy All Types of Diamonds</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Certified diamonds (GIA, IGI, HRD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Non-certified diamonds with in-house grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Solitaire engagement and wedding rings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Diamond necklaces, earrings, and bracelets</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Loose diamonds of all sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bridal diamond jewelry sets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Inherited and antique diamond pieces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Designer diamond jewelry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 4Cs Evaluation */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Expert Diamond Evaluation - The 4Cs</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our certified gemologists evaluate every diamond using internationally recognized grading standards. 
            We assess each stone based on the 4Cs - the universal method for evaluating diamond quality.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                C
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cut</h3>
              <p className="text-gray-700">
                Evaluates the diamond's proportions, symmetry, and polish. A well-cut diamond maximizes brilliance and sparkle.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                C
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity</h3>
              <p className="text-gray-700">
                Assesses internal characteristics (inclusions) and external blemishes. Higher clarity means fewer visible imperfections.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                C
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Color</h3>
              <p className="text-gray-700">
                Grades the diamond's color from D (colorless) to Z (light color). Colorless diamonds are rarer and more valuable.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                C
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carat</h3>
              <p className="text-gray-700">
                Measures the diamond's weight. One carat equals 200 milligrams. Larger diamonds are rarer and command higher prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Sell Diamonds to Viraj Jewellers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diamond Selling Process */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How to Sell Diamonds in Delhi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit or Contact</h3>
              <p className="text-gray-700">
                Visit our Lajpat Nagar store or call us to schedule an appointment. Bring your diamonds and any certificates if available.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Evaluation</h3>
              <p className="text-gray-700">
                Our gemologist evaluates your diamond using the 4Cs and explains the grading process transparently in your presence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Payment</h3>
              <p className="text-gray-700">
                Once you approve the valuation, receive immediate payment via cash, UPI, or bank transfer with full documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Diamonds?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert evaluation and instant payment at fair market prices
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919810100561" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
            >
              <Phone className="h-6 w-6" />
              Call: +91-9810100561
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition text-lg"
            >
              Schedule Evaluation
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Store</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
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
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday to Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
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

      {/* Related Services */}
      <section className="py-12 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/services/cash-for-gold" className="text-blue-600 hover:text-blue-700 hover:underline">
              Cash for Gold
            </Link>
            <Link href="/services/instant-cash-silver" className="text-blue-600 hover:text-blue-700 hover:underline">
              Cash for Silver
            </Link>
            <Link href="/locations/noida" className="text-blue-600 hover:text-blue-700 hover:underline">
              Diamond Buyers Noida
            </Link>
            <Link href="/gold-rates-today" className="text-blue-600 hover:text-blue-700 hover:underline">
              Gold Rates Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


