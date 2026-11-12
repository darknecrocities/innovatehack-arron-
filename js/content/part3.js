const L = (href, t) => `<a class="link" href="${href}" target="_blank" rel="noopener noreferrer">${t}</a>`;

export const part3 = [
{
  id: 11, title: "Prompting Is Engineering", cls: "s11",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Prompting is engineering</div>
    <h2 class="h-lg">Better Instructions. Better Engineering.</h2>
  </div>
  <div class="cmp">
    <div>
      <span class="tag r">Weak prompt</span>
      <pre class="code" style="flex:1;display:flex;align-items:center"><span class="weak">"Build me an AI-powered application."</span></pre>
      <ul class="missing">
        <li>No context, so you get generic code</li>
        <li>No constraints, so it overengineers</li>
        <li>No definition of done, so you cannot test it</li>
      </ul>
    </div>
    <div>
      <span class="tag g">Structured prompt</span>
      <pre class="code" style="flex:1"><span class="k">Context:</span> Flutter app for barangay flood reports.
<span class="k">Constraints:</span> Firebase backend, 3-day sprint,
  works on low-end Android.
<span class="k">Expected outcome:</span> User submits a located
  report in under 30 seconds.
<span class="k">Architecture:</span> Flutter UI, Firestore,
  Gemini via Firebase AI Logic for triage.
<span class="k">Testing:</span> Unit tests for validation,
  one end-to-end submit flow.</pre>
      <p class="small">Illustrative prompt for this talk.</p>
    </div>
  </div>`
},
{
  id: 12, title: "The CLEAR Framework", cls: "s12",
  html: `
  <div class="slide-head" style="flex-direction:row;justify-content:space-between;align-items:flex-end;max-width:none">
    <div style="display:flex;flex-direction:column;gap:18px"><div class="eyebrow">The CLEAR framework</div><h2 class="h-lg">Structure Your Prompts.</h2></div>
    <div class="ctrl"><button class="btn" data-clear="next">Reveal next (→ / R)</button><button class="btn ghost" data-clear="all">Show all</button><button class="btn ghost" data-clear="reset">Reset</button></div>
  </div>
  <div class="clear" id="clear-root"></div>
  <div class="clear-prompt">
    <span class="tag b">Prompt so far</span>
    <pre class="code" id="clear-text" aria-live="polite"></pre>
  </div>`
},
{
  id: 13, title: "Set Up Your Team", cls: "s13",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Set up your team</div>
    <h2 class="h-lg">Good Engineering Starts With Good Foundations.</h2>
  </div>
  <div class="body-row">
    <div class="eco">
      <div class="card"><span class="tag b">01</span><h3>GitHub repository</h3><p>One shared source of truth.</p></div>
      <div class="card"><span class="tag r">02</span><h3>Feature branches</h3><p>One branch per task.</p></div>
      <div class="card"><span class="tag g">03</span><h3>Pull requests</h3><p>Review before merging.</p></div>
      <div class="card"><span class="tag y">04</span><h3>Environment variables</h3><p>Keys stay out of Git.</p></div>
      <div class="card"><span class="tag b">05</span><h3>Shared documentation</h3><p>README, setup, decisions.</p></div>
      <div class="card"><span class="tag r">06</span><h3>Task ownership</h3><p>Every task has one owner.</p></div>
    </div>
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
  <div class="slide-head">
    <div class="eyebrow">From sprint to ship</div>
    <h2 class="h-lg">Every Sprint Needs a Deliverable.</h2>
  </div>
  <div class="flow">
    <div class="step"><i>01</i>IDEATION</div><div class="arrow">→</div>
    <div class="step"><i>02</i>SETUP</div><div class="arrow">→</div>
    <div class="step"><i>03</i>BUILD</div><div class="arrow">→</div>
    <div class="step"><i>04</i>TEST</div><div class="arrow">→</div>
    <div class="step"><i>05</i>DEPLOY</div>
  </div>
  <p class="lead">A three-to-four-day cycle:</p>
  <div class="sprint">
    <div class="card"><span class="tag b">Days 1–2</span><h3>Feature development</h3><p>Build the one core flow end to end.</p><div class="deliver"><i></i>Deliverable: one working flow</div></div>
    <div class="card"><span class="tag r">Day 2–3</span><h3>Integration testing</h3><p>Connect UI, backend, and AI.</p><div class="deliver"><i></i>Deliverable: end-to-end run</div></div>
    <div class="card"><span class="tag y">Day 3</span><h3>Bug fixing</h3><p>Fix what breaks the demo first.</p><div class="deliver"><i></i>Deliverable: a green demo</div></div>
    <div class="card"><span class="tag g">Day 3–4</span><h3>Demo preparation</h3><p>Rehearse, record a backup, deploy.</p><div class="deliver"><i></i>Deliverable: deployed and recorded</div></div>
  </div>
  <div class="done">
    <span class="tag b">Definition of done</span>
    <ul>
      <li><i></i>One flow you can demo in 60 seconds</li>
      <li><i></i>A recorded backup video</li>
      <li><i></i>No secrets in the repository</li>
      <li><i></i>A README that says how to run it</li>
    </ul>
  </div>`
},
{
  id: 15, title: "Build Something That Matters", cls: "s15",
  html: `
  <svg class="sparkle" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill="url(#gemGrad)"/><defs><linearGradient id="gemGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4285F4"/><stop offset=".55" stop-color="#D97C86"/><stop offset="1" stop-color="#FBBC05"/></linearGradient></defs></svg>
  <div class="close">
    <div>
      <div class="eyebrow">Thank you · Q&amp;A</div>
      <h2 class="h-xl" style="font-size:118px;margin-top:30px">Build Something<br>That Matters.</h2>
      <ul class="checks" style="margin-top:34px">
        <li>Understand the problem.</li><li>Choose the right tools.</li><li>Engineer the solution.</li><li>Validate everything.</li><li>Ship something that works.</li>
      </ul>
    </div>
    <div style="display:flex;flex-direction:column;gap:24px">
      <div class="qr"><img src="assets/images/Arron_qr_socials_links.png" alt="QR code linking to Arron Kian Parejas's LinkedIn profile" width="400" height="400"><b style="font:500 28px var(--font-display)">Arron Kian Parejas</b><span class="small">Scan for socials and links</span></div>
      <div class="links">
        ${L("https://www.linkedin.com/in/arron-parejas/", "linkedin.com/in/arron-parejas")}
        ${L("https://github.com/darknecrocities/Helios", "Helios on GitHub")}
        ${L("https://huggingface.co/Darknecrocities/Helios", "Helios on Hugging Face")}
        ${L("https://domodomo.site", "domodomo.site")}
      </div>
    </div>
  </div>`
}
];
