"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setVal(Math.floor(t * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  const display = target < 100
    ? String(val).padStart(target < 10 ? 2 : 3, "0")
    : String(val);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function NumbersStrip() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="flex flex-wrap">
          {/* 046 */}
          <div className="w-1/2 md:w-[30%] py-6 md:py-0">
            <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">
              JAHRE IM HANDWERK
            </p>
            <p className="font-archivo-black text-[80px] md:text-[120px] xl:text-[200px] text-bone leading-[0.85] -tracking-[0.02em]">
              <Counter target={46} />
            </p>
          </div>

          <div className="hidden md:block w-px bg-holz/40 self-stretch mx-0" />

          {/* 400+ */}
          <div className="w-1/2 md:flex-1 py-6 md:py-0 md:pl-10">
            <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">
              REALISIERTE PROJEKTE
            </p>
            <p className="font-archivo-black text-[80px] md:text-[100px] xl:text-[160px] text-bone leading-[0.85] -tracking-[0.02em]">
              <Counter target={400} suffix="+" />
            </p>
          </div>

          <div className="hidden md:block w-px bg-holz/40 self-stretch mx-0" />

          {/* 07 */}
          <div className="w-1/2 md:flex-1 py-6 md:py-0 md:pl-10">
            <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">
              LEISTUNGSBEREICHE
            </p>
            <p className="font-archivo-black text-[80px] md:text-[100px] xl:text-[160px] text-bone leading-[0.85] -tracking-[0.02em]">
              <Counter target={7} />
            </p>
          </div>

          <div className="hidden md:block w-px bg-holz/40 self-stretch mx-0" />

          {/* Ankö */}
          <div className="w-1/2 md:w-[20%] py-6 md:py-0 md:pl-10 flex flex-col justify-end">
            <p className="font-mono text-[11px] tracking-[0.08em] text-chalk uppercase mb-3">
              ZERTIFIZIERUNG
            </p>
            <p className="font-archivo font-semibold text-[32px] md:text-[48px] text-bone leading-[1]">
              Anko
            </p>
            <p className="font-mono text-[11px] tracking-[0.08em] text-bone/40 uppercase mt-2">
              FUHRUNGSBESTATIGT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
