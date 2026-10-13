"use client";

import { motion } from "framer-motion";

const phases = [
  { num: "1", name: "PLANUNG", desc: "Bestandsaufnahme, Konzept, statische Berechnung, Genehmigungsplanung.", time: "ca. 4–8 Wochen" },
  { num: "2", name: "PRODUKTION", desc: "Vorfertigung aller Holzbauteile in unserer eigenen Werkshalle in Reichenfels.", time: "ca. 6–16 Wochen" },
  { num: "3", name: "MONTAGE", desc: "Transport, Aufrichten und Montage vor Ort. Koordination mit Nebengewerken.", time: "ca. 1–8 Wochen" },
  { num: "4", name: "ÜBERGABE", desc: "Endabnahme, Dokumentation, Gewährleistung, langfristige Partnerschaft.", time: "fortlaufend" },
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
          <h2 className="h-section text-ink">VIER PHASEN.</h2>
          <p className="text-stone text-[17px] leading-[1.6] max-w-[480px] mt-6">
            Jedes Projekt läuft in denselben vier Schritten. Die Zeitangaben sind Richtwerte.
          </p>
        </motion.div>

        {/* Each phase draws its own segment of the line, so dot and column always align */}
        <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-14">
          {phases.map((p, i) => (
            <motion.li
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative border-t border-holz pt-8"
            >
              <span className="absolute -top-[6px] left-0 w-3 h-3 rounded-full bg-holz" aria-hidden />
              <p className="label text-muted mb-4">Phase {p.num}</p>
              <h3 className="font-archivo-black text-[32px] md:text-[40px] xl:text-[34px] 2xl:text-[40px] text-ink uppercase leading-[1] -tracking-[0.01em] mb-4">
                {p.name}
              </h3>
              <p className="text-stone text-[16px] leading-[1.6] mb-4">
                {p.desc}
              </p>
              <p className="label text-holz-deep">{p.time}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
