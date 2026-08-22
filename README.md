# Shwet Gaur — Portfolio

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
- `site.resumeUrl` — resume PDF path (default `/resume.pdf` in `public/`)
- Email / social URLs

### Update resume

1. Export your latest resume as PDF
2. Save it as `public/resume.pdf` (overwrite the old file)
3. Run `npx vercel --prod` to publish

## Project structure

```
src/
  app/          layout, page, globals.css
  components/   Header, Hero, About, Projects, etc.
  lib/data.ts   all content in one file
```

## License

MIT — personal portfolio
