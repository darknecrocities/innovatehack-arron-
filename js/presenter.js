import { slides } from "./slides.js";
import { notes } from "./content/notes.js";

const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

/** Overlay manager: notes panel, overview grid, stack selector. Only one open at a time. */
export function createOverlays({ goTo, getCurrent }) {
  const els = {
    notes: document.getElementById("notes"),
    overview: document.getElementById("overview"),
    selector: document.getElementById("selector"),
  };
  let lastFocus = null;

  const isOpen = (n) => els[n].classList.contains("is-open");
  const anyOpen = () => Object.keys(els).some(isOpen);

  function closeAll() {
    Object.values(els).forEach((el) => { el.classList.remove("is-open"); el.setAttribute("aria-hidden", "true"); });
    lastFocus?.focus?.();
    lastFocus = null;
  }
  function open(name) {
    if (!anyOpen()) lastFocus = document.activeElement;
    Object.entries(els).forEach(([n, el]) => {
      const on = n === name;
      el.classList.toggle("is-open", on);
      el.setAttribute("aria-hidden", String(!on));
    });
    if (name === "notes") renderNotes(getCurrent());
    if (name === "overview") renderOverview(getCurrent());
    const focusable = els[name].querySelector("button, select, [tabindex]");
    focusable?.focus();
  }
  function toggle(name) { isOpen(name) ? closeAll() : open(name); }

  function renderNotes(i) {
    const n = notes[i], s = slides[i];
    const list = (a) => `<ul>${a.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    els.notes.innerHTML = `
      <button class="btn ghost" data-close style="float:right;padding:8px 18px;font-size:20px" aria-label="Close notes">Close (Esc)</button>
      <p class="time">Slide ${s.id} · about ${n.minutes} min</p>
      <h3>${esc(s.title)}</h3>
      <h4>Main message</h4><p>${esc(n.message)}</p>
      <h4>Explain</h4>${list(n.explain)}
      <h4>Talking points</h4>${list(n.points)}
      <h4>Example or story</h4><p>${esc(n.story)}</p>
      <h4>Transition</h4><p>${esc(n.transition)}</p>`;
  }

  function renderOverview(cur) {
    els.overview.innerHTML = `<div class="eyebrow" style="margin-bottom:28px">Slide overview · click a slide or press Esc</div><div class="grid">${slides
      .map((s, i) => `<button data-go="${i}" class="${i === cur ? "is-current" : ""}"><span class="n">${String(s.id).padStart(2, "0")}</span><span class="t">${esc(s.title)}</span></button>`)
      .join("")}</div>`;
  }

  els.overview.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]");
    if (b) { closeAll(); goTo(Number(b.dataset.go)); }
  });
  Object.values(els).forEach((el) => el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeAll(); }));
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-open]");
    if (o) open(o.dataset.open);
  });

  // Keep keyboard focus inside an open overlay.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const panel = Object.values(els).find((el) => el.classList.contains("is-open"));
    if (!panel) return;
    const items = [...panel.querySelectorAll("button, a[href], select, input, [tabindex]:not([tabindex='-1'])")]
      .filter((el) => el.getClientRects().length > 0);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  return { toggle, open, closeAll, anyOpen, refresh: (i) => { if (isOpen("notes")) renderNotes(i); } };
}
