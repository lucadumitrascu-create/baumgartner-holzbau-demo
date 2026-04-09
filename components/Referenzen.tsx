"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    name: "GEMEINDEBRUCKE\nWOLFSBERG",
    desc: "45-Meter-Spannweite aus Brettschichtholz fur die Marktgemeinde Wolfsberg. Eine Infrastrukturmassnahme, die Tradition und moderne Ingenieurskunst verbindet.",
    data: [
      ["JAHR", "2024"], ["ORT", "WOLFSBERG, KARNTEN"], ["TYP", "BRUCKENBAU"],
      ["SPANNWEITE", "45 METER"], ["MATERIAL", "BSH GL28h"], ["AUFTRAG", "MARKTGEMEINDE"],
    ],
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
    caption: "FIG. 01 — BRUCKENKONSTRUKTION WOLFSBERG",
  },
  {
    num: "02",
    name: "PRODUKTIONSHALLE\nSCHWEIGER",
    desc: "3.200 Quadratmeter konstruktiver Holzbau fur ein produzierendes Unternehmen. Spannweiten bis 24 Meter, stutzenfrei.",
    data: [
      ["JAHR", "2023"], ["ORT", "ST. PAUL IM LAVANTTAL"], ["TYP", "INGENIEURHOLZBAU"],
      ["FLACHE", "3.200 m2"], ["SPANNWEITE", "24 M"], ["AUFTRAG", "SCHWEIGER GMBH"],
    ],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    caption: "FIG. 02 — HALLENKONSTRUKTION LAVANTTAL",
  },
  {
    num: "03",
    name: "WOHNHAUS\nORTNER",
    desc: "Einfamilienhaus in Massivholzbauweise mit eigener Larchenholz-Fassade. Klimaneutrale Konstruktion mit regionalen Materialien.",
    data: [
      ["JAHR", "2024"], ["ORT", "REICHENFELS"], ["TYP", "MASSIVHOLZBAU"],
      ["WOHNFLACHE", "180 m2"], ["MATERIAL", "FICHTE & LARCHE"], ["AUFTRAG", "PRIVAT"],
    ],
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    caption: "FIG. 03 — WOHNHAUS REICHENFELS",
  },
  {
    num: "04",
    name: "SCHULERWEITERUNG\nREICHENFELS",
    desc: "Anbau an die ortliche Volksschule in Holzbauweise. Offentliches Auftragsprojekt mit Fokus auf Raumklima und Nachhaltigkeit.",
    data: [
      ["JAHR", "2023"], ["ORT", "REICHENFELS"], ["TYP", "OFFENTLICHER BAU"],
      ["FLACHE", "420 m2"], ["BAUZEIT", "9 MONATE"], ["AUFTRAG", "GEMEINDE"],
    ],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    caption: "FIG. 04 — SCHULANBAU REICHENFELS",
  },
  {
    num: "05",
    name: "DACHSANIERUNG\nVILLA S.",
    desc: "Komplette Erneuerung eines denkmalgeschutzten Dachstuhls. Traditionelle Zimmermannsarbeit mit historischen Techniken.",
    data: [
      ["JAHR", "2024"], ["ORT", "KLAGENFURT"], ["TYP", "ZIMMEREI"],
      ["FLACHE", "380 m2"], ["BESONDERHEIT", "DENKMALSCHUTZ"], ["AUFTRAG", "PRIVAT"],
    ],
    img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80",
    caption: "FIG. 05 — DACHSTUHL KLAGENFURT",
  },
  {
    num: "06",
    name: "HOLZFASSADE\nGEWERBEPARK",
    desc: "1.800 Quadratmeter hinterluftete Larchenholz-Fassade fur einen Gewerbepark. Dauerhaft, regional, wartungsarm.",
    data: [
      ["JAHR", "2023"], ["ORT", "WOLFSBERG"], ["TYP", "AUSSENFASSADE"],
      ["FLACHE", "1.800 m2"], ["MATERIAL", "LARCHE"], ["AUFTRAG", "GEWERBEPARK SUD"],
    ],
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
    caption: "FIG. 06 — FASSADE WOLFSBERG",
  },
];

function ProjectBlock({
  p,
  i,
}: {
  p: (typeof projects)[0];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30%" });
  const even = i % 2 === 1;

  const textSide = (
    <div className="lg:col-span-5 flex flex-col justify-center py-8 lg:py-0">
      <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
        PROJEKT {p.num} / 06
      </p>
      <div className="w-[80px] h-px bg-holz mb-6" />
      <h3 className="font-archivo-black text-[44px] md:text-[56px] xl:text-[72px] text-bone uppercase leading-[0.9] -tracking-[0.01em] whitespace-pre-line mb-8">
        {p.name}
      </h3>
      <p className="text-stone text-[14px] leading-[1.6] max-w-[400px] mb-10">
        {p.desc}
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-[400px]">
        {p.data.map(([label, value]) => (
          <div key={label} className="flex items-baseline gap-2">
            <span className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase whitespace-nowrap">
              {label}
            </span>
            <span className="flex-1 border-b border-dotted border-chalk/20 min-w-[20px] mb-1" />
            <span className="font-mono text-[11px] tracking-[0.08em] text-bone uppercase whitespace-nowrap">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const imageSide = (
    <div ref={ref} className="lg:col-span-7 relative">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1s linear",
        }}
      >
        <Image
          src={p.img}
          alt={p.name.replace("\n", " ")}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>
      <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mt-3">
        {p.caption}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-32 md:mb-40"
    >
      {even ? (
        <>
          {imageSide}
          {textSide}
        </>
      ) : (
        <>
          {textSide}
          {imageSide}
        </>
      )}
    </motion.div>
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
          <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-6">
            03 / REFERENZEN
          </p>
          <h2 className="font-archivo-black uppercase leading-[0.9] -tracking-[0.02em]">
            <span className="block text-bone text-[64px] md:text-[88px] xl:text-[120px]">AUSGEWAHLTE</span>
            <span className="block text-holz text-[64px] md:text-[88px] xl:text-[120px]">PROJEKTE.</span>
          </h2>
          <p className="text-stone text-[16px] leading-[1.6] max-w-[480px] mt-8">
            Ein Auszug unserer Arbeit aus den letzten Jahren. Jedes Projekt:
            geplant, produziert und montiert in Karnten.
          </p>
        </motion.div>

        {projects.map((p, i) => (
          <ProjectBlock key={p.num} p={p} i={i} />
        ))}

        <div className="w-full h-px bg-holz mb-6" />
        <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase text-center">
          — WEITERE PROJEKTE AUF ANFRAGE —
        </p>
      </div>
    </section>
  );
}
