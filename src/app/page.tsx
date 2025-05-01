"use client";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
// import ProjectsSection from "@/components/ProjectsSection";

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

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col space-y-3 py-16 px-8 max-w-6xl mx-auto bg-background/90 backdrop-blur-sm text-foreground mt-4">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero />
        </motion.section>

        {/* About Section */}
        <section id="about" className="space-y-6 pt-20 border-t border-border">
       
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-primary">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a backend engineer and fullstack developer based in
                Ethiopia. I specialize in building scalable systems with Spring
                Boot and FastAPI, and modern frontends using Next.js and React.
                <br />
                <br />I am passionate about crafting robust APIs, optimizing
                architectures, and working at the intersection of development
                and DevOps.
              </p>
            </motion.div>
          
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-20 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-bold text-primary mb-4"
            >
              Experience
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className="border-b border-border pb-6"
                >
                  <h3 className="text-2xl font-semibold">
                    {exp.title} @ {exp.company}
                  </h3>
                  <p className="text-muted-foreground">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="pt-20 border-t border-border"
        >
          <Skills />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.section>
      </main>
    </>
  );
}
