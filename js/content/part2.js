const L = (href, t) => `<a class="link" href="${href}" target="_blank" rel="noopener noreferrer">${t}</a>`;

export const part2 = [
{
  id: 6, title: "Design Before You Code", cls: "s6",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Design before you code</div>
    <h2 class="h-lg">Prototype the Experience First.</h2>
  </div>
  <div class="flow">
    <div class="step"><i>01</i>PROMPT<small>Describe the screen</small></div><div class="arrow">→</div>
    <div class="step"><i>02</i>DESIGN<small>Generate UI options</small></div><div class="arrow">→</div>
    <div class="step"><i>03</i>PROTOTYPE<small>Click through the flow</small></div><div class="arrow">→</div>
    <div class="step"><i>04</i>IMPLEMENT<small>Build in code</small></div>
  </div>
  <div class="ui-shots">
    <div class="card"><span class="tag b">Google Stitch</span><h3>From prompt to UI</h3><p>Turn a text description into screen designs you can iterate on.</p>${L("https://stitch.withgoogle.com", "stitch.withgoogle.com")}</div>
    <div class="card"><span class="tag r">Material Design</span><h3>Components and tokens</h3><p>Proven patterns for color, shape, motion, and accessibility.</p>${L("https://m3.material.io", "m3.material.io")}</div>
    <div class="card"><span class="tag g">Google Fonts</span><h3>Type that ships</h3><p>Free, fast, open-source fonts for web and mobile apps.</p>${L("https://fonts.google.com", "fonts.google.com")}</div>
  </div>
  <div class="mock" aria-label="Illustration of a design system: color swatches and a type sample">
    <div class="swatches"><i style="background:#4285F4"></i><i style="background:#EA4335"></i><i style="background:#FBBC05"></i><i style="background:#34A853"></i><i style="background:#F5F1E8;border:1.5px solid var(--line)"></i></div>
    <div style="font:500 44px var(--font-display)">Report an emergency</div>
    <div class="mono small">Inter · 16/24 · 4.5:1 contrast</div>
    <div style="margin-left:auto" class="btn">Send report</div>
  </div>`
},
{
  id: 7, title: "Choose Your Tech Stack", cls: "s7",
  html: `
  <div class="slide-head" style="flex-direction:row;justify-content:space-between;align-items:flex-end;max-width:none">
    <div style="display:flex;flex-direction:column;gap:18px"><div class="eyebrow">Choose your tech stack</div><h2 class="h-lg">The Right Tool Depends on the Problem.</h2></div>
    <button class="btn" data-open="selector">Try the stack selector (S)</button>
  </div>
  <div id="tree-root" style="flex:1;min-height:0"></div>`
},
{
  id: 8, title: "The Google Developer Toolkit", cls: "s8",
  html: `
  <div class="slide-head">
    <div class="eyebrow">The Google developer toolkit</div>
    <h2 class="h-lg">A Toolkit for Modern Builders.</h2>
  </div>
  <div class="eco">
    <div class="card"><span class="tag b">Design</span><div class="chips"><span class="chip"><i class="dot b"></i>Stitch</span><span class="chip"><i class="dot r"></i>Material Design</span></div><p>Describe a screen and get editable designs, then build on proven components.</p></div>
    <div class="card"><span class="tag r">Development</span><div class="chips"><img class="logo" src="assets/images/flutter_logo.png" alt="Flutter logo" width="953" height="272"></div><p>One codebase for Android, iOS, and web, with a fast UI loop.</p></div>
    <div class="card"><span class="tag y">Backend</span><div class="chips"><img class="logo" src="assets/images/firebase_logo.png" alt="Firebase logo" width="640" height="640" style="max-height:118px"></div><p>Auth, database, storage, and functions without running servers.</p></div>
    <div class="card"><span class="tag g">Generative AI</span><div class="chips"><span class="chip"><i class="dot b"></i>Gemini</span><span class="chip">Google AI Studio</span><span class="chip">Firebase AI Logic</span></div><p>Prompt, test, and ship generative models from a client or a backend.</p></div>
    <div class="card"><span class="tag b">Mobile ML</span><div class="chips"><img class="logo" src="assets/images/google_ml_kit.png" alt="Google ML Kit logo" width="1600" height="468" style="max-height:70px"><span class="chip">Google AI Edge</span><span class="chip">AI Edge Gallery</span><span class="chip">LiteRT</span></div><p>Ready-made on-device APIs, or run your own model with LiteRT.</p></div>
    <div class="card"><span class="tag r">Cloud</span><div class="chips"><img class="logo" src="assets/images/Google_cloud.png" alt="Google Cloud logo" width="225" height="225" style="max-height:86px"><span class="chip">Cloud Run</span><span class="chip">Vertex AI</span><span class="chip">BigQuery</span></div><p>Custom services, model training, and analytics at scale.</p></div>
  </div>
  <div class="resources">
    <span class="tag b">Official docs</span>
    ${L("https://ai.google.dev/gemini-api/docs", "Gemini API")}${L("https://aistudio.google.com", "AI Studio")}${L("https://firebase.google.com/docs/ai-logic", "Firebase AI Logic")}${L("https://developers.google.com/ml-kit", "ML Kit")}${L("https://ai.google.dev/edge", "Google AI Edge")}${L("https://github.com/google-ai-edge/gallery", "AI Edge Gallery")}${L("https://docs.flutter.dev", "Flutter")}${L("https://firebase.google.com/docs", "Firebase")}${L("https://cloud.google.com/run/docs", "Cloud Run")}${L("https://cloud.google.com/vertex-ai/docs", "Vertex AI")}${L("https://cloud.google.com/bigquery/docs", "BigQuery")}${L("https://stitch.withgoogle.com", "Stitch")}${L("https://m3.material.io", "Material Design")}${L("https://fonts.google.com", "Google Fonts")}
  </div>`
},
{
  id: 9, title: "Build With Google AI", cls: "s9",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Build with Google AI</div>
    <h2 class="h-lg">Give Your Application Intelligence.</h2>
  </div>
  <div class="flow" id="ai-flow">
    <div class="step"><i>01</i>APPLICATION</div><div class="arrow">→</div>
    <div class="step"><i>02</i>AI SERVICE</div><div class="arrow">→</div>
    <div class="step"><i>03</i>VALIDATION</div><div class="arrow">→</div>
    <div class="step"><i>04</i>RESPONSE</div>
  </div>
  <div class="split">
    <div class="caps">
      <div class="card"><h3>Gemini API</h3><p>Call Gemini models from your backend.</p>${L("https://ai.google.dev/gemini-api/docs", "Docs")}</div>
      <div class="card"><h3>Firebase AI Logic</h3><p>Call Gemini from mobile and web apps.</p>${L("https://firebase.google.com/docs/ai-logic", "Docs")}</div>
      <div class="card"><h3>Function calling</h3><p>The model requests; your code acts.</p>${L("https://ai.google.dev/gemini-api/docs/function-calling", "Docs")}</div>
      <div class="card"><h3>Structured outputs</h3><p>JSON that matches your schema.</p>${L("https://ai.google.dev/gemini-api/docs/structured-output", "Docs")}</div>
      <div class="card" style="grid-column:span 2"><h3>Multimodal AI</h3><p>Text, images, audio, and video in one request. Always validate what comes back.</p>${L("https://ai.google.dev/gemini-api/docs/vision", "Docs")}</div>
    </div>
    <div class="shots">
      <figure class="shot gemini-shot"><img src="assets/images/gemini_argon.png" alt="Gemini 4 Argon, Google Cloud title card with the Gemini sparkle logo" width="2436" height="1200"><figcaption class="cap">Gemini on Google Cloud</figcaption></figure>
      <figure class="shot" style="aspect-ratio:auto"><img src="assets/images/appbuilders_top1.png" alt="DomoDomo, an all-in-one agentic tool hub, ranked first on the AppBuilders leaderboard" width="2104" height="752"><figcaption class="cap">DomoDomo</figcaption></figure>
      <figure class="shot"><img src="assets/images/helios_hf_downloadscount.png" alt="Helios open-weight model page on Hugging Face" width="2048" height="1160" style="object-position:top"><figcaption class="cap">Helios</figcaption></figure>
    </div>
  </div>`
},
{
  id: 10, title: "Cloud AI vs On-Device AI", cls: "s10",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Cloud AI vs on-device AI</div>
    <h2 class="h-lg">Where Should Your AI Run?</h2>
  </div>
  <div class="body-row">
    <div class="arch-wrap">
      <div id="arch-root" style="min-height:0"></div>
      <ul class="arch-legend">
        <li><span class="key green"></span>Flutter → ML Kit: on-device inference</li>
        <li><span class="key"></span>Flutter → Firebase: data + auth</li>
        <li><span class="key"></span>Flutter → Firebase AI Logic → Gemini</li>
        <li><span class="key"></span>Firebase → Google Cloud: services</li>
      </ul>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px;min-height:0">
      <table class="table" aria-label="Cloud versus on-device AI comparison">
        <thead><tr><th></th><th>Cloud</th><th>On-device</th></tr></thead>
        <tbody>
          <tr><td>Latency</td><td>Network round trip</td><td>Immediate, local</td></tr>
          <tr><td>Connectivity</td><td>Internet required</td><td>Works offline</td></tr>
          <tr><td>Privacy</td><td>Data leaves the device</td><td>Data stays local</td></tr>
          <tr><td>Constraints</td><td>Usage costs and quotas</td><td>Memory, battery, model size</td></tr>
        </tbody>
      </table>
      <div class="chips">
        <span class="chip"><i class="dot b"></i>Cloud: Gemini API</span>
        <span class="chip"><i class="dot g"></i>Device: ML Kit · AI Edge · LiteRT</span>
      </div>
      <p class="small">Helios ships LiteRT and ONNX tags on Hugging Face — on-device formats matter for real projects.</p>
    </div>
  </div>`
}
];
