import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IronForge Gym — Train Hard. Transform Your Body.",
  description:
    "IronForge Gym offers state-of-the-art equipment, expert trainers, and a community that pushes you further. Join today and start your transformation.",
  openGraph: {
    title: "IronForge Gym — Train Hard. Transform Your Body.",
    description:
      "State-of-the-art equipment, expert trainers, and a community that pushes you further.",
    type: "website",
    locale: "en_IN",
    siteName: "IronForge Gym",
  },
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "strength training",
    "crossfit",
    "weight loss",
    "muscle building",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
