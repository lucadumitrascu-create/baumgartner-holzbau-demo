"use client";

import { motion } from "framer-motion";

const services = [
  { num: "01", name: "KLASSISCHE ZIMMEREI", desc: "Dachstuhle, Carports, Holzkonstruktionen. Traditionelles Handwerk mit modernen Werkzeugen." },
  { num: "02", name: "PRIVATER WOHNBAU", desc: "Individuelle Holzhauser und Anbauten. Von der Planung bis zur Schlusselubergabe." },
  { num: "03", name: "INGENIEURHOLZBAU", desc: "Hallen und Industriebauten. Konstruktiver Holzbau fur gewerbliche Projekte." },
  { num: "04", name: "HOLZMASSIVBAU", desc: "Massivholzgebaude mit hoher Energieeffizienz und langer Lebensdauer." },
  { num: "05", name: "BRUCKENBAU", desc: "Holzbrucken fur Gemeinden und offentliche Auftraggeber. Unsere Spezialitat." },
  { num: "06", name: "AUSSENFASSADEN", desc: "Hochwertige Holzfassaden fur Neubauten und Sanierungsprojekte." },
  { num: "07", name: "SONDERKONSTRUKTIONEN", desc: "Massgeschneiderte Holzstrukturen nach Ihren Anforderungen." },
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
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
            02 / LEISTUNGEN
          </p>
          <h2 className="font-archivo-black text-[64px] md:text-[88px] xl:text-[120px] text-ink uppercase leading-[0.9] -tracking-[0.02em]">
            SIEBEN
            <br />
            DISZIPLINEN.
          </h2>
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mt-6">
            EIN VOLLSERVICE-HOLZBAUBETRIEB
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
              className="group border-t border-stone/15 py-8 md:py-10 hover:translate-x-4 transition-transform duration-300 ease-out cursor-default"
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-archivo-black text-[32px] md:text-[48px] text-holz leading-none group-hover:text-ink transition-colors duration-300">
                    {s.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-archivo-black text-[24px] md:text-[36px] xl:text-[48px] text-ink uppercase leading-[1] -tracking-[0.01em]">
                    {s.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 md:pt-2">
                  <p className="text-stone text-[15px] leading-[1.6] max-w-[400px]">
                    {s.desc}
                  </p>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-holz text-[14px]">→</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-stone/15" />
        </div>
      </div>
    </section>
  );
}
