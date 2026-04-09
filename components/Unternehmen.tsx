"use client";

import { motion } from "framer-motion";

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="py-24 md:py-32 bg-forst">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
            05 / UNTERNEHMEN
          </p>
          <h2 className="font-archivo-black uppercase leading-[0.9] -tracking-[0.02em]">
            <span className="block text-bone text-[64px] md:text-[88px] xl:text-[120px]">46 JAHRE</span>
            <span className="block text-holz text-[64px] md:text-[88px] xl:text-[120px]">HANDWERK.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: empty space — deliberate */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-bone/60 text-[16px] leading-[1.6] max-w-[560px]">
              <p>
                Baumgartner Holzbau wurde 1978 als klassische Zimmerei im Lavanttal
                gegrundet. Was mit Dachstuhlen fur private Bauherren begann,
                entwickelte sich uber vier Jahrzehnte zu einem Vollservice-Holzbaubetrieb
                mit uber 40 Mitarbeiterinnen und Mitarbeitern.
              </p>
              <p>
                Heute realisieren wir Projekte jeder Grossenordnung: vom Einfamilienhaus
                bis zur Gemeindebrucke, vom Carport bis zur Produktionshalle. Was alle
                Projekte verbindet, ist unser Anspruch an Qualitat, Prazision und
                Langlebigkeit.
              </p>
              <p>
                Als Anko-zertifizierter Betrieb arbeiten wir regelmaszig fur die
                offentliche Hand. Wir setzen auf ingenieurtechnische Planung, regionale
                Wertschopfung und faire Partnerschaften mit Architekten, Bautragern
                und Gemeinden.
              </p>
            </div>

            <div className="h-px bg-bone/10 my-12" />

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="w-[80px] h-px bg-holz mb-4" />
                <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-2">
                  GESCHAFTSFUHRUNG
                </p>
                <p className="font-archivo font-semibold text-[20px] md:text-[24px] text-bone uppercase tracking-wide">
                  ING. PATRICK WASTIAN, BSc
                </p>
              </div>
              <div>
                <div className="w-[80px] h-px bg-holz mb-4" />
                <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-2">
                  GESCHAFTSFUHRUNG
                </p>
                <p className="font-archivo font-semibold text-[20px] md:text-[24px] text-bone uppercase tracking-wide">
                  ING. MAG. ROBERT HITSCHMANN
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
