# SAFIRÉ VOYAGES — Website Plan

Status: planning complete, ready to build Phase 1.
Source of brand rules: *SAFIRÉ Brand Guide v1* (Google Drive, Oct 2026).

## 1. Goal

An inquiry website (not online booking). Every page should move a visitor toward a
WhatsApp chat, a call, or an inquiry form, and make the brand feel calm, premium and
trustworthy.

## 2. Decisions

| Topic | Decision |
|---|---|
| Positioning | **Pakistan first.** Lead with journeys across Pakistan (North, cities). Umrah/Hajj, international tours, flights & visas live under "More Services" in the same calm style. |
| Audience | Pakistan + overseas visitors. Prices shown in PKR with a USD toggle. |
| Language | English at launch. Urdu later (font already chosen: Noto Nastaliq Urdu). |
| Content | Placeholder packages and free stock photos for v1; replaced with real ones later. |
| Domain | `safire.pk` |
| Contact | WhatsApp 0346-2717484 · @safire.pk |

## 3. Brand system

**Colours**

| Name | Hex | Use |
|---|---|---|
| Sapphire | `#0F2A5C` | Primary: headings, header, buttons |
| Gold | `#D4AF5A` | Accent only: needle detail, dividers, hover |
| Ivory | `#F4EFE4` | Main background |
| Sand | `#E8DCC6` | Secondary background / alternating sections |
| Charcoal | `#141414` | Body text |

**Fonts:** Bodoni Moda (headings, Medium/SemiBold, never below ~12px), Jost (body, labels,
captions), Noto Nastaliq Urdu (later). All are on Google Fonts.

**Logo:** sapphire logo on ivory/sand, ivory logo on sapphire or dark photos. Clear space =
height of the "S". Never stretch, recolour or add effects. v1 uses the kit PNGs. A vector
(SVG) redraw is still pending per the guide.

**Look & feel:** lots of empty space, few words, golden-hour wide landscapes, people seen
from behind. The gold compass needle is a recurring small detail. Tone is quiet and
confident ("Hunza, in its quietest season."). Avoid shouting ("BEST PACKAGE!!! BOOK NOW").

## 4. Sitemap

| Page | Contents |
|---|---|
| **Home** | Full-bleed hero photo + logo + "Voyages Across Pakistan"; featured journeys; regions (North, Cities, …); why SAFIRÉ; guest words; More Services strip; WhatsApp CTA |
| **Journeys** | All Pakistan packages, filter by region/duration |
| **Journey detail** | Hero photo, 2–3 line intro, day-by-day itinerary, included / not included, price (PKR/USD), dates, "Plan this journey on WhatsApp" |
| **More Services** | Umrah & Hajj (tiers, hotel distance, group dates) · International tours · Flights & visas (countries, documents, timelines) |
| **Custom Journey** | Form: destination, dates, travellers, budget, interests |
| **About** | Story, team, licences (DTS / Tourism Dept., Ministry of Religious Affairs for Umrah, IATA if any) |
| **Contact** | WhatsApp, phone, email, address, map, form |
| **Legal** | Terms, cancellation/refund, privacy |

## 5. Home hero: full-screen destination slider

Based on the owner's reference video (big place names, the subject layered in front of the
letters, vertical push transitions).

**Slides (8):**

| # | Destination | Shot idea (foreground layer in front of the title) |
|---|---|---|
| 1 | Hunza | Passu Cones ridge cutting through "HUNZA" |
| 2 | Skardu | Shangrila / Upper Kachura lake, mountain line in front |
| 3 | Fairy Meadows | Nanga Parbat peak rising through "FAIRY MEADOWS" |
| 4 | K2 / Concordia | Karakoram peaks + a trekker seen from behind |
| 5 | Swat | Kalam / Mahodand pines in front of the title |
| 6 | Naran-Kaghan | Saif-ul-Malook shoreline / boat in front |
| 7 | Neelum | Arang Kel wooden houses across the title |
| 8 | Chitral / Kalash | Kalash valley houses or a figure from behind |

**Behaviour:**

1. **Layered title:** each slide = background photo → huge title in Bodoni Moda (Ivory) →
   foreground cutout PNG on top, so peaks/people overlap the letters.
2. **Vertical push transition:** the next slide slides up from the bottom and pushes the current
   one out (~900ms, eased). Triggered by scroll wheel, swipe, arrow keys or the side indicator.
3. **Ambient colour:** the page frame/background eases to each slide's tone (e.g. glacier blue,
   meadow green, dusk sand) and stays within the brand palette mood.
4. **Explore state:** clicking "Explore" shrinks the title to the top-left, fades in a 2–3 line
   description, and slides in a row of photo cards (journeys for that region) from the right.
5. **Gold needle** used as the slide indicator / progress marker.
6. **Mobile:** swipe up/down; cards become a horizontal swipe row. Respect
   `prefers-reduced-motion` (crossfade instead of push).

**Assets:** free-licence stock photos (Unsplash/Pexels) per slide; foreground cutouts made with
AI background removal; all images as optimised WebP/AVIF. Owner photos can replace them later.

Tech: Framer Motion (or GSAP) for transitions inside the Next.js app.

## 6. Features

- Floating WhatsApp button on every page, with a pre-filled message per package
  (`https://wa.me/923462717484?text=…`).
- Inquiry forms delivered to email (and optionally WhatsApp).
- PKR / USD price toggle.
- Packages as simple content files (one file per journey) so new ones need no coding.
- Mobile-first, fast (optimised images), accessible.
- SEO: page titles/descriptions, Open Graph images, sitemap, Google Business Profile.
- Analytics (Vercel Analytics or GA4).

## 7. Tech

- **Next.js** (static export where possible) + Tailwind CSS with the brand colours as tokens.
- Packages stored as Markdown/MDX or JSON in `content/journeys/`.
- Forms: a lightweight form service or a small serverless route that emails the lead.
- Hosting on **Vercel**; `safire.pk` DNS pointed to Vercel, free HTTPS.

## 8. Phases

1. **Phase 1 (MVP):** Home (with the destination slider hero), Journeys + detail, More Services (one page), Contact, WhatsApp
   button, inquiry form, legal pages. Deploy to Vercel preview.
2. **Phase 2:** Custom Journey form, separate Umrah / Visa pages, guest reviews, blog for
   SEO, connect `safire.pk`.
3. **Phase 3 (optional):** Urdu version, online deposits/payments, admin panel or CMS.

## 9. Still needed from the owner

- [ ] Real packages: names, prices, itineraries, dates (placeholders until then)
- [ ] Real trip photos (stock until then)
- [ ] Email address and office address for the Contact page
- [ ] Licence numbers for the About page / footer
- [ ] Where `safire.pk` is registered (PKNIC reseller) to point DNS
- [ ] Vector logo (SVG) once redrawn
