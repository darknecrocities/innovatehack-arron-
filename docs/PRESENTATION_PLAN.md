# Presentation Plan — From Idea to MVP

**Event:** InnovateHack+ 2.0 · Google Developer Groups on Campus — Xavier Ateneo
**Speaker:** Arron Kian Parejas · **Date:** November 16, 2026 · **Platform:** Google Meet
**Length:** 15 slides · ~45 minutes + Q&A

---

## 1. Narrative arc

The talk is one argument, told in five movements:

| Movement | Slides | Question answered | Outcome for the audience |
|---|---|---|---|
| **Frame** | 01–02 | *Who is speaking and why should I listen?* | Credibility + a promise of a practical method |
| **Scope** | 03–05 | *What exactly should I build?* | A problem statement and a cut line |
| **Stack** | 06–08 | *What do I build it with?* | A decision rule, not a product pitch |
| **Build** | 09–12 | *How do I make it intelligent, and how do I tell the AI what to do?* | A safe request pipeline and a repeatable prompt format |
| **Ship** | 13–15 | *How do we actually finish in three days?* | A working team setup, a sprint shape, and a call to action |

The spine is the sentence in the title: **idea → MVP**. Every slide advances
one of those three words.

---

## 2. Slide-by-slide plan

| # | Title | Core message | Visual device | Assets | Time |
|---|---|---|---|---|---|
| 01 | From Idea to MVP | A practical path from idea to working MVP | Typographic cover: oversized title on the left, tilted collage on the right — portrait, How & Tell stage photo, and the AppBuildersPH group photo | `arron_profile.png`, `howtell_stage.png`, `appbuilders_group.png` | 2 min |
| 02 | Meet Your Speaker | The advice comes from shipping, not theory | Three-column profile: portrait · roles + supplied numbers · four-image gallery, with recognition lines | `arron_profile.png`, 3 hackathon photos, `helios_hf_downloadscount.png` | 4 min |
| 03 | The Hackathon Mindset | Great ideas don't automatically become great products | Purely typographic: four-step rule across the top, three mistakes and a closing line, centred | — | 3 min |
| 04 | Start With the Problem | Understand the problem before choosing the technology | Who/What/Why rows → vague-idea-to-clear-statement transformation with an arrow | — | 3 min |
| 05 | Define Your MVP | Build less, deliver more | **Interactive** MoSCoW board, pre-filled with the suggested 3/3/2/2 split; "Suggested split" and "Clear board" controls | — | 4 min |
| 06 | Design Before You Code | Prototype the experience first | Four-step rule + three ruled resource rows + a full-height type specimen ("Aa", sample line, swatches, action) | — | 3 min |
| 07 | Choose Your Tech Stack | The right tool depends on the problem | **SVG decision tree** with official product marks + **interactive** stack selector overlay | 4 logo files (cropped marks) | 4 min |
| 08 | The Google Developer Toolkit | A toolkit for modern builders | 2 × 3 ruled toolkit grid, one category per row, official doc links, plus the Free Stack Handbook link | 4 logo files | 3 min |
| 09 | Build With Google AI | Give your application intelligence | APPLICATION → AI SERVICE → VALIDATION → RESPONSE flow + capability cards + three project panels on dark/white frames | `gemini_argon.png`, `appbuilders_top1.png`, `helios_hf_downloadscount.png` | 4 min |
| 10 | Cloud AI vs On-Device AI | Where should your AI run? | **SVG architecture diagram** with ON DEVICE / CLOUD zones, animated edges and a legend | `google_ml_kit.png` (cropped mark) | 3 min |
| 11 | Prompting Is Engineering | Better instructions, better engineering | Side-by-side weak vs structured prompt, with a "what's missing" list | — | 3 min |
| 12 | The CLEAR Framework | Structure your prompts | **Interactive** progressive reveal of C·L·E·A·R + a prompt that assembles live | — | 3 min |
| 13 | Set Up Your Team | Good engineering starts with good foundations | Six numbered foundations in one full-height column + a repository/branch/PR code panel | — | 2 min |
| 14 | From Sprint to Ship | Every sprint needs a deliverable | Five-step sprint rule + four phase columns with vertical rules and bottom-anchored deliverables | — | 2 min |
| 15 | Build Something That Matters | Ship something that works | Closing statement + five-line checklist + **two equal 260 px QR codes**: Free Developer Stack Handbook and socials, with written links | `handbook_qr.png`, `Arron_qr_socials_links.png` | 2 min |

---

## 3. Design system

**Theme.** Typographic minimalism on warm paper. Type, hairlines and
whitespace carry the hierarchy; boxes are functional exceptions (the MVP board,
code panels, image frames and overlays). The palette is beige-dominant; the
four Google colours appear only as small signals — eyebrow rules, progress,
category tags, diagram edges.

**Palette**

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F4F0E7` | Slide canvas |
| `--bg-2` | `#FBF8F1` | Inset surfaces, image mats |
| `--surface` | `#FFFFFF` | Functional panels only |
| `--ink` | `#1B1A16` | Primary type |
| `--ink-2` | `#666154` | Secondary type (5.4:1 on paper) |
| `--ink-3` | `#6F6759` | Metadata, captions, numerals (4.9:1 on paper) |
| `--line` | `#DBD3C2` | Hairlines |
| `--line-strong` | `#B9B09C` | Section rules |
| `--blue` | `#4285F4` | Primary accent |
| `--red` | `#EA4335` | Alert / "won't" |
| `--yellow` | `#FBBC05` | Caution / "could" |
| `--green` | `#34A853` | Positive / "must" |

**Type.** `Google Sans Flex` for display, `Inter` for body, `Google Sans Code`
with `JetBrains Mono` for code and labels, and a `system-ui` fallback stack so
the deck degrades gracefully offline. Fonts load from Google Fonts with
`display=swap`.

**Shape.** Sharp corners (`--radius: 0`) for frames, panels and images. Pills
(`--radius-pill`) only where something is interactive: chips, buttons and
controls. No shadows and no gradients except the two restrained Gemini
accents noted below.

**Motion.** A 28 px directional slide cross-fade, a staggered 24 px rise for
hero content, animated dashes on the architecture edges, and a slow sparkle
rotation. Everything is disabled under `prefers-reduced-motion: reduce`.

**The Gemini gradient.** The word "MVP" on slide 01 is **solid Google blue**,
not a gradient — it prints cleanly and avoids the generic "purple AI gradient"
look. The gradient tokens remain in `variables.css` for the diagram accents,
but no headline or large block uses them.

---

## 4. Stage and scaling

The deck renders on a fixed **1920 × 1080** canvas. A `transform: scale()`
fits it to any window while preserving 16:9, letterboxing the remainder. This
means the composition is identical for the speaker, the audience, a Google Meet
screen share, and the PDF export.

Verified at 1920×1080, 1600×900, 1440×900, 1366×768, 1280×800, 1024×768,
800×600 and 640×480 — the stage stays 16:9 with no clipped or overflowing
content at any of them.

---

## 5. Interaction design

Three interactive demonstrations, each with a keyboard path as well as a
pointer path.

| Slide | Interaction | Pointer | Keyboard |
|---|---|---|---|
| 05 | MVP board | The board opens on the suggested split; drag a chip between buckets or use its "move to" menu. "Clear board" empties every bucket for a live exercise. | Tab to a chip, use the select menu |
| 07 | Stack selector | Click "Try the stack selector" or press `S`; answer four questions | `S` to open, arrow keys between options, `Esc` to close |
| 12 | CLEAR framework | "Reveal next" / "Show all" / "Reset" buttons | `→` or `R` to reveal, `←` to go back |

**Slide 05 default.** The board is pre-filled in the suggested split —
Must 3, Should 3, Could 2, Won't 2 — so the slide communicates immediately.
"Clear board" returns all ten features to the unsorted pool for the live
exercise. The labels match the buttons in the interface.

**Slide 07 rule table** (implemented in `js/interactions/selector.js`):

| Platform | Runtime | AI | Backend | Recommended |
|---|---|---|---|---|
| Mobile / Web | Cloud | Generative | Simple | Flutter + Firebase + Gemini (via Firebase AI Logic) |
| Mobile / Web | Cloud | Generative | Advanced | Flutter + Cloud Run + Gemini API / Vertex AI |
| Mobile / Web | Cloud | Traditional | Simple | Flutter + Firebase + Vertex AI |
| Mobile / Web | Cloud | Traditional | Advanced | Flutter + Cloud Run + Vertex AI with BigQuery |
| Mobile | Offline | Generative | any | Flutter + Firebase + Google AI Edge |
| Mobile / Web | Offline | Traditional | any | Flutter + Firebase + ML Kit, then LiteRT |
| Web | Offline | any | any | Web front end + Firebase + ML Kit / LiteRT (flagged: hybrid with a cloud fallback is stronger) |

The selector always ends with: *"A starting point, not a rule. Validate it
against your problem statement."*

---

## 6. Architecture diagrams

Both diagrams are hand-built SVG on a fixed coordinate system, scaled to fit.
Edges are drawn from documented relationships only.

**Slide 07 — decision tree.** Root ("What does your problem need?") → six
rows: Mobile → Flutter, Backend → Firebase, Generative AI → Gemini, Computer
Vision → ML Kit, Offline AI → Google AI Edge, Custom Infrastructure → Google
Cloud. Each row pairs a cropped official mark with a text label and a
one-line "when to use it".

**Slide 10 — architecture.** Two zones, ON DEVICE and CLOUD:

```
Flutter app ──► ML Kit                     (on-device inference, LiteRT)
Flutter app ──► Firebase                   (data + auth)
Flutter app ──► Firebase AI Logic ──► Gemini
Firebase    ──► Google Cloud               (Cloud Run · Vertex AI · BigQuery)
```

These are the relationships Google's own documentation describes; the legend
under the diagram states each one in words.

---

## 7. Accessibility

- Every slide is a landmark with an `aria-label`; inactive slides are
  `aria-hidden` and `inert`.
- The slide counter is an `aria-live="polite"` region.
- All decorative graphics are `aria-hidden`; informative graphics carry
  `role="img"` and a descriptive `aria-label`.
- Every image has meaningful alt text.
- Visible focus rings (2 px blue, 3 px offset) on all interactive elements.
- Overlays trap focus and restore it on close.
- `prefers-reduced-motion` disables transitions, animations and the diagram
  dash animation.
- Text contrast on the paper canvas: body `#666154` ≈ 5.4:1, metadata
  `#6F6759` ≈ 4.9:1, primary ink `#1B1A16` ≈ 15.3:1. All pass WCAG AA.
  Hairlines are non-text and intentionally low contrast.

---

## 8. Content guardrails

These rules were applied while writing the slides.

1. **No invented achievements.** "182+ projects", "seven hackathon
   championship wins", "Top 1 AppBuildersPH", "Top 7 GitHub developers in the
   Philippines" and "Ship-A-Little winner, Shipaton 2026" are used exactly as
   supplied. No statistic was added.
2. **No duplicate titles.** "Former GDG on Campus HAU Chapter Lead" and
   "CEO / Chapter Lead" are shown once, as the first form.
3. **The emergency-reporting platform is labelled as an illustrative
   example**, in the slide itself and in the notes.
4. **`gemini_argon.png` is shown as supplied**; no claim is made about the
   product name printed in it.
5. **All external links are official documentation**, opened with
   `target="_blank" rel="noopener noreferrer"`, and none carry tracking
   parameters.
6. **The handbook QR is a supplied asset.** It points to the *Free Developer
   Stack Handbook* Google Doc, whose title was verified during QA. It is shown
   at the same 260 px size as the socials QR. The URL is also printed beside the
   QR and linked from slide 08.
