"use client";

import { motion, useReducedMotion } from "framer-motion";

// Abbundzeichen: the marks carpenters cut into members during the Abbund so every piece
// finds its place when the frame is raised. Additive notation (IIII, not IV), V as a chevron.
type Seg = [number, number, number, number];

function glyph(n: number) {
  const segs: Seg[] = [];
  let x = 3;
  if (n >= 5) {
    segs.push([x, 3, x + 8, 37], [x + 8, 37, x + 16, 3]);
    x += 25;
    n -= 5;
  }
  // slight alternating lean so the strokes read as hand-cut, not typeset
  const lean = [0.9, -0.7, 1.1, -1];
  for (let i = 0; i < n; i++) {
    const l = lean[i % 4];
    segs.push([x + l, 3, x - l, 37]);
    x += 9;
  }
  return { segs, width: x - 6 };
}

export default function Abbund({ n, className = "" }: { n: number; className?: string }) {
  const reduce = useReducedMotion();
  const { segs, width } = glyph(n);

  return (
    <svg viewBox={`0 0 ${width} 40`} className={className} role="img" aria-label={`Abbundzeichen ${n}`}>
      {segs.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth={3.4}
          strokeLinecap="square"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.12, ease: [0.65, 0, 0.35, 1] }}
        />
      ))}
    </svg>
  );
}
