export const taxiBusiness = {
  name: "Laurent Taxi",
  legalName: "Laurent Taxi Service",
  tagline: "Reliable local rides, airport transfers, and late-night pickups.",
  description:
    "A simple, dependable taxi service for local trips, airport transfers, appointments, errands, and safe rides home.",
  phone: "+1-555-014-7390",
  displayPhone: "(555) 014-7390",
  email: "bookings@example.com",
  city: "Ottawa",
  region: "ON",
  country: "CA",
  postalCode: "K1P 1J1",
  streetAddress: "123 Main Street",
  serviceRadiusKm: 35,
  baseUrl: "https://example.com",
  googleMapsUrl: "https://maps.google.com/?q=Ottawa%20taxi",
  heroImage: "/images/taxi-hero.png",
  openingHours: [
    "Mo 00:00-23:59",
    "Tu 00:00-23:59",
    "We 00:00-23:59",
    "Th 00:00-23:59",
    "Fr 00:00-23:59",
    "Sa 00:00-23:59",
    "Su 00:00-23:59"
  ],
  serviceAreas: [
    {
      name: "Downtown Ottawa",
      slug: "downtown-ottawa",
      description:
        "Prompt taxi pickups for hotels, offices, restaurants, events, and appointments in downtown Ottawa."
    },
    {
      name: "Kanata",
      slug: "kanata",
      description:
        "Reliable rides between Kanata, business parks, residential neighborhoods, and airport connections."
    },
    {
      name: "Orleans",
      slug: "orleans",
      description:
        "Local taxi service for Orleans errands, appointments, station transfers, and evening rides home."
    }
  ],
  services: [
    "Local taxi rides",
    "Airport transfers",
    "Hotel and event pickups",
    "Medical appointments",
    "Late-night safe rides",
    "Pre-booked trips"
  ],
  reviews: [
    {
      quote:
        "Always on time for early airport rides, clear communication, and a clean car.",
      author: "M. Patel"
    },
    {
      quote:
        "Easy to book and dependable after late shifts. Exactly what you want from a local taxi.",
      author: "S. Tremblay"
    }
  ]
} as const;

export type ServiceArea = (typeof taxiBusiness.serviceAreas)[number];
