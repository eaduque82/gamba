import type { Metadata, Viewport } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://www.gambaworkwear.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GAMBA WORKWEAR | Dotaciones Empresariales Premium en Colombia",
    template: "%s | GAMBA WORKWEAR",
  },
  description:
    "Fabricamos y personalizamos chaquetas industriales, chalecos corporativos, jeans, camisas, polos, botas de seguridad y dotaciones empresariales. Bordado computarizado y uniformes corporativos con identidad de marca.",
  keywords: [
    "dotaciones empresariales",
    "uniformes corporativos Colombia",
    "chaquetas industriales",
    "chalecos corporativos",
    "bordado computarizado",
    "botas de seguridad",
    "ropa industrial personalizada",
    "GAMBA WORKWEAR",
  ],
  authors: [{ name: "GAMBA WORKWEAR" }],
  openGraph: {
    title: "GAMBA WORKWEAR | Dotaciones Empresariales Premium",
    description:
      "Prendas que representan a todo un equipo. Fabricación nacional, bordado computarizado y personalización corporativa para su empresa.",
    url: siteUrl,
    siteName: "GAMBA WORKWEAR",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "GAMBA WORKWEAR — Dotaciones empresariales premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAMBA WORKWEAR | Dotaciones Empresariales Premium",
    description:
      "Fabricación nacional de uniformes corporativos, bordado computarizado y personalización de dotaciones.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-carbon-950 text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
