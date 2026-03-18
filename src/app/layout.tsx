import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Locs By Steph B | Premier Loc Stylist — Microlocs, Sisterlocks & Starter Locs",
    template: "%s | Locs By Steph B",
  },
  description:
    "Expert loctician offering Microlocs installation, Sisterlocks, starter locs, retightening, interlocking locs, loc repair, and loc detox services. Book your consultation today.",
  keywords: [
    "loc stylist near me",
    "loctician near me",
    "starter locs near me",
    "loc retwist services",
    "interlocking locs near me",
    "loc repair specialist",
    "microlocs installation",
    "loc detox service",
    "sisterlocks near me",
    "retightening",
  ],
  openGraph: {
    title:
      "Locs By Steph B | Premier Loc Stylist — Microlocs, Sisterlocks & Starter Locs",
    description:
      "Expert loctician specializing in Microlocs, Sisterlocks, starter locs, retightening, and loc repair. Your hair journey becomes a healing journey.",
    type: "website",
    locale: "en_US",
    siteName: "Locs By Steph B",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locs By Steph B | Premier Loc Stylist",
    description:
      "Expert loctician specializing in Microlocs, Sisterlocks, starter locs, retightening, and loc repair.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
