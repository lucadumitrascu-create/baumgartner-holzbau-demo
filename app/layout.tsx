import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

// One family for everything: the wdth axis gives the condensed display cut, normal width carries the text
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
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
    <html lang="de" className={archivo.variable}>
      <body className="font-archivo antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
