import { taxiBusiness } from "../site.config";

const staticPages = ["/", "/services/", "/airport-taxi/", "/service-areas/"];

export function GET() {
  const urls = [
    ...staticPages,
    ...taxiBusiness.serviceAreas.map((area) => `/service-areas/${area.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = new URL(path, taxiBusiness.baseUrl).toString();
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
