"use client";

import { motion } from "framer-motion";

// ­ = soft hyphen: long compounds break with a hyphen instead of clipping
const services = [
  { num: "01", name: "KLASSISCHE ZIMMEREI", desc: "Dachstühle, Carports, Holzkonstruktionen. Traditionelles Handwerk mit modernen Werkzeugen." },
  { num: "02", name: "PRIVATER WOHNBAU", desc: "Individuelle Holzhäuser und Anbauten. Von der Planung bis zur Schlüsselübergabe." },
  { num: "03", name: "INGENIEUR­HOLZBAU", desc: "Hallen und Industriebauten. Konstruktiver Holzbau für gewerbliche Projekte." },
  { num: "04", name: "HOLZMASSIV­BAU", desc: "Massivholzgebäude mit hoher Energieeffizienz und langer Lebensdauer." },
  { num: "05", name: "BRÜCKENBAU", desc: "Holzbrücken für Gemeinden und öffentliche Auftraggeber. Unsere Spezialität." },
  { num: "06", name: "AUSSEN­FASSADEN", desc: "Hochwertige Holzfassaden für Neubauten und Sanierungsprojekte." },
  { num: "07", name: "SONDER­KONSTRUKTIONEN", desc: "Maßgeschneiderte Holzstrukturen nach Ihren Anforderungen." },
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
          className="mb-20"
        >
          <h2 className="h-section text-ink">
            SIEBEN
            <br />
            DISZIPLINEN.
          </h2>
          <p className="text-stone text-[17px] leading-[1.6] mt-6">
            Ein Vollservice-Holzbaubetrieb.
          </p>
        </motion.div>

        <div>
          {services.map((s) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-t border-stone/20 py-8 md:py-10"
            >
              <div className="grid grid-cols-12 gap-x-4 gap-y-3 items-start">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-archivo-black text-[28px] md:text-[40px] text-holz leading-none tabular-nums">
                    {s.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-11 lg:col-span-6">
                  <h3 className="font-archivo-black text-[24px] md:text-[32px] xl:text-[40px] text-ink uppercase leading-[1] -tracking-[0.01em]">
                    {s.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-start-2 md:col-span-11 lg:col-start-auto lg:col-span-5 lg:pt-1">
                  <p className="text-stone text-[16px] leading-[1.6] max-w-[420px]">
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
