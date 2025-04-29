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

export default function Experience() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-primary mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-b border-border pb-6">
              <h3 className="text-2xl font-semibold">{exp.title} @ {exp.company}</h3>
              <p className="text-muted-foreground">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
