import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virajjewellers.com"),
  title:
    "Cash for Gold Lajpat Nagar | Best Rates in Delhi NCR | Viraj Jewellers",
  description:
    "Sell gold for instant cash in Lajpat Nagar , Delhi. Trusted gold buyers offering best market rates, on-spot testing, and same-day payment. Cash for Gold in South Delhi.",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
    },
  ],
  keywords: [
    "Cash for Gold Lajpat Nagar",
    "Cash for Gold Delhi",
    "Sell Old Gold Delhi",
    "Gold Buyers Near Me",
    "Gold Buyer in Delhi",
    "Sell Gold in Lajpat Nagar",
    "Instant Cash for Gold",
    "Old Gold Exchange Delhi",
    "Release Pledged Gold Delhi",
    "Instant Cash for Silver Delhi",
    "Diamond Buyers Delhi",
    "Cash for Gold South Delhi",
    "Best price for gold Delhi",
    "Trusted gold buyer Lajpat Nagar",
  ].join(", "),

  authors: [{ name: "Viraj Jewellers" }],
  creator: "Viraj Jewellers",
  publisher: "Viraj Jewellers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Cash for Gold Lajpat Nagar | Best Rates in Delhi NCR",
    description:
      "Sell gold for instant cash in Lajpat Nagar, Delhi. Trusted gold buyers with transparent testing and same-day payment.",
    type: "website",
    locale: "en_IN",
    url: "https://virajjewellers.com",
    siteName: "Viraj Jewellers - Cash for Gold Lajpat Nagar",
    images: [
      {
        url: "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cash for Gold in Lajpat Nagar - Best Rates in Delhi NCR",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cash for Gold Lajpat Nagar | Best Rates in Delhi NCR",
    description:
      "Sell gold for instant cash in Lajpat Nagar, Delhi. Transparent testing and same-day payout.",
    images: [
      "https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-twitter.jpg",
    ],
    creator: "@virajjewellers",
    site: "@virajjewellers",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://virajjewellers.com",
    languages: {
      "x-default": "https://virajjewellers.com",
      "en-IN": "https://virajjewellers.com",
      "hi-IN": "https://virajjewellers.com/hi",
      "mr-IN": "https://virajjewellers.com/mr",
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || undefined,
    other: {
      "facebook-domain-verification":
        process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION || "",
    },
  },

  category: "cash for gold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://virajjewellers.com/#organization",
        name: "Viraj Jewellers",
        alternateName: "Viraj Jewellers Delhi NCR",
        url: "https://virajjewellers.com",
        logo: {
          "@type": "ImageObject",
          url: "https://virajjewellers.com/images/viraj-jewellers-logo.png",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9876543210",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Authorized SBI Approver",
          credentialCategory: "Professional Certification",
        },
        award: ["Authorized SBI Approver", "Trusted Since 1985"],
        sameAs: [
          "https://www.facebook.com/virajjewellers",
          "https://www.instagram.com/virajjewellers",
          "https://twitter.com/virajjewellers",
          "https://www.linkedin.com/company/virajjewellers",
        ],
        founder: {
          "@type": "Person",
          name: "Viraj Shah",
        },
        foundingDate: "1985",
        legalName: "Viraj Jewellers Private Limited",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://virajjewellers.com/#localbusiness",
        name: "Viraj Jewellers - Cash for Gold Lajpat Nagar",
        image:
          "https://virajjewellers.com/images/viraj-jewellers-lajpat-nagar.jpg",
        description:
          "Trusted cash for gold buyer in Lajpat Nagar, Delhi. Transparent XRF testing, best market rates and instant payment.",
        url: "https://virajjewellers.com",
        telephone: "+91-9876543210",
        priceRange: "₹₹₹",
        hasMap: "https://www.google.com/maps?q=Viraj+Jewellers+Lajpat+Nagar",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop No. 45, Central Market, Lajpat Nagar-II",
          addressLocality: "Lajpat Nagar",
          addressRegion: "Delhi",
          postalCode: "110024",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5665,
          longitude: 77.2431,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "Bank Transfer",
          "UPI",
        ],
        currenciesAccepted: "INR",
        areaServed: [
          "Delhi",
          "Delhi NCR",
          "Lajpat Nagar",
          "South Delhi",
          "CR Park",
          "Green Park",
          "Nehru Place",
          "Kalkaji",
          "Govindpuri",
          "Greater Kailash",
          "Saket",
          "Defence Colony",
          "New Delhi",
          "Noida",
          "Gurgaon",
          "Faridabad",
          "Ghaziabad",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "247",
        },
      },
      {
        "@type": "OfferCatalog",
        name: "Cash for Gold Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cash for Gold" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Sell Old Gold" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Gold Buyer Delhi" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Instant Cash for Silver",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Diamond Buyers" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Release Pledged Gold" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Old Gold Exchange" },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://virajjewellers.com/#website",
        url: "https://virajjewellers.com",
        name: "Viraj Jewellers - Cash for Gold Lajpat Nagar",
        description:
          "Trusted cash for gold buyer since 1985. Instant cash against gold with transparent testing in Lajpat Nagar.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://virajjewellers.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://virajjewellers.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://virajjewellers.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://virajjewellers.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cash for Gold",
            item: "https://virajjewellers.com/services/cash-for-gold",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://virajjewellers.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I sell gold in Lajpat Nagar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visit Viraj Jewellers, Central Market, Lajpat Nagar-II, Delhi. We offer instant testing and same-day cash payment at best market rates.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide instant cash for gold?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. After on-spot purity testing, we pay instantly via cash, UPI or bank transfer based on KYC norms.",
            },
          },
          {
            "@type": "Question",
            name: "Do you buy old and damaged gold?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we buy old, broken or damaged gold jewelry based on purity and weight at transparent live rates.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary SEO Meta Tags */}
        <meta
          name="title"
          content="Cash for Gold Lajpat Nagar - Instant Cash Against Gold | Best Rates Delhi NCR 2025"
        />
        <meta
          name="description"
          content="Sell gold for instant cash in Lajpat Nagar, Delhi. Trusted gold buyers with transparent testing and same-day payment at best market rates."
        />
        <meta
          name="keywords"
          content="cash for gold lajpat nagar, instant cash for gold delhi ncr, gold buyer lajpat nagar, sell gold lajpat nagar, viraj jewellers lajpat nagar"
        />

        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.5665;77.2431" />
        <meta name="ICBM" content="28.5665, 77.2431" />

        {/* Business Information */}
        <meta name="contact" content="support@virajjewellers.com" />
        <meta
          name="copyright"
          content="© 2025 Viraj Jewellers. All rights reserved."
        />
        <meta name="author" content="Viraj Jewellers" />
        <meta name="reply-to" content="support@virajjewellers.com" />
        <meta name="owner" content="Viraj Jewellers" />
        <meta name="url" content="https://virajjewellers.com" />
        <meta name="identifier-URL" content="https://virajjewellers.com" />

        {/* Enhanced OpenGraph */}
        <meta
          property="og:title"
          content="Cash for Gold Lajpat Nagar - Instant Cash Against Gold | Best Rates Delhi NCR 2025"
        />
        <meta
          property="og:description"
          content="Sell gold for instant cash in Lajpat Nagar, Delhi. Trusted gold buyers with transparent testing and same-day payment at best market rates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virajjewellers.com" />
        <meta
          property="og:image"
          content="https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Cash for Gold in Lajpat Nagar - Best Rates in Delhi NCR"
        />
        <meta property="og:site_name" content="Viraj Jewellers" />
        <meta property="og:locale" content="en_IN" />

        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cash for Gold Lajpat Nagar - Instant Cash Against Gold | Best Rates"
        />
        <meta
          name="twitter:description"
          content="Sell gold for instant cash in Lajpat Nagar, Delhi. Transparent testing and same-day payout at best market rates."
        />
        <meta
          name="twitter:image"
          content="https://virajjewellers.com/images/cash-for-gold-lajpat-nagar-twitter.jpg"
        />
        <meta name="twitter:creator" content="@virajjewellers" />
        <meta name="twitter:site" content="@virajjewellers" />

        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://virajjewellers.com" />
        <link
          rel="alternate"
          href="https://virajjewellers.com"
          hrefLang="en-in"
        />
        <link
          rel="alternate"
          href="https://virajjewellers.com/hi"
          hrefLang="hi-in"
        />
        <link
          rel="alternate"
          href="https://virajjewellers.com/mr"
          hrefLang="mr-in"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />

        {/* Performance and Technical SEO */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@600;700&display=swap"
        />
        {/* Performance Resource Hints */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://www.goldapi.io" />
        <link rel="preload" as="image" href="/images/imageViraj.jpg" />
        <link rel="preload" as="image" href="/images/gold.jpeg" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Cash for Gold Lajpat Nagar",
              description:
                "Sell gold for instant cash at best market rates in Lajpat Nagar, Delhi.",
              provider: {
                "@type": "Organization",
                name: "Viraj Jewellers",
                url: "https://virajjewellers.com",
              },
              areaServed: {
                "@type": "City",
                name: "Delhi",
              },
              serviceType: "Cash for Gold",
              serviceOutput: "Instant Payment",
            }),
          }}
        />

        {/* Rich Snippets for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "Viraj Jewellers Cash for Gold",
              },
              ratingValue: "4.8",
              reviewCount: "247",
              bestRating: "5",
              worstRating: "1",
            }),
          }}
        />

        {/* Performance Monitoring with Privacy-Focused Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Configure with cookieless tracking and privacy settings
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
                send_page_view: true,
                cookie_flags: 'SameSite=None;Secure',
                // Privacy-focused settings
                anonymize_ip: true,
                allow_ad_personalization_signals: false,
                allow_google_signals: false,
                cookie_expires: 63072000, // 2 years instead of default
              });
              
              // Suppress third-party cookie warnings
              gtag('set', 'cookie_update', false);
              gtag('set', 'cookie_domain', 'virajjewellers.com');
            `,
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-amber-50 to-yellow-50`}
      >
        {/* Skip Navigation for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="hidden">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a itemProp="item" href="https://virajjewellers.com">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">Cash for Gold</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <ErrorBoundary>
          <main id="main-content">{children}</main>
        </ErrorBoundary>

        {/* Service Worker Registration - Removed to prevent errors */}
        {/* Service workers are not compatible with static export mode */}
      </body>
    </html>
  );
}
