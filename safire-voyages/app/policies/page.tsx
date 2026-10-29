import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Policies",
  description: "Booking, cancellation and privacy policies for SAFIRÉ Voyages.",
};

// DRAFT wording to be reviewed and finalised by the owner before launch.
export default function PoliciesPage() {
  return (
    <PageShell eyebrow="Policies" title="Booking, cancellation & privacy" intro="Draft — to be finalised before launch.">
      <section className="wrap prose prose--wide">
        <h2 className="h2" id="booking">Booking</h2>
        <p>
          A journey is confirmed once we have received the agreed deposit and sent written confirmation on WhatsApp or
          email. The balance is due before departure on the date stated in your confirmation. Prices are per person on
          a twin-sharing basis unless stated otherwise.
        </p>

        <h2 className="h2" id="cancellation">Cancellation & changes</h2>
        <p>
          Cancellation charges depend on how close to departure you cancel and on what has already been booked on your
          behalf (flights, hotels, permits). The exact terms are stated in your confirmation. Mountain roads and flights
          to the North depend on weather; where a day is lost to weather or road closures, we will re-plan the route
          with you, and any additional costs will be agreed before they are incurred.
        </p>

        <h2 className="h2" id="privacy">Privacy</h2>
        <p>
          We use the details you send us (name, phone number, travel dates and passport details where needed) only to
          plan and book your journey, and share them only with the hotels, airlines and authorities that require them.
          We do not sell your information. To ask us to delete your details, contact {site.email}.
        </p>
      </section>
    </PageShell>
  );
}
