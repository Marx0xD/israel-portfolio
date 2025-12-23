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

export default function Contact() {
  return (
    <section
      id="contact"
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
            CONTACT / AVAILABILITY
          </span>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            col-span-12 md:col-span-8
            font-mono text-xs text-muted
            space-y-8
          "
        >
          {/* Availability */}
          <div>
            <div className="tracking-widest text-foreground">
              CURRENT STATUS
            </div>
            <div className="mt-2">
              Available for backend / distributed systems work.
            </div>
          </div>

          {/* Engagement */}
          <div>
            <div className="tracking-widest text-foreground">
              ENGAGEMENT
            </div>
            <ul className="mt-2 space-y-1">
              <li>→ Full-time (remote)</li>
              <li>→ Contract / consulting</li>
              <li>→ Systems design & backend ownership</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <div className="tracking-widest text-foreground">
              LOCATION
            </div>
            <div className="mt-2">
              Addis Ababa (UTC+3) — remote-first.
            </div>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-subtle">
            <div className="tracking-widest text-foreground">
              CONTACT
            </div>
            <div className="mt-3">
              <a
                href="mailto:israel.asefawm.mi1055@gmail.com"
                className="
                  tracking-widest
                  text-foreground
                  hover:underline
                  underline-offset-4
                "
              >
                israel.asefawm.mi1055@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
