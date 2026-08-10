import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";
import LoadingProvider from "@/components/loading/LoadingProvider";

import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://spydex.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Samuel Dziedzorm Pomaney | Cybersecurity, Software Engineer & Digital Growth | SPYDEX",
    template: "%s | SPYDEX",
  },

  other: {

    "google-site-verification": ""

  },

  description:
    "Official portfolio of Samuel Dziedzorm Pomaney, showcasing cybersecurity, software engineering, networking, IT support, digital marketing, branding and modern web development projects.",

  applicationName: "SPYDEX",

  keywords: [
    "Samuel Dziedzorm Pomaney",
    "SPYDEX",
    "Cybersecurity",
    "Software Engineer",
    "Networking",
    "IT Support",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Linux",
    "Digital Marketing",
    "SEO",
    "Brand Strategy",
    "Portfolio",
    "Ghana",
    "Cybersecurity Ghana",
    "Software Engineer Ghana",
    "Network Engineer Ghana",
    "Digital Growth",
    "Samuel Dziedzorm Pomaney Yaw",
    "Spy Dee",
    "SpyDee",
    "Samuel Dziedzorm Pomaney Yaw Portfolio",
    "SpyDeeReacts",
  ],

  authors: [
    {
      name: "Samuel Dziedzorm Pomaney Yaw (Spy Dee)",
    },
  ],

  creator: "Samuel Dziedzorm Pomaney Yaw (Spy Dee)",

  publisher: "SPYDEX",

  category: "Technology",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url: siteUrl,

    title:
      "Samuel Dziedzorm Pomaney | Cybersecurity, Software Engineer & Digital Growth",

    description:
      "Explore projects in cybersecurity, networking, software engineering, IT support and digital growth.",

    siteName: "SPYDEX",

    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPYDEX Portfolio",
      },
    ],



  },

  twitter: {
    card: "summary_large_image",

    title:
      "Samuel Dziedzorm Pomaney Yaw | SPYDEX",

    description:
      "Cybersecurity • Software Engineering • Networking • Digital Growth",

    images: ["/og-image.png"],

    creator: "@SPYDEX",
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fd9e04",

  colorScheme: "dark light",

  width: "device-width",

  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <StructuredData />
        <LoadingProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}