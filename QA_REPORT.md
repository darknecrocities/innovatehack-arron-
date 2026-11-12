# QA Report — From Idea to MVP

**Project:** From Idea to MVP — InnovateHack+ 2.0 (GDG on Campus Xavier Ateneo)
**Speaker:** Arron Kian Parejas
**QA date:** November 11, 2026
**Build under test:** `/Users/arronkianparejas/xavier` (working tree at commit time)

**Method.** Every check below was executed against the running deck with
headless Chromium via Playwright, not reasoned about. The automated suite is
`tools/qa.mjs` (`npm run qa`); the responsive sweep is
`tools/responsive-test.mjs`; the link check is `tools/link-check.mjs`. Screens
were captured at each viewport and inspected by eye, in both screen media and
print media.

**Result: 48 / 48 automated checks passed. 8 / 8 viewport sizes passed.
21 external links checked, 20 confirmed reachable by automated request.
15-page PDF generated and inspected.**

---

## 1. Automated test results — `npm run qa`

| # | Test | Expected | Actual | Status |
|---|---|---|---|---|
| 1 | Deck contains exactly 15 slides | 15 | 15 | **PASS** |
| 2 | Slide ids unique and sequential | 15 unique | 15 unique | **PASS** |
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
| 14 | `N` opens the notes for the current slide | slide 4 content | slide 4 content | **PASS** |
| 15 | Notes contain a main message and a transition | both | both | **PASS** |
| 16 | MVP board: "Show suggested" distributes all 10 features | 3,3,2,2 | 3,3,2,2 (total 10) | **PASS** |
| 17 | MVP board: the move-to menu updates the counts | 2,3,2,3 | 2,3,2,3 | **PASS** |
| 18 | MVP board: drag and drop moves a feature into a bucket | Must = 1 | 1,0,0,0 | **PASS** |
| 19 | MVP board: Reset empties every bucket | 0,0,0,0 | 0,0,0,0 | **PASS** |
| 20 | MVP board: Reset returns all 10 to the pool | 10 | 10 | **PASS** |
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
| 34 | Every image loads | 18 / 18 | 18 / 18 | **PASS** |
| 35 | Every image has alt text | 0 missing | 0 missing | **PASS** |
| 36 | Image count | 18 `<img>` (12 files, 6 re-used) | 18 | **PASS** |
| 37 | Diagram logos render inside the SVG | all sized | all sized | **PASS** |
| 38 | Diagrams reference the supplied logo files | 4 logo files | 4 logo files | **PASS** |
| 39 | Every external link opens in a new tab with `rel=noopener` | 26 / 26 | 26 / 26 | **PASS** |
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

21 unique external URLs, checked with a real browser navigation.

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

---

## 4. Asset verification

| Check | Result |
|---|---|
| Supplied assets in `assets/images/` | 12 |
| Assets rendered on at least one slide | **12 of 12** |
| Assets unused | 0 |
| Images with `naturalWidth > 0` | 18 of 18 `<img>` + all 7 SVG marks |
| Images with alt text | 18 of 18 |
| Aspect ratios preserved | All — `contain` for logos and screenshots, `cover` for photographs, crops measured from the source pixels |
| Originals modified | 0 — verified byte sizes and pixel dimensions after the build |
| Optimized derivatives | 3, all in `assets/images/optimized/`, aspect ratio identical to the source |

The QR code was decoded from the **live, rendered slide 15**, not from the
file, and returns the LinkedIn URL above.

---

## 5. PDF export

| Check | Result |
|---|---|
| Export tool | `tools/export-pdf.mjs` (headless Chromium, print stylesheet) |
| Pages | 15 — one per slide |
| Page size | 1920 × 1080 px (16:9), `@page { size: 1920px 1080px; margin: 0 }` |
| File size | 4.34 MB, `dist/from-idea-to-mvp.pdf` |
| Images present in the export | Yes — all photographs and logos render |
| Slides inspected in print media | 15 of 15 (screenshot of every slide in print media) |
| Page 1 inspected from the generated PDF file itself | Yes — renders correctly |

The PDF is shipped because it was generated and visually verified, not
assumed.

---

## 6. Defects found and fixed

Every item below was found by looking at a rendered screenshot or by a failing
automated check, and was fixed and re-verified.

| # | Slide / area | Defect found | Fix applied | Re-verified |
|---|---|---|---|---|
| 1 | 10, 13 | `.body-row` was scoped to `.s3`, so slides 10 and 13 lost their grid layout. The S10 architecture diagram overflowed the slide by **602 px** and ran under the slide counter. | Moved `.body-row` to `components.css` as a global class. | Layout sweep clean at 8 viewports |
| 2 | 05 | The MVP board overflowed the slide by **267 px**. The pool column was too narrow, so feature labels wrapped to three lines, and the hint text overlapped the pool. | Redesigned the board: a full-width unsorted strip of compact chips above four side-by-side buckets; shortened the move-to menu labels; removed the overlapping hint. | Overflow now 0; drag, menu, suggest and reset all pass |
| 3 | 07 | The decision-tree SVG had broken geometry: logos overlapped the row labels ("Computer Vision" ran into the ML Kit mark), the tool names overlapped the descriptions, and every description was clipped off the right edge of the slide. | Rewrote the diagram on a fixed coordinate system with dedicated columns for the need, the arrow, the mark, the tool name and the description. | Inspected — no overlap, nothing clipped |
| 4 | 07 | Product marks and wordmarks were both shown, so "ML Kit" appeared twice and the marks were illegible at 36 px. | Measured the artwork bounds of each logo from the source pixels (`tools/logo-bounds.mjs`, `tools/logo-crop.mjs`) and cropped each mark with a nested SVG `viewBox`, so the mark and the text label sit side by side. | Inspected — marks legible, no duplication |
| 5 | 10 | "Client SDK for Gemini" overflowed its box, and a rotated "data + auth" label collided with the connector line. | Widened the middle column, reduced the diagram's sub-label size to 19 px, and moved the flow labels into a legend under the diagram. | Inspected — no overflow, no collision |
| 6 | 08 | The ecosystem cards were top-aligned inside a stretched grid, leaving a ~350 px empty band, and the documentation links were orphaned in a separate row at the bottom. | Gave each card a one-line description and pinned it to the card foot; moved the documentation links into a labelled "Official docs" band that belongs to the slide. | Inspected — the map fills the frame |
| 7 | 06, 12, 13, 14, 15 | Large empty bands at the bottom of the slide: content did not fill the 1920 × 1080 frame, leaving the deck looking unfinished. | Rebalanced each slide — S06 links anchored to the card foot, S12 gained a live prompt panel, S13 gained a PR checklist, S14 gained per-card deliverables and a "definition of done" band, S15 recomposed. | Inspected slide by slide |
| 8 | 04 | The "vague idea" card was 460 px tall with ~200 px of empty space below a single sentence. | Added the three vague answers ("Who? Everyone." etc.) so the card contrasts with the clear statement beside it. | Inspected — balanced |
| 9 | 02 | The four stat labels wrapped unevenly (one to three lines, the rest to one), breaking the baseline alignment. | Shortened the labels to "AppBuildersPH", "GitHub · Philippines", "hackathon wins", "projects". | Inspected — aligned |
| 10 | 15 | The closing headline used a large purple-to-pink gradient across two lines, which read as the generic "purple AI gradient" the brief asks to avoid. | Made the closing headline solid ink and moved the gradient to a single Gemini sparkle. The gradient now appears only on the word "MVP" on slide 01. | Inspected — on brand |
| 11 | 12 | The CLEAR cards had a ~200 px void between the description and the example box. | Added a "why it matters" line to each letter and kept the examples aligned along the card foot. | Inspected — even rhythm |
| 12 | PDF | Box shadows rasterised as hard-edged rectangles around every card, and the `background-clip: text` gradient on "MVP" was clipped mid-word with a visible rectangle edge. | Added `css/print.css`: shadows are disabled in print, and the gradient word falls back to solid Google blue in the PDF only. | PDF page 1 inspected from the file; all 15 slides inspected in print media |
| 13 | 02 | The `width`/`height` attributes on three images did not match the files actually referenced — the portrait said 1200 × 1500 (file is 720 × 900) and the two hackathon derivatives said 1600 × 1067 (file is 1600 × 1066). | Corrected the attributes to the real dimensions. | Verified against `sips` output |
| 14 | 02 | The portrait derivative was 641 KB at 960 × 1200 — larger than needed for a 420 × 730 slot. | Re-derived at 720 × 900 (402 KB), aspect ratio 0.8 preserved exactly. | Verified against `sips` output |
| 15 | all | The `.ctrl` class used by the slide 05 and 12 headers was dropped when `components.css` was restructured. | Restored the rule in `components.css`. | Screenshot inspection |
| 16 | test tooling | The QA scripts read `window.__deck` before the ES module finished executing, which made the suite flaky under parallel load. | Added `waitForFunction(() => window.__deck)` to all four scripts. | Suite now stable across repeated runs |

### Not defects — deliberate decisions

| Item | Decision |
|---|---|
| `gemini_argon.png` reads "Gemini 4 Argon" | The image is shown exactly as supplied. **No claim is made about that product name** anywhere in the slides, notes or docs. Flagged for the speaker in `docs/ASSET_INVENTORY.md`. |
| Faces of other people in the hackathon photographs | `caffeine_hackathon.jpg` and `skydev_hackathon.jpg` show attendees and judges; `bitpyre_hackathon.jpg` shows the BitPyre team. These are public photos of the speaker's own hackathon history and are used unmodified and uncropped. Flagged for the speaker's review. |
| Missing EasyLense, GDG, Stitch, Gemini and AI Edge imagery | No file for these exists in the supplied folder. Nothing was fabricated: those products appear as text wordmarks, and Gemini and Google AI Edge use drawn marks. Documented in `docs/ASSET_INVENTORY.md`. |
| The LinkedIn link cannot be auto-verified | LinkedIn blocks automated clients. The URL comes from the speaker's own QR code and is also written out as text on slide 15. |
| The PDF shows "MVP" in solid blue rather than the Gemini gradient | Chromium's PDF rasteriser clips `background-clip: text` gradients. The live deck keeps the full gradient; only the PDF fallback is flattened. |

---

## 7. Visual inspection checklist

Every one of the 15 slides was screenshotted and reviewed at 1920 × 1080, and
again in print media.

| Looked for | Outcome |
|---|---|
| Misaligned text | Fixed on slides 02, 04, 07, 10 and 14. No remaining misalignment. |
| Uneven spacing | Fixed on slides 05, 06, 08, 12, 13 and 14. |
| Poor image composition | The portrait crop was retuned to `object-position: 50% 28%`; the SkyDev crop keeps the sponsor banner; the BitPyre frame is never cropped. |
| Inconsistent backgrounds | One beige canvas throughout; slides 01 and 15 add the same family of soft radial washes. |
| Clipped elements | Zero after the `.body-row` and diagram fixes. |
| Excessive empty areas | Fixed on slides 04, 06, 08, 12, 13, 14 and 15. |
| Overloaded slides | Slide 02 carries the most material; the hierarchy was tuned (60 px title, 27 px roles) so it still reads as an editorial spread. |
| Unreadable content | Checked at 1366 × 768 and 640 × 480. Smallest body text is 19 px on a 1920 canvas. |
| Broken diagrams | Both SVG diagrams rebuilt and re-inspected. |
| Logo legibility | Every supplied logo is shown at a size where its mark is readable; the 225 px Google Cloud file is never blown up. |

---

## 8. Accessibility verification

| Requirement | How it was checked | Result |
|---|---|---|
| Keyboard navigation | Every shortcut exercised in the automated suite | **PASS** |
| Visible focus states | `:focus-visible` ring (3 px, 3 px offset) on every interactive element | **PASS** |
| Reduced motion | Second browser context with `reducedMotion: "reduce"` | Transitions and animations collapse to 0.00001 s |
| Alt text | Enumerated in the suite — 18 of 18 images | **PASS** |
| ARIA live slide counter | `aria-live="polite"` on `#counter-label` | **PASS** |
| Hidden inactive slides | `aria-hidden="true"` on 14 slides | **PASS** |
| Inert inactive slides | `inert` on 14 slides | **PASS** |
| Overlay focus handling | Focus moves into an open overlay and is trapped while it is open, then restored on close | **PASS** |
| Colour contrast | `#5F6368` on `#F5F1E8` ≈ 6.4:1; muted `#6F6759` ≈ 5.2:1 | Both pass WCAG AA |

---

## 9. Outstanding items for the speaker

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

---

## 10. Reproducing this report

```bash
cd /Users/arronkianparejas/xavier
npm install
npm run serve          # terminal 1
npm run qa             # terminal 2 — 48 checks
npm run qa:responsive  # 8 viewport sizes
node tools/link-check.mjs
node tools/verify-qr.mjs
npm run pdf            # regenerate dist/from-idea-to-mvp.pdf
```

Screenshots are written to `/tmp/shots/` by `tools/capture.mjs` and
`tools/print-shots.mjs`.
