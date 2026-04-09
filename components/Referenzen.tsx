"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "GEMEINDEBRUCKE WOLFSBERG",
    year: "2024",
    type: "BRUCKENBAU",
    desc: "45m Holzbrucke fur die Marktgemeinde",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    name: "PRODUKTIONSHALLE SCHWEIGER",
    year: "2023",
    type: "INGENIEURHOLZBAU",
    desc: "3.200m2 Hallenkonstruktion",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    name: "WOHNHAUS FAMILIE ORTNER",
    year: "2024",
    type: "WOHNBAU",
    desc: "Massivholzhaus mit Eigenfassade",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    span: "",
    aspect: "aspect-square",
  },
  {
    name: "SCHULANBAU REICHENFELS",
    year: "2023",
    type: "OFFENTLICH",
    desc: "Erweiterung in Holzbauweise",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    name: "DACHSANIERUNG VILLA S.",
    year: "2024",
    type: "ZIMMEREI",
    desc: "Komplette Dachstuhl-Erneuerung",
    img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
    span: "",
    aspect: "aspect-square",
  },
  {
    name: "HOLZFASSADE GEWERBEPARK",
    year: "2023",
    type: "FASSADE",
    desc: "1.800m2 Larchenholz-Fassade",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-24 md:py-32 bg-kalk">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-beton uppercase mb-4">
            02 — REFERENZEN
          </p>
          <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-stein uppercase font-bold tracking-tight mb-3">
            AUSGEWAHLTE PROJEKTE.
          </h2>
          <p className="text-beton max-w-lg">
            Ein Auszug unserer Arbeit aus den letzten Jahren.
          </p>
        </motion.div>

        <div className="h-px bg-stein/10 mb-12" />

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group ${p.span}`}
            >
              <div className={`relative ${p.aspect} overflow-hidden bg-stein/10`}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stein/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-3 mb-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-beton uppercase">
                  {p.year} &middot; {p.type}
                </p>
                <h3 className="font-archivo text-base md:text-lg text-stein uppercase font-semibold tracking-wide mt-1">
                  {p.name}
                </h3>
                <p className="text-beton text-sm mt-0.5">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="h-px bg-stein/10 mt-4 mb-8" />
        <p className="font-mono text-[11px] tracking-[0.15em] text-holz uppercase hover:text-rost transition-colors cursor-pointer">
          Alle Referenzen ansehen →
        </p>
      </div>
    </section>
  );
}
