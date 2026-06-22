import { defaultLocale, getLocaleContent, localizedPath, type Locale } from "../site.config";

export function localBusinessSchema(path = "/", locale: Locale = defaultLocale) {
  const { business } = getLocaleContent(locale);
  const url = new URL(localizedPath(locale, path), business.baseUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${business.baseUrl}/#taxi-service-${locale}`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url,
    telephone: business.phone,
    email: business.email,
    image: new URL(business.heroImage, business.baseUrl).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area.name
    })),
    openingHours: business.openingHours,
    priceRange: "$$",
    serviceType: business.services
  };
}
