import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baumgartner Holzbau · Zimmerei & Ingenieurholzbau aus Kärnten",
  description:
    "Seit über 40 Jahren bauen wir mit Holz: Zimmerei, Ingenieurholzbau, Brücken und Massivholzbau aus Reichenfels, Kärnten.",
  openGraph: {
    title: "Baumgartner Holzbau · Zimmerei & Ingenieurholzbau aus Kärnten",
    description:
      "Seit über 40 Jahren bauen wir mit Holz: Zimmerei, Ingenieurholzbau, Brücken und Massivholzbau aus Reichenfels, Kärnten.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
