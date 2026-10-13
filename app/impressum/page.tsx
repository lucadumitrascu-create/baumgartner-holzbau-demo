import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum · Baumgartner Holzbau",
};

const link = "underline underline-offset-4 hover:text-holz-deep";

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "Medieninhaber", value: <>Raimund Baumgartner GmbH<br />Industriestraße 3, 9463 Reichenfels, Österreich</> },
  { label: "Telefon", value: <a href="tel:+4343592660" className={link}>+43 4359 2660</a> },
  { label: "E-Mail", value: <a href="mailto:info@holzbau-baumgartner.at" className={link}>info@holzbau-baumgartner.at</a> },
  { label: "Geschäftsführung", value: <>Ing. Patrick Wastian, BSc<br />Ing. Mag. Robert Hitschmann</> },
  { label: "Firmenbuch", value: "FN 144090y, Landesgericht Klagenfurt" },
  { label: "UID", value: "ATU51008804" },
];

export default function Impressum() {
  return (
    <>
      <header className="h-[72px] flex items-center border-b border-ink/10 bg-bone">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="/" className="font-archivo font-semibold text-[18px] tracking-[0.02em] text-ink">
            BAUMGARTNER
          </a>
          <a href="/" className="link-quiet text-ink hover:text-holz-deep">
            Zur Startseite
          </a>
        </div>
      </header>
      <main className="bg-bone py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h1 className="h-section text-ink mb-16">Impressum</h1>
          <dl className="max-w-[760px] border-t border-stone/20">
            {rows.map(({ label, value }) => (
              <div key={label} className="grid sm:grid-cols-3 gap-2 sm:gap-8 py-6 border-b border-stone/20">
                <dt className="label text-muted pt-1">{label}</dt>
                <dd className="sm:col-span-2 text-[17px] leading-[1.6] text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}
