"use client";

import { motion } from "framer-motion";

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="py-24 md:py-32 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="h-section text-bone">Handwerk seit 1978</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: who runs it, plus the hard facts */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-8 content-start border-t border-bone/15 pt-8"
          >
            <div className="col-span-2 lg:col-span-1">
              <dt className="label text-chalk mb-3">Geschäftsführung</dt>
              <dd className="font-archivo font-semibold text-[20px] md:text-[22px] text-bone leading-[1.35]">
                Ing. Patrick Wastian, BSc
                <br />
                Ing. Mag. Robert Hitschmann
              </dd>
            </div>
            <div>
              <dt className="label text-chalk mb-3">Gegründet</dt>
              <dd className="font-archivo font-semibold text-[20px] md:text-[22px] text-bone">1978, Lavanttal</dd>
            </div>
            <div>
              <dt className="label text-chalk mb-3">Mitarbeiter</dt>
              <dd className="font-archivo font-semibold text-[20px] md:text-[22px] text-bone">über 40</dd>
            </div>
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-bone/75 text-[17px] leading-[1.65] max-w-[600px]">
              <p>
                Baumgartner Holzbau wurde 1978 als klassische Zimmerei im Lavanttal
                gegründet. Was mit Dachstühlen für private Bauherren begann,
                entwickelte sich über vier Jahrzehnte zu einem Vollservice-Holzbaubetrieb
                mit über 40 Mitarbeiterinnen und Mitarbeitern.
              </p>
              <p>
                Heute realisieren wir Projekte jeder Größenordnung: vom Einfamilienhaus
                bis zur Gemeindebrücke, vom Carport bis zur Produktionshalle. Die
                Bauteile dafür fertigen wir in unserer eigenen Werkshalle in Reichenfels vor.
              </p>
              <p>
                Als Ankö-zertifizierter Betrieb arbeiten wir regelmäßig für die
                öffentliche Hand und planen gemeinsam mit Architekten, Bauträgern
                und Gemeinden.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
