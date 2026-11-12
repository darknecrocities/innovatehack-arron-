# Design Plan — Typographic Minimalism

**Project:** From Idea to MVP — InnovateHack+ 2.0
**Revision:** Minimalist / premium typographic pass
**Scope:** All 15 slides, overlays, diagrams and interactive states

---

## 1. Design intent

The deck should read like a well-set editorial document, not a dashboard.
Typography carries the hierarchy; rules and whitespace carry the structure.
Containers are the exception, never the default.

Three rules govern every slide:

1. **Type first.** If a heading, label or number can do the job, no box is drawn.
2. **One line is enough.** Hairlines separate; they do not decorate. Shadows,
   gradients and filled panels are removed.
3. **Whitespace is content.** Gaps are generous and intentional. A slide may be
   quiet; it may not be crowded.

The result should feel warm, precise and expensive — closer to a printed
programme than a startup pitch deck.

---

## 2. Visual system

### Palette

| Token | Value | Role |
|---|---|---|
| `--bg` | `#F4F0E7` | Warm paper canvas, every slide |
| `--bg-2` | `#FBF8F1` | Rare inset (code, specimen) |
| `--ink` | `#1B1A16` | Primary type and dark panels |
| `--ink-2` | `#666154` | Secondary type |
| `--ink-3` | `#6F6759` | Metadata, captions, numerals (4.9:1 on paper) |
| `--line` | `#DBD3C2` | Hairline rules |
| `--line-strong` | `#B9B09C` | Section rules, active borders |
| `--blue` | `#4285F4` | The single working accent |
| `--red` | `#EA4335` | "Vague", "weak", "won't" |
| `--yellow` | `#FBBC05` | "Could" only |
| `--green` | `#34A853` | "Clear", "must", "done" |

The four Google colours survive only as: tiny category tags, the four-segment
signature rule, bucket dots and diagram edges. No large colour fields.

### Type

| Role | Face | Size / treatment |
|---|---|---|
| Display | Google Sans Flex 500 | 148 / 64 / 38 px, tracking −0.025 to −0.045em |
| Statement | Google Sans Flex 400 | 38–42 px, line-height 1.25 |
| Body | Inter 400 | 17–22 px, line-height 1.45 |
| Label | JetBrains Mono 500 | 11–13 px, uppercase, 0.14–0.18em tracking |
| Code | JetBrains Mono 400 | 15–19 px, line-height 1.55 |

The eyebrow becomes a mono label preceded by a 26 px hairline. It no longer
uses a four-colour gradient bar.

### Shape and depth

- Radius: `0` for image frames, panels and rules; `999px` for pills only.
- Shadow: **none**.
- Border: `1px` hairline; `1px` strong line for section starts.
- Images: sharp frames, `1px` line, dark artwork left untouched inside its own
  black field.

### Grid and chrome

- Stage: fixed 1920 × 1080, scaled 16:9.
- Slide padding: `80px 112px 96px`; column gap `32px`.
- Chrome: 2 px ink progress bar; mono brand bottom-left; mono counter
  bottom-right with hairline circular buttons.
- Slide content width: 1696 px.

---

## 3. Slide-by-slide treatment

| # | Slide | Typographic composition | Containers kept |
|---|---|---|---|
| 01 | From Idea to MVP | Giant two-line title, mono metadata row, four-segment rule, tilted three-photo collage | Paper mats |
| 02 | Meet Your Speaker | Portrait · statement + seven roles · 2×2 photo grid · four large numerals | Image frames |
| 03 | The Hackathon Mindset | Headline, four-step rule, pull statement, three numbered mistake rows | None |
| 04 | Start With the Problem | Three question columns, then vague → clear comparison split by a vertical rule | None |
| 05 | Define Your MVP | Functional MoSCoW board: pill pool, four hairline columns | Drop zones only |
| 06 | Design Before You Code | Four-step rule, three ruled resource rows, full-height type specimen | Specimen rules |
| 07 | Choose Your Tech Stack | Editorial decision tree: root statement, six hairline rows with marks | None |
| 08 | The Google Developer Toolkit | 2×3 category grid with top rules, logo/wordmark clusters, docs line + handbook link | None |
| 09 | Build With Google AI | Four-step rule, five capability rows, three stacked project plates | Image frames |
| 10 | Cloud AI vs On-Device AI | Hairline architecture diagram, typographic comparison table | Diagram nodes |
| 11 | Prompting Is Engineering | Weak prompt as plain type; structured prompt as one dark panel | Dark code panel |
| 12 | The CLEAR Framework | Five vertical type columns; letters revealed by a coloured top rule | Prompt strip |
| 13 | Set Up Your Team | Six numbered foundations in one full-height column; repository panel | Code panel |
| 14 | From Sprint to Ship | Five-step rule, four phase columns with mono deliverables, done row | None |
| 15 | Build Something That Matters | Large closing statement, five hairline checklist rows, handbook QR + socials QR + mono links | QR frames |

---

## 4. Interaction styling

- **MVP board:** features are hairline pills in the pool and hairline rows in a
  bucket. Buckets are separated by vertical rules, not boxes. Drag-over adds a
  faint blue wash. Counts are mono numerals with a 6 px coloured dot beside the
  bucket name.
- **Stack selector:** a paper panel with a hairline border. Questions are ruled
  rows; options are outline pills. The recommendation is separated by a single
  vertical rule, not a card.
- **CLEAR:** each letter column has a coloured 2 px top rule that scales in on
  reveal. Hidden columns sit at 28 % opacity; revealed columns are full ink.
- **Overlays:** overview is a 3-column typographic index with hairline rows;
  notes is a paper panel with a left rule; selector uses the same paper panel.
- **Focus:** 2 px blue outline, 3 px offset, on every interactive element.

---

## 5. What was removed

- Card backgrounds, rounded panels and drop shadows across all slides.
- Radial background gradients on slides 01 and 15.
- The Gemini gradient on the word "MVP" (now solid blue).
- The four-colour eyebrow bar and the four-colour progress bar (now ink).
- Duplicate photography on slide 03 (the slide is now purely typographic).
- Card wrappers around tool, capability and sprint descriptions.
- Decorative sparkle on slide 15.

## 6. What was kept

- All 15 slides, titles and supplied claims.
- All 15 supplied images (17 rendered `<img>` placements; the portrait and Helios
  are each used twice). The handbook QR sits beside the socials QR on slide 15
  at the same 190 px size.
- Every interaction: keyboard navigation, progress, counter, notes, fullscreen,
  overview, MVP board, stack selector, CLEAR reveal.
- Both SVG diagrams and the official product marks.
- Accessibility: focus rings, reduced motion, alt text, ARIA live counter,
  overlay focus trap.

---

## 7. Verification

1. `node tools/qa.mjs` — structure, navigation, interactions, images, links,
   accessibility, console/network.
2. `node tools/responsive-test.mjs` — 8 viewports from 1920×1080 to 640×480.
3. `node tools/capture.mjs` — visual capture of all 15 slides at 1920×1080 and
   1440×900, inspected for collisions and overflow.
4. `standalone.html` loaded over `file://` — renders all 15 slides with no
   console errors. Opening `index.html` from the filesystem redirects there;
   `npm run build` regenerates it after any CSS or JS change.
5. PDF export — 15 pages, correct type and image rendering, CLEAR revealed.
