"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="p-8 max-w-4xl mx-auto text-foreground space-y-8 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-primary mb-4">Contact Me</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Feel free to reach out! I&apos;m open to new opportunities, collaborations, and interesting projects.
        </p>

        <div className="flex justify-center">
          <Link href="mailto:israel.asefawm.mi1055@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
