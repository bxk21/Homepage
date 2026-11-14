# Bo Kang's Homepage

My personal portfolio site, live at [bxk21.vercel.app](https://bxk21.vercel.app/).

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript. Every page is statically prerendered, and the site is hosted on Vercel with Vercel Analytics.

## Development

```bash
npm install
npm run dev     # local dev server at http://localhost:3000
npm run lint    # ESLint (next build no longer lints)
npm run build   # production build
```

## Layout

- `src/app/` — one folder per page: home, `about`, `contact`, `resume`, `thisSite`
- `src/components/` — shared components; `layout/` holds the sidebar, header, footer and theme picker
- `public/photos/` — profile photos
