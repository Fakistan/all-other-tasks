// Home hero slides. Copy is placeholder until the owner's content arrives.

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
};

export const destinations: Destination[] = [
  {
    slug: "hunza",
    title: "Hunza",
    region: "Gilgit-Baltistan",
    line: "Hunza, in its quietest season.",
    about:
      "Apricot orchards, glacier light and the Passu Cones at dusk. Slow mornings in Karimabad, an afternoon on Attabad's blue water.",
    tone: "#A9825C",
  },
  {
    slug: "skardu",
    title: "Skardu",
    region: "Gilgit-Baltistan",
    line: "Cold desert, still lakes.",
    about:
      "Shangrila and Upper Kachura at first light, the sand dunes of Sarfaranga, and the road up to Deosai when the plateau opens.",
    tone: "#5A7893",
  },
  {
    slug: "fairy-meadows",
    title: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    line: "Nanga Parbat, close enough to listen to.",
    about:
      "A jeep track, a short climb through pines, and a meadow facing the ninth-highest mountain on earth. Nights in log cabins under clear skies.",
    tone: "#5C7558",
  },
  {
    slug: "k2",
    title: "K2",
    region: "Karakoram",
    line: "The long walk to Concordia.",
    about:
      "Baltoro Glacier, Gasherbrum, Broad Peak and K2 in one horizon. A guided expedition for the patient traveller.",
    tone: "#66778A",
  },
  {
    slug: "swat",
    title: "Swat",
    region: "Khyber Pakhtunkhwa",
    line: "Rivers, pines and old stone.",
    about:
      "Malam Jabba's slopes, Kalam's forests and the quiet of Mahodand lake. Buddhist ruins along the valley floor.",
    tone: "#4D6855",
  },
  {
    slug: "naran-kaghan",
    title: "Naran",
    region: "Kaghan Valley",
    line: "Saif-ul-Malook before the crowds.",
    about:
      "The Kunhar river, Lake Saif-ul-Malook in morning mist, and the high road over Babusar Pass when summer opens it.",
    tone: "#4C7884",
  },
  {
    slug: "neelum",
    title: "Neelum",
    region: "Azad Kashmir",
    line: "A valley the colour of its name.",
    about:
      "Keran, Sharda and the wooden houses of Arang Kel on their green shelf above the river. Kashmir at walking pace.",
    tone: "#6A8560",
  },
  {
    slug: "chitral",
    title: "Chitral",
    region: "Khyber Pakhtunkhwa",
    line: "Under Tirich Mir, the Kalash valleys.",
    about:
      "Bumburet and Rumbur, festivals in spring and autumn, and the Shandur road where polo is played on the roof of the world.",
    tone: "#9A7458",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
