import type { Metadata } from "next";
import Needle from "@/components/Needle";
import PageShell from "@/components/PageShell";
import { services, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "More Services",
  description: "Umrah & Hajj, international journeys, flights & visas and custom trips from SAFIRÉ Voyages.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="More Services"
      title="Beyond the mountains"
      intro="Pakistan is where we began. These are the other journeys our travellers ask us to plan, with the same care."
    >
      <div className="services">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className={i % 2 ? "service service--sand" : "service"}>
            <div className="wrap service__inner">
              <div>
                <p className="eyebrow eyebrow--dark">
                  <Needle /> {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display">{s.title}</h2>
                <p className="service__line">{s.line}</p>
              </div>
              <div>
                <p className="service__body">{s.body}</p>
                <ul className="ticks">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a
                  className="btn btn--dark"
                  href={whatsappLink(`Hello SAFIRÉ, ${s.cta}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
