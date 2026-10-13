"use client";

import { motion } from "framer-motion";
import Abbund from "./Abbund";

// \u00AD = soft hyphen: long compounds break with a hyphen instead of clipping
const services = [
  { name: "Klassische Zimmerei", desc: "Dachstühle, Carports, Holzkonstruktionen. Traditionelles Handwerk mit modernen Werkzeugen." },
  { name: "Privater Wohnbau", desc: "Individuelle Holzhäuser und Anbauten. Von der Planung bis zur Schlüsselübergabe." },
  { name: "Ingenieur\u00ADholzbau", desc: "Hallen und Industriebauten. Konstruktiver Holzbau für gewerbliche Projekte." },
  { name: "Holzmassiv\u00ADbau", desc: "Massivholzgebäude mit hoher Energieeffizienz und langer Lebensdauer." },
  { name: "Brückenbau", desc: "Holzbrücken für Gemeinden und öffentliche Auftraggeber. Unsere Spezialität." },
  { name: "Außen\u00ADfassaden", desc: "Hochwertige Holzfassaden für Neubauten und Sanierungsprojekte." },
  { name: "Sonder\u00ADkonstruktionen", desc: "Maßgeschneiderte Holzstrukturen nach Ihren Anforderungen." },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 grid lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-7">
            <h2 className="h-section text-ink">Sieben Disziplinen</h2>
            <p className="text-stone text-[18px] leading-[1.6] mt-6">Ein Vollservice-Holzbaubetrieb.</p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 flex gap-5 items-start border-t border-stone/20 pt-5">
            <Abbund n={4} className="h-8 w-auto shrink-0 text-holz-deep mt-1" />
            <p className="text-stone text-[15px] leading-[1.6]">
              Die Zeichen sind Abbundzeichen. Mit ihnen nummerieren Zimmerer die
              Bauteile, damit beim Aufrichten jedes Stück an seinen Platz kommt.
            </p>
          </aside>
        </motion.div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-t border-stone/20 py-8 md:py-10"
            >
              <div className="grid grid-cols-12 gap-x-4 gap-y-3 items-center">
                <div className="col-span-2 md:col-span-1">
                  <Abbund n={i + 1} className="h-8 md:h-10 w-auto text-holz" />
                </div>
                <div className="col-span-10 md:col-span-11 lg:col-span-6">
                  <h3 className="display text-ink text-[36px] md:text-[48px] xl:text-[60px]">
                    {s.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-start-2 md:col-span-11 lg:col-start-auto lg:col-span-5">
                  <p className="text-stone text-[17px] leading-[1.6] max-w-[440px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-stone/20" />
        </div>
      </div>
    </section>
  );
}
