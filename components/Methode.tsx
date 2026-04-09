"use client";

import { motion } from "framer-motion";

const phases = [
  { num: "01", name: "PLANUNG", desc: "Bestandsaufnahme, Konzept, statische Berechnung, Genehmigungsplanung.", time: "ca. 4-8 WOCHEN" },
  { num: "02", name: "PRODUKTION", desc: "Vorfertigung aller Holzbauteile in unserer eigenen Werkshalle in Reichenfels.", time: "ca. 6-16 WOCHEN" },
  { num: "03", name: "MONTAGE", desc: "Transport, Aufrichten und Montage vor Ort. Koordination mit Nebengewerken.", time: "ca. 1-8 WOCHEN" },
  { num: "04", name: "UBERGABE", desc: "Endabnahme, Dokumentation, Gewahrleistung, langfristige Partnerschaft.", time: "FORTLAUFEND" },
];

export default function Methode() {
  return (
    <section id="methode" className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
            04 / METHODE
          </p>
          <h2 className="font-archivo-black text-[64px] md:text-[88px] xl:text-[120px] text-ink uppercase leading-[0.9] -tracking-[0.02em]">
            VIER PHASEN.
          </h2>
          <p className="text-stone text-[16px] leading-[1.6] max-w-[480px] mt-6">
            Jedes Projekt folgt einem klaren Prozess. Planbar, transparent, dokumentiert.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-0">
          {/* Horizontal line connecting all phases */}
          <div className="hidden md:block col-span-4 relative h-px bg-holz mb-10">
            {phases.map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-holz border-2 border-bone"
                style={{ left: `${i * (100 / 3)}%` }}
              />
            ))}
          </div>

          {phases.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`py-6 md:py-0 ${i < phases.length - 1 ? "md:pr-10 border-b md:border-b-0 md:border-r border-stone/10" : "md:pl-10"} ${i > 0 && i < phases.length - 1 ? "md:px-10" : ""} ${i === 0 ? "md:pr-10" : ""}`}
            >
              <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-4">
                PHASE {p.num}
              </p>
              <h3 className="font-archivo-black text-[32px] md:text-[40px] xl:text-[48px] text-ink uppercase leading-[1] -tracking-[0.01em] mb-4">
                {p.name}
              </h3>
              <p className="text-stone text-[14px] leading-[1.6] mb-4">
                {p.desc}
              </p>
              <p className="font-mono text-[11px] tracking-[0.08em] text-holz uppercase">
                {p.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
