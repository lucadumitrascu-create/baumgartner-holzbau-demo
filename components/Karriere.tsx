"use client";

import { motion } from "framer-motion";

export default function Karriere() {
  return (
    <section id="karriere" className="bg-kalk border-y border-stein/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 items-center"
        >
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] tracking-[0.3em] text-beton uppercase">
              04 — KARRIERE
            </p>
          </div>
          <div className="md:col-span-4">
            <h2 className="font-archivo text-3xl md:text-4xl text-stein uppercase font-bold tracking-tight">
              MIT UNS BAUEN.
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-stein/60 leading-relaxed">
              Wir suchen regelmaszig Zimmerer, Techniker und Projektleiter.
              Werden Sie Teil eines Teams, das Holzbau auf hochstem Niveau
              betreibt.
            </p>
            <a
              href="#kontakt"
              className="inline-block mt-4 font-mono text-[11px] tracking-[0.15em] text-holz uppercase hover:text-rost transition-colors"
            >
              Offene Stellen ansehen →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
