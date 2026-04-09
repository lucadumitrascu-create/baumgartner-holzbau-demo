"use client";

import { motion } from "framer-motion";
import { Home, HousePlus, Warehouse, Building2, Waypoints, LayoutPanelTop, Wrench } from "lucide-react";

const services = [
  { icon: Home, title: "KLASSISCHE ZIMMEREI", desc: "Traditionelles Handwerk fur Dachstuhle, Carports und Holzkonstruktionen im Wohnbereich." },
  { icon: HousePlus, title: "PRIVATER WOHNBAU", desc: "Individuelle Holzhauser und Anbauten, geplant und gebaut nach hochsten Standards." },
  { icon: Warehouse, title: "INGENIEURHOLZBAU", desc: "Hallen, Industriebauten und gewerbliche Objekte aus konstruktivem Holzbau." },
  { icon: Building2, title: "HOLZMASSIVBAU", desc: "Massivholzbau fur langlebige, nachhaltige Gebaude mit hoher Energieeffizienz." },
  { icon: Waypoints, title: "BRUCKEN", desc: "Holzbrucken fur Gemeinden, Verkehrsinfrastruktur und offentliche Projekte." },
  { icon: LayoutPanelTop, title: "AUSSENFASSADEN", desc: "Hochwertige Holzfassaden fur Neubauten und Sanierungen." },
  { icon: Wrench, title: "SONDERKONSTRUKTIONEN", desc: "Massgeschneiderte Holzstrukturen nach individuellen Anforderungen." },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-stein">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-beton uppercase mb-4">
            01 — LEISTUNGEN
          </p>
          <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-kalk uppercase font-bold tracking-tight">
            WAS WIR BAUEN.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-kalk/5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-stein p-8 md:p-10 group hover:bg-stein/80 border border-transparent hover:border-holz/30 transition-all duration-300"
            >
              <s.icon
                className="text-holz mb-6 group-hover:text-rost transition-colors"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="font-archivo text-lg text-kalk uppercase tracking-wide font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-kalk/40 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <span className="font-mono text-[10px] tracking-[0.2em] text-holz uppercase group-hover:text-rost transition-colors">
                MEHR →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
