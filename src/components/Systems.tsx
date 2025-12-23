"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Systems() {
  return (
    <section
      id="systems"
      className="relative py-32 border-t border-subtle"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8">
        {/* LEFT — LABEL */}
        <motion.div
          variants={fade}
          className="col-span-12 md:col-span-4"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            SYSTEMS / SCOPE
          </span>
        </motion.div>

        {/* RIGHT — SYSTEM LIST */}
        <motion.div
          variants={fade}
          className="
            col-span-12 md:col-span-8
            grid grid-cols-1 sm:grid-cols-2 gap-6
            font-mono text-sm
          "
        >
          {[
            "Authentication & Identity",
            "Event-driven pipelines",
            "Distributed workflows",
            "Service orchestration",
            "Failure handling & retries",
            "Data integrity under load",
          ].map((item) => (
            <div
              key={item}
              className="
                border border-subtle
                px-4 py-3
                text-muted
                hover:text-foreground
                transition-colors
              "
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
