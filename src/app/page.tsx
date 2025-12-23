"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import Capabilities from "@/components/Capabilities";
import FailureModes from "@/components/FailureModes";
import ExperienceSection from "@/components/Experiences";
import Projects from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        initial="hidden"
        animate="show"
        variants={container}
        className="
          mx-auto
          max-w-7xl
          px-6
          pt-24
          pb-32
          bg-background
          text-foreground
        "
      >
        {/* CONTROL PLANE — HERO */}
        <Hero />
        <div className="mt-24 border-t border-subtle opacity-60" />
        <Systems />
        <Capabilities />
        <FailureModes />
        <ExperienceSection />
        <Projects />
        <Contact />
        {/* SYSTEM FOOTER STRIP */}
        <section className="mt-32 border-t border-subtle pt-8">
          <div className="flex flex-col gap-2 font-mono text-xs text-muted">
            <span>STATUS: OPERATIONAL</span>
            <span>MODE: CONSTRAINT-DRIVEN</span>
            <span>BUILT BY: MARX</span>
          </div>
        </section>
      </motion.main>
    </>
  );
}
