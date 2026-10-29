# SAFIRÉ Voyages: handoff for media generation

**Repo:** `Fakistan/all-other-tasks`, branch `claude/happy-keller-buw9ng`, folder `safire-voyages/`
**PR:** https://github.com/Fakistan/all-other-tasks/pull/1 (draft)
**Brand kit (Google Drive):** https://drive.google.com/drive/folders/1UPjwRE6kl8MDhxchhgxnDrVmeJdRbYOd

## Where things stand

- The Phase 1 website is built (Next.js 15 + Framer Motion): a home page with a full-screen slider of
  8 destinations, a Journeys list, a page per journey, More Services, About, Contact and Policies.
  `next build` passes.
- **Every photo is a placeholder** (flat colour gradients and drawn mountain shapes). The
  missing piece is real-looking destination imagery. That's this task.
- The cloud session that built the site couldn't generate or download images: the photo hosts are
  blocked there, Google Flow needs a logged-in browser, and the Higgsfield account has 0 credits.

## The task: generate the media in Google Flow

Use the prompts in **`MEDIA-PROMPTS.md`** in this folder. It has a Style block, a Composition
block and an Avoid block, plus an Image and a Video prompt for each destination.

### 1. Eight slider images (required)

| # | Folder name | Destination |
|---|---|---|
| 01 | `01_Hunza` | Passu Cones, Hunza |
| 02 | `02_Skardu` | Upper Kachura Lake, Skardu |
| 03 | `03_Fairy_Meadows` | Fairy Meadows and Nanga Parbat |
| 04 | `04_K2` | K2 from Concordia |
| 05 | `05_Swat` | Mahodand Lake, Swat |
| 06 | `06_Naran` | Lake Saif-ul-Malook and Malika Parbat |
| 07 | `07_Neelum` | Arang Kel, Neelum |
| 08 | `08_Chitral` | Tirich Mir above Chitral |

- **Prompt:** Style + Composition + the destination's Image prompt + Avoid. **Aspect 16:9**, highest resolution.
- **Composition is required.** The top half has to be open sky with the peaks rising into it, because
  the website puts a huge title in the sky and layers the mountains in front of it.
- **Pick the best of 4 results.** It must look like the real place: compare it with real photos of
  the landmark on Google Images and regenerate if the shape is wrong.
- Save it as `hero.jpg`.

### 2. Eight slider videos (optional)

- In Flow, use **Frames to Video** with the approved `hero.jpg` as the first frame and the
  destination's Video prompt. Clips are 8 s, 16:9.
- Save as `hero.mp4`. Sound doesn't matter, because the site plays videos muted.

### 3. Journey card images (nice to have)

- 2–3 per destination, **aspect 4:3**, using the "Journey card images" prompts in `MEDIA-PROMPTS.md`.
- Save as `card-1.jpg`, `card-2.jpg` and so on.

### Where to put them

In the brand-kit Drive folder above, create `Website_Media/` with the 8 subfolders from the
table, and put each destination's files in its folder:

```
Website_Media/01_Hunza/hero.jpg
Website_Media/01_Hunza/hero.mp4      (optional)
Website_Media/01_Hunza/card-1.jpg    (optional)
...
```

## After the media is ready (website integration)

Done in a Claude Code session on the repo. If you can also commit to the repo, you can do it there.

1. **Copy each image** to `public/destinations/<slug>/bg.webp`, converted to WebP at about 2400px wide.
   Slugs: `hunza`, `skardu`, `fairy-meadows`, `k2`, `swat`, `naran-kaghan`, `neelum`, `chitral`.
2. **Make the foreground cut-out:** remove the sky so only the mountains, people or boats remain,
   and save it as a transparent `fg.webp` at the same size.
3. **Turn the photos on:** in `content/destinations.ts`, add
   `photo: { bg: "/destinations/<slug>/bg.webp", fg: "/destinations/<slug>/fg.webp" }` to each
   destination. The slider then shows the photo with the title layered between the two images.
   Without `photo`, it falls back to the placeholders.
4. **Card images:** wire the card images into `components/Photo.tsx` callers (journey cards use `tone` today).
5. **Check and push:** run `npm run build`, check the slider in a browser, then commit and push to
   `claude/happy-keller-buw9ng`.

## Also still needed from the owner

- [ ] Real packages, prices and itineraries (the placeholders are in `content/journeys.ts`)
- [ ] Email and office address (`content/site.ts`, marked TODO)
- [ ] Licence numbers: DTS / Tourism Dept, and Ministry of Religious Affairs for Umrah
- [ ] The PKR→USD rate to display (`pkrPerUsd` in `content/site.ts`)
- [ ] Approve or edit the draft Policies page
- [ ] A Vercel preview: connect GitHub under Vercel Account Settings → Authentication, then link
      the repo with root directory `safire-voyages`
