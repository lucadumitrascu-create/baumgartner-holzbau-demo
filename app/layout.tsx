import type { Metadata } from "next";
import { Archivo_Black, Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baumgartner Holzbau · Zimmerei, Ingenieurholzbau & Brückenbau aus Kärnten",
  description:
    "Seit 1978 realisieren wir Holzbauprojekte in Kärnten: Zimmerei, Ingenieurholzbau, Brücken und Massivholzbau. Raimund Baumgartner GmbH aus Reichenfels.",
  openGraph: {
    title: "Baumgartner Holzbau · Zimmerei, Ingenieurholzbau & Brückenbau aus Kärnten",
    description:
      "Seit 1978 realisieren wir Holzbauprojekte in Kärnten: Zimmerei, Ingenieurholzbau, Brücken und Massivholzbau. Raimund Baumgartner GmbH aus Reichenfels.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${archivoBlack.variable} ${archivo.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
