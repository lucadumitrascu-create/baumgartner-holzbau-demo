"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
            07 / KONTAKT
          </p>
          <h2 className="font-archivo-black uppercase leading-[0.9] -tracking-[0.02em]">
            <span className="block text-ink text-[64px] md:text-[88px] xl:text-[120px]">PROJEKT</span>
            <span className="block text-holz text-[64px] md:text-[88px] xl:text-[120px]">BESPRECHEN.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">STANDORT</p>
              <div className="text-ink text-[16px] leading-[1.8]">
                <p>RAIMUND BAUMGARTNER GMBH</p>
                <p>INDUSTRIESTRASSE 3</p>
                <p>9463 REICHENFELS</p>
                <p className="text-stone">KARNTEN &middot; OSTERREICH</p>
              </div>
            </div>

            <div className="w-[80px] h-px bg-holz" />

            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">TELEFON</p>
              <a
                href="tel:+4343592660"
                className="font-archivo-black text-[36px] md:text-[48px] text-ink leading-[1] hover:text-holz transition-colors duration-200"
              >
                +43 4359 2660
              </a>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">E-MAIL</p>
              <a
                href="mailto:info@holzbau-baumgartner.at"
                className="font-archivo font-medium text-[18px] md:text-[20px] text-ink hover:text-holz transition-colors duration-200"
              >
                info@holzbau-baumgartner.at
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="py-20">
                <p className="font-mono text-[11px] tracking-[0.08em] text-holz uppercase">
                  ANFRAGE UBERMITTELT — WIR MELDEN UNS INNERHALB 48 STUNDEN.
                </p>
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
                    <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">NAME *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors placeholder:text-stone/30"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">FIRMA</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors placeholder:text-stone/30"
                      placeholder="Firma GmbH"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">E-MAIL *</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors placeholder:text-stone/30"
                      placeholder="email@beispiel.at"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">TELEFON</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors placeholder:text-stone/30"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">PROJEKTTYP *</label>
                  <select
                    required
                    className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors appearance-none"
                  >
                    <option value="">Bitte wahlen</option>
                    <option value="privat">Privatbau</option>
                    <option value="ingenieur">Ingenieurholzbau</option>
                    <option value="oeffentlich">Offentlicher Bau</option>
                    <option value="bruecke">Bruckenbau</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase block mb-3">NACHRICHT *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-stone/20 text-ink py-3 text-[16px] focus:border-holz outline-none transition-colors resize-none placeholder:text-stone/30"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="font-archivo font-semibold text-[18px] text-ink hover:text-holz transition-colors duration-200 mt-4"
                >
                  → ANFRAGE SENDEN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 border-y border-holz">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d14.7440!3d46.9260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSW5kdXN0cmllc3RyYcOfZSAzLCA5NDYzIFJlaWNoZW5mZWxz!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
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
