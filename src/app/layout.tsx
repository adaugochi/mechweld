import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";

const raleWay = Raleway({
  variable: "--font-rale-way",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mech-Weld",
  description: "Revolutionizing the Engineering Services Industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleWay.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
