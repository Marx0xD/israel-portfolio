"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "JukeBox",
    description: "A modern music streaming platform with Spotify/Apple Music integrations and real-time audio analytics.",
    tech: ["Next.js", "Supabase", "ReactHowler", "Spotify API"],
    link: "https://github.com/youruser/jukebox",
  },
  {
    title: "Instance Manager",
    description: "A SaaS backend that launches Odoo servers on demand, fully Dockerized with Kafka messaging.",
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "FastAPI"],
    link: "https://github.com/youruser/instancemanager",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-primary mb-4"
        >
          Projects
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 border border-border rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag, j) => (
                  <span
                    key={j}
                    className="text-sm px-2 py-1 bg-muted text-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
