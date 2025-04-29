"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "@/components/ScrollIndicator";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto bg-background text-foreground text-center space-y-8 overflow-hidden">
      {/* Particles Background */}

      {/* Avatar with gentle hover pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="relative group w-32 h-32 rounded-full overflow-hidden"
      >
        <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-2xl transition-all group-hover:scale-110" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-md group-hover:shadow-xl">
          <Image
            src="/avatar.jpg"
            alt="Israel Asefa"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary drop-shadow-lg"
      >
        Hi, I&apos;m Israel Asefa
      </motion.h1>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 text-lg sm:text-xl max-w-2xl text-muted-foreground leading-relaxed"
      >
        <Typewriter
          words={["Backend Engineer", "Fullstack Developer", "DevOps Enthusiast"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.div>

      {/* Contact Me Button with squish effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6"
      >
        <Link href="#contact">
          <Button
            className="bg-primary hover:bg-primary/80 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Contact Me
          </Button>
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
