"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "NiteShiftSystems",
    title: "Backend Engineer",
    duration: "Feb 2023 – Present",
    description:
      "Built fullstack modules, authentication, notification services and admin dashboards using Next.js, Spring Boot, and Supabase.",
  },
  {
    company: "ETTA Solutions",
    title: "Backend Engineer",
    duration: "Jun 2023 – Sep 2024",
    description:
      "Built Tender Management, Payment Systems, Wallet Systems and Deployed SaaS servers with Spring Boot.",
  },
  {
    company: "Ahaz Software Solutions",
    title: "Fullstack Developer (Part-time)",
    duration: "Feb 2021 – Dec 2022",
    description:
      "Modernized old React codebases, built HRMS with Spring Boot, and integrated biometric devices using Python.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative pt-32 pb-24 border-t border-border bg-background text-foreground overflow-hidden"
    >
      {/* Ambient blurred glow background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-primary opacity-10 blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 sm:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary relative inline-block">
            Experience
            <span className="block h-1 w-16 bg-primary rounded-full mt-2 mx-auto" />
          </h2>
          <p className="mt-2 text-muted-foreground text-lg">
            Where I’ve worked, built, and grown professionally.
          </p>
        </motion.div>

        {/* Experience Items */}
        <div className="space-y-12 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
              viewport={{ once: true }}
              className="relative flex gap-6 items-start group"
            >
              {/* Dot and vertical line container */}
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-primary shadow-md z-10" />
                {/* Line */}
                {idx < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              {/* Card content */}
              <div className="p-6 bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full">
                <h3 className="text-2xl font-semibold">
                  {exp.title}{" "}
                  <span className="text-primary font-normal">
                    @ {exp.company}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
