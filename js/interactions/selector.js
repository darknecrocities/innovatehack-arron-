const QUESTIONS = [
  { key: "platform", q: "Platform", opts: [["web", "Web"], ["mobile", "Mobile"]] },
  { key: "runtime", q: "Where does AI run?", opts: [["cloud", "Cloud"], ["offline", "Offline"]] },
  { key: "ai", q: "Type of AI", opts: [["genai", "Generative AI"], ["ml", "Traditional ML"]] },
  { key: "backend", q: "Backend", opts: [["simple", "Simple"], ["advanced", "Advanced"]] },
];

/** Rule table documented in README: maps the four answers to a recommended stack. */
export function recommend(a) {
  const items = [];
  let summary;
  if (a.platform === "mobile") {
    items.push(["Flutter", "One codebase for Android and iOS, with fast iteration."]);
  } else {
    items.push(["Flutter (web) or a standard web stack", "Flutter can target the web; a plain HTML/JS front end is fine for simple pages."]);
  }
  if (a.backend === "simple") {
    items.push(["Firebase", "Authentication, Firestore, and hosting without running servers."]);
  } else {
    items.push(["Google Cloud with Cloud Run", "Custom services, containers, and scaling control. Keep Firebase for auth if useful."]);
  }
  if (a.ai === "genai" && a.runtime === "cloud") {
    const tool = a.backend === "simple" ? "Gemini via Firebase AI Logic" : "Gemini API (or Vertex AI)";
    items.push([tool, "Hosted generative models with structured output and function calling."]);
    summary = "Flutter + Firebase + Gemini";
  } else if (a.ai === "genai") {
    items.push(["Google AI Edge", "Run generative models on the device. Needs capable hardware; you can try models in AI Edge Gallery."]);
    summary = "Flutter + Firebase + Google AI Edge";
  } else if (a.runtime === "cloud") {
    items.push([a.backend === "simple" ? "Vertex AI (when you need a custom model)" : "Vertex AI with BigQuery",
      "Train and serve custom models; BigQuery for analysis of larger data."]);
    summary = "Flutter + Firebase + Vertex AI";
  } else {
    items.push(["ML Kit, then LiteRT", "ML Kit for ready-made vision and text APIs; LiteRT to run your own model on the device."]);
    summary = "Flutter + Firebase + ML Kit / LiteRT";
  }
  let note = "A starting point, not a rule. Validate it against your problem statement.";
  if (a.platform === "web" && a.runtime === "offline") {
    summary = "Web front end + Firebase + ML Kit / LiteRT";
    note = "Offline on-device AI is strongest on mobile. For web, consider a hybrid with a cloud fallback.";
  }
  return { items, note, summary };
}

export function initSelector(root) {
  const answers = { platform: "mobile", runtime: "cloud", ai: "genai", backend: "simple" };
  function render() {
    const rec = recommend(answers);
    root.innerHTML = `
      <div class="selector-scrim" data-close></div>
      <div class="selector-panel" role="dialog" aria-modal="true" aria-label="Stack selector">
        <div class="selector-head">
          <div><span class="label">Interactive</span><h2 class="h-md">Stack selector</h2></div>
          <button class="btn ghost" data-close>Close (Esc)</button>
        </div>
        <div class="sel-wrap">
          <div class="sel-questions">
            ${QUESTIONS.map((q) => `<div class="q"><span class="small">${q.q}</span><div class="row">${q.opts.map(([v, l]) => `<button class="btn ghost" data-k="${q.key}" data-v="${v}" aria-pressed="${answers[q.key] === v}">${l}</button>`).join("")}</div></div>`).join("")}
          </div>
          <div class="rec" aria-live="polite"><span class="tag b">Recommended stack</span>
            <p class="rec-summary">${rec.summary}</p>
            <ul>${rec.items.map(([n, d]) => `<li><b>${n}</b><br>${d}</li>`).join("")}</ul>
            <p class="small">${rec.note}</p></div>
        </div>
      </div>`;
  }
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-k]");
    if (!b) return;
    answers[b.dataset.k] = b.dataset.v;
    render();
    root.querySelector(`[data-k="${b.dataset.k}"][data-v="${b.dataset.v}"]`)?.focus();
  });
  render();
}
