"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileDown } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { liveStrip, pipelineSteps, site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative grid-bg overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-widest text-accent"
        >
          Ship Log · AI Systems Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-muted sm:text-xl leading-relaxed"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-2 font-mono text-sm text-muted/90"
        >
          {site.subline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-1 text-sm text-foreground/80"
        >
          Currently · <span className="text-live">{site.currentRole}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dim transition-colors"
          >
            View work
            <ArrowDown size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            LinkedIn
            <ExternalLink size={14} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            GitHub
            <GitHubIcon size={16} />
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              Resume
              <FileDown size={16} />
            </a>
          )}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12 hidden sm:flex items-center gap-0 max-w-lg"
        >
          {pipelineSteps.map((step, i) => (
            <div key={step} className="flex items-center flex-1 min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted whitespace-nowrap">
                {step}
              </span>
              {i < pipelineSteps.length - 1 && (
                <span className="mx-2 h-px flex-1 bg-border" aria-hidden />
              )}
            </div>
          ))}
        </motion.div>

        {/* Live strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-2 sm:gap-3"
        >
          {liveStrip.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs hover:border-accent/40 hover:bg-surface-hover transition-colors"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full live-dot ${
                  item.status === "live"
                    ? "bg-live"
                    : item.status === "published"
                      ? "bg-warn"
                      : "bg-accent"
                }`}
              />
              <span className="text-muted">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
