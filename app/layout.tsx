import type { Metadata } from "next";
import { Archivo_Black, Archivo, Inter } from "next/font/google";
import Providers from "./providers";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://bg-demo.ealenterprises.com"),
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
      className={`${archivoBlack.variable} ${archivo.variable} ${inter.variable}`}
    >
      <body className="font-inter antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
