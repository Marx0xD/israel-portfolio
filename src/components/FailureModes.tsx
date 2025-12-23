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

const FAILURE_MODES = [
  {
    title: "Partial Service Failure",
    response: "Graceful degradation, circuit breakers, retries with backoff.",
  },
  {
    title: "Event Duplication",
    response: "Idempotent consumers, deduplication keys, replay safety.",
  },
  {
    title: "Out-of-order Events",
    response: "Versioned payloads, state reconciliation, ordering guarantees.",
  },
  {
    title: "Database Contention",
    response: "Transaction boundaries, indexing, isolation tuning.",
  },
  {
    title: "Deployment Regression",
    response: "Rollback paths, health checks, progressive rollout.",
  },
  {
    title: "External Dependency Failure",
    response: "Timeouts, fallbacks, defensive client design.",
  },
];

export default function FailureModes() {
  return (
    <section
      id="failure"
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
            FAILURE MODES
          </span>
        </motion.div>

        {/* RIGHT — FAILURE GRID */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            col-span-12 md:col-span-8
            grid grid-cols-1 gap-5
            font-mono text-xs
          "
        >
          {FAILURE_MODES.map((item) => (
            <div
              key={item.title}
              className="
                border border-subtle
                px-5 py-4
                text-muted
              "
            >
              <div className="tracking-widest text-foreground">
                {item.title}
              </div>
              <div className="mt-2">
                → {item.response}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
