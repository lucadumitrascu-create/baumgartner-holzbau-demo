"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const YEARS = new Date().getFullYear() - 1978;

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // bottom-only margin: a plain "-20%" also shrinks the root left/right and never fires for the first column
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      setVal(target);
      return;
    }
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, reduce]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const facts = [
  { value: <Counter target={400} suffix="+" />, label: "realisierte Projekte" },
  { value: <Counter target={7} />, label: "Leistungsbereiche" },
  { value: "Ankö", label: "führungsbestätigt" },
];

export default function NumbersStrip() {
  return (
    <section className="bg-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-14 lg:gap-10 items-end">
        {/* The one oversized moment on the page: the years, with the line stepping onto the number */}
        <div className="lg:col-span-7">
          <p className="display text-holz tabular-nums leading-[0.8] text-[clamp(13rem,60vw,36rem)] -ml-[0.03em]">
            <Counter target={YEARS} />
          </p>
          <p className="display relative text-bone text-[clamp(2.25rem,9vw,4.5rem)] -mt-[1em] max-w-[11ch]">
            Jahre Holzbau aus Reichenfels
          </p>
        </div>

        <dl className="lg:col-span-5 lg:pb-3">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-6 border-t border-bone/15 py-5 last:border-b">
              <dt className="text-bone/70 text-[17px]">{f.label}</dt>
              <dd className="display text-bone tabular-nums text-[44px] md:text-[56px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
