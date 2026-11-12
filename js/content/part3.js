const L = (href, t) => `<a class="link" href="${href}" target="_blank" rel="noopener noreferrer">${t}</a>`;

export const part3 = [
{
  id: 11, title: "Prompting Is Engineering", cls: "s11",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Prompting is engineering</div>
    <h2 class="h-lg">Better instructions.<br>Better engineering.</h2>
  </header>
  <div class="prompt-compare">
    <div class="prompt-side">
      <span class="tag r">Weak prompt</span>
      <p class="weak">"Build me an AI-powered application."</p>
      <ul class="x-list">
        <li>No context, so you get generic code</li>
        <li>No constraints, so it overengineers</li>
        <li>No definition of done, so you cannot test it</li>
      </ul>
    </div>
    <div class="prompt-side prompt-dark">
      <span class="tag b">Structured prompt</span>
      <pre class="code"><span class="k">Context:</span> Flutter app for barangay flood reports.
<span class="k">Constraints:</span> Firebase backend, 3-day sprint,
  works on low-end Android.
<span class="k">Expected outcome:</span> User submits a located
  report in under 30 seconds.
<span class="k">Architecture:</span> Flutter UI, Firestore,
  Gemini via Firebase AI Logic for triage.
<span class="k">Testing:</span> Unit tests for validation,
  one end-to-end submit flow.</pre>
      <p class="fine">Illustrative prompt for this talk.</p>
    </div>
  </div>`
},
{
  id: 12, title: "The CLEAR Framework", cls: "s12",
  html: `
  <header class="slide-head head-row">
    <div><div class="eyebrow">The CLEAR framework</div><h2 class="h-lg">Structure your prompts.</h2></div>
    <div class="ctrl"><button class="btn" data-clear="next">Reveal next (→ / R)</button><button class="btn ghost" data-clear="all">Show all</button><button class="btn ghost" data-clear="reset">Reset</button></div>
  </header>
  <div class="clear" id="clear-root"></div>
  <div class="clear-prompt">
    <span class="tag b">Prompt so far</span>
    <pre class="code" id="clear-text" aria-live="polite"></pre>
  </div>`
},
{
  id: 13, title: "Set Up Your Team", cls: "s13",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Set up your team</div>
    <h2 class="h-lg">Good engineering starts<br>with good foundations.</h2>
  </header>
  <div class="team-split">
    <ol class="rows foundations">
      <li><span class="idx">01</span><div><h3>GitHub repository</h3><p>One shared source of truth.</p></div></li>
      <li><span class="idx">02</span><div><h3>Feature branches</h3><p>One branch per task.</p></div></li>
      <li><span class="idx">03</span><div><h3>Pull requests</h3><p>Review before merging.</p></div></li>
      <li><span class="idx">04</span><div><h3>Environment variables</h3><p>Keys stay out of Git.</p></div></li>
      <li><span class="idx">05</span><div><h3>Shared documentation</h3><p>README, setup, decisions.</p></div></li>
      <li><span class="idx">06</span><div><h3>Task ownership</h3><p>Every task has one owner.</p></div></li>
    </ol>
    <pre class="code" aria-label="Example repository layout and pull request checklist"><span class="k">my-mvp/</span>
├── <span class="k">lib/</span>            <span class="c"># app code</span>
├── <span class="k">test/</span>           <span class="c"># unit tests</span>
├── <span class="k">docs/</span>           <span class="c"># decisions, setup</span>
├── .env.example    <span class="c"># names only, no secrets</span>
├── .gitignore      <span class="c"># ignores .env</span>
└── README.md

<span class="c">main        stable, always demo-ready
└─ feat/report-form   → PR → review → merge
└─ feat/triage-ai     → PR → review → merge</span>

<span class="k">PR checklist</span>
  [ ] branch named feat/…
  [ ] tests pass locally
  [ ] README updated
  [ ] no secrets committed</pre>
  </div>`
},
{
  id: 14, title: "From Sprint to Ship", cls: "s14",
  html: `
  <header class="slide-head">
    <div class="eyebrow">From sprint to ship</div>
    <h2 class="h-lg">Every sprint needs a deliverable.</h2>
  </header>
  <div class="flow">
    <div class="step"><i>01</i>IDEATION</div><div class="arrow">→</div>
    <div class="step"><i>02</i>SETUP</div><div class="arrow">→</div>
    <div class="step"><i>03</i>BUILD</div><div class="arrow">→</div>
    <div class="step"><i>04</i>TEST</div><div class="arrow">→</div>
    <div class="step"><i>05</i>DEPLOY</div>
  </div>
  <div class="sprint-grid">
    <div class="phase"><span class="tag b">Days 1–2</span><h3>Feature development</h3><p>Build the one core flow end to end.</p><span class="deliverable">Deliverable — one working flow</span></div>
    <div class="phase"><span class="tag r">Day 2–3</span><h3>Integration testing</h3><p>Connect UI, backend, and AI.</p><span class="deliverable">Deliverable — end-to-end run</span></div>
    <div class="phase"><span class="tag y">Day 3</span><h3>Bug fixing</h3><p>Fix what breaks the demo first.</p><span class="deliverable">Deliverable — a green demo</span></div>
    <div class="phase"><span class="tag g">Day 3–4</span><h3>Demo preparation</h3><p>Rehearse, record a backup, deploy.</p><span class="deliverable">Deliverable — deployed and recorded</span></div>
  </div>
  <div class="done-row">
    <span class="tag b">Definition of done</span>
    <ul>
      <li>One flow you can demo in 60 seconds</li>
      <li>A recorded backup video</li>
      <li>No secrets in the repository</li>
      <li>A README that says how to run it</li>
    </ul>
  </div>`
},
{
  id: 15, title: "Build Something That Matters", cls: "s15",
  html: `
  <div class="close">
    <div class="close-copy">
      <div class="eyebrow">Thank you · Q&amp;A</div>
      <h2 class="h-xl close-title">Build something<br>that matters.</h2>
      <ul class="checks">
        <li>Understand the problem.</li>
        <li>Choose the right tools.</li>
        <li>Engineer the solution.</li>
        <li>Validate everything.</li>
        <li>Ship something that works.</li>
      </ul>
    </div>
    <div class="close-side">
      <div class="handbook">
        <figure class="qr">
          <img src="assets/images/handbook_qr.png" alt="QR code linking to the Free Developer Stack Handbook" width="400" height="400">
          <figcaption class="caption">Scan to open</figcaption>
        </figure>
        <div class="handbook-copy">
          <span class="label">Free developer stack handbook</span>
          <b>200+ free &amp; open-source tools</b>
          <p>A link-rich directory of Google technologies, APIs, AI, UI/UX, and full-stack development.</p>
          ${L("https://docs.google.com/document/d/1hxBY6auIP5fya0ir9FhvKsGnrCcVYjRnaIrMpx8I9Nw/edit", "Open the handbook")}
        </div>
      </div>
      <div class="close-social">
        <figure class="qr">
          <img src="assets/images/Arron_qr_socials_links.png" alt="QR code linking to Arron Kian Parejas's LinkedIn profile" width="400" height="400">
          <figcaption class="caption">Socials</figcaption>
        </figure>
        <div>
          <div class="close-meta"><b>Arron Kian Parejas</b><span>AI Engineer</span></div>
          <div class="links">
            ${L("https://www.linkedin.com/in/arron-parejas/", "LinkedIn")}
            ${L("https://github.com/darknecrocities/Helios", "Helios on GitHub")}
            ${L("https://huggingface.co/Darknecrocities/Helios", "Helios on Hugging Face")}
            ${L("https://domodomo.site", "DomoDomo")}
          </div>
        </div>
      </div>
    </div>
  </div>`
}
];
