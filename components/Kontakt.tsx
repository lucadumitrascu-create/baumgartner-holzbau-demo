"use client";

import { motion } from "framer-motion";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-stein">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-beton uppercase mb-4">
            05 — KONTAKT
          </p>
          <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-kalk uppercase font-bold tracking-tight">
            PROJEKT BESPRECHEN.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Address + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="font-mono text-[12px] leading-relaxed tracking-[0.1em] text-kalk/50 uppercase">
              <p>RAIMUND BAUMGARTNER GMBH</p>
              <p>INDUSTRIESTRASSE 3</p>
              <p>9463 REICHENFELS</p>
              <p>KARNTEN &middot; OSTERREICH</p>
            </div>

            <div className="h-px bg-kalk/10" />

            <div>
              <a
                href="tel:+4343592660"
                className="font-archivo text-2xl md:text-3xl text-kalk font-bold tracking-tight hover:text-holz transition-colors block"
              >
                +43 4359 2660
              </a>
              <a
                href="mailto:info@holzbau-baumgartner.at"
                className="text-kalk/50 hover:text-holz transition-colors text-sm block mt-2"
              >
                info@holzbau-baumgartner.at
              </a>
            </div>

            <div className="w-full aspect-[16/9] bg-stein/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d14.7440!3d46.9260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSW5kdXN0cmllc3RyYcOfZSAzLCA5NDYzIFJlaWNoZW5mZWxz!5e0!3m2!1sde!2sat!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baumgartner Holzbau Standort"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-kalk/10 text-kalk px-4 py-3 text-sm focus:border-holz outline-none transition-colors placeholder:text-kalk/20"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                    Firma
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-kalk/10 text-kalk px-4 py-3 text-sm focus:border-holz outline-none transition-colors placeholder:text-kalk/20"
                    placeholder="Firma GmbH"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-kalk/10 text-kalk px-4 py-3 text-sm focus:border-holz outline-none transition-colors placeholder:text-kalk/20"
                    placeholder="email@beispiel.at"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border border-kalk/10 text-kalk px-4 py-3 text-sm focus:border-holz outline-none transition-colors placeholder:text-kalk/20"
                    placeholder="+43 ..."
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                  Projekttyp
                </label>
                <select className="w-full bg-transparent border border-kalk/10 text-kalk/60 px-4 py-3 text-sm focus:border-holz outline-none transition-colors appearance-none">
                  <option value="" className="bg-stein">Bitte wahlen</option>
                  <option value="privat" className="bg-stein">Privatbau</option>
                  <option value="gewerbe" className="bg-stein">Gewerbe</option>
                  <option value="oeffentlich" className="bg-stein">Offentlich</option>
                  <option value="sonstiges" className="bg-stein">Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase block mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-kalk/10 text-kalk px-4 py-3 text-sm focus:border-holz outline-none transition-colors resize-none placeholder:text-kalk/20"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>
              <button
                type="submit"
                className="bg-holz text-white px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-holz/90 transition-colors w-full sm:w-auto"
              >
                Anfrage senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
