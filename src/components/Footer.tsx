import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-center font-mono text-xs text-muted">
          {site.name} · {year}
        </p>
      </div>
    </footer>
  );
}
