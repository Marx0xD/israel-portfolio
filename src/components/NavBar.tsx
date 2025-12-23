"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "OVERVIEW", href: "#overview" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "FAILURE_MODES", href: "#failure" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        fixed top-0 left-0 z-50 w-full
        bg-background/80 backdrop-blur-md
        border-b border-subtle
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* LEFT — IDENTITY */}
        <a href="#overview" className="flex items-center gap-3">
          <Image
            src="/MarxLogo.png"
            alt="MARX"
            width={30}
            height={30}
            className="opacity-95"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-mono text-[10px] tracking-widest text-muted">
              CONTROL PLANE
            </span>
            <span className="font-sans text-sm tracking-tight">MARX</span>
          </div>
        </a>

        {/* CENTER — NAV (DESKTOP) */}
        <div className="hidden md:flex items-center gap-12 font-mono text-[11px] tracking-widest">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
              text-muted-foreground
              cursor-pointer
              underline underline-offset-4 decoration-dotted decoration-muted-foreground/60
              hover:text-foreground
              hover:decoration-foreground
              hover:decoration-solid
              transition-colors
            "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT — PRIMARY ACTION + STATUS */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-1.5 rounded-md
              bg-foreground text-background
              tracking-widest text-[11px]
              hover:opacity-90
              transition
            "
          >
            SPEC_PDF
          </a>
          <a
            href="https://github.com/Marx0xD"
            target="_blank"
            rel="noopener noreferrer"
            className="
      tracking-widest text-[11px]
      text-muted
      hover:text-foreground
      transition-colors
    "
          >
            GITHUB
          </a>

          <div className="flex items-center gap-2 tracking-widest text-[10px]">
            <span className="text-muted">STATUS</span>
            <span className="text-[var(--state-ok)]">OPERATIONAL</span>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-muted"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="
          md:hidden border-t border-subtle
          bg-background/95 backdrop-blur-md
          px-6 py-6
          font-mono text-xs
          flex flex-col gap-6
        "
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                tracking-widest text-muted
                hover:text-foreground transition-colors
              "
            >
              {item.label}
            </a>
          ))}

          <div className="pt-4 border-t border-subtle flex flex-col gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex w-fit
                px-4 py-1.5
                bg-foreground text-background
                rounded-md tracking-widest text-[11px]
              "
            >
              SPEC_PDF
            </a>
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="
    text-muted hover:text-foreground
    tracking-widest text-[11px]
    transition-colors
  "
            >
              GITHUB
            </a>

            <div className="flex items-center gap-2 tracking-widest text-[10px]">
              <span className="text-muted">STATUS</span>
              <span className="text-[var(--state-ok)]">OPERATIONAL</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
