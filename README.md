# MD. Abdullah Al Shahed — Portfolio

Personal portfolio of **MD. Abdullah Al Shahed**, a Junior Full Stack Developer based in Chattogram, Bangladesh. It presents my skills, education, experience, and project case studies in a dark, responsive, accessibility-minded interface.

# MD. Abdullah Al Shahed — Portfolio

Personal portfolio of **MD. Abdullah Al Shahed**, a Junior Full Stack Developer ... interface.

**Live site:** https://abdullahalshahed.vercel.app/

## Features

- **Single-page layout** with Hero, About, Skills, Education, Experience, Projects, and Contact sections
- **Project case studies** — a dynamic detail page for every project (`/projects/[slug]`) with overview, key features, stack, and links
- **Data-driven content** — all text and projects live in two data files, so no component edits are needed to update the site
- **Motion that respects users** — scroll-reveal animations, an animated active-section nav pill, and a scroll progress bar, all disabled for visitors who prefer reduced motion
- **Accessibility** — skip-to-content link, semantic landmarks, visible focus states, keyboard-closable mobile menu, and labelled external links
- **SEO** — page metadata, Open Graph and Twitter cards, `robots`, `sitemap`, generated Open Graph image, and JSON-LD structured data
- **Resume download** from the navbar, hero, and mobile menu
- **Copy-to-clipboard email** button in the contact section

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js (App Router), React |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist Sans and Geist Mono via `next/font` |
| Linting | ESLint |

## Getting Started

### Prerequisites

- Node.js (a current LTS release)
- npm

### Install and run

```bash
git clone https://github.com/abdullah-al-shahed/portfolio.git
cd shahed-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

See `.env.example` for the variables the project reads. The site URL used for SEO (canonical links, sitemap, Open Graph) is configured in `lib/site.js`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint the codebase |

## Project Structure

```
app/                     Routes, layout, metadata, SEO files
  projects/[slug]/       Project case-study pages
  globals.css            Tailwind theme tokens and custom utilities
  layout.js              Root layout, fonts, JSON-LD
  page.js                Home page (section order)
components/
  layout/                Navbar, Footer
  sections/              Hero, About, Skills, Education, Experience, Projects, Contact
  projects/              ProjectCard
  ui/                    ButtonLink, Container, Reveal, Section, SectionHeading, SocialLinks
  icons/                 Brand icons
  contact/               CopyEmailButton
  providers/             MotionProvider
data/
  portfolio.js           Profile, skills, education, experience, nav items
  projects.js            Project data
lib/                     Site config and helpers
public/                  Images, project screenshots, resume PDF
```

## Customising the Content

### Profile, skills, education, and experience

Edit `data/portfolio.js`. The section components read everything from this file.

### Adding a project

1. Add a screenshot to `public/projects/` (about 1600×1000 works best), for example `my-project.png`.
2. Open `data/projects.js` and add a new object to the `projects` array. A commented template is included at the bottom of that file.
3. Keep `slug` unique and set `featured: false` and `isPlaceholder: false`.

The Projects section card and the `/projects/<slug>` page are created automatically. Placeholder projects (`isPlaceholder: true`) only appear in development and are hidden in production builds.

### Updating the resume

Replace `public/resume/MD-Abdullah-Al-Shahed-Resume.pdf` with your latest PDF, keeping the same file name. The download buttons use the path set in `profile.resumeUrl`.

### Theme

Colors, fonts, and design tokens are defined in the `@theme` block of `app/globals.css`. Change `--color-accent` there to restyle the accents across the whole site.

## Featured Projects

- **BookNook** — full-stack online library management system (Next.js, Express, MongoDB, Better Auth)
- **BazarDor** — daily commodity price tracker with category filters and a live price ticker
- **FitLog** — dark-themed workout planner with a daily five-lift cap and live metrics

Full case studies are available on the portfolio site.

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com) or any host that supports Next.js:

1. Push the repository to GitHub.
2. Import it in Vercel and add the environment variables from `.env.example`.
3. Set the production URL in `lib/site.js` so canonical links, the sitemap, and social previews use the right domain.

## Contact

- Email: [alshahed6951@gmail.com](mailto:alshahed6951@gmail.com)
- GitHub: [abdullah-al-shahed](https://github.com/abdullah-al-shahed)
- LinkedIn: [md-abdullah-al-shahed](https://www.linkedin.com/in/md-abdullah-al-shahed/)

## License

All rights reserved. The code is shared for viewing and reference; please contact me before reusing the design or content.