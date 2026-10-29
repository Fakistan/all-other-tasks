"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/content/site";

// Builds a tidy WhatsApp message from the form, so every inquiry lands in
// the same inbox the team already answers. No server needed.
export default function InquiryForm({ subject = "" }: { subject?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Hello SAFIRÉ, I'd like to plan a journey.",
      "",
      `Name: ${f.get("name")}`,
      `Interested in: ${f.get("subject")}`,
      `Dates: ${f.get("dates") || "Flexible"}`,
      `Travellers: ${f.get("travellers")}`,
      `Budget: ${f.get("budget") || "Not sure yet"}`,
      `From: ${f.get("city") || "-"}`,
    ];
    const note = String(f.get("message") || "").trim();
    if (note) lines.push("", note);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="inquiry" onSubmit={onSubmit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Interested in
        <input name="subject" required defaultValue={subject} placeholder="e.g. Hunza in Autumn, Umrah, Turkey" />
      </label>
      <div className="inquiry__row">
        <label>
          Travel dates
          <input name="dates" placeholder="e.g. mid-October" />
        </label>
        <label>
          Travellers
          <input name="travellers" type="number" min={1} defaultValue={2} required />
        </label>
      </div>
      <div className="inquiry__row">
        <label>
          Budget per person
          <input name="budget" placeholder="Optional" />
        </label>
        <label>
          Travelling from
          <input name="city" placeholder="City / country" />
        </label>
      </div>
      <label>
        Anything else
        <textarea name="message" rows={4} placeholder="Pace, hotels, who's coming…" />
      </label>
      <button className="btn btn--dark" type="submit">
        Send on WhatsApp
      </button>
      <p className="inquiry__note" aria-live="polite">
        {sent
          ? "WhatsApp opened with your message — press send and we'll reply shortly."
          : `Opens WhatsApp with your details filled in. Prefer email? ${site.email}`}
      </p>
    </form>
  );
}
