"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            01 · About
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Systems that run for real users
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-muted leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
