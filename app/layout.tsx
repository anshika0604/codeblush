import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"


import { Inter, Playfair_Display, Parisienne } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
})

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeBlush",
    template: "%s | CodeBlush"
  },

  description:
    "Helping women build beautiful careers in tech.",

  openGraph: {
    title: "CodeBlush",
    description:
      "Romanticizing Coding Life",
    images: ["/images/og-cover.jpg"]
  },

  metadataBase: new URL("https://codeblush.site")
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}