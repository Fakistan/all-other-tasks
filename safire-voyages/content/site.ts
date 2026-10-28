// Business details. Items marked TODO are waiting on the owner.

export const site = {
  name: "SAFIRÉ Voyages",
  tagline: "Voyages Across Pakistan",
  domain: "safire.pk",
  whatsappDisplay: "0346-2717484",
  whatsappNumber: "923462717484",
  phone: "+92 346 2717484",
  instagram: "https://instagram.com/safire.pk",
  handle: "@safire.pk",
  email: "hello@safire.pk", // TODO: confirm
  address: "Office address to be added", // TODO
  licences: [
    "DTS / Tourism Department licence — number to be added", // TODO
    "Ministry of Religious Affairs (Hajj & Umrah) — number to be added", // TODO
  ],
  // TODO: owner to confirm; used only for the PKR / USD toggle.
  pkrPerUsd: 280,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  slug: string;
  title: string;
  line: string;
  body: string;
  points: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "umrah",
    title: "Umrah & Hajj",
    line: "Considered from the first call to the last ziyarat.",
    body: "Economy, Standard and Premium Umrah packages, and Hajj through the official scheme. We arrange visas, flights, hotels at a distance you choose from the Haram, transport and guided ziyarat in Makkah and Madinah.",
    points: [
      "Umrah visa and documentation",
      "Return flights, group or private dates",
      "Hotels by distance from the Haram",
      "Airport, Makkah – Madinah and ziyarat transport",
    ],
    cta: "I'd like details on Umrah packages.",
  },
  {
    slug: "international",
    title: "International Journeys",
    line: "The same care, further away.",
    body: "Turkey, Azerbaijan, the UAE, Malaysia, Thailand and beyond. Small-group departures and private trips planned around your dates.",
    points: [
      "Group departures and private itineraries",
      "Visa guidance for each destination",
      "Hand-picked hotels and local guides",
      "Honeymoon and family trips",
    ],
    cta: "I'd like to plan an international trip.",
  },
  {
    slug: "flights-visas",
    title: "Flights & Visas",
    line: "Tickets and paperwork, handled.",
    body: "Domestic and international air tickets, and help preparing visa applications: document checklists, appointments and application review.",
    points: [
      "Domestic and international ticketing",
      "Visa document checklists and review",
      "Appointment booking assistance",
      "Hotel bookings and travel insurance",
    ],
    cta: "I need help with flights / a visa.",
  },
  {
    slug: "custom",
    title: "Custom Journeys",
    line: "Your dates, your pace, your Pakistan.",
    body: "Tell us where you'd like to go, who is travelling and how you like to travel. We'll shape an itinerary around it and send it to you on WhatsApp.",
    points: [
      "Private family and friends trips",
      "Corporate and school groups",
      "Photography and trekking trips",
      "Overseas Pakistanis visiting home",
    ],
    cta: "I'd like a custom journey.",
  },
];
