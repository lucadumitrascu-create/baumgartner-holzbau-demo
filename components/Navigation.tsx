"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Unternehmen", href: "#unternehmen" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-kalk/95 backdrop-blur-md border-b border-stein/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className={`font-archivo text-xl tracking-[0.15em] uppercase font-bold ${scrolled ? "text-stein" : "text-kalk"}`}>
              BAUMGARTNER
            </span>
            <span className={`font-mono text-[9px] tracking-[0.3em] uppercase ${scrolled ? "text-beton" : "text-kalk/50"}`}>
              HOLZBAU KARNTEN
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${
                  scrolled ? "text-stein/60 hover:text-stein" : "text-kalk/60 hover:text-kalk"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-4 bg-holz text-white px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-holz/90 transition-colors"
            >
              Projekt anfragen
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${scrolled ? "text-stein" : "text-kalk"}`}
            aria-label={open ? "Menu schliessen" : "Menu oeffnen"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-stein flex flex-col items-start justify-center px-10 gap-1 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-archivo text-3xl md:text-4xl text-kalk uppercase tracking-wider hover:text-holz transition-colors py-2"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 bg-holz text-white px-8 py-3 font-archivo text-lg uppercase tracking-wider"
            >
              Projekt anfragen
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
