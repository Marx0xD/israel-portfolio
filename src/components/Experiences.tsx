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

const EXPERIENCES = [
  {
    company: "NiteShift Systems",
    role: "Backend Engineer",
    period: "Feb 2023 – Present",
    context:
      "Owned backend modules for distributed products with real production usage.",
    responsibilities: [
      "Authentication and identity services",
      "Event-driven notifications and workflows",
      "Admin and operational dashboards",
      "Schema design and migrations",
    ],
  },
  {
    company: "ETTA Solutions",
    role: "Backend Engineer",
    period: "Jun 2023 – Sep 2024",
    context:
      "Built and maintained backend systems supporting financial and enterprise workflows.",
    responsibilities: [
      "Payment and wallet system design",
      "Tender management workflows",
      "SaaS server deployment and operations",
    ],
  },
  {
    company: "Ahaz Software Solutions",
    role: "Fullstack Developer (Part-time)",
    period: "Feb 2021 – Dec 2022",
    context:
      "Early-stage engineering work across frontend, backend, and integrations.",
    responsibilities: [
      "Modernized legacy React codebases",
      "HRMS backend development",
      "Biometric device integrations (Python)",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            EXPERIENCE
          </span>
        </motion.div>

        {/* RIGHT — EXPERIENCE LIST */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-12 md:col-span-8 space-y-12 font-mono text-xs"
        >
          {EXPERIENCES.map((exp) => (
            <div key={exp.company}>
              <div className="tracking-widest text-foreground">
                {exp.role} — {exp.company}
              </div>

              <div className="mt-1 text-muted">
                {exp.period}
              </div>

              <div className="mt-3 text-muted max-w-xl">
                {exp.context}
              </div>

              <ul className="mt-3 space-y-1 text-muted">
                {exp.responsibilities.map((r) => (
                  <li key={r}>→ {r}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
