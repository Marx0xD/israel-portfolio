"use client";

import { motion } from "framer-motion";
import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiTypescript,
  SiKubernetes,
  SiJenkins,
  SiFastapi,
  SiSupabase,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={36} /> },
  { name: "Python", icon: <FaPython size={36} /> },
  { name: "TypeScript", icon: <SiTypescript size={36} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={36} /> },
  { name: "FastAPI", icon: <SiFastapi size={36} /> },
  { name: "Next.js", icon: <SiNextdotjs size={36} /> },
  { name: "React.js", icon: <FaReact size={36} /> },
  { name: "Node.js", icon: <FaNodeJs size={36} /> },
  { name: "Supabase", icon: <SiSupabase size={36} /> },
  { name: "Docker", icon: <FaDocker size={36} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={36} /> },
  { name: "Jenkins", icon: <SiJenkins size={36} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto text-foreground space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Technical Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.08,
                rotate: 1.5,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="flex flex-col items-center justify-center p-6 bg-background/80 border border-border rounded-xl shadow-md hover:shadow-lg transition-all hover:border-primary"
            >
              <div className="text-primary mb-2 sm:mb-3">{skill.icon}</div>
              <p className="text-sm font-medium text-muted-foreground text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
