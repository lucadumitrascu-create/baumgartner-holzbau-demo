"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ­ = soft hyphen: long compounds break with a hyphen instead of clipping
const projects = [
  {
    num: "01",
    name: "GEMEINDE­BRÜCKE WOLFSBERG",
    desc: "45-Meter-Spannweite aus Brettschichtholz für die Marktgemeinde Wolfsberg.",
    data: [
      ["Jahr", "2024"], ["Ort", "Wolfsberg"], ["Typ", "Brückenbau"],
      ["Spannweite", "45 m"], ["Material", "BSH GL28h"], ["Auftrag", "Gemeinde"],
    ],
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
  },
  {
    num: "02",
    name: "PRODUKTIONS­HALLE SCHWEIGER",
    desc: "3.200 Quadratmeter konstruktiver Holzbau für ein produzierendes Unternehmen. Spannweiten bis 24 Meter, stützenfrei.",
    data: [
      ["Jahr", "2023"], ["Ort", "St. Paul"], ["Typ", "Hallenbau"],
      ["Fläche", "3.200 m²"], ["Spannweite", "24 m"], ["Auftrag", "Schweiger"],
    ],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    num: "03",
    name: "WOHNHAUS ORTNER",
    desc: "Einfamilienhaus in Massivholzbauweise mit eigener Lärchenholz-Fassade, gebaut mit regionalen Materialien.",
    data: [
      ["Jahr", "2024"], ["Ort", "Reichenfels"], ["Typ", "Wohnbau"],
      ["Fläche", "180 m²"], ["Material", "Fichte"], ["Auftrag", "Privat"],
    ],
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
  },
  {
    num: "04",
    name: "SCHUL­ERWEITERUNG REICHENFELS",
    desc: "Anbau an die örtliche Volksschule in Holzbauweise. Öffentlicher Auftrag mit Fokus auf das Raumklima.",
    data: [
      ["Jahr", "2023"], ["Ort", "Reichenfels"], ["Typ", "Öffentlich"],
      ["Fläche", "420 m²"], ["Bauzeit", "9 Monate"], ["Auftrag", "Gemeinde"],
    ],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
  {
    num: "05",
    name: "DACHSANIERUNG VILLA S.",
    desc: "Komplette Erneuerung eines denkmalgeschützten Dachstuhls. Traditionelle Zimmermannsarbeit mit historischen Techniken.",
    data: [
      ["Jahr", "2024"], ["Ort", "Klagenfurt"], ["Typ", "Zimmerei"],
      ["Fläche", "380 m²"], ["Besonderheit", "Denkmal"], ["Auftrag", "Privat"],
    ],
    img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80",
  },
  {
    num: "06",
    name: "HOLZFASSADE GEWERBEPARK",
    desc: "1.800 Quadratmeter hinterlüftete Lärchenholz-Fassade für einen Gewerbepark.",
    data: [
      ["Jahr", "2023"], ["Ort", "Wolfsberg"], ["Typ", "Fassade"],
      ["Fläche", "1.800 m²"], ["Material", "Lärche"], ["Auftrag", "Gewerbepark"],
    ],
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
  },
];

function ProjectBlock({ p, i }: { p: (typeof projects)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const even = i % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-28 md:mb-40"
    >
      <div ref={ref} className={`relative w-full ${even ? "lg:w-[85%] lg:ml-auto" : "lg:w-[85%]"}`}>
        <div
          className="relative aspect-[16/9] overflow-hidden"
          style={{
            clipPath: isInView ? "inset(0 0 0 0)" : even ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
            transition: "clip-path 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          <Image
            src={p.img}
            alt={p.name.replace(/­/g, "")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 85vw"
          />
        </div>
      </div>

      {/* TEXT: below image, offset to the opposite side */}
      <div className={`mt-10 flex ${even ? "justify-start" : "justify-end"}`}>
        <div className="max-w-[560px] w-full">
          <h3 className="font-archivo-black text-[clamp(1.75rem,6vw,3.25rem)] text-bone uppercase leading-[0.95] -tracking-[0.01em] mb-5">
            {p.name}
          </h3>

          <p className="text-bone/70 text-[16px] leading-[1.6] mb-8">
            {p.desc}
          </p>

          <dl className="grid grid-cols-3 gap-x-6 gap-y-4 border-t border-bone/15 pt-6">
            {p.data.map(([label, value]) => (
              <div key={label}>
                <dt className="label text-chalk">{label}</dt>
                <dd className="text-[15px] text-bone mt-1.5">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.article>
  );
}

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-24 md:py-32 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24 md:mb-32"
        >
          <h2 className="h-section">
            <span className="block text-bone">AUSGEWÄHLTE</span>
            <span className="block text-holz">PROJEKTE.</span>
          </h2>
          <p className="text-bone/70 text-[17px] leading-[1.6] max-w-[480px] mt-8">
            Ein Auszug unserer Arbeit aus den letzten Jahren, jedes Projekt geplant,
            produziert und montiert in Kärnten.
          </p>
        </motion.div>

        {projects.map((p, i) => (
          <ProjectBlock key={p.num} p={p} i={i} />
        ))}

        <div className="border-t border-bone/15 pt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-bone/70 text-[17px]">Weitere Projekte zeigen wir Ihnen gern persönlich.</p>
          <a href="#kontakt" className="btn btn-bone">
            Referenzliste anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
