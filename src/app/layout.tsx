import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import PixelLandingPageView from "@/components/PixelLandingPageView";
import "./globals.css";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A-Wing Visuals | Scale With Video",
  description:
    "A-Wing Visuals creates premium performance video for brands ready to scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <MetaPixel />
        <PixelLandingPageView />
        {children}
      </body>
    </html>
  );
}
