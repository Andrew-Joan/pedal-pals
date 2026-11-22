import type { Metadata } from "next";
import { Permanent_Marker, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

const headingFont = Barlow_Condensed({
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
});

const bodyFont = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedal Pals | Ride More. Ride Together.",
  description: "Premium bikes, gear, maintenance, and community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
