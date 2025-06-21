import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";

const raleWay = Raleway({
  variable: "--font-rale-way",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mech-Weld",
  description: "Revolutionizing the Engineering Services Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleWay.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
