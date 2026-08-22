"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-foreground hover:text-accent transition-colors"
        >
          ship<span className="text-accent">log</span>
          <span className="text-muted"> / {site.name.split(" ")[0].toLowerCase()}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-muted hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent"
            >
              GitHub →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
