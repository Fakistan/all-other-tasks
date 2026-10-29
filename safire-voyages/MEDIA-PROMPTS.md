# SAFIRÉ Voyages — Google Flow prompts

Prompts for the home page slider (8 destinations) and the journey cards.

## How to use them in Flow

1. **Make the still image first.** Paste **Style** + **Composition** + the destination's
   **Image** prompt. Set aspect ratio **16:9 (landscape)**. Generate 4 and keep the best one.
2. **Turn that image into a video.** Choose **Frames to Video**, put the chosen image as the
   **first frame**, and paste the destination's **Video** prompt. Clips are 8 seconds. The sound
   doesn't matter because the website plays them muted.
3. **Check the result against real photos** of the place (search Google Images). AI sometimes
   gets famous peaks and lakes wrong. If customers know Passu Cones or Nanga Parbat, a wrong
   shape hurts trust. Regenerate until it looks right, and replace with real photos over time.
4. **Download the best image and video** (highest quality). Put them in Drive under
   `Website_Media/01_Hunza/` and so on. Name them `hero.jpg` / `hero.mp4`.

---

## Reusable blocks (paste these first, every time)

**Style**
> Photorealistic travel photograph, shot on a full-frame camera with a 24mm lens, golden-hour
> light, calm and premium mood, natural colours with warm highlights and cool blue shadows, soft
> atmospheric haze in the distance, uncluttered, editorial magazine quality. No text, no logos,
> no watermark, no frames or borders.

**Composition (slider images only)**
> Wide 16:9 landscape. The upper half of the frame is open sky with only soft clouds. The main
> mountains rise from the lower half into the sky, so their peaks break into the upper-middle
> of the frame. Horizon in the lower third. Leave the centre of the sky empty: a large title will
> be placed there.

**Avoid (add at the end)**
> Avoid: people facing the camera, crowds, cars, buildings in the foreground, oversaturated HDR
> look, fantasy or surreal elements, snow where it would not be, extra moons or suns.

---

## 01 · Hunza

**Image**
> The Passu Cones (Tupopdan) in Hunza, Gilgit-Baltistan, Pakistan: a row of sharp, jagged,
> cathedral-like granite spires along the Karakoram Highway. Autumn: golden poplar trees and
> apricot orchards along the valley floor, the Hunza river below. Evening sun lights the
> spires in warm gold. A single traveller in a dark jacket stands on a rock in the lower right,
> seen from behind, looking at the peaks.

**Video**
> Slow, steady drone shot pushing forward and slightly rising toward the Passu Cones. Golden
> poplar leaves move gently in the wind. Light clouds drift slowly. Calm, cinematic, no cuts.

## 02 · Skardu

**Image**
> Upper Kachura Lake near Skardu, Gilgit-Baltistan, Pakistan: a deep turquoise alpine lake with
> perfectly still water, surrounded by tall pine trees and steep, rugged brown-grey mountains with
> a little snow near the summits. Early morning light, faint mist on the water, mountain
> reflections in the lake.

**Video**
> Slow drone glide low over the still turquoise lake toward the mountains, the reflection
> shifting gently. Wisps of morning mist drift across the water. Calm, cinematic, no cuts.

## 03 · Fairy Meadows

**Image**
> Fairy Meadows, Gilgit-Baltistan, Pakistan: a green alpine meadow framed by tall pine trees,
> with a few small wooden log cabins at the edge. Behind, the enormous snow-and-ice north face of
> Nanga Parbat (Rakhiot face) fills the upper frame, glowing pink-gold at sunset. A lone hiker
> seen from behind walks on a path in the meadow.

**Video**
> Slow forward dolly across the meadow through the pine trees, revealing Nanga Parbat glowing at
> sunset. Grass sways gently, thin clouds move over the summit. Calm, cinematic, no cuts.

## 04 · K2 / Concordia

**Image**
> K2 seen from Concordia on the Baltoro Glacier, Karakoram, Pakistan: the huge, steep pyramid of
> K2 rising alone above a wide glacier of rocky moraine and ice. Two small orange expedition
> tents in the lower left. A trekker with a backpack and poles stands in the foreground, seen from
> behind, facing K2. Clear cold morning light.

**Video**
> Very slow push-in toward K2 from behind the trekker. Thin spindrift snow blows off the summit
> ridge. Tent fabric flutters slightly. Calm, epic, cinematic, no cuts.

## 05 · Swat

**Image**
> Mahodand Lake in Swat valley, Khyber Pakhtunkhwa, Pakistan: a calm blue-green lake in a wide
> valley, dense green pine forests on the slopes, snow-capped peaks behind. A small wooden
> rowing boat floats near the shore. Soft late-afternoon light.

**Video**
> Slow lateral drone move along the lakeshore, the wooden boat drifting gently, pine trees in the
> foreground passing slowly. Calm, cinematic, no cuts.

## 06 · Naran (Lake Saif-ul-Malook)

**Image**
> Lake Saif-ul-Malook near Naran, Kaghan Valley, Pakistan: an emerald alpine lake with the
> snow-capped pyramid peak of Malika Parbat rising directly behind it. Early-morning mist floats
> on the water. A small wooden boat on the near shore. Green slopes with patches of snow.

**Video**
> Slow push forward over the lake toward Malika Parbat as the morning mist lifts and drifts.
> Gentle ripples on the water. Calm, cinematic, no cuts.

## 07 · Neelum (Arang Kel)

**Image**
> Arang Kel village in Neelum Valley, Azad Kashmir, Pakistan: traditional wooden houses scattered
> across a bright green plateau, surrounded by pine forest. Layered blue-green Himalayan ridges
> and snowy peaks behind, the Neelum valley deep below. Soft evening light.

**Video**
> Slow aerial drift over the green plateau and the wooden houses, revealing the layered ridges
> beyond. Thin smoke rises from one chimney. Calm, cinematic, no cuts.

## 08 · Chitral

**Image**
> Tirich Mir, the highest peak of the Hindu Kush, rising huge and snow-covered above the Chitral
> valley, Khyber Pakhtunkhwa, Pakistan. Terraced green fields, poplar trees and the Chitral river
> in the valley below. Warm golden-hour light on the snow.

**Video**
> Slow drone rise from the poplar trees and river up toward Tirich Mir, the snow peak glowing
> gold. Light clouds move across the summit. Calm, cinematic, no cuts.

---

## Journey card images (3–4 per destination)

Use **Style** + one of these, replacing `[PLACE]` with the destination. Aspect ratio **4:3**.

- **Stay:** `A cosy boutique mountain guesthouse terrace in [PLACE], Pakistan, two empty chairs and a wooden table with green tea, valley view behind, warm evening light.`
- **Road:** `A winding mountain road through [PLACE], Pakistan, a single 4x4 jeep in the distance, dramatic peaks, late-afternoon light.`
- **Detail:** `Close-up of local detail in [PLACE], Pakistan: [apricots drying on a rooftop / hand-woven shawl / wooden carved window], soft natural light, shallow depth of field.`
- **Moment:** `A traveller seen from behind sitting on a rock above [PLACE], Pakistan, looking out at the valley, golden hour.`

---

## Checklist

- [ ] 8 slider images (`hero.jpg`), 16:9, the biggest size Flow allows
- [ ] 8 slider videos (`hero.mp4`), optional
- [ ] 3–4 card images per destination, 4:3
- [ ] Each one checked against real photos of the place
- [ ] Uploaded to Drive → `Website_Media/<number>_<place>/`
