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

const num = "font-archivo-black text-bone leading-[0.85] -tracking-[0.02em] tabular-nums text-[clamp(3.5rem,13vw,5rem)] lg:text-[clamp(3.5rem,6vw,6.5rem)]";
const cell = "lg:border-l lg:border-holz/40 lg:pl-10 first:border-l-0 first:pl-0";

export default function NumbersStrip() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-10">
          <div className={cell}>
            <p className="label text-chalk mb-4">Jahre im Handwerk</p>
            <p className={num}>
              <Counter target={YEARS} />
            </p>
          </div>

          <div className={cell}>
            <p className="label text-chalk mb-4">Realisierte Projekte</p>
            <p className={num}>
              <Counter target={400} suffix="+" />
            </p>
          </div>

          <div className={cell}>
            <p className="label text-chalk mb-4">Leistungsbereiche</p>
            <p className={num}>
              <Counter target={7} />
            </p>
          </div>

          <div className={`${cell} flex flex-col justify-end`}>
            <p className="label text-chalk mb-4">Zertifizierung</p>
            <p className="font-archivo font-semibold text-[32px] md:text-[44px] text-bone leading-[1]">
              Ankö
            </p>
            <p className="text-[14px] text-bone/60 mt-2">Führungsbestätigt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
