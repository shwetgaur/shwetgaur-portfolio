"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            03 · Experience
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where I&apos;ve shipped
          </p>
        </motion.div>

        <div className="mt-10 space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border-l-2 border-border pl-6 hover:border-accent/50 transition-colors"
            >
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="text-sm text-accent">{job.company}</p>
              {job.location && (
                <p className="text-xs text-muted">{job.location}</p>
              )}
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 30)} className="flex gap-2">
                    <span className="text-muted/50">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
