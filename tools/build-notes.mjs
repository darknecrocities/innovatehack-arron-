// Generates docs/SPEAKER_NOTES.md from js/content/notes.js so the document
// and the in-app notes panel can never drift apart.
import { writeFileSync } from "node:fs";
import { notes } from "../js/content/notes.js";
import { slides } from "../js/slides.js";

const total = notes.reduce((n, x) => n + x.minutes, 0);

const body = slides.map((s, i) => {
  const n = notes[i];
  const list = (a) => a.map((x) => `- ${x}`).join("\n");
  return `### Slide ${s.id} — ${s.title}

*Approximate time: ${n.minutes} minutes*

**Main message**
${n.message}

**What to explain**
${list(n.explain)}

**Talking points**
${list(n.points)}

**Example or story**
${n.story}

**Transition**
${n.transition}
`;
}).join("\n---\n\n");

const md = `# Speaker Notes — From Idea to MVP

**Session:** From Idea to MVP — Scoping, Stack Selection, and Building with Google AI Tools
**Event:** InnovateHack+ 2.0, organised by Google Developer Groups on Campus — Xavier Ateneo
**Speaker:** Arron Kian Parejas
**Date:** November 16, 2026 · **Platform:** Google Meet
**Length:** 15 slides · ~${total} minutes of speaking · plus Q&A (target 40–45 min + Q&A)

> These notes are **not shown to the audience**. Press \`N\` during the talk to
> open them in the presenter panel, or read this file.
>
> This file is generated from \`js/content/notes.js\` by \`tools/build-notes.mjs\`,
> so the panel and this document always match.
>
> Every story here only uses facts supplied by the speaker. Bracketed
> \`[Your detail]\` markers are prompts for you to drop in your own specifics
> before you present.

---

${body}
---

## Timing at a glance

| Slide | Title | Minutes |
|---|---|---|
${slides.map((s, i) => `| ${s.id} | ${s.title} | ${notes[i].minutes} |`).join("\n")}
| | **Total** | **${total}** |

## Before you present

1. Replace every \`[Your detail]\` marker with your own story.
2. Open the deck once and press \`?\` to confirm the shortcut list.
3. Check that \`stitch.withgoogle.com\` still describes the current Stitch
   experience — Google products move quickly, and this slide makes a claim.
4. On slide 12, prepare a limitation from the audience in advance (for
   example "no paid APIs") so you can add it live.
5. Have the QR code ready; the audience can scan it from the shared screen.
`;

writeFileSync(new URL("../docs/SPEAKER_NOTES.md", import.meta.url), md);
console.log(`docs/SPEAKER_NOTES.md written — ${total} minutes across ${slides.length} slides`);
