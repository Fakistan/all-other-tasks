"use client";

import Link from "next/link";
import { useState } from "react";
import { destinations } from "@/content/destinations";
import { journeys } from "@/content/journeys";
import { Price } from "./Currency";
import Photo from "./Photo";

export default function JourneyGrid() {
  const [filter, setFilter] = useState<string>("all");
  const shown = filter === "all" ? journeys : journeys.filter((j) => j.destination === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by destination">
        <button aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          All
        </button>
        {destinations.map((d) => (
          <button key={d.slug} aria-pressed={filter === d.slug} onClick={() => setFilter(d.slug)}>
            {d.title}
          </button>
        ))}
      </div>
      <div className="grid grid--3">
        {shown.map((j) => {
          const d = destinations.find((x) => x.slug === j.destination)!;
          return (
            <Link key={j.slug} href={`/journeys/${j.slug}`} className="jcard">
              <Photo tone={d.tone} alt={j.name} className="jcard__img" />
              <p className="jcard__meta">
                {d.title} · {j.season}
              </p>
              <h3>{j.name}</h3>
              <p className="jcard__summary">{j.summary}</p>
              <p className="jcard__price">
                {j.days} days · from <Price pkr={j.fromPkr} />
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
