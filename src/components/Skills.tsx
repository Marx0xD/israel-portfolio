import { motion, Variants } from "framer-motion";
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

// Container variant to stagger children
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Item variant for each skill card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-8 max-w-6xl mx-auto text-foreground"
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -z-10" />

      {/* Heading with reveal animation */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-primary mb-12 text-center"
      >
        Technical Skills
      </motion.h2>

      {/* Grid of skill cards with stagger effect */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className="group flex flex-col items-center justify-center p-6 bg-background/80 border border-border rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-muted-foreground text-center">
              {skill.name}
            </p>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}