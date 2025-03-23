import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UpGuardian - AI-powered Upwork Job Scanner",
  description:
    "Protect your freelance career with UpGuardian's AI-powered Upwork job scanner. Detect scams and stay safe on Upwork with real-time risk assessment.",
  keywords: [
    "upwork safety",
    "freelance scam detection",
    "upwork job scanner",
    "freelance protection",
    "ai scam detection",
    "upwork security",
  ],
  metadataBase: new URL("https://up-guard.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://up-guard.com",
    siteName: "UpGuardian",
    title: "UpGuardian - AI-powered Upwork Job Scanner",
    description:
      "Protect your freelance career with UpGuardian's AI-powered Upwork job scanner. Detect scams and stay safe on Upwork with real-time risk assessment.",
    images: [
      {
        url: "https://up-guard.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "UpGuard - Protect Your Freelance Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UpGuardian - AI-powered Upwork Job Scanner",
    description:
      "Protect your freelance career with UpGuardian's AI-powered Upwork job scanner. Detect scams and stay safe on Upwork.",
    images: ["https://up-guard.com/twitter-image.png"],
    creator: "@upguard",
  },
  verification: {
    google: "YqJd52EC1ffv3QLjZ6iT-5xx5RMTzTbIczcs1ib8Rfg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        {/* Navigation - made full width */}
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  UpGuardian
                </span>
              </Link>
              <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
                <Link
                  href="/#features"
                  className="hover:text-indigo-600 transition"
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  className="hover:text-indigo-600 transition"
                >
                  Pricing
                </Link>
                <Link
                  href="/#how-it-works"
                  className="hover:text-indigo-600 transition"
                >
                  How It Works
                </Link>
                <Link
                  href="/#testimonials"
                  className="hover:text-indigo-600 transition"
                >
                  Testimonials
                </Link>
                <Link href="/#faq" className="hover:text-indigo-600 transition">
                  FAQ
                </Link>
              </div>
              <Link
                href="https://chromewebstore.google.com/detail/upguard-ai-powered-upwork/knbbafgpgdjpenknicfagioijfhcomfp"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
              >
                Install Now
              </Link>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </nav>
        </div>
        {children}
        {/* Footer - also made full width */}
        <div className="w-full bg-gray-100 dark:bg-gray-900">
          <footer className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🛡️</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  UpGuardian
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
                <Link
                  href="/privacy"
                  className="hover:text-indigo-600 transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-indigo-600 transition"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} UpGuardian. All rights reserved.
            </div>
          </footer>
        </div>
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "UpGuardian",
              applicationCategory: "BrowserApplication",
              operatingSystem: "Chrome",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "AI-powered Upwork job scanner to protect freelancers from scams",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "124",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
