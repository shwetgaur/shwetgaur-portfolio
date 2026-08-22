# Ship Log — Shwet Gaur Portfolio

Personal portfolio site: **AI/ML engineer**, live demos, run-card project layout.

**Live site:** [shwetgaur-portfolio.vercel.app](https://shwetgaur-portfolio.vercel.app)

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

## Deploy (Vercel)

Hosted on Vercel. Redeploy after changes:

```bash
npx vercel --prod
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
