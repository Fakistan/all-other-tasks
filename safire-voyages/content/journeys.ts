// Placeholder journeys until the owner's real packages arrive.
// Prices are per person in PKR (twin sharing).

export type Journey = {
  slug: string;
  name: string;
  destination: string; // Destination slug
  days: number;
  fromPkr: number;
  season: string;
  summary: string;
  itinerary: string[]; // one line per day (or day range)
  includes?: string[];
  excludes?: string[];
};

export const defaultIncludes = [
  "Private transport with an experienced mountain driver",
  "Hotels and guesthouses, twin sharing",
  "Breakfast and dinner",
  "A SAFIRÉ coordinator on WhatsApp throughout",
  "Fuel, tolls and parking",
];

export const defaultExcludes = [
  "Domestic flights unless stated",
  "Lunch and personal expenses",
  "Entry tickets and local jeep fees unless stated",
  "Travel insurance",
];

export const journeys: Journey[] = [
  {
    slug: "hunza-in-autumn",
    name: "Hunza in Autumn",
    destination: "hunza",
    days: 7,
    fromPkr: 145000,
    season: "Oct – Nov",
    summary: "Golden poplars, apricot orchards and long evening light over the Karakoram.",
    itinerary: [
      "Islamabad to Chilas along the Karakoram Highway",
      "Chilas to Karimabad, with a stop at the Rakaposhi viewpoint",
      "Baltit and Altit forts, Karimabad bazaar, sunset at Eagle's Nest",
      "Attabad Lake, Hussaini suspension bridge and the Passu Cones",
      "Gulmit village and a quiet walk to Borith Lake",
      "Hunza to Chilas",
      "Chilas to Islamabad",
    ],
  },
  {
    slug: "passu-and-the-cones",
    name: "Passu & the Cones",
    destination: "hunza",
    days: 5,
    fromPkr: 110000,
    season: "Apr – Oct",
    summary: "A short, unhurried stay in Upper Hunza under the cathedral peaks of Passu.",
    itinerary: [
      "Fly Islamabad to Gilgit, drive to Karimabad",
      "Baltit Fort, the old town and Eagle's Nest at sunset",
      "Attabad Lake, Passu Cones and the Hussaini bridge; night in Passu",
      "Borith Lake walk and the Batura glacier viewpoint",
      "Drive to Gilgit and fly to Islamabad (weather permitting)",
    ],
    includes: ["Return flights Islamabad – Gilgit", ...defaultIncludes.slice(1)],
  },
  {
    slug: "skardu-and-deosai",
    name: "Skardu & Deosai",
    destination: "skardu",
    days: 6,
    fromPkr: 135000,
    season: "Jun – Sep",
    summary: "Still lakes, a cold desert and the high plateau of Deosai in full bloom.",
    itinerary: [
      "Fly Islamabad to Skardu; Shangrila and Lower Kachura Lake",
      "Upper Kachura Lake, then Sarfaranga cold desert at sunset",
      "Deosai Plains and Sheosar Lake by jeep",
      "Shigar Fort and the Shigar valley",
      "Manthokha Waterfall",
      "Fly Skardu to Islamabad",
    ],
    includes: ["Return flights Islamabad – Skardu", "Deosai jeep and park fees", ...defaultIncludes.slice(1)],
  },
  {
    slug: "shigar-and-khaplu",
    name: "Shigar & Khaplu Forts",
    destination: "skardu",
    days: 7,
    fromPkr: 152000,
    season: "Apr – Oct",
    summary: "Nights in restored Balti palaces, with the Karakoram outside every window.",
    itinerary: [
      "Fly Islamabad to Skardu, evening at leisure",
      "Shigar Fort and Blind Lake",
      "Drive to Khaplu; evening at Khaplu Palace",
      "Chaqchan Mosque and the Hushe valley viewpoint",
      "Back to Skardu via Manthokha Waterfall",
      "Kachura lakes and Sarfaranga",
      "Fly Skardu to Islamabad",
    ],
    includes: ["Return flights Islamabad – Skardu", ...defaultIncludes.slice(1)],
  },
  {
    slug: "fairy-meadows-escape",
    name: "Fairy Meadows Escape",
    destination: "fairy-meadows",
    days: 5,
    fromPkr: 98000,
    season: "Jun – Sep",
    summary: "Two nights in log cabins facing the north face of Nanga Parbat.",
    itinerary: [
      "Islamabad to Chilas via Naran and Babusar Pass",
      "Raikot Bridge, jeep to Tato and the hike up to Fairy Meadows",
      "Walk to Beyal Camp and the Nanga Parbat viewpoint",
      "Hike down, jeep to Raikot and drive to Naran",
      "Naran to Islamabad",
    ],
    includes: ["Raikot – Tato jeep", ...defaultIncludes],
  },
  {
    slug: "nanga-parbat-base-camp",
    name: "Nanga Parbat Base Camp",
    destination: "fairy-meadows",
    days: 7,
    fromPkr: 139000,
    season: "Jun – Sep",
    summary: "From the meadow to the foot of the Rakhiot face, at an easy pace.",
    itinerary: [
      "Islamabad to Chilas",
      "Raikot, jeep to Tato and the hike to Fairy Meadows",
      "A slow day to acclimatise; sunset over Nanga Parbat",
      "Trek via Beyal to Nanga Parbat Base Camp and back to Beyal",
      "Return to Fairy Meadows",
      "Hike down and drive to Chilas",
      "Chilas to Islamabad",
    ],
    includes: ["Raikot – Tato jeep", "Local guide for the base camp trek", ...defaultIncludes],
  },
  {
    slug: "k2-base-camp-trek",
    name: "K2 Base Camp Trek",
    destination: "k2",
    days: 18,
    fromPkr: 520000,
    season: "Jun – Aug",
    summary: "The Baltoro Glacier to Concordia and the foot of K2, fully supported.",
    itinerary: [
      "Days 1–2: Islamabad to Skardu, briefing and permits",
      "Day 3: Jeep to Askole",
      "Days 4–6: Trek to Jhola, Paiju and Khoburtse",
      "Days 7–8: Urdukas and Goro II along the Baltoro",
      "Day 9: Concordia",
      "Days 10–11: K2 Base Camp and Broad Peak Base Camp",
      "Days 12–16: Return trek to Askole",
      "Day 17: Jeep to Skardu",
      "Day 18: Fly to Islamabad",
    ],
    includes: [
      "Return flights Islamabad – Skardu",
      "Trekking permits and liaison officer",
      "Licensed guide, cook and porters",
      "Tents and all meals on trek",
    ],
  },
  {
    slug: "concordia-gondogoro-la",
    name: "Concordia & Gondogoro La",
    destination: "k2",
    days: 21,
    fromPkr: 610000,
    season: "Jul – Aug",
    summary: "The full Baltoro circuit, crossing Gondogoro La down to Hushe.",
    itinerary: [
      "Days 1–2: Islamabad to Skardu, permits",
      "Day 3: Jeep to Askole",
      "Days 4–9: Up the Baltoro Glacier to Concordia",
      "Days 10–11: K2 Base Camp",
      "Days 12–13: Ali Camp and the Gondogoro La crossing (weather permitting)",
      "Days 14–16: Down through Saicho to Hushe",
      "Day 17: Hushe to Skardu via Khaplu",
      "Days 18–20: Buffer days for weather",
      "Day 21: Fly to Islamabad",
    ],
    includes: [
      "Return flights Islamabad – Skardu",
      "Trekking permits and liaison officer",
      "Licensed guide, cook, porters and fixed-rope team",
      "Tents and all meals on trek",
    ],
  },
  {
    slug: "swat-and-kalam",
    name: "Swat & Kalam",
    destination: "swat",
    days: 4,
    fromPkr: 72000,
    season: "Apr – Oct",
    summary: "Rivers, pine forests and Mahodand Lake, close enough for a long weekend.",
    itinerary: [
      "Islamabad to Mingora by motorway",
      "Malam Jabba, then on to Kalam",
      "Ushu forest and Mahodand Lake by jeep",
      "Kalam to Islamabad",
    ],
  },
  {
    slug: "swat-buddhist-trail",
    name: "Swat Valley & Buddhist Trail",
    destination: "swat",
    days: 5,
    fromPkr: 86000,
    season: "Mar – Nov",
    summary: "Two thousand years of stone stupas, then the forests of Upper Swat.",
    itinerary: [
      "Islamabad to Mingora",
      "Butkara stupa, Swat Museum and the Jahanabad Buddha",
      "Drive up the valley to Kalam",
      "Mahodand Lake and Ushu forest",
      "Kalam to Islamabad",
    ],
  },
  {
    slug: "naran-and-saif-ul-malook",
    name: "Naran & Saif-ul-Malook",
    destination: "naran-kaghan",
    days: 4,
    fromPkr: 68000,
    season: "Jun – Sep",
    summary: "The lake at first light, before the day visitors arrive.",
    itinerary: [
      "Islamabad to Naran via Balakot and the Kunhar river",
      "Early jeep to Lake Saif-ul-Malook",
      "Lalazar meadows and Babusar Top",
      "Naran to Islamabad",
    ],
  },
  {
    slug: "kaghan-lakes",
    name: "Kaghan Lakes",
    destination: "naran-kaghan",
    days: 6,
    fromPkr: 104000,
    season: "Jun – Sep",
    summary: "Shogran's meadows, Saif-ul-Malook and Lulusar, end to end of the valley.",
    itinerary: [
      "Islamabad to Shogran; Siri Paye meadows",
      "Shogran to Naran",
      "Lake Saif-ul-Malook",
      "Lulusar Lake and Babusar Top",
      "A slow day by the Kunhar river",
      "Naran to Islamabad",
    ],
  },
  {
    slug: "neelum-and-arang-kel",
    name: "Neelum & Arang Kel",
    destination: "neelum",
    days: 5,
    fromPkr: 82000,
    season: "Apr – Oct",
    summary: "Wooden villages on a green shelf above the river.",
    itinerary: [
      "Islamabad to Muzaffarabad and on to Keran",
      "Keran to Kel via Sharda",
      "Chairlift and hike up to Arang Kel",
      "Sharda Peeth ruins and a river walk",
      "Return to Islamabad",
    ],
  },
  {
    slug: "sharda-and-taobat",
    name: "Sharda & Taobat",
    destination: "neelum",
    days: 6,
    fromPkr: 99000,
    season: "May – Oct",
    summary: "All the way to the end of the Neelum valley.",
    itinerary: [
      "Islamabad to Keran",
      "Keran to Sharda",
      "Sharda to Taobat",
      "Back to Kel and up to Arang Kel",
      "Kel to Muzaffarabad",
      "Muzaffarabad to Islamabad",
    ],
  },
  {
    slug: "kalash-valleys",
    name: "Kalash Valleys",
    destination: "chitral",
    days: 6,
    fromPkr: 112000,
    season: "Apr – Oct",
    summary: "Bumburet and Rumbur, travelled respectfully, under Tirich Mir.",
    itinerary: [
      "Fly Islamabad to Chitral",
      "Chitral Fort, Shahi Mosque and the bazaar",
      "Bumburet valley",
      "Rumbur valley and the Kalash museum",
      "Back to Chitral; Garam Chashma hot springs",
      "Fly Chitral to Islamabad",
    ],
    includes: ["Return flights Islamabad – Chitral", ...defaultIncludes.slice(1)],
  },
  {
    slug: "chitral-and-shandur",
    name: "Chitral & Shandur",
    destination: "chitral",
    days: 8,
    fromPkr: 158000,
    season: "Jun – Sep",
    summary: "Over the roof of the world, from Chitral to Gilgit by Shandur Pass.",
    itinerary: [
      "Islamabad to Dir",
      "Through the Lowari tunnel to Chitral",
      "Bumburet and the Kalash valleys",
      "Chitral to Mastuj",
      "Shandur Pass, its lake and polo ground",
      "Shandur to Gilgit via Phander Lake",
      "Gilgit to Chilas",
      "Chilas to Islamabad",
    ],
  },
];

export function journeysFor(destination: string) {
  return journeys.filter((j) => j.destination === destination);
}

export function getJourney(slug: string) {
  return journeys.find((j) => j.slug === slug);
}
