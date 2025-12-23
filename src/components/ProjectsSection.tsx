"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 border-t border-subtle"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8">
        {/* LEFT — LABEL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-12 md:col-span-4"
        >
          <span className="font-mono text-xs tracking-widest text-muted">
            PROJECT
          </span>
        </motion.div>

        {/* RIGHT — PROJECT DETAIL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            col-span-12 md:col-span-8
            font-mono text-xs text-muted
            space-y-10
          "
        >
          {/* TITLE */}
          <div>
            <div className="tracking-widest text-foreground">
              SPECTRUM
            </div>
            <div className="mt-2 max-w-xl">
              A distributed instance orchestration platform for provisioning,
              managing, and operating SaaS environments safely.
            </div>
          </div>

          {/* ARCHITECTURE */}
          <div>
            <div className="tracking-widest text-foreground">
              ARCHITECTURE SURFACE
            </div>
            <ul className="mt-3 space-y-1">
              <li>→ Spring Boot control plane (API, auth, job state)</li>
              <li>→ Kafka for event-driven orchestration</li>
              <li>→ Python worker for infrastructure execution</li>
              <li>→ PostgreSQL as system-of-record</li>
              <li>→ Secure callbacks and idempotent job handling</li>
            </ul>
          </div>

          {/* RESPONSIBILITY */}
          <div>
            <div className="tracking-widest text-foreground">
              OWNERSHIP
            </div>
            <ul className="mt-3 space-y-1">
              <li>→ Designed end-to-end job lifecycle</li>
              <li>→ Defined event contracts and failure paths</li>
              <li>→ Implemented callback verification and retries</li>
              <li>→ Built state transitions and safety checks</li>
            </ul>
          </div>

          {/* WHY IT MATTERS */}
          <div className="pt-6 border-t border-subtle">
            <div className="tracking-widest text-foreground">
              WHY THIS IS HARD
            </div>
            <div className="mt-3 font-bold max-w-xl">
              The system must remain correct under partial failures,
              duplicate events, retries, and infrastructure uncertainty 
              without human intervention.
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
