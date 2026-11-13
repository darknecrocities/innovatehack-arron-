# Speaker Notes — From Idea to MVP

**Session:** From Idea to MVP — Scoping, Stack Selection, and Building with Google AI Tools
**Event:** InnovateHack+ 2.0, organised by Google Developer Groups on Campus — Xavier Ateneo
**Speaker:** Arron Kian Parejas
**Date:** November 16, 2026 · **Platform:** Google Meet
**Length:** 15 slides · ~45 minutes of speaking · plus Q&A (target 40–45 min + Q&A)

> These notes are **not shown to the audience**. Press `N` during the talk to
> open them in the presenter panel, or read this file.
>
> This file is generated from `js/content/notes.js` by `tools/build-notes.mjs`,
> so the panel and this document always match.
>
> Every story here only uses facts supplied by the speaker. Bracketed
> `[Your detail]` markers are prompts for you to drop in your own specifics
> before you present.

---

### Slide 1 — From Idea to MVP

*Approximate time: 2 minutes*

**Main message**
This talk is a practical path from a raw idea to a working MVP.

**What to explain**
- Welcome the GDG on Campus Xavier Ateneo organizers and participants.
- Say what they will leave with: a scoping method, a stack decision process, and ways to use Google AI tools.

**Talking points**
- Hackathons reward finished, demonstrable work.
- We will go from problem to scope to stack to AI to team workflow.
- Everything today is meant to be used in your next 3–4 day sprint.

**Example or story**
Open with the cover collage: the portrait, the How & Tell stage photo, and the AppBuildersPH team. AI tools are changing how fast we can build, but the fundamentals of scoping and validating still decide who ships.

**Transition**
Before the how, a quick word on who is talking and why this advice comes from the field.

---

### Slide 2 — Meet Your Speaker

*Approximate time: 4 minutes*

**Main message**
The advice comes from repeated shipping, not theory.

**What to explain**
- Current roles: AI Engineer, ML Engineering Intern at FlyRank.ai, founder of DomoDomo, builder of Helios.
- Community: former GDG on Campus HAU Chapter Lead and open-source contributor.
- Recognition: Top 1 AppBuildersPH, Top 7 GitHub developers in the Philippines, seven hackathon championship wins, Ship-A-Little winner at Shipaton 2026, 182+ projects.

**Talking points**
- Point to the portrait and the cover collage from the previous slide.
- Point to the Helios page: an open-weight model with LiteRT and ONNX tags.
- Name the hackathon photos: Caffeine, SkyDev, and AppCon 2024 with BitPyre of Holy Angel University.

**Example or story**
Pick one hackathon photo and tell what the team cut from scope that weekend [Your detail]. Keep it under 60 seconds.

**Transition**
Winning and losing hackathons taught me the same lesson: great ideas are not enough.

---

### Slide 3 — The Hackathon Mindset

*Approximate time: 3 minutes*

**Main message**
Great ideas do not automatically become great products.

**What to explain**
- Walk through IDEA → EXECUTION → VALIDATION → PRODUCT.
- Cover the three mistakes: overengineering, choosing technology before requirements, shipping untested code.

**Talking points**
- Judges see a demo, not your architecture diagram.
- A stack chosen first forces the problem to fit the tool.
- Untested code fails at the worst moment: live.

**Example or story**
Share a time you saw a team (or yourself) hit one of these mistakes [Your detail]. Keep it concrete and brief.

**Transition**
The fix for all three starts earlier: with the problem.

---

### Slide 4 — Start With the Problem

*Approximate time: 3 minutes*

**Main message**
Define the problem before you choose the technology.

**What to explain**
- Three questions: who, what, why.
- Use the vague-to-clear example: disaster app versus a located report in under 30 seconds for flood-prone barangays.

**Talking points**
- A specific user makes decisions easier.
- A measurable outcome gives you a test for done.
- Say clearly that the example is illustrative.

**Example or story**
Ask the audience to type a vague idea in chat and rewrite one live into a problem statement.

**Transition**
With a clear problem, we can decide what the first version includes and what it does not.

---

### Slide 5 — Define Your MVP

*Approximate time: 4 minutes*

**Main message**
An MVP is the smallest thing that proves your idea works.

**What to explain**
- Explain Must, Should, Could, Won't (shown as Deferred in counts).
- Use the interactive board with the emergency reporting platform. It opens on the suggested split.

**Talking points**
- Must: one-tap report, location. Without these the product does not work.
- Be ruthless: analytics and social sharing rarely belong in the first demo.
- Use 'Clear board' to run the exercise live, then 'Suggested split' to restore the example.

**Example or story**
Let two volunteers sort features by dragging while you narrate trade-offs. Ask who would move a feature and why.

**Transition**
Once scope is clear, design the experience before writing code.

---

### Slide 6 — Design Before You Code

*Approximate time: 3 minutes*

**Main message**
Prototype the experience first.

**What to explain**
- PROMPT → DESIGN → PROTOTYPE → IMPLEMENT.
- Google Stitch for generating UI from prompts, Material Design for components and patterns, Google Fonts for typography.

**Talking points**
- Click the color swatches live: one accent token restyles the whole specimen.
- Changing a prototype is cheaper than changing code.
- Material gives accessibility and consistency for free.
- Verify current Stitch features before the talk; the product evolves.

**Example or story**
Describe how this very presentation uses a small design system: a palette and type scale defined once.

**Transition**
Design in hand, now choose the stack that fits the problem.

---

### Slide 7 — Choose Your Tech Stack

*Approximate time: 4 minutes*

**Main message**
The right tool depends on the problem.

**What to explain**
- Walk the tree: Mobile → Flutter, Backend → Firebase, Generative AI → Gemini, Computer Vision → ML Kit, Offline AI → Google AI Edge, Custom infrastructure → Google Cloud.
- Open the stack selector (S) and answer its four questions with the audience.

**Talking points**
- Each choice maps to a need, not a trend.
- Combine tools: Flutter + Firebase + Gemini is a common MVP stack.
- The selector gives a starting point, not a rule.

**Example or story**
Run the selector twice with opposite answers (cloud/GenAI vs offline/traditional ML) and compare results.

**Transition**
Let's zoom out to the whole toolkit.

---

### Slide 8 — The Google Developer Toolkit

*Approximate time: 3 minutes*

**Main message**
Google offers a connected toolkit for builders.

**What to explain**
- Design: Stitch, Material. Development: Flutter. Backend: Firebase.
- Generative AI: Gemini, Google AI Studio, Firebase AI Logic. Mobile ML: ML Kit, Google AI Edge, AI Edge Gallery, LiteRT.
- Cloud: Google Cloud, Cloud Run, Vertex AI, BigQuery.
- Point to the Free Stack Handbook link at the bottom: a directory of free and open-source tools, APIs and docs.

**Talking points**
- You do not need all of it. Pick the minimum.
- AI Studio is a fast place to try prompts before coding.
- Links on the slide go to official docs; the handbook is the take-home directory.

**Example or story**
Mention that Helios carries a LiteRT tag on Hugging Face, so on-device formats matter in real projects.

**Transition**
Now let's look at how an app actually uses AI safely.

---

### Slide 9 — Build With Google AI

*Approximate time: 4 minutes*

**Main message**
Add intelligence with a safe request pipeline.

**What to explain**
- APPLICATION → AI SERVICE → VALIDATION → RESPONSE.
- Gemini API, Firebase AI Logic, function calling, structured outputs, multimodal inputs.

**Talking points**
- Structured output makes responses parseable.
- Function calling lets the model request actions that your code controls.
- Never trust model output without validation.

**Example or story**
Use DomoDomo (an all-in-one agentic tool hub) as the example of an AI product where validation matters [Your detail on how DomoDomo validates outputs]. Reference Helios as the model side of your work.

**Transition**
A key architecture decision: where does the model run?

---

### Slide 10 — Cloud AI vs On-Device AI

*Approximate time: 3 minutes*

**Main message**
Choose cloud or on-device AI by latency, connectivity, privacy, and constraints.

**What to explain**
- Follow the diagram: Flutter app uses Firebase AI Logic to reach Gemini in the cloud, or ML Kit and LiteRT on the device.
- Walk the comparison table.

**Talking points**
- Cloud: strongest models, needs network, has cost.
- On-device: fast, private, offline, limited by hardware.
- Hybrid is valid: on-device first, cloud fallback.

**Example or story**
Ask: would a field responder app work with no signal? That points to on-device.

**Transition**
Whichever you choose, you will tell AI tools what to build, so let's talk prompts.

---

### Slide 11 — Prompting Is Engineering

*Approximate time: 3 minutes*

**Main message**
Prompting is engineering.

**What to explain**
- Compare the weak prompt with the structured prompt.
- Point out context, constraints, expected outcome, architecture, and testing.

**Talking points**
- Vague prompts produce generic code.
- Constraints prevent overengineering.
- Testing requirements make the output verifiable.

**Example or story**
Show how the same request improves when each part is added.

**Transition**
To make this repeatable, use a framework: CLEAR.

---

### Slide 12 — The CLEAR Framework

*Approximate time: 3 minutes*

**Main message**
CLEAR gives every prompt a repeatable structure.

**What to explain**
- Reveal C, L, E, A, R one at a time (press → or R).
- C Context, L Limitations, E Expected outcome, A Architecture, R Requirements.
- Point at the bottom of the slide: the prompt assembles itself as each letter is revealed.

**Talking points**
- Pause after each letter and ask for an example.
- Use the same example (flood report) across all five.
- Save your CLEAR prompts in the repo docs.

**Example or story**
Ask the audience for a limitation (e.g., 'no paid APIs') and add it live.

**Transition**
Good prompts need a good team workflow to land in.

---

### Slide 13 — Set Up Your Team

*Approximate time: 2 minutes*

**Main message**
Foundations prevent chaos in a short sprint.

**What to explain**
- Repository, feature branches, pull requests, environment variables, shared docs, task ownership.
- Walk the repo diagram.

**Talking points**
- Add a continuous skills folder (.agents/skills/SKILL.md) so AI coding agents learn and reuse your team conventions.
- Never commit secrets; commit .env.example.
- Small pull requests are easier to review.
- One owner per task avoids duplicate work.

**Example or story**
Share one workflow rule that saved your team time [Your detail].

**Transition**
Now put it on a calendar.

---

### Slide 14 — From Sprint to Ship

*Approximate time: 2 minutes*

**Main message**
Every sprint must end with a deliverable.

**What to explain**
- IDEATION → SETUP → BUILD → TEST → DEPLOY.
- A 3–4 day cycle: feature development, integration testing, bug fixing, demo preparation.
- Each phase ends with a named deliverable, and the band at the bottom is the definition of done.

**Talking points**
- Test integration early, not on the last night.
- Fix demo-breaking bugs first.
- Record a backup demo.

**Example or story**
Describe how you prepare a demo backup before presenting [Your detail].

**Transition**
Let me close with the four things to remember.

---

### Slide 15 — Build Something That Matters

*Approximate time: 2 minutes*

**Main message**
Build something that matters.

**What to explain**
- Understand the problem, choose the right tools, engineer the solution, validate everything, ship something that works.
- Invite questions and point to the two QR codes: the Free Developer Stack Handbook and the LinkedIn profile, with both URLs written out.

**Talking points**
- Repeat the five lines slowly.
- Tell the audience to scan the handbook QR for the full directory of free and open-source tools, APIs and docs.
- Share where to find Helios and DomoDomo.
- Thank GDG on Campus Xavier Ateneo.

**Example or story**
End with an invitation: pick one idea this week and write its problem statement.

**Transition**
Open the floor for Q&A.

---

## Timing at a glance

| Slide | Title | Minutes |
|---|---|---|
| 1 | From Idea to MVP | 2 |
| 2 | Meet Your Speaker | 4 |
| 3 | The Hackathon Mindset | 3 |
| 4 | Start With the Problem | 3 |
| 5 | Define Your MVP | 4 |
| 6 | Design Before You Code | 3 |
| 7 | Choose Your Tech Stack | 4 |
| 8 | The Google Developer Toolkit | 3 |
| 9 | Build With Google AI | 4 |
| 10 | Cloud AI vs On-Device AI | 3 |
| 11 | Prompting Is Engineering | 3 |
| 12 | The CLEAR Framework | 3 |
| 13 | Set Up Your Team | 2 |
| 14 | From Sprint to Ship | 2 |
| 15 | Build Something That Matters | 2 |
| | **Total** | **45** |

## Before you present

1. Replace every `[Your detail]` marker with your own story.
2. Open the deck once and press `?` to confirm the shortcut list.
3. Check that `stitch.withgoogle.com` still describes the current Stitch
   experience — Google products move quickly, and this slide makes a claim.
4. On slide 12, prepare a limitation from the audience in advance (for
   example "no paid APIs") so you can add it live.
5. Have the QR code ready; the audience can scan it from the shared screen.
