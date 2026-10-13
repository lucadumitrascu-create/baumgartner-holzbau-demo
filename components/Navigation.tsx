"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Leistungen", "#leistungen"],
  ["Referenzen", "#referenzen"],
  ["Unternehmen", "#unternehmen"],
  ["Kontakt", "#kontakt"],
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Hiring bar: always first thing on the page, folds away once the visitor scrolls */}
        <div
          className={`bg-ink text-bone overflow-hidden transition-[max-height] duration-300 ${
            scrolled ? "max-h-0" : "max-h-10"
          }`}
        >
          <p className="h-10 flex items-center justify-center gap-2 px-6 text-[13px] sm:text-[14px]">
            <span>Wir suchen Handwerker.</span>
            <a
              href="mailto:info@holzbau-baumgartner.at?subject=Bewerbung"
              className="font-semibold underline underline-offset-4 hover:text-holz transition-colors"
              tabIndex={scrolled ? -1 : 0}
            >
              Jetzt bewerben
            </a>
          </p>
        </div>

        <div
          className={`h-[72px] flex items-center transition-colors duration-300 ${
            scrolled ? "bg-bone border-b border-ink/10" : "bg-bone/85 backdrop-blur-md"
          }`}
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
            <a href="/" className="font-archivo font-semibold text-[18px] tracking-[0.02em] text-ink">
              BAUMGARTNER
            </a>

            <div className="hidden lg:flex items-center gap-10">
              <nav aria-label="Hauptnavigation" className="flex items-center gap-8 font-archivo font-medium text-[15px] text-ink">
                {links.map(([label, href]) => (
                  <a key={href} href={href} className="hover:text-holz-deep transition-colors duration-200">
                    {label}
                  </a>
                ))}
              </nav>
              <a href="#kontakt" className="btn btn-ink !py-3 !px-5 !text-[14px]">
                Projekt anfragen
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-ink w-11 h-11 -mr-2.5 flex items-center justify-center"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink flex flex-col justify-center px-10 lg:hidden"
          >
            {links.map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="display text-[56px] text-bone py-2 hover:text-holz transition-colors"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
