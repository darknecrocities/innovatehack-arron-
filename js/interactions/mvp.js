const FEATURES = [
  { id: "sos", label: "One-tap emergency report", suggest: "must" },
  { id: "gps", label: "Automatic GPS location", suggest: "must" },
  { id: "dash", label: "Responder dashboard", suggest: "must" },
  { id: "photo", label: "Photo attachment", suggest: "should" },
  { id: "status", label: "Live report status", suggest: "should" },
  { id: "push", label: "Push notifications", suggest: "should" },
  { id: "voice", label: "Voice reporting", suggest: "could" },
  { id: "lang", label: "Multi-language support", suggest: "could" },
  { id: "stats", label: "Analytics dashboard", suggest: "wont" },
  { id: "share", label: "Social media sharing", suggest: "wont" },
];

const BUCKETS = [
  { id: "must", name: "Must Have", short: "Must", color: "var(--green)" },
  { id: "should", name: "Should Have", short: "Should", color: "var(--blue)" },
  { id: "could", name: "Could Have", short: "Could", color: "var(--yellow)" },
  { id: "wont", name: "Won't Have · Deferred", short: "Won't", color: "var(--red)" },
];

/**
 * Interactive MoSCoW board. Features start unsorted and can be dragged into a
 * bucket, or moved with the keyboard-accessible "move to" menu on each chip.
 */
export function initMvp(root) {
  if (!root) return;
  const state = Object.fromEntries(FEATURES.map((f) => [f.id, "pool"]));
  let dragId = null;

  const featHtml = (f, compact) => `
    <div class="feat" draggable="true" tabindex="0" data-id="${f.id}" aria-label="${f.label}">
      <span>${f.label}</span>
      <select aria-label="Move ${f.label} to" data-move="${f.id}">
        <option value="pool" ${state[f.id] === "pool" ? "selected" : ""}>Unsorted</option>
        ${BUCKETS.map((b) => `<option value="${b.id}" ${state[f.id] === b.id ? "selected" : ""}>${b.short}</option>`).join("")}
      </select>
    </div>`;

  function render() {
    const pool = FEATURES.filter((f) => state[f.id] === "pool");
    root.innerHTML = `
      <div class="mvp-pool" data-bucket="pool" aria-label="Unsorted features">
        <span class="tag b">Unsorted features (${pool.length}) — drag one into a bucket, or use its menu</span>
        ${pool.map((f) => featHtml(f)).join("") || '<p class="small">Everything is sorted. Reset to start again.</p>'}
      </div>
      <div class="mvp-buckets">
        ${BUCKETS.map((b) => {
          const items = FEATURES.filter((f) => state[f.id] === b.id);
          return `<div class="bucket" data-bucket="${b.id}" aria-label="${b.name}">
            <header><span>${b.name}</span><span class="count" style="background:${b.color}" aria-label="${items.length} features">${items.length}</span></header>
            <div class="items">${items.map((f) => featHtml(f)).join("") || '<p class="empty">Empty</p>'}</div>
          </div>`;
        }).join("")}
      </div>`;
  }

  root.addEventListener("dragstart", (e) => {
    const f = e.target.closest(".feat");
    if (!f) return;
    dragId = f.dataset.id;
    f.classList.add("dragging");
    e.dataTransfer.setData("text/plain", dragId);
    e.dataTransfer.effectAllowed = "move";
  });

  root.addEventListener("dragend", () => {
    dragId = null;
    root.querySelectorAll(".dragging,.over").forEach((n) => n.classList.remove("dragging", "over"));
  });

  root.addEventListener("dragover", (e) => {
    const b = e.target.closest("[data-bucket]");
    if (!b) return;
    e.preventDefault();
    root.querySelectorAll(".over").forEach((n) => n.classList.remove("over"));
    b.classList.add("over");
  });

  root.addEventListener("drop", (e) => {
    const b = e.target.closest("[data-bucket]");
    if (!b || !dragId) return;
    e.preventDefault();
    state[dragId] = b.dataset.bucket;
    render();
  });

  root.addEventListener("change", (e) => {
    const s = e.target.closest("[data-move]");
    if (!s) return;
    state[s.dataset.move] = s.value;
    render();
    root.querySelector(`[data-id="${s.dataset.move}"] select`)?.focus();
  });

  const slide = root.closest(".slide");
  slide.addEventListener("click", (e) => {
    const a = e.target.closest("[data-mvp]")?.dataset.mvp;
    if (a === "suggest") FEATURES.forEach((f) => (state[f.id] = f.suggest));
    else if (a === "reset") FEATURES.forEach((f) => (state[f.id] = "pool"));
    else return;
    render();
  });

  render();
}
