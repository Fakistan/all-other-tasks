import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageShell from "@/components/PageShell";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan a journey with SAFIRÉ Voyages on WhatsApp, phone or email.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us where you'd like to go"
      intro="Send a few details and we'll reply on WhatsApp with ideas, dates and a price."
    >
      <section className="wrap contact">
        <InquiryForm />
        <div className="contact__details">
          <div>
            <h2 className="h2">WhatsApp</h2>
            <a href={whatsappLink("Hello SAFIRÉ")} target="_blank" rel="noopener noreferrer">
              {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <h2 className="h2">Phone</h2>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </div>
          <div>
            <h2 className="h2">Email</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <h2 className="h2">Instagram</h2>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              {site.handle}
            </a>
          </div>
          <div>
            <h2 className="h2">Office</h2>
            <p>{site.address}</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
