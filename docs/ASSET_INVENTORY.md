# Asset Inventory

**Project:** From Idea to MVP — InnovateHack+ 2.0 (GDG on Campus Xavier Ateneo)
**Speaker:** Arron Kian Parejas
**Inventory date:** November 12, 2026
**Source folder:** `assets/images/` (15 supplied files, all inspected visually)
**Machine-readable manifest:** `assets/asset-manifest.json`

Every supplied image is used. Nothing was generated to replace a supplied
photograph or screenshot. Originals are byte-for-byte untouched; where a lighter
derivative was needed it lives in `assets/images/optimized/`.

---

## 1. Supplied assets

| # | File | Type | Dimensions | Aspect | Size | Visual subject |
|---|---|---|---|---|---|---|
| 1 | `arron_profile.png` | PNG | 4488 × 5608 | 4:5 (0.800) | 1.36 MB | Dithered black-and-white studio portrait of the speaker, on a **black** background |
| 2 | `appbuilders_top1.png` | PNG | 2104 × 752 | 2.798:1 | 885 KB | Collage: AppBuilders community leaderboard with **DomoDomo ranked #1**, plus the DomoDomo site, UI mockups, the UPAMATE Builder's Table and a DomoDomo poster. White background |
| 3 | `bitpyre_hackathon.jpg` | JPEG | 940 × 788 | 1.193:1 | 100 KB | **AppCon 2024 Top 20 Teams** — the BitPyre team of Holy Angel University on stage, inside a printed yellow event frame with "BitPyre / Holy Angel University" and social handles |
| 4 | `caffeine_hackathon.jpg` | JPEG | 2048 × 1365 | 3:2 | 268 KB | Group on a dark stage at the **Caffeine hackathon** holding first-place certificates |
| 5 | `skydev_hackathon.jpg` | JPEG | 2048 × 1365 | 3:2 | 605 KB | **SkyDev "Automate the Future"** hackathon group holding certificates, blue stage lighting, sponsor banner along the bottom |
| 6 | `helios_hf_downloadscount.png` | PNG | 2048 × 1160 | 1.766:1 | 777 KB | **Helios** open-weight foundation model page on Hugging Face (dark theme) — 6B params, **LiteRT** and **ONNX** tags, **2,256 downloads last month** |
| 7 | `gemini_argon.png` | PNG | 2436 × 1200 | 2.03:1 | 155 KB | Title card: Gemini sparkle, **"Gemini 4 Argon"**, "Google Cloud", on black |
| 8 | `flutter_logo.png` | PNG | 953 × 272 | 3.504:1 | 20 KB | Flutter logo — blue chevron mark + wordmark, transparent background |
| 9 | `firebase_logo.png` | PNG | 640 × 640 | 1:1 | 19 KB | Firebase logo — flame mark above the wordmark, white background |
| 10 | `google_ml_kit.png` | PNG | 1600 × 468 | 3.419:1 | 57 KB | Google ML Kit logo — blue "M" glyph + wordmark, transparent background |
| 11 | `Google_cloud.png` | PNG | 225 × 225 | 1:1 | 9.4 KB | Google Cloud logo — multicolor cloud above the wordmark, white background. **Lowest-resolution asset in the set** |
| 12 | `Arron_qr_socials_links.png` | PNG | 400 × 400 | 1:1 | 15 KB | QR code, **white modules on a dark navy** (`#0B0F19`) background |
| 13 | `handbook_qr.png` | PNG | 400 × 400 | 1:1 | 35 KB | Panda-illustrated QR code for the **Free Developer Stack Handbook** |
| 14 | `howtell_stage.png` | PNG | 1920 × 1080 | 16:9 | 1.46 MB | The speaker on stage with a microphone at **How & Tell Meetup 2** |
| 15 | `appbuilders_group.png` | PNG | 1920 × 1080 | 16:9 | 1.72 MB | **AppBuildersPH** team on stage at How & Tell Meetup 2, holding trophies and event bags |

### Optimized derivatives (`assets/images/optimized/`)

| File | Dimensions | Size | Why |
|---|---|---|---|
| `arron_profile.png` | 720 × 900 | 402 KB | The original is 1.36 MB at 4488 × 5608; the slide renders it at roughly 420 × 730 px. Aspect ratio preserved exactly (0.8). |
| `caffeine_hackathon.jpg` | 1600 × 1066 | 266 KB | Slightly smaller derivative for the large photo slot. |
| `skydev_hackathon.jpg` | 1600 × 1066 | 379 KB | 37 % lighter than the 605 KB original, at the size actually rendered. |
| `howtell_stage.png` | 1280 × 720 | 853 KB | The cover renders it at roughly 300 × 375 px; the 1280 × 720 derivative keeps the speaker sharp without shipping the 1.46 MB original. |
| `appbuilders_group.png` | 1280 × 720 | 930 KB | The cover renders it at roughly 540 × 304 px; the 1280 × 720 derivative is lighter while preserving every face and trophy. |

---

## 2. Placement

Slide 3 is deliberately **typographic** — it has no photographs. The hackathon
images are gathered on slide 2 as one gallery, the cover collage sits on slide 1,
and the project screenshots sit on slide 9. Logos appear as full lockups on
slide 8 and as cropped marks inside the SVG decision tree (slide 7) and
architecture diagram (slide 10).

| File | Slides | Placement | Object-fit | Cropping |
|---|---|---|---|---|
| `arron_profile.png` | 01, 02 | Tilted portrait in the cover collage (01), main portrait (02) | `cover` | `object-position: 50% 28%` keeps the face in frame |
| `howtell_stage.png` | 01 | Tilted stage photo in the cover collage | `cover` | 4:5 portrait window, `object-position: 68% 42%` keeps the speaker centred |
| `appbuilders_group.png` | 01 | Front card of the cover collage | `cover` | None — 16:9 image shown whole, tilted −2.5° |
| `gemini_argon.png` | 09 | Gemini context panel | `contain` | None — sharp black frame |
| `appbuilders_top1.png` | 09 | DomoDomo context panel | `contain` | None — the leaderboard must stay readable |
| `caffeine_hackathon.jpg` | 02 | Gallery tile | `cover` | Mild crop only |
| `bitpyre_hackathon.jpg` | 02 | Gallery tile | `contain` | None — the printed yellow frame and caption are part of the artwork |
| `skydev_hackathon.jpg` | 02 | Gallery tile | `cover` | `object-position: 60% 50%` avoids cutting the sponsor banner |
| `helios_hf_downloadscount.png` | 02, 09 | Gallery tile (02), model panel (09) | `contain` | None; dark frame, `object-position: top` keeps the model header visible |
| `flutter_logo.png` | 07, 08, 10 | Decision-tree mark (07), toolkit card (08), architecture box (10) | `contain` | Mark cropped from the wordmark on 07 and 10 only |
| `firebase_logo.png` | 07, 08 | Decision-tree mark (07), toolkit card (08) | `contain` | Flame cropped from the wordmark on 07 only |
| `google_ml_kit.png` | 07, 08, 10 | Decision-tree mark (07), toolkit card (08), architecture box (10) | `contain` | "M" glyph cropped from the wordmark on 07 and 10 |
| `Google_cloud.png` | 07, 08 | Decision-tree mark (07), toolkit card (08) | `contain` | Cloud cropped from the wordmark on 07 only |
| `Arron_qr_socials_links.png` | 15 | Contact QR, beside the handbook QR | `contain` | None — 92 px square |
| `handbook_qr.png` | 15 | Handbook QR, same 92 px size as the socials QR | `contain` | None — 92 px square |

**Every one of the 15 supplied files appears on at least one slide.** The deck
renders 17 `<img>` elements (the portrait and Helios are each used twice) plus
six SVG `<image>` marks drawn from the four logo files.

---

## 3. How dark artwork is handled on a beige canvas

Four assets are dark (the portrait, the Gemini title card, the Helios
screenshot and the socials QR). They are **not** recoloured or inverted.
Instead each is framed as a sharp-cornered "window" so the beige canvas stays
dominant:

- `.photo` / `.shot` use `--radius: 0` — no rounded cards or shadows.
- The portrait is a black panel with a white dithered subject — high contrast
  against beige, so it reads as a deliberate inset.
- The Gemini title card is pure black (`#000`), so the image meets its frame
  edge-to-edge with no visible letterbox.
- The Helios screenshot sits in a dark frame (`#0C0F18`) matched to its own
  background, so the dark UI capture shows no white bands.
- The socials QR is white-on-navy and scans correctly inside a thin paper frame.
- The handbook QR is dark-on-paper and sits in a matching paper frame.
  **Verified: it decodes to
  `https://docs.google.com/document/d/1hxBY6auIP5fya0ir9FhvKsGnrCcVYjRnaIrMpx8I9Nw/edit?usp=sharing`
  and the document title is "Free Developer Stack Handbook".**

---

## 4. Product marks inside the diagrams

The decision tree (slide 07) and the architecture diagram (slide 10) pair every
supplied logo with a text label. Because each logo file contains both a mark
and a wordmark, showing both would duplicate the name and overlap. The marks
are therefore cropped from the source files with a nested SVG `viewBox`:

| Mark | Source file | Crop (x, y, w, h) in source pixels | Used on |
|---|---|---|---|
| Flutter chevron | `flutter_logo.png` | 4, 4, 214, 264 | 07, 10 |
| Firebase flame | `firebase_logo.png` | 211, 117, 219, 273 | 07 |
| ML Kit "M" | `google_ml_kit.png` | 0, 54, 496, 360 | 07, 10 |
| Google Cloud cloud | `Google_cloud.png` | 52, 41, 121, 98 | 07 |

The crop rectangles were measured from the actual pixel data of the supplied
files (see `tools/logo-bounds.mjs` and `tools/logo-crop.mjs`), not estimated.
No logo file was edited.

On slide 08 the square white-backed logos (Firebase, Google Cloud) are blended
with `mix-blend-mode: multiply`, so their white backgrounds disappear into the
paper without altering the files.

Where no supplied logo exists — Gemini, Google AI Studio, Firebase AI Logic,
Google AI Edge, AI Edge Gallery, LiteRT, Vertex AI, BigQuery, Cloud Run,
Stitch, Material Design, Google Fonts — the slide uses a **text wordmark**, not
an invented graphic. Gemini and Google AI Edge are represented by a four-colour
sparkle mark and a green dot drawn in SVG, matching the Gemini and Google
visual language.

---

## 5. Gaps — assets that were expected but do not exist

`assets/images/` contains **no** file for the following. Nothing was fabricated
to fill these slots.

| Expected asset | Where it would have gone | What is shown instead |
|---|---|---|
| EasyLense computer-vision screenshots | Slide 10 | The ML Kit logo in the on-device zone, plus a text reference to the Helios LiteRT tag |
| DomoDomo-only app screenshots | Slide 09 | The supplied AppBuilders collage, which contains the DomoDomo site and mockups |
| GDG on Campus group photographs | Slide 01 | The supplied AppBuildersPH group photo is the front card of the cover collage; no invented group imagery |
| Stitch / Material / Gemini / AI Studio / AI Edge / LiteRT logos | Slides 07, 08, 09, 10 | Text wordmarks in the Google four-colour system; Gemini and AI Edge use drawn marks |
| Certificate close-ups | Slide 02 | The AppBuilders collage carries the AppBuilders #1 recognition |
| App UI screenshots | Slide 06 | A natively drawn type specimen (display glyph, sample line, swatches, button) — drawn, not a fabricated screenshot |

### Two items for the speaker to confirm

1. **`gemini_argon.png` says "Gemini 4 Argon".** The image is shown exactly as
   supplied and **no claim is made about that product name anywhere in the
   talk, the notes or the docs.** If the name is wrong, replace the file.
2. **Other people's faces.** `caffeine_hackathon.jpg`, `skydev_hackathon.jpg`
   and `appbuilders_group.png` show attendees and teammates with faces fully
   visible, and `bitpyre_hackathon.jpg` shows the BitPyre team on a stage. These
   are public event photographs of the speaker's own hackathon and community
   history. They are used unmodified; the cover collage crops only
   `howtell_stage.png` to a portrait window. Swap or crop them if the organisers
   prefer.

---

## 6. Post-build usage report

Re-checked against the rendered presentation after the redesign. Every asset
was confirmed to load (`naturalWidth > 0`), to appear on its intended slide,
and to keep its aspect ratio.

| File | Exists | Path valid | Rendered on | Distorted? | Mis-cropped? | Adds context |
|---|---|---|---|---|---|---|
| `arron_profile.png` | Yes | Yes | 01, 02 | No (4:5 preserved, `cover`) | No — face centred | Yes — the speaker's own portrait |
| `howtell_stage.png` | Yes | Yes | 01 | No (16:9 source, 4:5 window) | No — speaker centred | Yes — the speaker on stage at How & Tell Meetup 2 |
| `appbuilders_group.png` | Yes | Yes | 01 | No (16:9 preserved) | No — whole frame shown | Yes — the AppBuildersPH community |
| `appbuilders_top1.png` | Yes | Yes | 09 | No (2.798:1, `contain`) | No | Yes — DomoDomo ranked #1 on AppBuilders |
| `bitpyre_hackathon.jpg` | Yes | Yes | 02 | No (1.193:1, `contain`) | No — printed frame preserved | Yes — AppCon 2024 Top 20 Teams |
| `caffeine_hackathon.jpg` | Yes | Yes | 02 | No (3:2, `cover`) | No | Yes — a championship win |
| `skydev_hackathon.jpg` | Yes | Yes | 02 | No (3:2, `cover`) | No — sponsor banner kept | Yes — a championship win |
| `helios_hf_downloadscount.png` | Yes | Yes | 02, 09 | No (1.766:1, `contain`) | No | Yes — the open-source model and its downloads |
| `gemini_argon.png` | Yes | Yes | 09 | No (2.03:1, `contain`) | No | Yes — title card |
| `flutter_logo.png` | Yes | Yes | 07, 08, 10 | No (mark cropped, aspect kept) | No | Yes — official logo |
| `firebase_logo.png` | Yes | Yes | 07, 08 | No (flame cropped, aspect kept) | No | Yes — official logo |
| `google_ml_kit.png` | Yes | Yes | 07, 08, 10 | No (glyph cropped, aspect kept) | No | Yes — official logo |
| `Google_cloud.png` | Yes | Yes | 07, 08 | No (cloud cropped, aspect kept) | No | Yes — official logo |
| `Arron_qr_socials_links.png` | Yes | Yes | 15 | No (1:1, `contain`) | No | Yes — scannable contact code, 92 px |
| `handbook_qr.png` | Yes | Yes | 15 | No (1:1, `contain`) | No | Yes — scannable handbook code, 92 px |

**Result: 15 of 15 supplied assets used on at least one slide; 0 unused; 0
excluded as irrelevant or duplicate.**

The speaker's personal images appear only in professional contexts: the cover
collage and hackathon wins on slides 01–02, and the project work on slide 09.
