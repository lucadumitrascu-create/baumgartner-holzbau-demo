"use client";

import { motion } from "framer-motion";

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="py-24 md:py-32 bg-stein">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left label + headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] text-beton uppercase mb-4">
              03 — UNTERNEHMEN
            </p>
            <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-kalk uppercase font-bold tracking-tight leading-[0.95]">
              HANDWERK
              <br />
              MIT
              <br />
              HALTUNG.
            </h2>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6 text-kalk/60 leading-relaxed max-w-2xl">
              <p>
                Seit uber vier Jahrzehnten ist Baumgartner Holzbau aus Reichenfels
                ein Begriff fur hochwertigen Holzbau in Karnten und daruber hinaus.
                Was als klassische Zimmerei begann, ist heute ein moderner
                Meisterbetrieb mit uber 40 Mitarbeitern.
              </p>
              <p>
                Wir verbinden traditionelles Handwerk mit ingenieurtechnischer
                Prazision. Von der ersten Planungsskizze bis zur finalen Montage
                begleiten unsere Ingenieure jedes Projekt — ob privates Wohnhaus,
                Produktionshalle oder Bruckenbau.
              </p>
              <p>
                Als Anko-zertifizierter Betrieb arbeiten wir regelmaszig fur die
                offentliche Hand und setzen auf regionale Wertschopfung, nachhaltige
                Materialien und langfristige Partnerschaften mit Architekten und
                Bautragern.
              </p>
            </div>

            <div className="h-px bg-kalk/10 my-10" />

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="font-archivo text-kalk uppercase tracking-wide font-semibold text-sm">
                  ING. PATRICK WASTIAN, BSC
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase mt-1">
                  GESCHAFTSFUHRUNG
                </p>
              </div>
              <div>
                <p className="font-archivo text-kalk uppercase tracking-wide font-semibold text-sm">
                  ING. MAG. ROBERT HITSCHMANN
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase mt-1">
                  GESCHAFTSFUHRUNG
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
