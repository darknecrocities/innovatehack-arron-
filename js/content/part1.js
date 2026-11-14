export const part1 = [
{
  id: 1, title: "From Idea to MVP", cls: "s1",
  html: `
  <div class="cover">
    <div class="cover-copy">
      <div class="eyebrow" data-rise style="--i:0">InnovateHack+ 2.0 · GDG on Campus Xavier Ateneo</div>
      <h1 class="h-xl" data-rise style="--i:1">From Idea<br>to <span class="grad-text">MVP</span></h1>
      <p class="lead" data-rise style="--i:2">Scoping, Stack Selection, and Building with Google AI Tools</p>
      <div class="cover-meta" data-rise style="--i:3">
        <div><span class="label">Speaker</span><b>Arron Kian Parejas</b><span>AI Engineer</span></div>
        <div><span class="label">Date</span><b>November 16, 2026</b><span>Google Meet</span></div>
      </div>
      <div class="rule" data-rise style="--i:4">
        <i style="background:#4285F4"></i><i style="background:#EA4335"></i><i style="background:#FBBC05"></i><i style="background:#34A853"></i>
        <span>From idea to working product</span>
      </div>
    </div>
    <figure class="cover-art" data-rise style="--i:2" aria-label="Collage of Arron Kian Parejas speaking at How and Tell Meetup 2 and with the AppBuildersPH team">
      <div class="cover-collage">
        <figure class="stack stack-pfp">
          <img src="assets/images/optimized/arron_profile.png" alt="Dithered black-and-white portrait of Arron Kian Parejas" width="720" height="900">
        </figure>
        <figure class="stack stack-stage">
          <img src="assets/images/optimized/howtell_stage.png" alt="Arron Kian Parejas speaking on stage at How and Tell Meetup 2" width="1280" height="720" style="object-position:68% 42%">
        </figure>
        <figure class="stack stack-group">
          <img src="assets/images/optimized/appbuilders_group.png" alt="AppBuildersPH team holding trophies at How and Tell Meetup 2" width="1280" height="720">
          <figcaption class="caption">AppBuildersPH · How &amp; Tell Meetup 2</figcaption>
        </figure>
      </div>
    </figure>
  </div>`
},
{
  id: 2, title: "Meet Your Speaker", cls: "s2",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Meet your speaker</div>
    <h2 class="h-lg">A builder. An engineer.<br>An open-source contributor.</h2>
  </header>
  <div class="profile">
    <figure class="photo portrait"><img src="assets/images/optimized/arron_profile.png" alt="Dithered black-and-white portrait of Arron Kian Parejas" width="720" height="900"></figure>
    <div class="profile-body">
      <p class="statement">A practical method for turning an idea into working software.</p>
      <p class="credential">Multi-awarded hackathon champion · Top 7 GitHub user in the Philippines</p>
      <ul class="rows roles">
        <li><span class="idx">01</span><span>AI Engineer</span></li>
        <li><span class="idx">02</span><span>ML Engineering Intern @ FlyRank.ai</span></li>
        <li><span class="idx">03</span><span>Founder of DomoDomo</span></li>
        <li><span class="idx">04</span><span>Builder of Helios, an open-source language model</span></li>
        <li><span class="idx">05</span><span>Former GDG on Campus HAU Chapter Lead</span></li>
        <li><span class="idx">06</span><span>Open-source contributor</span></li>
        <li><span class="idx">07</span><span>Ship-A-Little winner, Shipaton AppbuildersPH 2026</span></li>
      </ul>
    </div>
    <div class="gallery">
      <figure class="photo"><img src="assets/images/optimized/caffeine_hackathon.jpg" alt="Caffeine hackathon stage group holding first-place certificates" width="1600" height="1066"><figcaption class="cap">Caffeine Hackathon</figcaption></figure>
      <figure class="shot"><img src="assets/images/bitpyre_hackathon.jpg" alt="AppCon 2024 Top 20 Teams: BitPyre of Holy Angel University on stage" width="940" height="788"><figcaption class="cap">AppCon 2024</figcaption></figure>
      <figure class="photo"><img src="assets/images/optimized/skydev_hackathon.jpg" alt="SkyDev Automate the Future hackathon group holding certificates" width="1600" height="1066" style="object-position:60% 50%"><figcaption class="cap">SkyDev</figcaption></figure>
      <figure class="shot"><img src="assets/images/helios_hf_downloadscount.png" alt="Helios model page on Hugging Face showing 2,256 downloads last month" width="2048" height="1160"><figcaption class="cap">Helios on Hugging Face</figcaption></figure>
    </div>
  </div>
  <div class="stats-row">
    <div class="stat"><b>Top 1</b><span>AppBuildersPH</span></div>
    <div class="stat"><b>Top 7</b><span>GitHub · Philippines</span></div>
    <div class="stat"><b>7</b><span>hackathon wins</span></div>
    <div class="stat"><b>182+</b><span>projects</span></div>
  </div>`
},
{
  id: 3, title: "The Hackathon Mindset", cls: "s3",
  html: `
  <header class="slide-head">
    <div class="eyebrow">The hackathon mindset</div>
    <h2 class="h-lg">Great ideas don't automatically<br>become great products.</h2>
  </header>
  <div class="flow" data-stagger>
    <div class="step"><i>01</i>IDEA</div><div class="arrow">→</div>
    <div class="step"><i>02</i>EXECUTION</div><div class="arrow">→</div>
    <div class="step"><i>03</i>VALIDATION</div><div class="arrow">→</div>
    <div class="step"><i>04</i>PRODUCT</div>
  </div>
  <div class="mindset">
    <p class="statement">The idea is the easy part. What separates a demo from a product is the discipline between them.</p>
    <ol class="rows mistakes">
      <li><span class="idx">01</span><div><h3>Overengineering</h3><p>A perfect system nobody can demo.</p></div></li>
      <li><span class="idx">02</span><div><h3>Technology before requirements</h3><p>Picking the stack before knowing the problem.</p></div></li>
      <li><span class="idx">03</span><div><h3>Shipping untested code</h3><p>Features that fail live on demo day.</p></div></li>
    </ol>
  </div>`
},
{
  id: 4, title: "Start With the Problem", cls: "s4",
  html: `
  <header class="slide-head">
    <div class="eyebrow">Start with the problem</div>
    <h2 class="h-lg">Understand the problem<br>before choosing the technology.</h2>
  </header>
  <div class="questions">
    <div><span class="tag b">Who</span><h3>Who are we helping?</h3><p>A specific person, not "everyone".</p></div>
    <div><span class="tag r">What</span><h3>What problem are we solving?</h3><p>One pain point you can observe.</p></div>
    <div><span class="tag g">Why</span><h3>Why does it matter?</h3><p>The cost of leaving it unsolved.</p></div>
  </div>
  <div class="compare">
    <div class="compare-side">
      <span class="tag r">Vague idea</span>
      <p class="quote">"Let's build an app for disasters."</p>
      <ul class="dash-list">
        <li>Who? Everyone.</li>
        <li>Problem? "Disasters".</li>
        <li>Why? Because it's a good idea.</li>
      </ul>
    </div>
    <div class="compare-arrow" aria-hidden="true">→</div>
    <div class="compare-side">
      <span class="tag g">Clear problem statement</span>
      <p class="quote small-quote">Barangay residents in flood-prone areas can't report emergencies fast enough, so responders lack accurate locations. We help them send a located report in under 30 seconds.</p>
      <dl class="def-list">
        <div><dt>Who</dt><dd>Residents of flood-prone barangays</dd></div>
        <div><dt>What</dt><dd>A located report in under 30 seconds</dd></div>
        <div><dt>Why</dt><dd>Responders lose time and act on the wrong location</dd></div>
      </dl>
      <p class="fine">Illustrative example for this talk.</p>
    </div>
  </div>`
},
{
  id: 5, title: "Define Your MVP", cls: "s5",
  html: `
  <header class="slide-head head-row">
    <div><div class="eyebrow">Define your MVP</div><h2 class="h-lg">Build less. Deliver more.</h2></div>
    <div class="ctrl"><span class="label">Emergency reporting platform</span><button class="btn ghost" data-mvp="suggest">Suggested split</button><button class="btn ghost" data-mvp="reset">Clear board</button></div>
  </header>
  <div class="mvp" id="mvp-root"></div>`
}
];
