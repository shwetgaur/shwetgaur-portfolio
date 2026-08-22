# Ship Log — Shwet Gaur Portfolio

Personal portfolio site: **AI/ML engineer**, live demos, run-card project layout.

**Repo:** [github.com/shwetgaur/shwetgaur-portfolio](https://github.com/shwetgaur/shwetgaur-portfolio)

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshwetgaur%2Fshwetgaur-portfolio&project-name=shwetgaur-portfolio&repository-name=shwetgaur-portfolio)

Or import manually:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `shwetgaur/shwetgaur-portfolio`
3. Deploy — zero config

After deploy, update `metadataBase` in `src/app/layout.tsx` to your live URL (e.g. `https://your-name.vercel.app`).

## Customize

Edit **`src/lib/data.ts`** for:

- Projects, links, experience, skills
- `site.resumeUrl` — paste your Google Drive resume PDF link
- Email / social URLs

## Project structure

```
src/
  app/          layout, page, globals.css
  components/   Header, Hero, About, Projects, etc.
  lib/data.ts   all content in one file
```

## License

MIT — personal portfolio
