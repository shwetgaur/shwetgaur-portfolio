"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            05 · Contact
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s build something
          </p>
          <p className="mt-3 max-w-lg text-muted">
            Open to AI/ML engineering internships and roles where I can ship
            production LLM systems. Graduating June 2027.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-dim transition-colors"
            >
              <Mail size={18} />
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
