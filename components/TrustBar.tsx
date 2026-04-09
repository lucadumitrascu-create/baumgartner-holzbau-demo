"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "46", label: "JAHRE ERFAHRUNG" },
  { value: "400+", label: "REALISIERTE PROJEKTE" },
  { value: "Anko", label: "ZERTIFIZIERT" },
  { value: "7", label: "LEISTUNGSBEREICHE" },
];

export default function TrustBar() {
  return (
    <section className="bg-kalk border-y border-stein/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-stein/10" : ""
              }`}
            >
              <span className="font-archivo text-4xl md:text-5xl font-bold text-stein block tracking-tight">
                {s.value}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-beton block mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
