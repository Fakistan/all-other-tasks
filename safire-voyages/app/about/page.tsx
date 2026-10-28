import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Photo from "@/components/Photo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "SAFIRÉ Voyages plans calm, carefully paced journeys across Pakistan.",
};

// Story copy is a placeholder for the owner to replace with their own.
export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title="A quieter way to see Pakistan">
      <section className="wrap about">
        <Photo tone="#5A7893" alt="The SAFIRÉ team" className="about__img" />
        <div className="prose">
          <p>
            SAFIRÉ began with a simple idea: that the most beautiful country many people have never seen
            deserves to be travelled properly. Not rushed through in a bus, but met slowly, with good roads
            chosen, good rooms booked and time left over to sit and look.
          </p>
          <p>
            We plan journeys across the North, from Hunza and Skardu to Fairy Meadows and the Kalash valleys, for
            families, friends, couples and overseas Pakistanis coming home. We also arrange Umrah, international
            trips, flights and visas with the same care.
          </p>
          <p>
            Every trip has one coordinator from first message to last day, and a team of drivers, guides and hosts
            we have travelled with for years.
          </p>
          <h2 className="h2">Licences</h2>
          <ul>
            {site.licences.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <p>
            <Link className="link link--dark" href="/contact">
              Start planning →
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
