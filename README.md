# Local Taxi Static Website Template

Astro static website template for a local taxi driver or small cab service.

## Stack

- Astro static output
- TypeScript config/data
- Plain CSS
- GitHub Pages friendly static build
- Local taxi SEO structure with service pages, area pages, schema, sitemap, and robots.txt

## Customize

Edit `src/site.config.ts` to change the business name, city, phone number, email, service areas, reviews, and base URL.

Update `astro.config.mjs`, `src/site.config.ts`, and `public/robots.txt` from `https://example.com` to the final custom domain before deployment.

## Commands

```bash
npm install
npm run dev
npm run build
```

The static site builds into `dist/`.

## How This Astro Site Works

Astro builds this project into static HTML. Each file in `src/pages/` becomes a route on the website:

- `src/pages/index.astro` becomes `/`
- `src/pages/services.astro` becomes `/services/`
- `src/pages/airport-taxi.astro` becomes `/airport-taxi/`
- `src/pages/service-areas/index.astro` becomes `/service-areas/`
- `src/pages/service-areas/[slug].astro` creates one page for each service area
- `src/pages/ro/...` creates Romanian versions of the same pages

Most site copy and business data live in `src/site.config.ts`. Pages call `getLocaleContent(locale)` to load the English or Romanian content, then pass that content into the layout and components.

The usual page flow is:

1. A route file in `src/pages/` selects the locale and page path.
2. It loads content from `src/site.config.ts`.
3. It wraps the page in `src/layouts/BaseLayout.astro`.
4. It renders shared components such as `Header`, `CallBand`, and `Footer`.
5. Astro turns the result into static HTML during `npm run build`.

## SEO Implementation

SEO is handled in a few coordinated places:

- `src/layouts/BaseLayout.astro` outputs the HTML `<head>` for every page.
- Each page passes a `title`, `description`, `canonicalPath`, `locale`, and optional `schema` into `BaseLayout`.
- `BaseLayout` creates canonical URLs, English/Romanian `hreflang` alternate links, Open Graph tags, Twitter card tags, theme color, favicon, and JSON-LD schema.
- `src/components/LocalBusinessSchema.ts` creates the Schema.org `TaxiService` JSON-LD object from `src/site.config.ts`.
- `src/pages/sitemap-index.xml.ts` generates sitemap URLs for both languages and all service-area pages.
- `public/robots.txt` tells crawlers where the sitemap is.

The visible homepage hours come from `home.availableValue` in `src/site.config.ts`. The machine-readable structured-data hours come from `business.openingHours` in the same file.

Before deploying to a real domain, update:

- `business.baseUrl` in `src/site.config.ts`
- `site` in `astro.config.mjs`
- sitemap URL/domain references in `public/robots.txt`

## Adding Or Editing Content

For most business changes, edit `src/site.config.ts`.

Common examples:

- Change phone number: update `sharedBusiness.phone` and `sharedBusiness.displayPhone`.
- Change opening hours for search engines: update `sharedBusiness.openingHours`.
- Change visible homepage hours: update `home.availableValue` for each locale.
- Add a service card: add a string to `business.services` for each locale.
- Add a review: add an object to `business.reviews`.
- Add a service area: add an object with `name`, `slug`, and `description` to `business.serviceAreas`.

When adding a service area, keep the same `slug` in English and Romanian so the generated pages and language switch stay aligned.

## Adding Or Editing Components

Reusable UI lives in `src/components/`.

- `Header.astro` controls the top navigation, language switch, phone call button, and mobile menu.
- `Footer.astro` controls the footer contact links.
- `CallBand.astro` controls the call-to-action band near the bottom of pages.
- `LocalBusinessSchema.ts` controls the SEO JSON-LD object.

To edit a component, update the component file and its styles in `src/styles/global.css`.

To add a new component:

1. Create a file in `src/components/`, for example `PromoBand.astro`.
2. Import it into the page that needs it.
3. Pass locale or content props if it needs translated text.
4. Add any required CSS to `src/styles/global.css`.
5. Run `npm run build` to verify the site.

Keep user-facing text in `src/site.config.ts` when it needs translation or business-specific editing. Keep layout-only markup and repeated UI patterns in components.
