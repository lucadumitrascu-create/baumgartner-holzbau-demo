"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh]">
      {/* MOBILE: full-screen image with text overlay */}
      <div className="lg:hidden relative min-h-screen flex flex-col justify-end">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          alt="Holzbau Konstruktion"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 px-6 pb-12 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-mono text-[11px] tracking-[0.08em] text-holz uppercase mb-8"
          >
            01 — MANIFEST
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-archivo-black uppercase tracking-tight leading-[0.85]"
          >
            <span className="block text-bone text-[72px] -tracking-[0.03em]">HOLZ</span>
            <span className="block text-bone text-[56px] -tracking-[0.02em]">BAUT</span>
            <span className="block text-holz text-[72px] -tracking-[0.03em]">DAUER.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="w-[80px] h-px bg-holz mb-5" />
            <p className="text-bone/70 text-[15px] leading-[1.6] max-w-[360px]">
              Seit 1978 realisieren wir Bauprojekte aus Holz in Karnten. Zimmerei,
              Ingenieurholzbau, Bruckenkonstruktion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6 mt-8"
          >
            <a href="#referenzen" className="font-archivo font-medium text-[14px] text-bone hover:text-holz transition-colors duration-200">
              ↓ REFERENZEN
            </a>
            <a href="#kontakt" className="font-archivo font-medium text-[14px] text-holz">
              → ANFRAGEN
            </a>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP: asymmetric split */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-[90vh]">
        {/* LEFT — bone side */}
        <div className="col-span-7 bg-bone flex flex-col justify-center px-10 xl:pl-20 pt-[120px] pb-[120px]">
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
              <span className="block text-ink text-[140px] xl:text-[180px] -tracking-[0.03em]">HOLZ</span>
              <span className="block text-ink text-[100px] xl:text-[120px] -tracking-[0.02em] ml-20">BAUT</span>
              <span className="block text-holz text-[140px] xl:text-[180px] -tracking-[0.03em]">DAUER.</span>
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
        <div className="col-span-5 bg-ink relative">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Holzbau Konstruktion Baumgartner"
            fill
            className="object-cover"
            priority
            sizes="42vw"
          />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-bone/20" />
          <div className="absolute bottom-8 left-8">
            <p className="font-mono text-[11px] tracking-[0.08em] text-bone/60 uppercase">
              FIG. 01 — HOLZRAHMENBAU REICHENFELS
            </p>
            <p className="font-mono text-[11px] tracking-[0.08em] text-bone/30 uppercase">
              46.9123° N &middot; 14.8012° E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
