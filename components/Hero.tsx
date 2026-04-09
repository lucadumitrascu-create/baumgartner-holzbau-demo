"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        alt="Holzbau Konstruktion"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-stein/60" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-rost mb-6"
            >
              SEIT 1978 &middot; KARNTEN
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-archivo text-5xl md:text-7xl lg:text-8xl text-kalk uppercase font-bold leading-[0.9] tracking-tight mb-6"
            >
              HOLZBAU,
              <br />
              DER HALT.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-kalk/60 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              Klassische Zimmerei, Ingenieurholzbau und Bruckenkonstruktion aus
              dem Herzen Karntens. Von privaten Wohnhausern bis zu offentlichen
              Projekten.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#referenzen"
                className="bg-holz text-white px-8 py-4 text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-holz/90 transition-colors"
              >
                Referenzen ansehen
              </a>
              <a
                href="#kontakt"
                className="border border-kalk/30 text-kalk px-8 py-4 text-[12px] tracking-[0.15em] uppercase font-medium hover:border-kalk/60 transition-colors"
              >
                Projekt anfragen
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="font-mono text-[10px] tracking-[0.2em] text-kalk/30 uppercase hidden md:block"
          >
            REICHENFELS &middot; 9463 &middot; KARNTEN
          </motion.p>
        </div>
      </div>
    </section>
  );
}
