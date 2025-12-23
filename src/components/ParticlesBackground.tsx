"use client";

import { useEffect, useState } from "react";

const GLYPHS = [
  // Binary / Hex
  "0","1","A","B","C","D","E","F",

  // Operators / Structure
  "{","}","[","]","<",">","/","\\","=","|","+","-",

  // Cyrillic (fragmentary, no words)
  "Ж","П","Ф","Ц","Ш","Щ","Я","Ю","Б","Д","Л","Г","К","Р","Т","М",

  // Mathematical / Ideological
  "∑","∏","∫","∆","∇","≈","≠","≤","≥","∞","∈","⊂","⊃",

  // Block / Terminal
  "░","▒","▓","█","▄","▀","■","□","▢","▣",

  // Control / Misc
  "#","@","$","§","¶"
];
function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function generateColumn(length: number) {
  return Array.from({ length }, randomGlyph);
}

export default function MatrixField() {
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    const calc = () => setColumns(Math.floor(window.innerWidth / 18));
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  if (!columns) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 flex">
        {Array.from({ length: columns }).map((_, i) => (
          <MatrixColumn key={i} index={i} />
        ))}
      </div>

      {/* containment */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,
          transparent_0%,
          rgba(0,0,0,0.35)_60%,
          var(--background)_100%)]
        "
      />
    </div>
  );
}

function MatrixColumn({ index }: { index: number }) {
  const symbols = generateColumn(40);

  const duration = 18 + (index % 6) * 2;
  const delay = (index % 12) * -1.5;

  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: 18,
        animationName: "matrix-fall",
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
      }}
    >
      {symbols.map((c, i) => (
        <span
          key={i}
          className="
            font-mono
            text-xs
            leading-none
            opacity-[0.12]
          "
          style={{
            color: "var(--accent-primary)",
            opacity: 0.05 + (i / symbols.length) * 0.25,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
