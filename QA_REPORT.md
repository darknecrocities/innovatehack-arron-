# QA Report — From Idea to MVP

**Project:** From Idea to MVP — InnovateHack+ 2.0 (GDG on Campus Xavier Ateneo)
**Speaker:** Arron Kian Parejas
**QA date:** November 12, 2026
**Build under test:** `/Users/arronkianparejas/xavier` (typographic redesign working tree)

**Method.** Every check below was executed against the running deck with
headless Chromium via Playwright, not reasoned about. The automated suite is
`tools/qa.mjs` (`npm run qa`); the responsive sweep is
`tools/responsive-test.mjs`; the link check is `tools/link-check.mjs`. Screens
were captured at each viewport and inspected by eye, in screen media and print
media. The `file://` path was tested by launching `index.html` and
`standalone.html` directly from disk.

**Result: 48 / 48 automated checks passed. 8 / 8 viewport sizes passed.
23 external link anchors (19 unique URLs) on the slides; 22 URLs checked by the
link script, 21 reachable. 15-page PDF generated, inspected, and confirmed to
show the CLEAR framework fully revealed. `standalone.html` verified over
`file://` with 15 slides, 17 images, zero console errors and no overflow.**

---

## 1. Automated test results — `npm run qa`

| # | Test | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | Deck contains exactly 15 slides | 15 | 15 | **PASS** |
| 2 | Slide ids are unique and sequential | 15 unique | 15 unique | **PASS** |
| 3 | `Home` jumps to slide 1 | 0 | 0 | **PASS** |
| 4 | `→` advances one slide | 1 | 1 | **PASS** |
| 5 | `←` goes back one slide | 0 | 0 | **PASS** |
| 6 | `Space` advances one slide | 1 | 1 | **PASS** |
| 7 | `End` jumps to the last slide | 14 | 14 | **PASS** |
| 8 | `→` on the last slide does not wrap | 14 | 14 | **PASS** |
| 9 | `←` on the first slide does not wrap | 0 | 0 | **PASS** |
| 10 | Hash deep link (`#/9`) opens slide 9 | 8 | 8 | **PASS** |
| 11 | `O` opens the slide overview | open | open | **PASS** |
| 12 | Overview lists all 15 slides | 15 | 15 | **PASS** |
| 13 | `Esc` closes the overview | closed | closed | **PASS** |
| 14 | `N` opens the notes for the current slide | slide 4 content | slide 4 content (case-insensitive header) | **PASS** |
| 15 | Notes contain a main message and a transition | both | both | **PASS** |
| 16 | MVP board: "Suggested split" distributes all 10 features | 3,3,2,2 | 3,3,2,2 (total 10) | **PASS** |
| 17 | MVP board: the move-to menu updates the counts | 2,3,2,3 | 2,3,2,3 | **PASS** |
| 18 | MVP board: drag and drop moves a feature into a bucket | Must = 1 | 1,0,0,0 | **PASS** |
| 19 | MVP board: "Clear board" empties every bucket | 0,0,0,0 | 0,0,0,0 | **PASS** |
| 20 | MVP board: "Clear board" returns all 10 to the pool | 10 | 10 | **PASS** |
| 21 | `S` opens the stack selector | open | open | **PASS** |
| 22 | Selector: mobile + cloud + GenAI + simple → Gemini on Firebase | Gemini path | Gemini via Firebase AI Logic | **PASS** |
| 23 | Selector: offline + traditional ML → ML Kit and LiteRT | ML Kit, then LiteRT | ML Kit, then LiteRT | **PASS** |
| 24 | Selector: advanced backend → Google Cloud with Cloud Run | Cloud Run | Google Cloud with Cloud Run | **PASS** |
| 25 | Selector: offline + web warns about the hybrid fallback | hybrid warning | hybrid with a cloud fallback | **PASS** |
| 26 | `Esc` closes the stack selector | closed | closed | **PASS** |
| 27 | CLEAR starts fully hidden | 0 | 0 | **PASS** |
| 28 | `R` reveals the next letter | 1 | 1 | **PASS** |
| 29 | `→` reveals the next letter | 2 | 2 | **PASS** |
| 30 | CLEAR assembles the prompt as it is revealed | Context + Limitations | both present | **PASS** |
| 31 | CLEAR "Show all" reveals all five letters | 5 | 5 | **PASS** |
| 32 | The assembled prompt contains all five sections | 5 sections | 5 sections | **PASS** |
| 33 | CLEAR Reset hides every letter again | 0 | 0 | **PASS** |
| 34 | Every image loads | 17 images, 0 broken | 17 of 17 loaded | **PASS** |
| 35 | Every image has alt text | 0 missing | 0 missing | **PASS** |
| 36 | Image count | 17 `<img>` elements (15 files, 2 re-used) | 17 | **PASS** |
| 37 | Diagram logos render inside the SVG | all sized | all sized | **PASS** |
| 38 | Diagrams reference the supplied logo files | 4 logo files | 4 logo files | **PASS** |
| 39 | Every external link opens in a new tab with `rel=noopener` | 23 links, 0 violations | 23 of 23 valid | **PASS** |
| 40 | No tracking parameters on any link | 0 | 0 | **PASS** |
| 41 | Slide counter is an `aria-live` region | polite | polite | **PASS** |
| 42 | The active slide has an accessible label | present | present | **PASS** |
| 43 | Inactive slides are `aria-hidden` | 14 | 14 | **PASS** |
| 44 | Inactive slides are `inert` | 14 | 14 | **PASS** |
| 45 | Reduced motion disables transitions | ~0 s | 0.00001 s | **PASS** |
| 46 | Focus moves into an open overlay | yes | yes | **PASS** |
| 47 | No console errors during the whole run | 0 | 0 | **PASS** |
| 48 | No failed or 4xx/5xx requests | 0 | 0 | **PASS** |

---

## 2. Responsive layout — `npm run qa:responsive`

The stage is a fixed 1920 × 1080 canvas scaled with `transform: scale()`. Each
row below was produced by walking all 15 slides at that viewport and checking
three things: the stage aspect ratio is 16:9, the page has no horizontal or
vertical overflow, and no element extends beyond the stage bounds.

| Viewport | Rendered stage | Aspect | Overflow | Clipped elements | Status |
|---|---|---|---|---|---|
| 1920 × 1080 | 1920 × 1080 | 16:9 | none | none | **PASS** |
| 1600 × 900 | 1600 × 900 | 16:9 | none | none | **PASS** |
| 1440 × 900 | 1440 × 810 | 16:9 | none | none | **PASS** |
| 1366 × 768 | 1365 × 768 | 16:9 | none | none | **PASS** |
| 1280 × 800 | 1280 × 720 | 16:9 | none | none | **PASS** |
| 1024 × 768 | 1024 × 576 | 16:9 | none | none | **PASS** |
| 800 × 600 | 800 × 450 | 16:9 | none | none | **PASS** |
| 640 × 480 | 640 × 360 | 16:9 | none | none | **PASS** |

Screenshots at 1920 × 1080, 1366 × 768 and 1440 × 900 were inspected
individually for every slide. Body copy stays at its designed size on a
1920-canvas, so readability in a Google Meet screen share is unaffected by the
downscale.

---

## 3. External link check — `tools/link-check.mjs`

The slides contain **23 external anchors** pointing at **19 unique URLs**
(several docs are linked from both slide 08 and the closing slide). The link
script checks the 22 documentation/contact URLs it tracks; the remaining
anchor is a duplicate. Results:

| URL | Status |
|---|---|
| stitch.withgoogle.com | 200 |
| m3.material.io | 200 |
| fonts.google.com | 200 |
| ai.google.dev/gemini-api/docs | 200 |
| aistudio.google.com | 200 |
| firebase.google.com/docs/ai-logic | 200 |
| developers.google.com/ml-kit | 200 |
| ai.google.dev/edge | 200 |
| github.com/google-ai-edge/gallery | 200 |
| docs.flutter.dev | 200 |
| firebase.google.com/docs | 200 |
| cloud.google.com/run/docs | 200 |
| cloud.google.com/vertex-ai/docs | 200 |
| cloud.google.com/bigquery/docs | 200 |
| ai.google.dev/gemini-api/docs/function-calling | 200 |
| ai.google.dev/gemini-api/docs/structured-output | 200 |
| ai.google.dev/gemini-api/docs/vision | 200 |
| **docs.google.com/.../Free Developer Stack Handbook** | **200** |
| **linkedin.com/in/arron-parejas/** | **999 — see note** |
| github.com/darknecrocities/Helios | 200 |
| huggingface.co/Darknecrocities/Helios | 200 |
| domodomo.site | 200 |

**Note on the LinkedIn result.** LinkedIn returns the non-standard status `999`
to automated clients (confirmed with both `curl` and headless Chromium) — it is
LinkedIn's anti-scraping response, not a broken link. The URL is not a guess:
it is the payload of the speaker's own supplied QR code, decoded during QA with
`jsQR` (`tools/verify-qr.mjs` → `https://www.linkedin.com/in/arron-parejas/`).
Because automated verification could not confirm it, the same URL is also
written out as a text link beside the QR code on slide 15, so the contact
detail works even if the code is not scanned.

The handbook URL was added to the link script and returned **200**. Its
document title was verified as **Free Developer Stack Handbook**.

---

## 4. Asset verification

| Check | Result |
|---|---|
| Supplied assets in `assets/images/` | 15 |
| Assets rendered on at least one slide | **15 of 15** |
| Assets unused | 0 |
| `<img>` placements | 17 (the portrait and Helios each used twice) |
| Images with `naturalWidth > 0` | 17 of 17 `<img>` + all SVG logo marks |
| Images with alt text | 17 of 17 |
| Aspect ratios preserved | All — `contain` for logos and screenshots, `cover` for photographs, crops measured from the source pixels |
| Originals modified | 0 — verified byte sizes and pixel dimensions after the build |
| Optimized derivatives | 5, all in `assets/images/optimized/`, aspect ratio identical to the source |

Both QR codes were decoded from the **live, rendered slide 15**, not from the
files: the handbook code returns the Google Docs URL above, and the socials
code returns the LinkedIn URL.

---

## 5. PDF export

| Check | Result |
|---|---|
| Export tool | `tools/export-pdf.mjs` (headless Chromium, print stylesheet) |
| Pages | 15 — one per slide |
| Page size | 1920 × 1080 px (16:9), `@page { size: 1920px 1080px; margin: 0 }` |
| File size | 6.13 MB, `dist/from-idea-to-mvp.pdf` |
| Images present in the export | Yes — all photographs, logos and both QR codes render |
| CLEAR slide | The exporter clicks "Show all" before printing; page 12 text was extracted from the generated PDF and contains all five letters and the full assembled prompt |
| Slides inspected in print media | 15 of 15 (screenshot of every slide in print media) |
| Page 1 inspected from the generated PDF file itself | Yes — renders correctly |

The PDF is shipped because it was generated and visually verified, not
assumed.

---

## 6. `file://` verification

| Check | Result |
|---|---|
| Double-clicking `index.html` | Redirects to `standalone.html`, preserving the hash |
| `index.html#/9` over `file://` | Opens `standalone.html#/9`, active slide is `slide-9` |
| Slides in the standalone build | 15 |
| `<img>` elements in the standalone build | 17, zero broken |
| Overflow in the standalone build | none |
| Navigation in the standalone build | `Home` → slide 1, `→` → slide 2 |
| Console errors on direct `standalone.html` open | none |
| Console errors on the `index.html` redirect path | none from the deck; the only aborted request is the cross-origin Google Fonts stylesheet when the browser cancels it during redirect |

The redirect guard and the dynamic module loader are both in `index.html`;
`tools/build-standalone.mjs` removes the guard and inlines the bundled module
graph so the standalone copy does not redirect to itself.

---

## 7. Defects found and fixed during the redesign

Every item below was found by looking at a rendered screenshot, by a failing
automated check, or by opening the deck over `file://`, and was fixed and
re-verified.

| # | Slide / area | Defect found | Fix applied | Re-verified |
|---|---|---|---|---|
| 1 | 01 | Hero image sat too low against the title baseline. | Vertically centred the cover art column. | Screenshot |
| 2 | 03 | The slide still carried three photographs and left a large empty lower half. | Made slide 03 purely typographic — four-step rule, three mistakes, closing line — and centred the block vertically. | Screenshot at 1920 and 1366 |
| 3 | 04 | The definition list was stranded at the bottom, and the two comparison labels did not share a baseline. | Top-aligned the comparison columns with a consistent top offset; the arrow spans the full row height; the definition list follows the content instead of being pushed down. | Screenshot |
| 4 | 06 | The three resource columns left a dead middle band; the design specimen floated. | Restructured into three ruled resource rows beside a full-height type specimen (display "Aa", sample line, swatches, action). | Screenshot |
| 5 | 08 | Chips were pushed to the floor of each cell and the 3×2 grid left ragged gaps. | Rebuilt as a 2×3 ruled grid with description → chips order; blended the white-backed Firebase and Google Cloud logos with `mix-blend-mode: multiply`. | Screenshot |
| 6 | 09 | Dark Gemini and Helios screenshots sat in white letterboxes. | Added dark/black frame variants matched to each image's own background; darkened captions on dark frames. | Screenshot |
| 7 | 11 | The comparison block sat high and the "what's missing" list was pushed to the bottom. | Centred the comparison block and let the list follow its content. | Screenshot |
| 8 | 13 | Six foundations in two columns left the right column short; the code panel stretched into an empty black void. | Made the foundations one full-height column and sized the code panel to its content. | Screenshot |
| 9 | 14 | Sprint phases did not fill the available height, and the four columns read as unrelated blocks. | Let the phases fill the height, added vertical column rules and anchored deliverables at the bottom. | Screenshot |
| 10 | 05 | The MVP board opened unsorted, so the slide communicated nothing until the presenter clicked. | Default state is now the suggested 3/3/2/2 split; controls renamed "Suggested split" and "Clear board"; clear still returns all ten features to the pool for a live exercise. | Automated tests 16–20 |
| 11 | all | Opening `index.html` from the filesystem produced a blank page because browsers block ES modules over `file://`. | Added a `file://` redirect to the bundled `standalone.html`; switched to a dynamic module loader so no module fetch is attempted on `file://`; added `npm run build` and `start.command`. | Direct `file://` test |
| 12 | all | Metadata colour `#928B7C` measured only 2.98:1 on the paper background. | Darkened `--ink-3` to `#6F6759` (4.91:1). | Contrast calculation |
| 13 | QA | The notes assertion was case-sensitive while CSS uppercases the header. | Made the check case-insensitive. | 48/48 |
| 14 | PDF | The static PDF showed the CLEAR slide with all five letters hidden. | The exporter clicks "Show all" before printing; page 12 text was extracted from the PDF and verified. | PDF text extraction |
| 15 | 15 / 08 | The supplied Free Developer Stack Handbook QR was not used. | Added the handbook QR beside the socials QR on slide 15, with a written link, and a "Free Stack Handbook" link in slide 08's docs row. | QR decode + link check |
| 16 | 01 / 15 | The cover used the Gemini title card, and the handbook QR was 190 px while the socials QR was 92 px. | Rebuilt the cover as a tilted three-photo collage (portrait, How & Tell stage photo, AppBuildersPH group photo); set both slide 15 QR codes to 260 px. | Screenshot at 1920×1080 + PDF page 1/15 |

### Not defects — deliberate decisions

| Item | Decision |
|---|---|
| `gemini_argon.png` reads "Gemini 4 Argon" | The image is shown exactly as supplied. **No claim is made about that product name** anywhere in the slides, notes or docs. Flagged for the speaker in `docs/ASSET_INVENTORY.md`. |
| Faces of other people in the event photographs | `caffeine_hackathon.jpg`, `skydev_hackathon.jpg` and `appbuilders_group.png` show attendees and teammates; `bitpyre_hackathon.jpg` shows the BitPyre team. These are public photos of the speaker's own hackathon and community history, used unmodified except for the cover collage's portrait crop of `howtell_stage.png`. Flagged for the speaker's review. |
| Missing EasyLense, GDG, Stitch, Gemini and AI Edge imagery | No file for these exists in the supplied folder. Nothing was fabricated: those products appear as text wordmarks, and Gemini and Google AI Edge use drawn marks. Documented in `docs/ASSET_INVENTORY.md`. |
| The LinkedIn link cannot be auto-verified | LinkedIn blocks automated clients. The URL comes from the speaker's own QR code and is also written out as text on slide 15. |
| Slide 03 has no photographs | Deliberate typographic composition; all photographs remain on slides 01–02 and all supplied images are still used. |
| The PDF shows "MVP" in solid blue rather than the Gemini gradient | Chromium's PDF rasteriser clips `background-clip: text` gradients. The live deck keeps the full gradient; only the PDF fallback is flattened. |

---

## 8. Visual inspection checklist

Every one of the 15 slides was screenshotted and reviewed at 1920 × 1080, and
again in print media. The final full-deck pass reported zero overflow and zero
console/network errors.

| Looked for | Outcome |
|---|---|
| Misaligned text | Fixed on slides 01, 04, 06, 08 and 11. No remaining misalignment. |
| Uneven spacing | Fixed on slides 03, 06, 08, 11, 13 and 14. |
| Poor image composition | The portrait crop is tuned to `object-position: 50% 28%`; the SkyDev crop keeps the sponsor banner; the BitPyre frame is never cropped; dark screenshots use matched dark frames. |
| Inconsistent backgrounds | One paper canvas throughout; no cards, shadows or radial washes. |
| Clipped elements | Zero after the layout fixes. |
| Excessive empty areas | Fixed on slides 03, 04, 06, 08, 11, 13 and 14. |
| Overloaded slides | Slide 02 carries the most material; the hierarchy was tuned so it still reads as an editorial spread. |
| Unreadable content | Checked at 1366 × 768 and 640 × 480. Smallest body text is 16–17 px on a 1920 canvas; metadata is 4.9:1 or darker. |
| Broken diagrams | Both SVG diagrams re-inspected; logo marks and labels do not overlap. |
| Logo legibility | Every supplied logo is shown at a size where its mark is readable; the 225 px Google Cloud file is never blown up. |

---

## 9. Accessibility verification

| Requirement | How it was checked | Result |
|---|---|---|
| Keyboard navigation | Every shortcut exercised in the automated suite | **PASS** |
| Visible focus states | `:focus-visible` ring (2 px, 3 px offset) on every interactive element | **PASS** |
| Reduced motion | Second browser context with `reducedMotion: "reduce"` | Transitions and animations collapse to 0.00001 s |
| Alt text | Enumerated in the suite — 17 of 17 images | **PASS** |
| ARIA live slide counter | `aria-live="polite"` on `#counter-label` | **PASS** |
| Hidden inactive slides | `aria-hidden="true"` on 14 slides | **PASS** |
| Inert inactive slides | `inert` on 14 slides | **PASS** |
| Overlay focus handling | Focus moves into an open overlay and is trapped while it is open, then restored on close | **PASS** |
| Colour contrast | Body `#666154` on `#F4F0E7` ≈ 5.4:1; metadata `#6F6759` ≈ 4.9:1; primary ink ≈ 15.3:1 | All pass WCAG AA |

---

## 10. Outstanding items for the speaker

These are not defects in the build — they are decisions only the speaker can
make.

1. **Confirm the three hackathon photographs may be shown publicly.** Faces of
   attendees and judges are visible in two of them.
2. **Confirm the "Gemini 4 Argon" title card.** It is shown as supplied and
   the deck makes no claim about it. Replace the file if the name is wrong.
3. **Replace the `[Your detail]` markers** in `docs/SPEAKER_NOTES.md` with your
   own stories before presenting.
4. **Re-check the Google Stitch slide.** Stitch ships quickly; the slide
   describes it as turning a description into editable screen designs, which
   was accurate at the time of writing.
5. **Confirm the remaining project URLs.** The deck links to
   `github.com/darknecrocities/Helios`, `huggingface.co/Darknecrocities/Helios`
   and `domodomo.site` (all confirmed reachable). Add any further links you
   want on slide 15.
6. **Confirm the handbook is public.** The supplied QR and the written link
   both resolve to the *Free Developer Stack Handbook* Google Doc; anyone with
   the link can open it. Change the sharing setting if that is not intended.

---

## 11. Reproducing this report

```bash
cd /Users/arronkianparejas/xavier
npm install
npm run serve          # terminal 1
npm run qa             # terminal 2 — 48 checks
npm run qa:responsive  # 8 viewport sizes
node tools/link-check.mjs
node tools/verify-qr.mjs
npm run build          # regenerate standalone.html
npm run pdf            # regenerate dist/from-idea-to-mvp.pdf
```

Screenshots are written to `/tmp/shots/` by `tools/capture.mjs` and
`tools/print-shots.mjs`.
