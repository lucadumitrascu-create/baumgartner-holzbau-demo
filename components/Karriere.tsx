"use client";

import { motion } from "framer-motion";

export default function Karriere() {
  return (
    <section id="karriere" className="bg-ink border-y border-holz">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase">
            06 / KARRIERE
          </p>
          <h2 className="font-archivo-black text-[36px] md:text-[48px] text-bone uppercase leading-[1] -tracking-[0.01em]">
            WIR SUCHEN HANDWERKER.
          </h2>
          <a
            href="#kontakt"
            className="font-mono text-[13px] tracking-[0.08em] text-holz uppercase hover:text-bone transition-colors duration-200"
          >
            OFFENE STELLEN →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
