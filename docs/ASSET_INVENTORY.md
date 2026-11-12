# Asset Inventory

**Project:** From Idea to MVP — InnovateHack+ 2.0 (GDG on Campus Xavier Ateneo)
**Speaker:** Arron Kian Parejas
**Inventory date:** November 11, 2026
**Source folder:** `assets/images/` (12 supplied files, all inspected visually)
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

### Optimized derivatives (`assets/images/optimized/`)

| File | Dimensions | Size | Why |
|---|---|---|---|
| `arron_profile.png` | 720 × 900 | 402 KB | The original is 1.36 MB at 4488 × 5608; the slide renders it at roughly 420 × 730 px. Aspect ratio preserved exactly (0.8). |
| `caffeine_hackathon.jpg` | 1600 × 1066 | 266 KB | Slightly smaller derivative for the large photo slots. |
| `skydev_hackathon.jpg` | 1600 × 1066 | 379 KB | 37 % lighter than the 605 KB original, at the size actually rendered. |

---

## 2. Placement

| File | Slides | Placement | Object-fit | Cropping |
|---|---|---|---|---|
| `gemini_argon.png` | 01, 09 | Hero panel (01), Gemini context panel (09) | `contain` | None |
| `arron_profile.png` | 02 | Main portrait, left column | `cover` | `object-position: 50% 28%` keeps the face in frame |
| `appbuilders_top1.png` | 02, 09 | Recognition strip (02) and DomoDomo context (09) | `contain` | None — the leaderboard must stay readable |
| `caffeine_hackathon.jpg` | 02, 03 | Full-width gallery tile (02), hero tile (03) | `cover` | Mild crop only |
| `bitpyre_hackathon.jpg` | 02, 03 | Gallery tile (02), second gallery tile (03) | `contain` | None — the printed yellow frame and caption are part of the artwork |
| `skydev_hackathon.jpg` | 02, 03 | Gallery tile (02), gallery tile (03) | `cover` | `object-position: 60% 50%` avoids cutting the sponsor banner |
| `helios_hf_downloadscount.png` | 02, 09, 10 | Gallery tile (02), model panel (09), referenced by text on 10 | `contain` | None; `object-position: top` keeps the model header visible |
| `flutter_logo.png` | 07, 08 | Decision-tree row mark (07), ecosystem card (08) | `contain` | Mark cropped from the wordmark on 07 only |
| `firebase_logo.png` | 07, 08 | Decision-tree row mark (07), ecosystem card (08) | `contain` | Flame cropped from the wordmark on 07 only |
| `google_ml_kit.png` | 07, 08, 10 | Decision-tree row mark (07), ecosystem card (08), architecture box (10) | `contain` | "M" glyph cropped from the wordmark on 07 and 10 |
| `Google_cloud.png` | 07, 08 | Decision-tree row mark (07), ecosystem card (08) | `contain` | Cloud cropped from the wordmark on 07 only |
| `Arron_qr_socials_links.png` | 15 | Contact card | `contain` | None |

**Every one of the 12 supplied files appears on at least one slide.** Ten of the
twelve appear on more than one.

---

## 3. How dark artwork is handled on a beige canvas

Four assets are dark (the portrait, the Gemini title card, the Helios
screenshot and the QR code). They are **not** recoloured or inverted. Instead
each is framed as a rounded "window" so the beige canvas stays dominant:

- `.photo` / `.shot` share one radius (`--radius: 28px`) and one shadow.
- The portrait is a black panel with a white dithered subject — high contrast
  against beige, so it reads as a deliberate inset.
- The Gemini title card keeps its own black field; it is placed on a white card
  on slide 01.
- The Helios screenshot is a dark UI capture shown with `contain` on a dark
  frame so no edge is cropped.
- The QR code is white-on-navy, which scans correctly and is shown on a white
  card. **Verified: it decodes to `https://www.linkedin.com/in/arron-parejas/`
  from the live slide.**

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
| DomoDomo-only app screenshots | Slides 02, 09 | The supplied AppBuilders collage, which contains the DomoDomo site and mockups |
| GDG on Campus group photographs | Slide 02 | Not replaced. Slide 02 uses the portrait, three hackathon photographs and the AppBuilders collage |
| Stitch / Material / Gemini / AI Studio / AI Edge / LiteRT logos | Slides 07, 08, 09, 10 | Text wordmarks in the Google four-colour system; Gemini and AI Edge use drawn marks |
| Certificate close-ups | Slide 02 | The AppBuilders collage carries the AppBuilders #1 and UPAMATE recognition |
| App UI screenshots | Slide 06 | A natively drawn design-system strip (swatches, type sample, button) — drawn, not a fabricated screenshot |

### Two items for the speaker to confirm

1. **`gemini_argon.png` says "Gemini 4 Argon".** The image is shown exactly as
   supplied and **no claim is made about that product name anywhere in the
   talk, the notes or the docs.** If the name is wrong, replace the file.
2. **Other people's faces.** `caffeine_hackathon.jpg` and `skydev_hackathon.jpg`
   show attendees and judges with faces fully visible, and
   `bitpyre_hackathon.jpg` shows the BitPyre team on a stage. These are
   public event photographs of the speaker's own hackathon history. They are
   used unmodified and uncropped. Swap or crop them if the organisers prefer.

---

## 6. Post-build usage report

Re-checked against the rendered presentation after the build. Every asset was
confirmed to load (`naturalWidth > 0`), to appear on its intended slide, and to
keep its aspect ratio.

| File | Exists | Path valid | Rendered on | Distorted? | Mis-cropped? | Adds context |
|---|---|---|---|---|---|---|
| `arron_profile.png` | Yes | Yes | 02 | No (4:5 preserved, `cover`) | No — face centred | Yes — the speaker's own portrait |
| `appbuilders_top1.png` | Yes | Yes | 02, 09 | No (2.798:1, `contain`) | No | Yes — DomoDomo ranked #1 on AppBuilders |
| `bitpyre_hackathon.jpg` | Yes | Yes | 02, 03 | No (1.193:1, `contain`) | No — printed frame preserved | Yes — AppCon 2024 Top 20 Teams |
| `caffeine_hackathon.jpg` | Yes | Yes | 02, 03 | No (3:2, `cover`) | No | Yes — a championship win |
| `skydev_hackathon.jpg` | Yes | Yes | 02, 03 | No (3:2, `cover`) | No — sponsor banner kept | Yes — a championship win |
| `helios_hf_downloadscount.png` | Yes | Yes | 02, 09 | No (1.766:1, `contain`) | No | Yes — the open-source model and its downloads |
| `gemini_argon.png` | Yes | Yes | 01, 09 | No (2.03:1, `contain`) | No | Yes — title card |
| `flutter_logo.png` | Yes | Yes | 07, 08 | No (mark cropped, aspect kept) | No | Yes — official logo |
| `firebase_logo.png` | Yes | Yes | 07, 08 | No (flame cropped, aspect kept) | No | Yes — official logo |
| `google_ml_kit.png` | Yes | Yes | 07, 08, 10 | No (glyph cropped, aspect kept) | No | Yes — official logo |
| `Google_cloud.png` | Yes | Yes | 07, 08 | No (cloud cropped, aspect kept) | No | Yes — official logo |
| `Arron_qr_socials_links.png` | Yes | Yes | 15 | No (1:1, `contain`) | No | Yes — scannable contact code |

**Result: 12 of 12 supplied assets used on at least one slide; 0 unused; 0
excluded as irrelevant or duplicate.**

The speaker's personal images appear only in professional contexts: the
portrait and the hackathon wins on slide 02, the hackathon mindset gallery on
slide 03, and the project work on slides 09 and 10.
