import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Price } from "@/components/Currency";
import InquiryForm from "@/components/InquiryForm";
import Needle from "@/components/Needle";
import Photo from "@/components/Photo";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDestination } from "@/content/destinations";
import { defaultExcludes, defaultIncludes, getJourney, journeys, journeysFor } from "@/content/journeys";
import { whatsappLink } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const j = getJourney((await params).slug);
  if (!j) return {};
  return { title: j.name, description: `${j.days} days · ${j.summary}` };
}

export default async function JourneyPage({ params }: Props) {
  const j = getJourney((await params).slug);
  if (!j) notFound();
  const d = getDestination(j.destination)!;
  const others = journeysFor(d.slug).filter((x) => x.slug !== j.slug);

  return (
    <>
      <SiteHeader />
      <main className="page">
        <div className="jhero">
          <Photo src={d.photo?.bg} tone={d.tone} alt={d.title} className="jhero__img" />
          <div className="jhero__text wrap">
            <p className="eyebrow">
              <Needle /> {d.title} · {d.region}
            </p>
            <h1 className="display display--xl">{j.name}</h1>
            <p className="lede lede--light">{j.summary}</p>
          </div>
        </div>

        <div className="wrap jbody">
          <div>
            <dl className="facts">
              <div>
                <dt>Duration</dt>
                <dd>{j.days} days</dd>
              </div>
              <div>
                <dt>Best season</dt>
                <dd>{j.season}</dd>
              </div>
              <div>
                <dt>From</dt>
                <dd>
                  <Price pkr={j.fromPkr} /> <small>per person</small>
                </dd>
              </div>
            </dl>

            <h2 className="h2">Day by day</h2>
            <ol className="itinerary">
              {j.itinerary.map((line, i) => {
                // Long treks group days ("Days 4–6: …"); short trips are one line per day.
                const m = line.match(/^(Days? [\d–]+): (.*)$/);
                return (
                  <li key={i}>
                    <span>{m ? m[1] : `Day ${i + 1}`}</span>
                    <p>{m ? m[2] : line}</p>
                  </li>
                );
              })}
            </ol>

            <div className="lists">
              <div>
                <h2 className="h2">Included</h2>
                <ul>
                  {(j.includes ?? defaultIncludes).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="h2">Not included</h2>
                <ul>
                  {(j.excludes ?? defaultExcludes).map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="jside">
            <p className="jside__price">
              From <Price pkr={j.fromPkr} />
            </p>
            <a
              className="btn btn--dark btn--block"
              href={whatsappLink(`Hello SAFIRÉ, I'm interested in "${j.name}" (${j.days} days).`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan this journey on WhatsApp
            </a>
            <p className="jside__or">or send your details</p>
            <InquiryForm subject={j.name} />
          </aside>
        </div>

        {others.length > 0 && (
          <section className="section section--sand">
            <div className="wrap">
              <h2 className="display">More in {d.title}</h2>
              <div className="grid grid--3">
                {others.map((o) => (
                  <Link key={o.slug} href={`/journeys/${o.slug}`} className="jcard">
                    <Photo tone={d.tone} alt={o.name} className="jcard__img" />
                    <h3>{o.name}</h3>
                    <p className="jcard__price">
                      {o.days} days · from <Price pkr={o.fromPkr} />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
