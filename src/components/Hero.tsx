"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 py-24 sm:py-32 max-w-6xl mx-auto space-y-12 md:space-y-0 overflow-hidden text-foreground bg-background">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-radial-gradient-mask z-0" />

      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight drop-shadow-lg leading-tight">
          Hi, I&apos;m{" "}
          <span className="inline-block">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Isr
            </motion.span>
            ael Asefa
          </span>
        </h1>

        <div className="text-lg sm:text-xl max-w-xl text-muted-foreground leading-relaxed mx-auto md:mx-0">
          <Typewriter
            words={[
              "Backend Engineer",
              "Fullstack Developer",
              "DevOps Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        <Link href="#contact">
          <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all">
            Contact Me
          </Button>
        </Link>
      </motion.div>

      {/* Right: Image Avatar */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 flex justify-center"
      >
        <div className="group relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
          {/* Glow ring behind */}
          <div className="absolute inset-0 bg-primary opacity-20 blur-3xl scale-110 rounded-full transition-all group-hover:scale-125" />
          {/* Actual image */}
          <div className="relative w-full h-full border-4 border-primary shadow-md rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Israel Asefa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}
