import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "SwapX – Battery Swapping for E-Rickshaws | Bhubaneswar",
  description:
    "Swap your e-rickshaw battery in minutes. No downtime, no waiting. Affordable subscriptions starting ₹4500/month. Serving Bhubaneswar.",
  keywords: [
    "battery swap",
    "e-rickshaw",
    "Bhubaneswar",
    "electric vehicle",
    "battery exchange",
    "SwapX",
  ],
  openGraph: {
    title: "SwapX – Battery Swapping for E-Rickshaws",
    description:
      "Swap your e-rickshaw battery in minutes. No downtime, no waiting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
