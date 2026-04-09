"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["LEISTUNGEN", "REFERENZEN", "UNTERNEHMEN", "KONTAKT"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled ? "bg-bone border-b border-holz" : "bg-bone/0"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#" className="font-archivo font-semibold text-[18px] tracking-[0.02em] text-ink">
            BAUMGARTNER
          </a>

          <div className="hidden lg:flex items-center gap-0">
            <nav className="font-mono text-[11px] tracking-[0.15em] text-ink">
              {links.map((l, i) => (
                <span key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-holz transition-colors duration-200"
                  >
                    {l}
                  </a>
                  {i < links.length - 1 && (
                    <span className="text-holz mx-3">/</span>
                  )}
                </span>
              ))}
            </nav>
            <a
              href="#kontakt"
              className="ml-10 font-archivo font-medium text-[13px] text-ink hover:text-holz transition-colors duration-200"
            >
              PROJEKT ANFRAGEN →
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col justify-center px-10 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="font-archivo-black text-4xl text-bone uppercase tracking-tight py-3 hover:text-holz transition-colors"
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
