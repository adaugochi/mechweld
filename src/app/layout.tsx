import type { Metadata, Viewport } from "next";
import { Raleway, Montserrat } from "next/font/google";
import WhatsApp from "@/components/whatsapp";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mech-Weld | Engineering Services",
  description: "Revolutionizing the Engineering Services Industry with world-class welding, fabrication, and automation solutions.",
  keywords: [
    "Mech-Weld",
    "Engineering Services",
    "Welding",
    "Fabrication",
    "Civil Works",
    "Designs",
    "Installation",
    "Metal Works",
  ],
  authors: [{ name: "Mech-Weld Team", url: "https://mechweld-v2.vercel.app/" }],
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
  },
  themeColor: "#000000",
  openGraph: {
    title: "Mech-Weld | Engineering Excellence",
    description:
      "Discover how Mech-Weld is transforming engineering with advanced solutions.",
    url: "https://mechweld-v2.vercel.app/",
    siteName: "Mech-Weld",
    images: [
      {
        url: "/about-hero.png",
        width: 1200,
        height: 630,
        alt: "Mech-Weld site preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mech-Weld",
    description: "Revolutionizing the Engineering Services Industry.",
    images: ["/about-hero.png"],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleWay.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
