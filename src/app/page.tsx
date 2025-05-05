"use client";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/Experiences";
// import ProjectsSection from "@/components/ProjectsSection";



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
        <ExperienceSection />

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
