const L = (href, t) => `<a class="link" href="${href}" target="_blank" rel="noopener noreferrer">${t}</a>`;

export const part2 = [
{
  id: 6, title: "Design Before You Code", cls: "s6",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Design before you code</div>
    <h2 class="h-lg">Prototype the experience first.</h2>
  </header>
  <div class="flow">
    <div class="step"><i>01</i>PROMPT<small>Describe the screen</small></div><div class="arrow">→</div>
    <div class="step"><i>02</i>DESIGN<small>Generate UI options</small></div><div class="arrow">→</div>
    <div class="step"><i>03</i>PROTOTYPE<small>Click through the flow</small></div><div class="arrow">→</div>
    <div class="step"><i>04</i>IMPLEMENT<small>Build in code</small></div>
  </div>
  <div class="design-lab">
    <div class="resources-list">
      <div class="resource"><span class="tag b">Google Stitch</span><div><h3>From prompt to UI</h3><p>Turn a text description into screen designs you can iterate on.</p>${L("https://stitch.withgoogle.com", "stitch.withgoogle.com")}</div></div>
      <div class="resource"><span class="tag r">Material Design</span><div><h3>Components and tokens</h3><p>Proven patterns for color, shape, motion, and accessibility.</p>${L("https://m3.material.io", "m3.material.io")}</div></div>
      <div class="resource"><span class="tag g">Google Fonts</span><div><h3>Type that ships</h3><p>Free, fast, open-source fonts for web and mobile apps.</p>${L("https://fonts.google.com", "fonts.google.com")}</div></div>
    </div>
    <div class="specimen" aria-label="Illustration of a design system: color swatches and a type sample">
      <div class="specimen-head"><span class="label">Type specimen</span><span class="label">Inter</span></div>
      <div class="specimen-display" aria-hidden="true">Aa</div>
      <div class="specimen-type">Report an emergency</div>
      <div class="specimen-foot">
        <div class="swatches" id="palette" role="group" aria-label="Accent color"><button type="button" class="swatch" data-color="#4285F4" aria-label="Apply blue accent" aria-pressed="false" style="--sw:#4285F4"></button><button type="button" class="swatch" data-color="#EA4335" aria-label="Apply red accent" aria-pressed="false" style="--sw:#EA4335"></button><button type="button" class="swatch" data-color="#FBBC05" aria-label="Apply yellow accent" aria-pressed="false" style="--sw:#FBBC05"></button><button type="button" class="swatch" data-color="#34A853" aria-label="Apply green accent" aria-pressed="false" style="--sw:#34A853"></button><button type="button" class="swatch" data-color="" aria-label="Apply default accent" aria-pressed="false" style="--sw:#F4F0E7"></button></div>
        <div class="label">16/24 · 4.5:1 contrast</div>
        <button type="button" class="btn ghost specimen-btn">Send report</button>
      </div>
    </div>
  </div>`
},
{
  id: 7, title: "Choose Your Tech Stack", cls: "s7",
  html: `
  <header class="slide-head head-row">
    <div><div class="eyebrow">Choose your tech stack</div><h2 class="h-lg">The right tool depends<br>on the problem.</h2></div>
    <button class="btn" data-open="selector">Try the stack selector (S)</button>
  </header>
  <div id="tree-root" class="tree-root"></div>`
},
{
  id: 8, title: "The Google Developer Toolkit", cls: "s8",
  html: `
  <header class="slide-head">
    <div class="eyebrow">The Google developer toolkit</div>
    <h2 class="h-lg">A toolkit for modern builders.</h2>
  </header>
  <div class="eco">
    <div class="tool"><span class="tag b">Design</span><h3>Design</h3><p>Describe a screen and get editable designs, then build on proven components.</p><div class="chips"><span class="chip">Stitch</span><span class="chip">Material Design</span><span class="chip">Google Fonts</span></div></div>
    <div class="tool"><span class="tag r">Development</span><h3>Development</h3><p>One codebase for Android, iOS, and web, with a fast UI loop.</p><div class="chips"><img class="logo" src="assets/images/flutter_logo.png" alt="Flutter logo" width="953" height="272"></div></div>
    <div class="tool"><span class="tag y">Backend</span><h3>Backend</h3><p>Auth, database, storage, and functions without running servers.</p><div class="chips"><img class="logo tall" src="assets/images/firebase_logo.png" alt="Firebase logo" width="640" height="640"></div></div>
    <div class="tool"><span class="tag g">Generative AI</span><h3>Generative AI</h3><p>Prompt, test, and ship generative models from a client or a backend.</p><div class="chips"><span class="chip">Gemini</span><span class="chip">Google AI Studio</span><span class="chip">Firebase AI Logic</span></div></div>
    <div class="tool"><span class="tag b">Mobile ML</span><h3>Mobile ML</h3><p>Ready-made on-device APIs, or run your own model with LiteRT.</p><div class="chips"><img class="logo" src="assets/images/google_ml_kit.png" alt="Google ML Kit logo" width="1600" height="468"><span class="chip">Google AI Edge</span><span class="chip">LiteRT</span></div></div>
    <div class="tool"><span class="tag r">Cloud</span><h3>Cloud</h3><p>Custom services, model training, and analytics at scale.</p><div class="chips"><img class="logo tall" src="assets/images/Google_cloud.png" alt="Google Cloud logo" width="225" height="225"><span class="chip">Cloud Run</span><span class="chip">Vertex AI</span><span class="chip">BigQuery</span></div></div>
  </div>
  <div class="resources">
    <span class="tag b">Official docs</span>
    ${L("https://ai.google.dev/gemini-api/docs", "Gemini API")}${L("https://aistudio.google.com", "AI Studio")}${L("https://firebase.google.com/docs/ai-logic", "Firebase AI Logic")}${L("https://developers.google.com/ml-kit", "ML Kit")}${L("https://ai.google.dev/edge", "Google AI Edge")}${L("https://docs.flutter.dev", "Flutter")}${L("https://firebase.google.com/docs", "Firebase")}${L("https://cloud.google.com/run/docs", "Cloud Run")}${L("https://stitch.withgoogle.com", "Stitch")}${L("https://docs.google.com/document/d/1hxBY6auIP5fya0ir9FhvKsGnrCcVYjRnaIrMpx8I9Nw/edit", "Free Stack Handbook")}
  </div>`
},
{
  id: 9, title: "Build With Google AI", cls: "s9",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Build with Google AI</div>
    <h2 class="h-lg">Give your application intelligence.</h2>
  </header>
  <div class="flow" id="ai-flow">
    <div class="step"><i>01</i>APPLICATION</div><div class="arrow">→</div>
    <div class="step"><i>02</i>AI SERVICE</div><div class="arrow">→</div>
    <div class="step"><i>03</i>VALIDATION</div><div class="arrow">→</div>
    <div class="step"><i>04</i>RESPONSE</div>
  </div>
  <div class="ai-split">
    <ul class="rows capabilities">
      <li><span class="idx">01</span><div><h3>Gemini API</h3><p>Call Gemini models from your backend.</p>${L("https://ai.google.dev/gemini-api/docs", "Docs")}</div></li>
      <li><span class="idx">02</span><div><h3>Firebase AI Logic</h3><p>Call Gemini from mobile and web apps.</p>${L("https://firebase.google.com/docs/ai-logic", "Docs")}</div></li>
      <li><span class="idx">03</span><div><h3>Function calling</h3><p>The model requests; your code acts.</p>${L("https://ai.google.dev/gemini-api/docs/function-calling", "Docs")}</div></li>
      <li><span class="idx">04</span><div><h3>Structured outputs</h3><p>JSON that matches your schema.</p>${L("https://ai.google.dev/gemini-api/docs/structured-output", "Docs")}</div></li>
      <li><span class="idx">05</span><div><h3>Multimodal AI</h3><p>Text, images, audio, and video in one request. Always validate what comes back.</p>${L("https://ai.google.dev/gemini-api/docs/vision", "Docs")}</div></li>
    </ul>
    <div class="shots">
      <figure class="shot dark black"><img src="assets/images/gemini_argon.png" alt="Gemini 4 Argon, Google Cloud title card with the Gemini sparkle logo" width="2436" height="1200"><figcaption class="cap">Gemini on Google Cloud</figcaption></figure>
      <figure class="shot"><img src="assets/images/appbuilders_top1.png" alt="DomoDomo, an all-in-one agentic tool hub, ranked first on the AppBuilders leaderboard" width="2104" height="752"><figcaption class="cap">DomoDomo</figcaption></figure>
      <figure class="shot dark"><img src="assets/images/helios_hf_downloadscount.png" alt="Helios open-weight model page on Hugging Face" width="2048" height="1160"><figcaption class="cap">Helios</figcaption></figure>
    </div>
  </div>`
},
{
  id: 10, title: "Cloud AI vs On-Device AI", cls: "s10",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Cloud AI vs on-device AI</div>
    <h2 class="h-lg">Where should your AI run?</h2>
  </header>
  <div class="arch-split">
    <div class="arch-wrap">
      <div id="arch-root" style="min-height:0"></div>
      <ul class="arch-legend">
        <li><span class="key green"></span>Flutter → ML Kit: on-device inference</li>
        <li><span class="key"></span>Flutter → Firebase: data + auth</li>
        <li><span class="key"></span>Flutter → Firebase AI Logic → Gemini</li>
        <li><span class="key"></span>Firebase → Google Cloud: services</li>
      </ul>
    </div>
    <div class="arch-side">
      <table class="table" aria-label="Cloud versus on-device AI comparison">
        <thead><tr><th></th><th>Cloud</th><th>On-device</th></tr></thead>
        <tbody>
          <tr><td>Latency</td><td>Network round trip</td><td>Immediate, local</td></tr>
          <tr><td>Connectivity</td><td>Internet required</td><td>Works offline</td></tr>
          <tr><td>Privacy</td><td>Data leaves the device</td><td>Data stays local</td></tr>
          <tr><td>Constraints</td><td>Usage costs and quotas</td><td>Memory, battery, model size</td></tr>
        </tbody>
      </table>
      <div class="arch-labels">
        <span class="label">Cloud · Gemini API</span>
        <span class="label">Device · ML Kit / AI Edge / LiteRT</span>
      </div>
      <p class="small">Helios ships LiteRT and ONNX tags on Hugging Face — on-device formats matter for real projects.</p>
    </div>
  </div>`
}
];
