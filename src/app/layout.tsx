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
  themeColor: "#000000",
  initialScale: 1,
};
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Mech-Weld | Engineering Services",
  description: "Revolutionizing the Engineering Services Industry with world-class welding, fabrication, and automation solutions.",
  keywords: [
    "Mech-Weld",
    "Mech Weld",
    "MechWeld",
    "Engineering Services",
    "Welding",
    "Welder",
    "Fabrication",
    "Civil Works",
    "Engineering Designs",
    "Installation",
    "Industrial",
    "Metal Works",
    "Oil and Gas",
    "Brewery",
    "Repair",
    "Machine",
    "Spare Parts",
  ],
  authors: [{ name: "Mech-Weld Tech Team", url: "https://mech-weld.com" }],
  icons: {
    icon: "https://mech-weld.com/favicon.ico",
    shortcut: "https://mech-weld.com/favicon.ico",
  },
  openGraph: {
    title: "Mech-Weld | Engineering Excellence",
    description: "Discover how Mech-Weld is transforming engineering with advanced solutions.",
    url: "https://mech-weld.com",
    siteName: "Mech-Weld",
    images: [
      {
        url: "https://mech-weld.com/logo-seo.png",
        width: 1200,
        height: 630,
        alt: "Mech-Weld site preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mech-Weld | Engineering Excellence",
    description: "Revolutionizing the Engineering Services Industry.",
    images: ["https://mech-weld.com/logo-seo.png"],
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
      <body suppressHydrationWarning className="antialiased min-h-screen">
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
