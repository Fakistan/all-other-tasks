import type { Metadata } from "next";
import JourneyGrid from "@/components/JourneyGrid";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Journeys",
  description: "Journeys across northern Pakistan: Hunza, Skardu, Fairy Meadows, K2, Swat, Naran, Neelum and Chitral.",
};

export default function JourneysPage() {
  return (
    <PageShell
      eyebrow="Journeys"
      title="Voyages across Pakistan"
      intro="Every journey can be taken privately or adjusted to your dates. Prices are per person, twin sharing."
    >
      <section className="wrap section--tight">
        <JourneyGrid />
      </section>
    </PageShell>
  );
}
