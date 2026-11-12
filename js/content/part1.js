export const part1 = [
{
  id: 1, title: "From Idea to MVP", cls: "s1",
  html: `
  <div class="hero">
    <div>
      <div class="eyebrow" data-rise style="--i:0">InnovateHack+ 2.0 · GDG on Campus Xavier Ateneo</div>
      <h1 class="h-xl" data-rise style="--i:1;margin-top:34px">From Idea<br>to <span class="grad-text">MVP</span></h1>
      <p class="lead" data-rise style="--i:2;margin-top:34px;max-width:820px">Scoping, Stack Selection, and Building with Google AI Tools</p>
      <div class="meta" data-rise style="--i:3">
        <div><b>Arron Kian Parejas</b><span class="small">AI Engineer</span></div>
        <div><b>November 16, 2026</b><span class="small">Google Meet</span></div>
      </div>
      <div class="rule" data-rise style="--i:4">
        <i style="background:#4285F4"></i><i style="background:#EA4335"></i><i style="background:#FBBC05"></i><i style="background:#34A853"></i>
        <span>45 minutes · 15 slides · bring your own idea</span>
      </div>
    </div>
    <div class="hero-art" data-rise style="--i:2">
      <figure class="shot" style="aspect-ratio:2436/1200">
        <img src="assets/images/gemini_argon.png" alt="Gemini 4 Argon, Google Cloud title card with the Gemini sparkle logo" width="2436" height="1200">
      </figure>
    </div>
  </div>`
},
{
  id: 2, title: "Meet Your Speaker", cls: "s2",
  html: `
  <div class="slide-head" style="max-width:none">
    <div class="eyebrow">Meet your speaker</div>
    <h2 style="font:500 60px/1.05 var(--font-display);letter-spacing:-.025em">A Builder. An Engineer. An Open-Source Contributor.</h2>
  </div>
  <div class="grid2">
    <figure class="photo portrait"><img src="assets/images/optimized/arron_profile.png" alt="Dithered black-and-white portrait of Arron Kian Parejas" width="720" height="900"></figure>
    <div class="mid">
      <ul class="roles">
        <li>AI Engineer</li>
        <li>ML Engineering Intern @ FlyRank.ai</li>
        <li>Founder of DomoDomo</li>
        <li>Builder of Helios, an open-source language model</li>
        <li>Former GDG on Campus HAU Chapter Lead</li>
        <li>Open-source contributor</li>
        <li>Ship-A-Little winner, Shipaton 2026</li>
      </ul>
      <div class="stats">
        <div class="stat"><b>Top 1</b><span>AppBuildersPH</span></div>
        <div class="stat"><b>Top 7</b><span>GitHub · Philippines</span></div>
        <div class="stat"><b>7</b><span>hackathon wins</span></div>
        <div class="stat"><b>182+</b><span>projects</span></div>
      </div>
      <figure class="shot light strip"><img src="assets/images/appbuilders_top1.png" alt="AppBuilders community leaderboard with DomoDomo ranked first, plus DomoDomo website and event visuals" width="2104" height="752"></figure>
    </div>
    <div class="right">
      <figure class="photo wide"><img src="assets/images/optimized/caffeine_hackathon.jpg" alt="Caffeine hackathon stage group holding first-place certificates" width="1600" height="1066"><figcaption class="cap">Caffeine Hackathon</figcaption></figure>
      <figure class="shot yellow"><img src="assets/images/bitpyre_hackathon.jpg" alt="AppCon 2024 Top 20 Teams: BitPyre of Holy Angel University on stage" width="940" height="788"></figure>
      <figure class="photo"><img src="assets/images/optimized/skydev_hackathon.jpg" alt="SkyDev Automate the Future hackathon group holding certificates" width="1600" height="1066" style="object-position:60% 50%"><figcaption class="cap">SkyDev</figcaption></figure>
      <figure class="shot wide"><img src="assets/images/helios_hf_downloadscount.png" alt="Helios model page on Hugging Face showing 2,256 downloads last month" width="2048" height="1160" style="object-position:top"><figcaption class="cap">Helios on Hugging Face</figcaption></figure>
    </div>
  </div>`
},
{
  id: 3, title: "The Hackathon Mindset", cls: "s3",
  html: `
  <div class="slide-head">
    <div class="eyebrow">The hackathon mindset</div>
    <h2 class="h-lg">Great Ideas Don't Automatically Become Great Products.</h2>
  </div>
  <div class="flow" data-stagger>
    <div class="step"><i>01</i>IDEA</div><div class="arrow">→</div>
    <div class="step"><i>02</i>EXECUTION</div><div class="arrow">→</div>
    <div class="step"><i>03</i>VALIDATION</div><div class="arrow">→</div>
    <div class="step"><i>04</i>PRODUCT</div>
  </div>
  <div class="body-row">
    <div class="mistakes">
      <div class="mistake"><span class="num">1</span><div><h3>Overengineering</h3><p>A perfect system nobody can demo.</p></div></div>
      <div class="mistake"><span class="num">2</span><div><h3>Technology before requirements</h3><p>Picking the stack before knowing the problem.</p></div></div>
      <div class="mistake"><span class="num">3</span><div><h3>Shipping untested code</h3><p>Features that fail live on demo day.</p></div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1.3fr 1fr;gap:14px;min-height:0">
      <figure class="photo" style="grid-column:span 2"><img src="assets/images/optimized/caffeine_hackathon.jpg" alt="Team on stage at the Caffeine hackathon" width="1600" height="1066" style="object-position:50% 50%"></figure>
      <figure class="photo"><img src="assets/images/optimized/skydev_hackathon.jpg" alt="Participants with certificates at SkyDev hackathon" width="1600" height="1066"></figure>
      <figure class="shot yellow"><img src="assets/images/bitpyre_hackathon.jpg" alt="BitPyre team at AppCon 2024 Top 20 Teams" width="940" height="788"></figure>
    </div>
  </div>`
},
{
  id: 4, title: "Start With the Problem", cls: "s4",
  html: `
  <div class="slide-head">
    <div class="eyebrow">Start with the problem</div>
    <h2 class="h-lg">Understand the Problem Before Choosing the Technology.</h2>
  </div>
  <div class="trio">
    <div class="card"><span class="tag b">Who</span><h3>Who are we helping?</h3><p>A specific person, not "everyone".</p></div>
    <div class="card"><span class="tag r">What</span><h3>What problem are we solving?</h3><p>One pain point you can observe.</p></div>
    <div class="card"><span class="tag g">Why</span><h3>Why does it matter?</h3><p>The cost of leaving it unsolved.</p></div>
  </div>
  <div class="ps">
    <div class="card flat" style="justify-content:center">
      <span class="tag r">Vague idea</span>
      <p class="quote">"Let's build an app for disasters."</p>
      <ul class="vague-list">
        <li>Who? Everyone.</li>
        <li>Problem? "Disasters".</li>
        <li>Why? Because it's a good idea.</li>
      </ul>
    </div>
    <div class="arrow">→</div>
    <div class="card" style="justify-content:center">
      <span class="tag g">Clear problem statement</span>
      <p class="quote" style="font-size:30px">Barangay residents in flood-prone areas can't report emergencies fast enough, so responders lack accurate locations. We help them send a located report in under 30 seconds.</p>
      <div class="answer">
        <div><b>Who</b> Residents of flood-prone barangays</div>
        <div><b>What</b> A located report in under 30 seconds</div>
        <div><b>Why</b> Responders lose time and act on the wrong location</div>
      </div>
      <p class="small">Illustrative example for this talk.</p>
    </div>
  </div>`
},
{
  id: 5, title: "Define Your MVP", cls: "s5",
  html: `
  <div class="slide-head" style="flex-direction:row;justify-content:space-between;align-items:flex-end;max-width:none">
    <div style="display:flex;flex-direction:column;gap:18px"><div class="eyebrow">Define your MVP</div><h2 class="h-lg">Build Less. Deliver More.</h2></div>
    <div class="ctrl"><span class="small">Emergency reporting platform</span><button class="btn ghost" data-mvp="suggest">Show suggested</button><button class="btn ghost" data-mvp="reset">Reset</button></div>
  </div>
  <div class="mvp" id="mvp-root"></div>`
}
];
