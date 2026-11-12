const CLEAR = [
  { k: "C", t: "Context", d: "Who is it for and what exists already?", w: "Without context, the model guesses at your product.", ex: "Flutter app for barangay flood reports." },
  { k: "L", t: "Limitations", d: "Time, budget, stack, devices.", w: "Limits are what stop the output from overengineering.", ex: "3-day sprint. Firebase. Low-end Android." },
  { k: "E", t: "Expected outcome", d: "A result you can check.", w: "A checkable outcome is what you can write a test against.", ex: "Located report sent in under 30 seconds." },
  { k: "A", t: "Architecture", d: "How the pieces connect.", w: "A diagram beats a paragraph when you mean 'these two'.", ex: "Flutter UI → Firestore → Gemini triage." },
  { k: "R", t: "Requirements", d: "Tests and quality bars.", w: "Requirements survive the next person who touches the code.", ex: "Validation unit tests + one end-to-end flow." },
];

const COLORS = ["var(--blue)", "var(--red)", "var(--yellow)", "var(--green)", "var(--blue)"];

/** The prompt assembled so far — the point of the framework is that it compounds. */
const PROMPT = [
  "<span class='k'>Context:</span> Flutter app for barangay flood reports.",
  "<span class='k'>Limitations:</span> 3-day sprint. Firebase. Low-end Android.",
  "<span class='k'>Expected outcome:</span> Located report sent in under 30 seconds.",
  "<span class='k'>Architecture:</span> Flutter UI → Firestore → Gemini triage.",
  "<span class='k'>Requirements:</span> Validation unit tests + one end-to-end flow.",
];

export function initClear(root) {
  if (!root) return { forward: () => false, back: () => false };
  let shown = 0;
  const out = document.getElementById("clear-text");

  root.innerHTML = CLEAR.map((c, i) => `
    <div class="letter" data-i="${i}">
      <div class="big" style="color:${COLORS[i]}">${c.k}</div>
      <h3>${c.t}</h3><p>${c.d}</p><p class="why">${c.w}</p><div class="ex">${c.ex}</div>
    </div>`).join("");

  const cards = [...root.querySelectorAll(".letter")];

  const paint = () => {
    cards.forEach((el, i) => el.classList.toggle("on", i < shown));
    if (out) {
      out.innerHTML = shown
        ? PROMPT.slice(0, shown).join("\n")
        : '<span class="placeholder">Reveal a letter to start building the prompt.</span>';
    }
  };

  const api = {
    forward() { if (shown >= CLEAR.length) return false; shown++; paint(); return true; },
    back() { if (shown <= 0) return false; shown--; paint(); return true; },
    all() { shown = CLEAR.length; paint(); },
    reset() { shown = 0; paint(); },
  };

  root.closest(".slide").addEventListener("click", (e) => {
    const a = e.target.closest("[data-clear]")?.dataset.clear;
    if (a === "next") api.forward();
    else if (a === "all") api.all();
    else if (a === "reset") api.reset();
  });

  paint();
  return api;
}
