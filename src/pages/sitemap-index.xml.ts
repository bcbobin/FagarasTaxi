import { getLocaleContent, localizedPath, supportedLocales } from "../site.config";

const staticPages = ["/", "/services/", "/airport-taxi/", "/service-areas/"];

export function GET() {
  const urls = supportedLocales.flatMap((locale) => {
    const { business } = getLocaleContent(locale);
    return [
      ...staticPages.map((path) => localizedPath(locale, path)),
      ...business.serviceAreas.map((area) => localizedPath(locale, `/service-areas/${area.slug}/`))
    ];
  });

  const { business } = getLocaleContent("en");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path, business.baseUrl).toString();
    return `  <url><loc>${loc}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
