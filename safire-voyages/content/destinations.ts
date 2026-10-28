// Home hero slides. Copy and journeys are placeholders until the real
// packages arrive; prices are in PKR.

export type Journey = {
  name: string;
  days: number;
  fromPkr: number;
};

export type Destination = {
  slug: string;
  title: string; // shown huge, uppercase
  region: string;
  line: string; // one quiet sentence
  about: string; // 2–3 lines for the explore view
  tone: string; // ambient page colour behind the slide
  // Photo layers in /public/destinations/<slug>/. `fg` is the cut-out that
  // sits in front of the title. Without photos the slide falls back to a
  // gradient built from `tone`.
  photo?: { bg: string; fg?: string };
  journeys: Journey[];
};

export const WHATSAPP_NUMBER = "923462717484";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const destinations: Destination[] = [
  {
    slug: "hunza",
    title: "Hunza",
    region: "Gilgit-Baltistan",
    line: "Hunza, in its quietest season.",
    about:
      "Apricot orchards, glacier light and the Passu Cones at dusk. Slow mornings in Karimabad, an afternoon on Attabad's blue water.",
    tone: "#A9825C",
    journeys: [
      { name: "Hunza in Autumn", days: 7, fromPkr: 145000 },
      { name: "Passu & the Cones", days: 5, fromPkr: 110000 },
      { name: "Khunjerab Drive", days: 8, fromPkr: 168000 },
    ],
  },
  {
    slug: "skardu",
    title: "Skardu",
    region: "Gilgit-Baltistan",
    line: "Cold desert, still lakes.",
    about:
      "Shangrila and Upper Kachura at first light, the sand dunes of Sarfaranga, and the road up to Deosai when the plateau opens.",
    tone: "#5A7893",
    journeys: [
      { name: "Skardu & Deosai", days: 6, fromPkr: 135000 },
      { name: "Lakes of Skardu", days: 5, fromPkr: 118000 },
      { name: "Shigar & Khaplu Forts", days: 7, fromPkr: 152000 },
    ],
  },
  {
    slug: "fairy-meadows",
    title: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    line: "Nanga Parbat, close enough to listen to.",
    about:
      "A jeep track, a short climb through pines, and a meadow facing the ninth-highest mountain on earth. Nights in log cabins under clear skies.",
    tone: "#5C7558",
    journeys: [
      { name: "Fairy Meadows Escape", days: 5, fromPkr: 98000 },
      { name: "Nanga Parbat Base Camp", days: 7, fromPkr: 139000 },
    ],
  },
  {
    slug: "k2",
    title: "K2",
    region: "Karakoram",
    line: "The long walk to Concordia.",
    about:
      "Baltoro Glacier, Gasherbrum, Broad Peak and K2 in one horizon. A guided expedition for the patient traveller.",
    tone: "#66778A",
    journeys: [
      { name: "K2 Base Camp Trek", days: 18, fromPkr: 520000 },
      { name: "Concordia & Gondogoro La", days: 21, fromPkr: 610000 },
    ],
  },
  {
    slug: "swat",
    title: "Swat",
    region: "Khyber Pakhtunkhwa",
    line: "Rivers, pines and old stone.",
    about:
      "Malam Jabba's slopes, Kalam's forests and the quiet of Mahodand lake. Buddhist ruins along the valley floor.",
    tone: "#4D6855",
    journeys: [
      { name: "Swat & Kalam", days: 4, fromPkr: 72000 },
      { name: "Mahodand by Jeep", days: 5, fromPkr: 86000 },
    ],
  },
  {
    slug: "naran-kaghan",
    title: "Naran",
    region: "Kaghan Valley",
    line: "Saif-ul-Malook before the crowds.",
    about:
      "The Kunhar river, Lake Saif-ul-Malook in morning mist, and the high road over Babusar Pass when summer opens it.",
    tone: "#4C7884",
    journeys: [
      { name: "Naran & Saif-ul-Malook", days: 4, fromPkr: 68000 },
      { name: "Babusar to Chilas", days: 6, fromPkr: 104000 },
    ],
  },
  {
    slug: "neelum",
    title: "Neelum",
    region: "Azad Kashmir",
    line: "A valley the colour of its name.",
    about:
      "Keran, Sharda and the wooden houses of Arang Kel on their green shelf above the river. Kashmir at walking pace.",
    tone: "#6A8560",
    journeys: [
      { name: "Neelum & Arang Kel", days: 5, fromPkr: 82000 },
      { name: "Sharda & Taobat", days: 6, fromPkr: 99000 },
    ],
  },
  {
    slug: "chitral",
    title: "Chitral",
    region: "Khyber Pakhtunkhwa",
    line: "Under Tirich Mir, the Kalash valleys.",
    about:
      "Bumburet and Rumbur, festivals in spring and autumn, and the Shandur road where polo is played on the roof of the world.",
    tone: "#9A7458",
    journeys: [
      { name: "Kalash Valleys", days: 6, fromPkr: 112000 },
      { name: "Chitral & Shandur", days: 8, fromPkr: 158000 },
    ],
  },
];
