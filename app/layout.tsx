import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "El Mahdi ARFAL - Cloud Networking Engineer | 5G & AWS Specialist",
  description:
    "Portfolio of El Mahdi ARFAL, Cloud Networking Engineer specializing in 5G networks, AWS cloud infrastructure, and DevOps. Currently seeking internship opportunities in Morocco and internationally.",
  keywords: [
    "Cloud Networking",
    "5G Networks",
    "AWS",
    "DevOps",
    "Terraform",
    "Network Engineer",
    "Morocco",
    "INPT",
    "Internship",
    "PFE",
    "Open5GS",
    "UERANSIM",
    "VPC",
    "Network Slicing",
    "Infrastructure as Code",
  ],
  authors: [{ name: "El Mahdi ARFAL", url: "https://elmahdi-arfal.vercel.app" }],
  creator: "El Mahdi ARFAL",
  publisher: "El Mahdi ARFAL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elmahdi-arfal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elmahdi-arfal.vercel.app",
    title: "El Mahdi ARFAL - Cloud Networking Engineer | 5G & AWS Specialist",
    description:
      "Portfolio showcasing expertise in 5G networks, AWS cloud infrastructure, and DevOps technologies. Seeking internship opportunities in cloud networking.",
    siteName: "El Mahdi ARFAL Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Mahdi ARFAL - Cloud Networking Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Mahdi ARFAL - Cloud Networking Engineer | 5G & AWS Specialist",
    description:
      "Portfolio showcasing expertise in 5G networks, AWS cloud infrastructure, and DevOps technologies. Seeking internship opportunities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
