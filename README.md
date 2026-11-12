# From Idea to MVP — InnovateHack+ 2.0

An interactive 15-slide keynote for **InnovateHack+ 2.0**, organised by
Google Developer Groups on Campus — Xavier Ateneo.

**Speaker:** Arron Kian Parejas · **Date:** November 16, 2026 · **Platform:** Google Meet
**Session:** *From Idea to MVP — Scoping, Stack Selection, and Building with Google AI Tools*

Built with plain HTML, CSS and vanilla JavaScript. No framework and no runtime
build step. A small optional build (`npm run build`) creates a single-file
`standalone.html` so the deck also opens by double-clicking from the filesystem.

---

## 1. Run it locally

### The quick way

Double-click **`start.command`**. It starts a local server on port 8899 and
opens the deck in your browser.

Or serve it yourself:

```bash
cd /Users/arronkianparejas/xavier
python3 -m http.server 8899
```

Then open **<http://localhost:8899/>**.

Any static server works — `npx serve`, `php -S localhost:8899`,
`npx http-server`, or VS Code's *Live Server* extension.

### Opening the file directly

Browsers block ES modules over `file://`. If you double-click `index.html`, it
detects the `file:` protocol and redirects to **`standalone.html`**, a bundled
copy with all CSS and JavaScript inlined. Hash links are preserved, so
`index.html#/9` still opens slide 9.

`standalone.html` is generated — after changing any CSS or JavaScript, rebuild
it:

```bash
npm install   # once; installs esbuild
npm run build
```

> **First run only:** the deck fetches Google Fonts (Google Sans Flex, Inter,
> JetBrains Mono) from the network. It still works offline, but it falls back
> to the system UI font.

---

## 2. Navigate the slides

| Key | Action |
|---|---|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `N` | Speaker notes panel |
| `O` | Slide overview grid |
| `S` | Stack selector (slide 07) |
| `R` / `→` | Reveal the next CLEAR letter (slide 12) |
| `?` | Show the shortcut hint |
| `Esc` | Close any overlay |

On-screen controls sit in the bottom-right corner (previous, slide counter,
next, overview). A four-colour progress bar runs along the top edge.

The URL tracks the slide, so `…/#/7` opens slide 7 and you can bookmark or
share a specific slide.

---

## 3. Presenter mode

Press **`N`**. A notes panel slides in from the right showing, for the
current slide:

- the **main message**
- what to **explain**
- **talking points**
- an **example or story** to share
- the **transition** into the next slide
- the **approximate speaking time**

The panel updates automatically as you move between slides, so it is safe to
arrow around while it is open. The notes are never visible in the audience
view — they live in a separate data module (`js/content/notes.js`) and are
also published as `docs/SPEAKER_NOTES.md`.

The same content, printed out, is in **`docs/SPEAKER_NOTES.md`** — generated
from the same source so the two can never drift apart.

> Before you present, replace every `[Your detail]` marker in the notes with
> your own story.

---

## 4. The interactive demonstrations

### Slide 05 — MVP prioritisation board

Ten sample features for an emergency-reporting platform open in the speaker's
**suggested split** — Must 3, Should 3, Could 2, Won't 2 — so the slide reads
immediately. Move them into **Must Have**, **Should Have**, **Could Have**, or
**Won't Have · Deferred**.

- **Pointer:** drag a chip into a bucket. The bucket highlights while you drag.
- **Keyboard:** every chip is focusable and carries a "move to" menu
  (`Unsorted` / `Must` / `Should` / `Could` / `Won't`). Tab to a chip, open the
  menu, choose a bucket. Focus returns to the chip after the move.
- The coloured count in each bucket header updates live.
- **Suggested split** restores the 3 / 3 / 2 / 2 arrangement.
  **Clear board** returns all ten features to the unsorted pool for a live
  exercise.

### Slide 07 — Stack selector

Press **`S`** or click **"Try the stack selector"**. Answer four questions —
platform, where the AI runs, type of AI, and backend complexity — and the
panel recommends a stack with a one-line rationale for each choice.

The rule table is documented in `docs/PRESENTATION_PLAN.md` and implemented in
`js/interactions/selector.js`. The selector always ends with the caveat:
*"A starting point, not a rule. Validate it against your problem statement."*

Run it twice with opposite answers (cloud + generative AI, then offline +
traditional ML) to make the trade-off concrete for the audience.

### Slide 12 — CLEAR framework

Reveal the five parts of the framework one at a time with **"Reveal next"**,
the **`R`** key, or **`→`**. **"Show all"** reveals everything; **"Reset"**
starts over.

As each letter is revealed, the prompt at the bottom of the slide assembles
itself, so the audience sees the structure build up rather than appearing all
at once.

| Letter | Means | Asks |
|---|---|---|
| **C** | Context | Who is it for and what exists already? |
| **L** | Limitations | Time, budget, stack, devices |
| **E** | Expected outcome | A result you can check |
| **A** | Architecture | How the pieces connect |
| **R** | Requirements | Tests and quality bars |

### Animated diagrams

Slides 07 and 10 draw their diagrams as SVG with animated connections. Slide
09 cycles a highlight through the `APPLICATION → AI SERVICE → VALIDATION →
RESPONSE` pipeline while it is on screen. All animation is disabled under
`prefers-reduced-motion: reduce`.

---

## 5. Preparing for Google Meet

1. **Test the font load.** Open the deck once on the machine you will present
   from, so Google Sans Flex is cached and the first slide does not reflow.
2. **Use fullscreen.** Press `F` (or `F11`). The deck scales itself to any
   window, so the 16:9 composition is identical for you and the audience.
3. **Share the browser tab, not the window.** In Meet, click **Share** →
   **Present** → **Chrome Tab**. Sharing the whole window drags the Meet
   toolbar and your notifications into the recording.
4. **Share the right tab.** If you have many tabs open, select the tab whose
   title reads *"From Idea to MVP"*.
5. **Keep the notes panel for yourself.** Presenter notes live in the same tab.
   To read them without sharing them, put the deck on one screen and
   `docs/SPEAKER_NOTES.md` (or the printed copy) on another, or use
   **Presenter view** if you host in Meet with the slides in a shared tab.
6. **Turn on "pin presenter"** if you are sharing slides and camera together.
7. **Have a fallback.** `dist/from-idea-to-mvp.pdf` is a 15-page 16:9 PDF
   backup of the same deck. Upload it to Drive as a second tab, so if the
   browser or the network fails you can present from the PDF.
8. **Check the QR codes.** Slide 15 shows two codes: the larger one opens the
   **Free Developer Stack Handbook**, and the smaller one opens the speaker's
   LinkedIn profile. Both URLs are written out beside the codes. Test them
   with a phone camera on the same screen-share setup before going live.

---

## 6. Project layout

```
index.html                 Entry point — the stage, overlay shells, file:// guard
standalone.html            Generated single-file build (open directly, no server)
start.command              Double-click launcher: server + browser
css/
  variables.css            Design tokens: palette, type, shape, motion
  reset.css                Minimal reset and base element styles
  typography.css           Scale, headings, the Gemini gradient wordmark
  presentation.css         Stage, progress bar, counter, overlay chrome
  components.css           Frames, rows, flows, tables, MVP board, CLEAR
  slides.css               Per-slide layout for all 15 slides
  animations.css           Keyframes and the reduced-motion override
  print.css                One 1920x1080 page per slide for PDF export
js/
  app.js                   Boots the deck and wires the modules together
  slides.js                Renders the slide list into the stage
  navigation.js            Keyboard shortcuts, progress, counter, deep links
  presenter.js             Notes panel, overview grid, overlay focus trap
  animations.js            Stage scaling and the slide 09 flow animation
  interactions.js          Mounts the three interactive widgets
  diagrams.js              The SVG decision tree and architecture diagram
  asset-manager.js         Image load tracking and failure handling
  interactions/
    mvp.js                 Slide 05 prioritisation board
    selector.js            Slide 07 stack selector and its rule table
    clear.js               Slide 12 CLEAR reveal
  content/
    part1.js part2.js part3.js   The slide markup, split for readability
    notes.js               Presenter notes (source of docs/SPEAKER_NOTES.md)
assets/
  images/                  The 13 supplied images, unmodified
  images/optimized/        Lighter derivatives used where a photo is large
  asset-manifest.json      Every asset, its dimensions and its slide placement
docs/
  DESIGN_MINIMAL.md        The typographic design system and per-slide layout
  ASSET_INVENTORY.md       Full inventory, placement map and usage report
  SPEAKER_NOTES.md         The full script (generated from js/content/notes.js)
  PRESENTATION_PLAN.md     Narrative arc, design system, rule tables
tools/
  build-standalone.mjs     Bundles standalone.html with esbuild
  qa.mjs, responsive-test.mjs, link-check.mjs, ...
  export-pdf.mjs           Generates dist/from-idea-to-mvp.pdf
dist/                      Generated PDF backup
```

---

## 7. Development and QA

The `tools/` directory holds the verification scripts. They need
`npm install` once (Playwright and esbuild) and a server running on port 8899.

```bash
npm install          # once
npm run serve        # in another terminal
npm run qa           # 48 end-to-end checks
npm run qa:responsive # 8 viewport sizes
npm run build        # regenerate standalone.html after CSS/JS changes
npm run notes        # regenerate docs/SPEAKER_NOTES.md
npm run pdf          # regenerate dist/from-idea-to-mvp.pdf
```

Other useful scripts:

| Script | Purpose |
|---|---|
| `tools/build-standalone.mjs` | Bundle CSS + JS into `standalone.html` for `file://` use |
| `tools/capture.mjs <w> <h> <tag> <dir>` | Screenshot every slide and report layout overflow |
| `tools/print-shots.mjs <dir>` | Screenshot every slide in print media |
| `tools/responsive-test.mjs` | Check 16:9 scaling and clipping at 8 viewport sizes |
| `tools/link-check.mjs` | HTTP status check for every external link |
| `tools/inspect-assets.mjs` | Report the real dimensions and background of each asset |
| `tools/contact-sheet.html` | Contact sheet of every supplied image, for visual review |
| `tools/logo-bounds.mjs`, `tools/logo-crop.mjs` | Measure the artwork bounds inside the logo files |
| `tools/verify-qr.mjs` | Decode the QR code from the live slide |

Results and defects found are recorded in **`QA_REPORT.md`**.

---

## 8. Accessibility

- Full keyboard navigation, including the three interactive demonstrations.
- Visible focus rings on every interactive element.
- `aria-live` slide counter; inactive slides are `aria-hidden` and `inert`.
- Focus is trapped inside an open overlay and restored when it closes.
- Meaningful `alt` text on every image; decorative graphics are hidden from
  assistive technology; diagrams carry a full text description.
- `prefers-reduced-motion` disables animation and transitions.
- Body text measures about 5.4:1 contrast on the paper canvas; metadata about
  4.9:1 and primary ink about 15.3:1. All pass WCAG AA.

---

## 9. Content and assets

- All 13 supplied images are used on at least one slide. Placement, cropping
  decisions and the usage report are in **`docs/ASSET_INVENTORY.md`**; the
  machine-readable version is **`assets/asset-manifest.json`**.
- Original image files are untouched. Lighter derivatives live in
  `assets/images/optimized/` and are only used where a photo is rendered large.
- No achievement, statistic or credential was invented. Where a logo does not
  exist in the supplied folder, the deck uses a **text wordmark**, not a
  fabricated graphic.
- Slide 15 carries two QR codes — the Free Developer Stack Handbook and the
  speaker's LinkedIn profile — with both URLs written out in text. The handbook
  is also linked from slide 08.
- All external links point to official documentation, open in a new tab, and
  carry no tracking parameters.

---

## 10. Licence

MIT for the code. The supplied images belong to their respective owners and
are used with permission for this talk.
