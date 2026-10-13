"use client";

import { motion } from "framer-motion";

export default function Karriere() {
  return (
    <section id="karriere" className="bg-ink border-y border-holz/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-archivo-black text-[36px] md:text-[48px] text-bone uppercase leading-[1] -tracking-[0.01em]">
              WIR SUCHEN HANDWERKER.
            </h2>
            <p className="text-bone/70 text-[17px] mt-4">
              Bewerbung per E-Mail an info@holzbau-baumgartner.at.
            </p>
          </div>
          <a
            href="mailto:info@holzbau-baumgartner.at?subject=Bewerbung"
            className="btn btn-bone shrink-0 self-start md:self-auto"
          >
            Jetzt bewerben
          </a>
        </motion.div>
      </div>
    </section>
  );
}
