export const supportedLocales = ["en", "ro"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const sharedBusiness = {
  phone: "+40-555-014-739",
  displayPhone: "0555 014 739",
  email: "bookings@example.com",
  serviceRadiusKm: 35,
  baseUrl: "https://bcbobin.github.io",
  heroImage: `${basePath}/images/fagaras-taxi-hero.png`,
  openingHours: [
    "Mo 07:00-18:00",
    "Tu 07:00-18:00",
    "We 07:00-18:00",
    "Th 07:00-18:00",
    "Fr 07:00-18:00"
  ]
} as const;

export const siteContent = {
  en: {
    lang: "en",
    localeLabel: "English",
    business: {
      ...sharedBusiness,
      name: "Fagaras Taxi",
      legalName: "Fagaras Taxi Service",
      tagline: "Reliable local rides, airport transfers, and pre-booked pickups.",
      description:
        "A simple, dependable taxi service for local trips, airport transfers, appointments, errands, and safe rides home in Fagaras.",
      city: "Fagaras",
      region: "Brasov",
      country: "RO",
      postalCode: "505200",
      streetAddress: "Strada Republicii",
      googleMapsUrl: "https://maps.google.com/?q=Fagaras%20taxi",
      serviceAreas: [
        {
          name: "Fagaras Center",
          slug: "fagaras-center",
          description:
            "Prompt taxi pickups for hotels, offices, restaurants, events, and appointments in central Fagaras."
        },
        {
          name: "Fagaras Train Station",
          slug: "fagaras-train-station",
          description:
            "Reliable rides between Fagaras Train Station, nearby neighborhoods, hotels, and local destinations."
        },
        {
          name: "Victoria Road",
          slug: "victoria-road",
          description:
            "Local taxi service for errands, appointments, station transfers, and evening rides around the Victoria Road area."
        }
      ],
      services: [
        "Local taxi rides",
        "Airport transfers",
        "Hotel and event pickups",
        "Medical appointments",
        "Scheduled safe rides",
        "Pre-booked trips"
      ],
      reviews: [
        {
          quote:
            "Always on time for early rides, clear communication, and a clean car.",
          author: "M. Popescu"
        },
        {
          quote:
            "Easy to book and dependable for scheduled rides. Exactly what you want from a local taxi.",
          author: "S. Ionescu"
        }
      ]
    },
    nav: {
      services: "Services",
      airport: "Airport Taxi",
      serviceAreas: "Service Areas",
      call: "Call",
      menu: "Open menu",
      languageSelector: "Language selector"
    },
    home: {
      title: "Fagaras Taxi | Taxi Service in Fagaras, Brasov",
      description:
        "Call Fagaras Taxi for reliable taxi rides, airport transfers, and pre-booked pickups in Fagaras and nearby areas.",
      heroEyebrow: "Local taxi service",
      heroTitle: "Taxi service in Fagaras you can count on",
      viewServiceAreas: "View Service Areas",
      introEyebrow: "Local, direct, dependable",
      introTitle: "Simple taxi booking without the fuss",
      serving: "Serving",
      available: "Hours",
      availableValue: "Mon-Fri: 7:00 a.m. - 6:00 p.m.\nWeekends by special appointment",
      servicesEyebrow: "Services",
      servicesTitle: "Rides for everyday plans and important trips",
      serviceCardText: "Book a clean, comfortable taxi with clear pickup details and friendly local service.",
      airportEyebrow: "Airport taxi",
      airportTitle: "Pre-book airport transfers",
      airportText: "Schedule a taxi for early flights, arrivals, luggage-friendly pickups, and door-to-terminal rides.",
      airportLink: "Airport taxi details",
      areasEyebrow: "Service areas",
      areasTitle: "Local coverage across nearby neighborhoods",
      areasText: "Find taxi service for Fagaras and nearby routes, including local pickups, airport transfers, and pre-booked rides.",
      areasLink: "Browse areas",
      reviewsEyebrow: "Reviews",
      reviewsTitle: "Trusted by local riders"
    },
    servicesPage: {
      title: "Taxi Services in Fagaras | Fagaras Taxi",
      description:
        "Local taxi rides, airport transfers, appointment rides, and pre-booked pickups from Fagaras Taxi.",
      eyebrow: "Taxi services",
      heading: "Local rides, airport transfers, and scheduled pickups",
      cardText: "Call ahead or book when you are ready. Clear pickup information helps your driver arrive smoothly."
    },
    airportPage: {
      title: "Airport Taxi in Fagaras | Fagaras Taxi",
      description:
        "Pre-book an airport taxi in Fagaras for departures, arrivals, luggage-friendly rides, and early morning pickups.",
      eyebrow: "Airport taxi",
      heading: "Reliable airport transfers from Fagaras",
      departures: "Departures",
      departuresText: "Schedule pickup with your flight time, address, luggage needs, and preferred arrival buffer.",
      arrivals: "Arrivals",
      arrivalsText: "Arrange a taxi from the terminal to your home, hotel, office, or nearby destination.",
      prebooking: "Pre-booking",
      prebookingText: "Pre-booking is recommended for early flights, busy travel days, and important appointments."
    },
    areasPage: {
      title: "Taxi Service Areas Near Fagaras | Fagaras Taxi",
      description:
        "See where Fagaras Taxi provides local taxi service, airport transfers, and pre-booked rides near Fagaras.",
      eyebrow: "Service areas",
      heading: "Taxi service across Fagaras and nearby communities",
      linkPrefix: "Taxi in"
    },
    areaPage: {
      eyebrow: "Local taxi service",
      titlePrefix: "Taxi in",
      descriptionSuffix: "Call 0555 014 739 for local taxi rides and airport transfers.",
      headingPrefix: "Taxi service in",
      localPickups: "Local pickups",
      localPickupsText: "Book pickups from homes, hotels, restaurants, offices, stations, and local events in",
      airportTransfers: "Airport transfers",
      airportTransfersText: "Arrange taxi service to the airport with room for luggage and schedule buffers from",
      prebookedRides: "Pre-booked rides",
      prebookedRidesText: "Plan ahead for appointments, work shifts, early mornings, or scheduled rides home."
    },
    footer: {
      description: "Fagaras, Brasov taxi service for local rides, airport trips, and pre-booked pickups.",
      maps: "Google Maps"
    },
    callBand: {
      label: "Book a taxi",
      eyebrow: "Need a ride now?",
      heading: "Call for a local taxi in Fagaras"
    }
  },
  ro: {
    lang: "ro",
    localeLabel: "Română",
    business: {
      ...sharedBusiness,
      name: "Făgăraș Taxi",
      legalName: "Făgăraș Taxi Service",
      tagline: "Curse locale sigure, transferuri la aeroport și preluări rezervate.",
      description:
        "Un serviciu de taxi simplu și de încredere pentru curse locale, transferuri la aeroport, programări, comisioane și întoarceri în siguranță acasă în Făgăraș.",
      city: "Făgăraș",
      region: "Brașov",
      country: "RO",
      postalCode: "505200",
      streetAddress: "Strada Republicii",
      googleMapsUrl: "https://maps.google.com/?q=F%C4%83g%C4%83ra%C8%99%20taxi",
      serviceAreas: [
        {
          name: "Centrul Făgărașului",
          slug: "fagaras-center",
          description:
            "Preluări rapide cu taxiul pentru hoteluri, birouri, restaurante, evenimente și programări în centrul Făgărașului."
        },
        {
          name: "Gara Făgăraș",
          slug: "fagaras-train-station",
          description:
            "Curse de încredere între Gara Făgăraș, cartierele apropiate, hoteluri și destinații locale."
        },
        {
          name: "Zona Drumului Victoria",
          slug: "victoria-road",
          description:
            "Serviciu local de taxi pentru comisioane, programări, transferuri la gară și curse de seară în zona Drumului Victoria."
        }
      ],
      services: [
        "Curse locale cu taxiul",
        "Transferuri la aeroport",
        "Preluări de la hoteluri și evenimente",
        "Programări medicale",
        "Curse sigure programate",
        "Curse rezervate din timp"
      ],
      reviews: [
        {
          quote:
            "Mereu punctual pentru cursele de dimineață, comunicare clară și mașină curată.",
          author: "M. Popescu"
        },
        {
          quote:
            "Ușor de rezervat și de încredere pentru curse programate. Exact ce îți dorești de la un taxi local.",
          author: "S. Ionescu"
        }
      ]
    },
    nav: {
      services: "Servicii",
      airport: "Taxi Aeroport",
      serviceAreas: "Zone Deservite",
      call: "Sună",
      menu: "Deschide meniul",
      languageSelector: "Selector de limbă"
    },
    home: {
      title: "Făgăraș Taxi | Serviciu de taxi în Făgăraș, Brașov",
      description:
        "Sună la Făgăraș Taxi pentru curse de taxi de încredere, transferuri la aeroport și preluări rezervate în Făgăraș și în apropiere.",
      heroEyebrow: "Serviciu local de taxi",
      heroTitle: "Taxi în Făgăraș pe care te poți baza",
      viewServiceAreas: "Vezi zonele deservite",
      introEyebrow: "Local, direct, de încredere",
      introTitle: "Rezervare simplă, fără complicații",
      serving: "Deservim",
      available: "Program",
      availableValue: "Luni-vineri: 7:00-18:00\nWeekend cu programare specială",
      servicesEyebrow: "Servicii",
      servicesTitle: "Curse pentru planurile zilnice și drumurile importante",
      serviceCardText: "Rezervă un taxi curat și confortabil, cu detalii clare de preluare și serviciu local prietenos.",
      airportEyebrow: "Taxi aeroport",
      airportTitle: "Rezervă transferuri la aeroport",
      airportText: "Programează un taxi pentru zboruri matinale, sosiri, bagaje și curse de la ușă la terminal.",
      airportLink: "Detalii taxi aeroport",
      areasEyebrow: "Zone deservite",
      areasTitle: "Acoperire locală în Făgăraș și împrejurimi",
      areasText: "Găsește taxi pentru Făgăraș și rute apropiate, inclusiv preluări locale, transferuri la aeroport și curse rezervate.",
      areasLink: "Vezi zonele",
      reviewsEyebrow: "Recenzii",
      reviewsTitle: "Apreciat de clienții locali"
    },
    servicesPage: {
      title: "Servicii Taxi în Făgăraș | Făgăraș Taxi",
      description:
        "Curse locale, transferuri la aeroport, drumuri la programări și preluări rezervate cu Făgăraș Taxi.",
      eyebrow: "Servicii taxi",
      heading: "Curse locale, transferuri la aeroport și preluări programate",
      cardText: "Sună din timp sau rezervă când ești gata. Detaliile clare de preluare ajută șoferul să ajungă fără probleme."
    },
    airportPage: {
      title: "Taxi Aeroport în Făgăraș | Făgăraș Taxi",
      description:
        "Rezervă un taxi aeroport în Făgăraș pentru plecări, sosiri, curse cu bagaje și preluări de dimineață.",
      eyebrow: "Taxi aeroport",
      heading: "Transferuri de încredere la aeroport din Făgăraș",
      departures: "Plecări",
      departuresText: "Programează preluarea cu ora zborului, adresa, nevoile pentru bagaje și timpul dorit de rezervă.",
      arrivals: "Sosiri",
      arrivalsText: "Aranjează un taxi de la terminal către casă, hotel, birou sau o destinație apropiată.",
      prebooking: "Rezervare din timp",
      prebookingText: "Rezervarea din timp este recomandată pentru zboruri matinale, zile aglomerate și programări importante."
    },
    areasPage: {
      title: "Zone Deservite Taxi Lângă Făgăraș | Făgăraș Taxi",
      description:
        "Vezi unde oferă Făgăraș Taxi curse locale, transferuri la aeroport și curse rezervate lângă Făgăraș.",
      eyebrow: "Zone deservite",
      heading: "Taxi în Făgăraș și comunitățile din apropiere",
      linkPrefix: "Taxi în"
    },
    areaPage: {
      eyebrow: "Serviciu local de taxi",
      titlePrefix: "Taxi în",
      descriptionSuffix: "Sună la 0555 014 739 pentru curse locale și transferuri la aeroport.",
      headingPrefix: "Serviciu de taxi în",
      localPickups: "Preluări locale",
      localPickupsText: "Rezervă preluări de acasă, de la hoteluri, restaurante, birouri, gară și evenimente locale în",
      airportTransfers: "Transferuri la aeroport",
      airportTransfersText: "Aranjează taxi către aeroport, cu loc pentru bagaje și timp de rezervă, din",
      prebookedRides: "Curse rezervate",
      prebookedRidesText: "Planifică din timp pentru programări, ture de lucru, dimineți devreme sau întoarceri programate acasă."
    },
    footer: {
      description: "Serviciu de taxi în Făgăraș, Brașov pentru curse locale, drumuri la aeroport și preluări rezervate.",
      maps: "Google Maps"
    },
    callBand: {
      label: "Rezervă un taxi",
      eyebrow: "Ai nevoie de o cursă acum?",
      heading: "Sună pentru un taxi local în Făgăraș"
    }
  }
} as const;

export function getLocaleContent(locale: Locale = defaultLocale) {
  return siteContent[locale];
}

export function localizedPath(locale: Locale, path: string) {
  const localized = locale === defaultLocale ? path : path === "/" ? `/${locale}/` : `/${locale}${path}`;
  return `${basePath}${localized}`;
}

export const taxiBusiness = siteContent.en.business;
export type ServiceArea = (typeof siteContent.en.business.serviceAreas)[number];
