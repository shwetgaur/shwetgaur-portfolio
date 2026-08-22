"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Stack() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
          04 · Stack
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted hover:border-accent/30 hover:text-foreground transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
