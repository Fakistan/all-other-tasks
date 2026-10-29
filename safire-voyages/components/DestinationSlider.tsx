"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Destination } from "@/content/destinations";
import { journeysFor } from "@/content/journeys";
import { whatsappLink } from "@/content/site";
import { Price } from "./Currency";
import MobileMenu from "./MobileMenu";
import Needle from "./Needle";
import { navLinks } from "./SiteHeader";

const EASE = [0.76, 0, 0.24, 1] as const; // slow in, slow out — a page being turned
const SLIDE_MS = 1000;

function slideVariants(reduced: boolean): Variants {
  if (reduced) {
    return {
      enter: { opacity: 0 },
      center: { opacity: 1, transition: { duration: 0.4 } },
      exit: { opacity: 0, transition: { duration: 0.4 } },
    };
  }
  // The incoming slide pushes up over the outgoing one, which drifts and dims.
  return {
    enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", zIndex: 2 }),
    center: { y: "0%", zIndex: 2, transition: { duration: SLIDE_MS / 1000, ease: EASE } },
    exit: (dir: number) => ({
      y: dir > 0 ? "-28%" : "28%",
      zIndex: 1,
      filter: "brightness(0.55)",
      transition: { duration: SLIDE_MS / 1000, ease: EASE },
    }),
  };
}

export default function DestinationSlider({ destinations }: { destinations: Destination[] }) {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [exploring, setExploring] = useState(false);
  const locked = useRef(false);
  const frameRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;

  const current = destinations[index];
  const count = destinations.length;

  const go = useCallback(
    (next: number) => {
      if (locked.current || exploring) return;
      const target = (next + count) % count;
      if (target === index) return;
      locked.current = true;
      setSlide([target, next > index ? 1 : -1]);
      window.setTimeout(() => (locked.current = false), SLIDE_MS + 100);
    },
    [count, exploring, index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExploring(false);
      if (exploring) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") go(index + 1);
      if (e.key === "ArrowUp" || e.key === "PageUp") go(index - 1);
      if (e.key === "Enter") setExploring(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [exploring, go, index]);

  // The slider owns vertical scrolling while the page is at the top. Past the
  // last slide (or with the explore view open) the page scrolls normally.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const owns = (dir: number) =>
      !exploring && window.scrollY < 4 && !(dir > 0 && index === count - 1) && !(dir < 0 && index === 0);

    const onWheel = (e: WheelEvent) => {
      const dir = Math.sign(e.deltaY);
      if (!dir || !owns(dir)) return;
      e.preventDefault();
      if (Math.abs(e.deltaY) >= 30) go(index + dir);
    };

    let startY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (startY === null) return;
      const dy = startY - e.touches[0].clientY;
      if (Math.abs(dy) > 6 && owns(Math.sign(dy))) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (startY === null) return;
      const dy = startY - e.changedTouches[0].clientY;
      startY = null;
      if (Math.abs(dy) > 50 && owns(Math.sign(dy))) go(index + Math.sign(dy));
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [count, exploring, go, index]);

  return (
    <motion.section
      ref={frameRef}
      className="frame"
      animate={{ backgroundColor: current.tone }}
      transition={{ duration: SLIDE_MS / 1000, ease: EASE }}
      aria-roledescription="carousel"
      aria-label="Destinations across Pakistan"
    >
      <div className="stage">
        <AnimatePresence initial={false} custom={direction}>
          <motion.article
            key={current.slug}
            className="slide"
            custom={direction}
            variants={slideVariants(reduced)}
            initial="enter"
            animate="center"
            exit="exit"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${current.title}`}
          >
            <Slide destination={current} exploring={exploring} reduced={reduced} />
          </motion.article>
        </AnimatePresence>

        <header className="topbar">
          <Link href="/" className="brand" aria-label="SAFIRÉ Voyages home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/wordmark-ivory.png" alt="SAFIRÉ" />
          </Link>
          <nav className="nav" aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <MobileMenu light />
        </header>

        <AnimatePresence>
          {!exploring && (
            <motion.div
              className="hero-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.slug}
                  className="tagline"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: reduced ? 0 : 0.55 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  {current.line}
                </motion.p>
              </AnimatePresence>
              <button className="btn" onClick={() => setExploring(true)}>
                Explore {current.title}
              </button>

              <ol className="indicator" aria-label="Choose destination">
                {destinations.map((d, i) => (
                  <li key={d.slug}>
                    <button
                      onClick={() => go(i)}
                      aria-label={d.title}
                      aria-current={i === index ? "true" : undefined}
                    >
                      {i === index ? <Needle /> : <span className="tick" />}
                    </button>
                  </li>
                ))}
              </ol>

              <p className="counter">
                <span>{String(index + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
              </p>
              <p className="hint">{index === count - 1 ? "Scroll to continue" : "Scroll to travel"}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {exploring && (
            <ExplorePanel
              key={current.slug}
              destination={current}
              onClose={() => setExploring(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function Slide({
  destination: d,
  exploring,
  reduced,
}: {
  destination: Destination;
  exploring: boolean;
  reduced: boolean;
}) {
  const chars = d.title.replace(/\s/g, "").length;
  const fallback = {
    background: `radial-gradient(120% 90% at 70% 15%, color-mix(in srgb, ${d.tone} 55%, #F4EFE4) 0%, ${d.tone} 45%, color-mix(in srgb, ${d.tone} 45%, #0F2A5C) 100%)`,
  };

  return (
    <>
      <motion.div
        className="layer bg"
        style={d.photo ? { backgroundImage: `url(${d.photo.bg})` } : fallback}
        initial={reduced ? false : { scale: 1.12 }}
        animate={{ scale: exploring ? 1.04 : 1, transition: { duration: 1.6, ease: EASE } }}
      />
      {!d.photo && <MountainPlaceholder />}

      <motion.h2
        layout={!reduced}
        className={exploring ? "title title--small" : "title"}
        style={{ ["--chars" as string]: chars }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {d.title}
      </motion.h2>

      {d.photo?.fg && (
        <motion.div
          className="layer fg"
          style={{ backgroundImage: `url(${d.photo.fg})` }}
          initial={reduced ? false : { scale: 1.06, y: 20 }}
          animate={{
            scale: exploring ? 1.02 : 1,
            y: 0,
            opacity: exploring ? 0.35 : 1,
            transition: { duration: 1.4, ease: EASE },
          }}
        />
      )}
      {!d.photo && <MountainPlaceholder front />}
      <div className="layer shade" data-exploring={exploring} />
    </>
  );
}

// Stand-in silhouettes so the layered-title effect is visible before real
// photos and cut-outs are added.
function MountainPlaceholder({ front = false }: { front?: boolean }) {
  return (
    <svg
      className={front ? "layer ph ph--front" : "layer ph"}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {front ? (
        <path
          d="M0 900V560l140-90 90 40 160-190 120 120 90-60 170 170 110-80 150 110 130-170 150 140 120-60 170 150v280Z"
          fill="rgba(15,42,92,.78)"
        />
      ) : (
        <path
          d="M0 900V430l210-150 140 90 230-230 150 160 140-110 210 210 160-120 180 150 180-120v590Z"
          fill="rgba(244,239,228,.16)"
        />
      )}
    </svg>
  );
}

function ExplorePanel({ destination: d, onClose }: { destination: Destination; onClose: () => void }) {
  return (
    <motion.div
      className="explore"
      initial="hidden"
      animate="shown"
      exit="hidden"
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } } }}
    >
      <motion.div
        className="explore__text"
        variants={{
          hidden: { opacity: 0, y: 16, transition: { duration: 0.2 } },
          shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
        }}
      >
        <p className="eyebrow">
          <Needle /> {d.region}
        </p>
        <p className="about">{d.about}</p>
        <div className="explore__actions">
          <a
            className="btn"
            href={whatsappLink(`Hello SAFIRÉ, I'd like to plan a journey to ${d.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan this journey
          </a>
          <button className="link" onClick={onClose}>
            ← All destinations
          </button>
        </div>
      </motion.div>

      <div className="cards">
        {journeysFor(d.slug).map((j) => (
          <MotionLink
            key={j.slug}
            className="card"
            href={`/journeys/${j.slug}`}
            variants={{
              hidden: { opacity: 0, x: 120, transition: { duration: 0.25 } },
              shown: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
            }}
          >
            <div className="card__img" style={{ background: d.tone }} />
            <div className="card__body">
              <h3>{j.name}</h3>
              <p>
                {j.days} days · from <Price pkr={j.fromPkr} />
              </p>
            </div>
          </MotionLink>
        ))}
      </div>
    </motion.div>
  );
}

const MotionLink = motion.create(Link);
