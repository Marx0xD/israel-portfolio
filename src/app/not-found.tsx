"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="
        min-h-screen
        flex items-center
        bg-background
        text-foreground
      "
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8">
        {/* LEFT — STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="col-span-12 md:col-span-5 font-mono text-xs text-muted"
        >
          <div className="tracking-widest text-foreground">
            STATUS
          </div>
          <div className="mt-2 text-[var(--state-fail)]">
            RESOURCE NOT FOUND
          </div>

          <div className="mt-6 border-t border-subtle pt-4">
            <div className="tracking-widest text-foreground">
              CODE
            </div>
            <div className="mt-1">404</div>
          </div>
        </motion.div>

        {/* RIGHT — MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="col-span-12 md:col-span-7"
        >
          <h1 className="font-sans text-3xl md:text-4xl font-medium tracking-tight">
            This route does not exist.
          </h1>

          <p className="mt-6 max-w-md text-muted">
            The system could not resolve the requested path.
            No redirect was performed.
          </p>

          <Link
            href="/"
            className="
              inline-block
              mt-10
              font-mono text-xs tracking-widest
              text-foreground/80
              hover:text-foreground
              underline underline-offset-4 decoration-dotted
              hover:decoration-solid
              transition-colors
            "
          >
            ← RETURN TO CONTROL PLANE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
