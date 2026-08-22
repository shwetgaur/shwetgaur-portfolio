"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import type { Project, ProjectStatus } from "@/lib/data";
import { projects } from "@/lib/data";

function statusStyles(status: ProjectStatus) {
  switch (status) {
    case "live":
      return "border-live/40 text-live bg-live/10";
    case "published":
      return "border-warn/40 text-warn bg-warn/10";
    case "shipped":
      return "border-muted/40 text-muted bg-surface";
    default:
      return "border-accent/40 text-accent bg-accent/10";
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-xl border border-border bg-surface p-5 sm:p-6 hover:border-accent/30 hover:bg-surface-hover transition-colors"
    >
      <div className="flex flex-wrap items-start justify-end gap-3">
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles(project.status)}`}
        >
          {project.statusLabel}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1.5 text-sm text-muted/90">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent select-none">›</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dim transition-colors"
          >
            Open demo
            <ExternalLink size={14} />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm hover:border-accent/50 hover:text-accent transition-colors"
        >
          Source
          <GitHubIcon size={14} />
        </a>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            02 · Work
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </p>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Four systems I&apos;ve built — with live demos, open source, and
            measurable outcomes where it matters.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
