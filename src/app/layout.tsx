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
  metadataBase: new URL("https://locsbystephb.com"),
  title: {
    default: "Locs By Steph B | Premier Loc Stylist & Interlocking Expert",
    template: "%s | Locs By Steph B",
  },
  description:
    "Expert loctician offering Microlocs, Sisterlocks, starter locs, retightening, and loc repair in a welcoming environment. Book your consultation today.",
  keywords: [
    "loc stylist",
    "loctician",
    "starter locs",
    "loc retwist",
    "interlocking locs",
    "loc repair",
    "microlocs",
    "loc detox",
    "sisterlocks",
    "retightening",
    "inglewood",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Locs By Steph B | Premier Loc Stylist & Interlocking Expert",
    description:
      "Expert loctician offering Microlocs, Sisterlocks, starter locs, retightening, and loc repair. Book your consultation today.",
    type: "website",
    url: "https://locsbystephb.com",
    locale: "en_US",
    siteName: "Locs By Steph B",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locs By Steph B | Premier Loc Stylist",
    description:
      "Expert loctician offering Microlocs, Sisterlocks, starter locs, retightening, and loc repair. Book your consultation today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Locs By Steph B",
  image: "https://locsbystephb.com/favicon.ico",
  "@id": "https://locsbystephb.com",
  url: "https://locsbystephb.com",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8464 Crenshaw Blvd",
    addressLocality: "Inglewood",
    addressRegion: "CA",
    postalCode: "90305",
    addressCountry: "US",
  },
  description:
    "Expert loctician offering Microlocs, Sisterlocks, starter locs, retightening, and loc repair in a welcoming environment.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
