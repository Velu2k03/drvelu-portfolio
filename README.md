# Velu Murugan | AI Automation Engineer

A Next.js 14 and Tailwind CSS portfolio focused on remote junior and entry-level AI engineering and automation roles.

## Run locally

Use Node.js 20 or newer. Keep this checkout, downloads, runtime tools, caches, and temporary files on F: on the current workstation.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests start the production server, so build first. They cover desktop/mobile rendering, project links, cross-page navigation, the mobile menu, the current PDF download, and removal of the old PDFs. Screenshots and traces go in the ignored `test-results` directory. An existing test browser can be selected with `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`. On this workstation, set `PLAYWRIGHT_BROWSERS_PATH`, `npm_config_cache`, `TEMP`, and `TMP` to directories on F: before installing or running tooling.

## Content

- `lib/portfolio.ts`: shared profile, four projects, skills, and background.
- `app/components`: homepage sections, shared with `/about` and `/projects`.
- `/projects/apps`: redirects to the current project collection.
- `public/Velu_Murugan_Resume_2026.pdf`: the single resume used by every download link. The prior resume and CV were removed as requested. The supplied PDF is preserved without edits.
- `public/images/projects`: local project cover images. See [image credits](docs/image-credits.md).

Contact uses a direct email link. The previous form only displayed a success message and had no delivery backend.

The education grade is 88%, following the explicit requested correction from 1.75/5.0. The initial brief also mentioned 98%; confirm that discrepancy before changing this value.

## Design rationale

See [research notes](docs/portfolio-research.md) for the hiring sources and how they informed the content. The page leads with n8n and LLM integrations, then offers inspectable code, concise project descriptions, a video introduction, and direct contact. It avoids unsupported impact metrics and presents independent projects separately from employment.

## Deployment

The existing deployment is Vercel. Use the Next.js preset with `npm run build`. This change does not create or configure a separate hosting service.

## Dependency maintenance

The inherited Next.js 14 dependency tree has npm audit advisories. The rebuild preserves the framework major version; a supported-framework upgrade should be handled separately. Run `npm audit` for current findings rather than treating a successful production build as a security audit.