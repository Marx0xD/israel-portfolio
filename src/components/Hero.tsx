"use client";

import { motion } from "framer-motion";

const line = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="overview"
      className="
        relative grid grid-cols-12 gap-8
        min-h-[70vh]
      "
    >
      {/* LOCAL MATRIX SUPPRESSION */}
      <div
        className="
          absolute inset-0
          bg-background/70
          backdrop-blur-[1.5px]
          pointer-events-none
        "
      />

      {/* LEFT — SYSTEM STATEMENT */}
      <div className="relative z-10 col-span-12 md:col-span-7 flex flex-col justify-center">
        <motion.div
          variants={line}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            CONTROL PLANE / SYSTEM IDENTITY
          </span>
        </motion.div>

        <motion.h1
          variants={line}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            font-sans
            text-4xl md:text-5xl
            font-medium
            leading-tight
            tracking-tight
            max-w-[14ch]
          "
        >
          Built under constraint.
          <br />
          Designed to survive.
        </motion.h1>

        <motion.p
          variants={line}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-6
            max-w-md
            text-muted
            leading-relaxed
          "
        >
          Backend and distributed systems where correctness, failure modes, and
          runtime behavior matter more than aesthetics.
        </motion.p>

        {/* SCROLL AFFORDANCE */}
        <motion.a
          href="#systems"
          variants={line}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
    mt-12
    inline-block
    font-mono text-xs tracking-widest
    text-foreground/80
    hover:text-foreground
    underline underline-offset-4 decoration-dotted
    hover:decoration-solid
    transition-colors
    cursor-pointer
  "
        >
          ↓ INSPECT SYSTEM
        </motion.a>
      </div>

      {/* RIGHT — SYSTEM METADATA */}
      <div className="relative z-10 col-span-12 md:col-span-5 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            w-full
            border-l border-subtle
            pl-6
            font-mono text-xs
            text-muted
            flex flex-col gap-3
          "
        >
          <div>
            <span className="tracking-widest text-foreground">NAME</span>
            <div>MARX</div>
          </div>

          <div>
            <span className="tracking-widest text-foreground">ROLE</span>
            <div>Systems Architect</div>
          </div>

          <div>
            <span className="tracking-widest text-foreground">FOCUS</span>
            <div>Distributed / Backend</div>
          </div>

          <div>
            <span className="tracking-widest text-foreground">
              OPERATING MODE
            </span>
            <div>Constraint-Driven</div>
          </div>

          <div>
            <span className="tracking-widest text-foreground">VALIDATION</span>
            <div>Runtime Behavior</div>
          </div>

          <div className="pt-3 border-t border-subtle">
            <span className="tracking-widest text-foreground">STATUS</span>
            <div className="text-[var(--state-ok)]">OPERATIONAL</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
