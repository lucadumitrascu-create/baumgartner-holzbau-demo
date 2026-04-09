"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-12">
      {/* LEFT — bone side */}
      <div className="lg:col-span-7 bg-bone flex flex-col justify-center px-6 lg:px-10 xl:pl-20 pt-32 pb-20 lg:pt-[120px] lg:pb-[120px] order-2 lg:order-1">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-12"
        >
          01 — MANIFEST
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="font-archivo-black uppercase tracking-tight leading-[0.85]">
            <span className="block text-ink text-[88px] md:text-[140px] xl:text-[180px] -tracking-[0.03em]">HOLZ</span>
            <span className="block text-ink text-[64px] md:text-[100px] xl:text-[120px] -tracking-[0.02em] ml-0 md:ml-20">BAUT</span>
            <span className="block text-holz text-[88px] md:text-[140px] xl:text-[180px] -tracking-[0.03em]">DAUER.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="w-[120px] h-px bg-holz mb-6" />
          <p className="text-stone text-[16px] leading-[1.6] max-w-[480px]">
            Seit 1978 realisieren wir Bauprojekte aus Holz in Karnten und daruber
            hinaus. Von klassischer Zimmerei bis zu ingenieurmaszig geplanten
            Bruckenkonstruktionen. Prazision, Tradition, Verantwortung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-8 mt-12"
        >
          <a href="#referenzen" className="font-archivo font-medium text-[14px] text-ink hover:text-holz transition-colors duration-200">
            ↓ REFERENZEN ANSEHEN
          </a>
          <a href="#kontakt" className="font-archivo font-medium text-[14px] text-holz hover:text-ink transition-colors duration-200">
            → PROJEKT ANFRAGEN
          </a>
        </motion.div>
      </div>

      {/* RIGHT — ink side with image */}
      <div className="lg:col-span-5 bg-ink relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
          alt="Holzbau Konstruktion Baumgartner"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-bone/20 hidden lg:block" />
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <p className="font-mono text-[11px] tracking-[0.08em] text-bone/60 uppercase">
            FIG. 01 — ZIMMEREIHALLE REICHENFELS
          </p>
          <p className="font-mono text-[11px] tracking-[0.08em] text-bone/30 uppercase">
            46.9123° N &middot; 14.8012° E
          </p>
        </div>
      </div>
    </section>
  );
}
