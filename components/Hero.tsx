"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-dvh lg:min-h-[90vh]">
      {/* MOBILE: full-screen image with text overlay */}
      <div className="lg:hidden relative min-h-dvh flex flex-col justify-end">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          alt="Holzbau Konstruktion"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/30" />
        <div className="relative z-10 px-6 pb-12 pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-archivo-black uppercase tracking-tight leading-[0.85]"
          >
            <span className="block text-bone text-[72px] -tracking-[0.03em]">HOLZ</span>
            <span className="block text-bone text-[56px] -tracking-[0.02em]">BAUT</span>
            <span className="block text-holz text-[72px] -tracking-[0.03em]">DAUER.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-bone/85 text-[16px] leading-[1.6] max-w-[360px]"
          >
            Seit 1978 realisieren wir Bauprojekte aus Holz in Kärnten. Zimmerei,
            Ingenieurholzbau, Brückenkonstruktion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-8"
          >
            <a href="#kontakt" className="btn btn-bone">
              Projekt anfragen
            </a>
            <a href="#referenzen" className="link-quiet text-bone hover:text-holz">
              Referenzen
            </a>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP: asymmetric split */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-[90vh]">
        <div className="col-span-7 bg-bone flex flex-col justify-center px-10 xl:pl-20 pt-[120px] pb-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="font-archivo-black uppercase tracking-tight leading-[0.85]">
              <span className="block text-ink text-[clamp(5rem,9.5vw,11.25rem)] -tracking-[0.03em]">HOLZ</span>
              <span className="block text-ink text-[clamp(3.5rem,6.5vw,7.5rem)] -tracking-[0.02em] ml-20">BAUT</span>
              <span className="block text-holz text-[clamp(5rem,9.5vw,11.25rem)] -tracking-[0.03em]">DAUER.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-12 text-stone text-[17px] leading-[1.6] max-w-[480px]"
          >
            Seit 1978 realisieren wir Bauprojekte aus Holz in Kärnten und darüber
            hinaus. Von klassischer Zimmerei bis zu ingenieurmäßig geplanten
            Brückenkonstruktionen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-10 mt-12"
          >
            <a href="#kontakt" className="btn btn-ink">
              Projekt anfragen
            </a>
            <a href="#referenzen" className="link-quiet text-ink hover:text-holz-deep">
              Referenzen ansehen
            </a>
          </motion.div>
        </div>

        <div className="col-span-5 bg-ink relative">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Holzbau Konstruktion Baumgartner"
            fill
            className="object-cover"
            priority
            sizes="42vw"
          />
        </div>
      </div>
    </section>
  );
}
