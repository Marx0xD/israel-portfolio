"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const CAPABILITIES = [
  {
    title: "Backend Systems",
    stack: ["Java", "Spring Boot", "Python", "FastAPI"],
    description: "Service design, APIs, business workflows, auth.",
  },
  {
    title: "Distributed Messaging",
    stack: ["Kafka", "Async Events", "Idempotency"],
    description: "Event-driven pipelines, retries, failure isolation.",
  },
  {
    title: "Frontend Interfaces",
    stack: ["TypeScript", "Next.js", "React"],
    description: "System surfaces, dashboards, controlled UI.",
  },
  {
    title: "Infrastructure",
    stack: ["Docker", "Kubernetes", "CI/CD"],
    description: "Provisioning, orchestration, deployment safety.",
  },
  {
    title: "Data & State",
    stack: ["PostgreSQL", "Supabase", "Migrations"],
    description: "Data integrity, lifecycle, access control.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="architecture"
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
            SYSTEM CAPABILITIES
          </span>
        </motion.div>

        {/* RIGHT — CAPABILITY GRID */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            col-span-12 md:col-span-8
            grid grid-cols-1 sm:grid-cols-2 gap-6
          "
        >
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="
                border border-subtle
                px-5 py-4
                font-mono text-xs
                text-muted
                transition-colors
                hover:text-foreground
              "
            >
              <div className="text-foreground tracking-widest">
                {cap.title}
              </div>

              <div className="mt-2">
                {cap.stack.join(" / ")}
              </div>

              <div className="mt-2 text-muted">
                {cap.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
