import { taxiBusiness } from "../site.config";

export function localBusinessSchema(path = "/") {
  const url = new URL(path, taxiBusiness.baseUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${taxiBusiness.baseUrl}/#taxi-service`,
    name: taxiBusiness.name,
    legalName: taxiBusiness.legalName,
    description: taxiBusiness.description,
    url,
    telephone: taxiBusiness.phone,
    email: taxiBusiness.email,
    image: new URL(taxiBusiness.heroImage, taxiBusiness.baseUrl).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: taxiBusiness.streetAddress,
      addressLocality: taxiBusiness.city,
      addressRegion: taxiBusiness.region,
      postalCode: taxiBusiness.postalCode,
      addressCountry: taxiBusiness.country
    },
    areaServed: taxiBusiness.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area.name
    })),
    openingHours: taxiBusiness.openingHours,
    priceRange: "$$",
    serviceType: taxiBusiness.services
  };
}
