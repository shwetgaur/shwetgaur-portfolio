# Ship Log — Shwet Gaur Portfolio

Personal portfolio site: **AI/ML engineer**, live demos, run-card project layout.

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

## Deploy to Vercel

1. Push this folder to GitHub (`shwetgaur/shwetgaur-portfolio`)
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Deploy — zero config

Or CLI:

```bash
npx vercel
```

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
