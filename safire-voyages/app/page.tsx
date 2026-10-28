import Link from "next/link";
import { Price } from "@/components/Currency";
import DestinationSlider from "@/components/DestinationSlider";
import Needle from "@/components/Needle";
import Photo from "@/components/Photo";
import SiteFooter from "@/components/SiteFooter";
import { destinations, getDestination } from "@/content/destinations";
import { getJourney } from "@/content/journeys";
import { services, whatsappLink } from "@/content/site";

const featured = ["hunza-in-autumn", "skardu-and-deosai", "fairy-meadows-escape", "kalash-valleys"];

const reasons = [
  {
    title: "Planned, not packaged",
    body: "Every journey is paced for the road, the weather and the people travelling. Nothing rushed to fit a brochure.",
  },
  {
    title: "People who know the North",
    body: "Drivers, guides and hosts we have travelled with for years, on roads that reward experience.",
  },
  {
    title: "One person, start to finish",
    body: "A single coordinator on WhatsApp from your first question until you are home again.",
  },
];

export default function Home() {
  return (
    <main>
      <DestinationSlider destinations={destinations} />

      <section className="section section--ivory">
        <div className="wrap intro">
          <p className="eyebrow eyebrow--dark">
            <Needle /> SAFIRÉ Voyages
          </p>
          <h2 className="display">Pakistan, travelled slowly and well.</h2>
          <div className="reasons">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap">
          <div className="section__head">
            <h2 className="display">Journeys this season</h2>
            <Link className="link link--dark" href="/journeys">
              All journeys →
            </Link>
          </div>
          <div className="grid grid--4">
            {featured.map((slug) => {
              const j = getJourney(slug)!;
              const d = getDestination(j.destination)!;
              return (
                <Link key={j.slug} href={`/journeys/${j.slug}`} className="jcard">
                  <Photo tone={d.tone} alt={j.name} className="jcard__img" />
                  <p className="jcard__meta">{d.title}</p>
                  <h3>{j.name}</h3>
                  <p className="jcard__price">
                    {j.days} days · from <Price pkr={j.fromPkr} />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--sapphire">
        <div className="wrap">
          <div className="section__head">
            <h2 className="display">Beyond the mountains</h2>
            <Link className="link" href="/services">
              More services →
            </Link>
          </div>
          <div className="grid grid--4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services#${s.slug}`} className="scard">
                <Needle />
                <h3>{s.title}</h3>
                <p>{s.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="wrap cta">
          <h2 className="display">Tell us where you&rsquo;d like to go.</h2>
          <p>We reply on WhatsApp, usually within the hour.</p>
          <div className="cta__actions">
            <a
              className="btn btn--dark"
              href={whatsappLink("Hello SAFIRÉ, I'd like to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <Link className="link link--dark" href="/contact">
              Or send an inquiry →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
