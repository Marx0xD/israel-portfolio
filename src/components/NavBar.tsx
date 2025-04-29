"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);

      const sections = ["about", "experience", "skills", "projects"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border px-8 py-4 transition-shadow duration-300 ${shadow ? "shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-primary font-bold text-xl">
          Israel Asefa
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-muted-foreground text-sm">
          {[
            { label: "About", id: "about" },
            { label: "Experience", id: "experience" },
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-primary transition-colors ${
                activeSection === id ? "text-primary" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right-side buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-sm rounded bg-primary text-background hover:bg-primary/80"
          >
            Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-muted-foreground">
            <a
              href="https://github.com/israel0x7CF"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-asefa-978529202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:israel.asefawm.mi1055@gmail.com" className="hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-muted-foreground"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-muted-foreground text-sm">
          {[
            { label: "About", id: "about" },
            { label: "Experience", id: "experience" },
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className={`hover:text-primary transition-colors ${
                activeSection === id ? "text-primary" : ""
              }`}
            >
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-sm rounded bg-primary text-background hover:bg-primary/80"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
