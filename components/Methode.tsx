"use client";

import { motion } from "framer-motion";
import Abbund from "./Abbund";

const phases = [
  { name: "Planung", desc: "Bestandsaufnahme, Konzept, statische Berechnung, Genehmigungsplanung.", time: "ca. 4–8 Wochen" },
  { name: "Produktion", desc: "Vorfertigung aller Holzbauteile in unserer eigenen Werkshalle in Reichenfels.", time: "ca. 6–16 Wochen" },
  { name: "Montage", desc: "Transport, Aufrichten und Montage vor Ort. Koordination mit Nebengewerken.", time: "ca. 1–8 Wochen" },
  { name: "Übergabe", desc: "Endabnahme, Dokumentation, Gewährleistung, langfristige Partnerschaft.", time: "fortlaufend" },
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
          <h2 className="h-section text-ink">Vier Phasen</h2>
          <p className="text-stone text-[18px] leading-[1.6] max-w-[480px] mt-6">
            Jedes Projekt läuft in denselben vier Schritten. Die Zeitangaben sind Richtwerte.
          </p>
        </motion.div>

        <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-14">
          {phases.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="border-t border-holz pt-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <Abbund n={i + 1} className="h-8 w-auto text-holz" />
                <span className="label text-muted">Phase {i + 1}</span>
              </div>
              <h3 className="display text-ink text-[48px] md:text-[56px] mb-4">{p.name}</h3>
              <p className="text-stone text-[17px] leading-[1.6] mb-4">{p.desc}</p>
              <p className="label text-holz-deep">{p.time}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
