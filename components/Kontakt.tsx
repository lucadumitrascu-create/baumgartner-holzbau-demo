"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="h-section">
            <span className="block text-ink">PROJEKT</span>
            <span className="block text-holz">BESPRECHEN.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="label text-muted mb-3">Telefon</p>
              <a
                href="tel:+4343592660"
                className="font-archivo-black text-[36px] md:text-[48px] text-ink leading-[1] hover:text-holz-deep transition-colors duration-200"
              >
                +43 4359 2660
              </a>
            </div>

            <div>
              <p className="label text-muted mb-3">E-Mail</p>
              <a
                href="mailto:info@holzbau-baumgartner.at"
                className="font-archivo font-medium text-[18px] md:text-[20px] text-ink underline decoration-stone/40 underline-offset-[6px] hover:text-holz-deep transition-colors duration-200"
              >
                info@holzbau-baumgartner.at
              </a>
            </div>

            <div>
              <p className="label text-muted mb-3">Standort</p>
              <address className="not-italic text-ink text-[17px] leading-[1.7]">
                Raimund Baumgartner GmbH
                <br />
                Industriestraße 3
                <br />
                9463 Reichenfels
                <br />
                <span className="text-stone">Kärnten, Österreich</span>
              </address>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="py-20" role="status">
                <p className="font-archivo font-semibold text-[22px] text-ink">Danke, Ihre Anfrage ist bei uns.</p>
                <p className="text-stone text-[17px] mt-3">Wir melden uns innerhalb von 48 Stunden.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="k-name" className="label text-muted block mb-3">Name *</label>
                    <input id="k-name" name="name" type="text" required autoComplete="name" className="field" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label htmlFor="k-firma" className="label text-muted block mb-3">Firma</label>
                    <input id="k-firma" name="firma" type="text" autoComplete="organization" className="field" placeholder="Firma GmbH" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="k-email" className="label text-muted block mb-3">E-Mail *</label>
                    <input id="k-email" name="email" type="email" required autoComplete="email" className="field" placeholder="email@beispiel.at" />
                  </div>
                  <div>
                    <label htmlFor="k-tel" className="label text-muted block mb-3">Telefon</label>
                    <input id="k-tel" name="telefon" type="tel" autoComplete="tel" className="field" placeholder="+43" />
                  </div>
                </div>
                <div>
                  <label htmlFor="k-typ" className="label text-muted block mb-3">Projekttyp *</label>
                  <div className="relative">
                    <select id="k-typ" name="projekttyp" required defaultValue="" className="field appearance-none pr-8">
                      <option value="" disabled>Bitte wählen</option>
                      <option value="privat">Privatbau</option>
                      <option value="ingenieur">Ingenieurholzbau</option>
                      <option value="oeffentlich">Öffentlicher Bau</option>
                      <option value="bruecke">Brückenbau</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone pointer-events-none" aria-hidden />
                  </div>
                </div>
                <div>
                  <label htmlFor="k-msg" className="label text-muted block mb-3">Nachricht *</label>
                  <textarea
                    id="k-msg"
                    name="nachricht"
                    required
                    rows={6}
                    className="field resize-none"
                    placeholder="Was soll gebaut werden, wo, und bis wann?"
                  />
                </div>
                <button type="submit" className="btn btn-ink mt-2">
                  Anfrage senden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map, desaturated so it sits inside the palette */}
        <div className="mt-20 border-y border-stone/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d14.7440!3d46.9260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSW5kdXN0cmllc3RyYcOfZSAzLCA5NDYzIFJlaWNoZW5mZWxz!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: "block", filter: "grayscale(1) sepia(0.15) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Baumgartner Holzbau Standort Reichenfels"
          />
        </div>
      </div>
    </section>
  );
}
