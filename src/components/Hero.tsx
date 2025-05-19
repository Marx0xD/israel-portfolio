"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "@/components/ScrollIndicator"; // Assuming this component exists
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react"; // Example icon for ScrollIndicator

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger child animations
      delayChildren: 0.2,
    },
  },
};

// const textContentVariants: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//       duration: 0.8,
//     },
//   },
// };

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.7,
    },
  },
};

const nameSpanVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 7, // Slightly longer for a smoother gradient animation
      repeat: Infinity,
      ease: "linear",
    },
  }
};

const typewriterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb), 0.4)", // Assuming you have --primary-rgb CSS variable
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const avatarGroupVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.9,
    },
  },
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 250 },
  }
};

const avatarGlowVariants = {
  initial: {
    opacity: 0.2,
    scale: 1.1,
    blur: "3xl" // Assuming Tailwind JIT is enabled for arbitrary values
  },
  hover: {
    opacity: 0.4,
    scale: 1.25,
    blur: "4xl", // Example, ensure this class exists or use filter: blur(value)
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const, // Ensure type safety
    }
  }
}

const scrollIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5, // Delay to appear after main content
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  bounce: {
    y: [0, -8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const radialGradientVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "anticipate" } // "anticipate" gives a nice subtle effect
  }
}

// Fallback ScrollIndicator if not provided
const DefaultScrollIndicator = () => (
  <motion.div
    variants={scrollIndicatorVariants}
    initial="hidden"
    animate={["visible", "bounce"]} // Apply both visible and bounce
    className="text-primary"
  >
    <ChevronDown size={32} />
  </motion.div>
);


export default function Hero() {
  // Define primary color RGB for boxShadow if needed (example)
  // In a real app, you'd get this from your theme or define it in globals.css
  // For the boxShadow in buttonVariants, ensure your primary color is defined as CSS variables.
  // e.g., in your globals.css:
  // :root {
  //   --primary-rgb: 255, 0, 0; /* Example: red */
  // }
  // If you are using ShadCN, it sets up color variables like --primary that you can use with HSL or RGB.
  // For example, if primary is `hsl(var(--primary))`, you might need a utility to convert it or use a simpler shadow.

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 py-24 sm:py-32 max-w-6xl mx-auto space-y-12 md:space-y-0 overflow-hidden text-foreground bg-background min-h-screen">
      {/* Radial gradient glow - Animated */}
      <motion.div
        variants={radialGradientVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-radial-gradient-mask z-0"
      />

      {/* Left: Text Content - Container for stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 text-center md:text-left space-y-8 md:space-y-10" // Increased spacing
      >
        <motion.h1
          variants={headingVariants} // Applied specific variant
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight" // Added font-extrabold
        >
          Hi, I&apos;m{" "}
          <motion.span
            variants={nameSpanVariants}
            whileHover="hover"
            animate="animate" // Renamed from animate to avoid conflict if it was a direct prop
            className="inline-block bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
          >
            Isr
          </motion.span>
          ael Asefa
        </motion.h1>

        <motion.div
          variants={typewriterVariants} // Applied specific variant
          className="text-lg sm:text-xl md:text-2xl max-w-xl text-muted-foreground leading-relaxed mx-auto md:mx-0 font-medium" // Increased size, font-medium
        >
          <Typewriter
            words={[
              "Backend Engineer",
              "Fullstack Developer",
              "DevOps Enthusiast",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800} // Slightly longer delay
          />
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link href="#contact" passHref>
            <Button
              size="lg" // Using predefined Button sizes if available from shadcn/ui
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out"
              // Removed inline transition as Framer Motion handles it
            >
              Let&apos;s Connect
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right: Image Avatar */}
      <motion.div
        variants={avatarGroupVariants} // Applied specific variant
        initial="hidden"
        animate="visible"
        whileHover="hover" // Add hover to the whole group
        className="relative z-10 flex-1 flex justify-center items-center mt-12 md:mt-0"
      >
        <div className="group relative w-56 h-56 sm:w-72 sm:h-72 rounded-full"> {/* Slightly larger */}
          {/* Glow ring behind - Animated */}
          <motion.div
            variants={avatarGlowVariants}
            initial="initial"
            whileHover="hover"
            className="absolute inset-0 bg-primary rounded-full"
          />
          {/* Actual image */}
          <motion.div
            className="relative w-full h-full border-4 border-primary/70 shadow-2xl rounded-full overflow-hidden"
            whileHover={{ scale: 1.03, rotate: 1 }} // Subtle rotate and scale on image itself
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/avatar.jpg" // Ensure this path is correct
              alt="Israel Asefa - Professional Avatar"
              fill
              sizes="(max-width: 640px) 224px, 288px" // Added sizes for optimization
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Optional: Floating elements around avatar for more flair */}
          {/* Example:
          <motion.div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full opacity-50"
            animate={{ y: [0, 5, 0], x: [0, -3, 0]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut"}}
          />
          <motion.div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-lg opacity-60"
             animate={{ y: [0, -5, 0], rotate: [0, 15, 0]}}
             transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut"}}
          />
          */}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        {ScrollIndicator ? <ScrollIndicator /> : <DefaultScrollIndicator />}
      </div>
    </section>
  );
}