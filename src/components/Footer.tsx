import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted">
          {site.name} · {year}
        </p>
        <p className="text-xs text-muted/70">
          Built with Next.js · Deploy on Vercel
        </p>
      </div>
    </footer>
  );
}
