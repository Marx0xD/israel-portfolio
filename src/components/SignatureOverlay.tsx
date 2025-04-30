"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignatureOverlay() {
  const [show, setShow] = useState(false);
  const [, setSequence] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const next = (prev + e.key.toLowerCase()).slice(-3);
        if (next === "isr") {
          setShow(true);
          setTimeout(() => setShow(false), 5000); // hide after 5s
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-primary text-3xl sm:text-4xl font-semibold leading-relaxed"
          >
            &quot;Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.&quot;  
            <br />
            — Kahlil Gibran
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
