/** Slide navigation, keyboard shortcuts, progress and counter. */
export function createNavigation({ slideEls, onChange, stepHandlers = {}, overlays }) {
  let current = 0;
  const total = slideEls.length;
  const bar = document.getElementById("progress-bar");
  const label = document.getElementById("counter-label");
  const help = document.getElementById("help");

  function show(i, { silent = false } = {}) {
    i = Math.max(0, Math.min(total - 1, i));
    slideEls.forEach((el, idx) => {
      el.classList.toggle("is-active", idx === i);
      el.classList.toggle("is-past", idx < i);
      el.setAttribute("aria-hidden", String(idx !== i));
      el.inert = idx !== i;
    });
    current = i;
    bar.style.width = `${((i + 1) / total) * 100}%`;
    label.textContent = `${i + 1} / ${total}`;
    if (location.hash !== `#/${i + 1}`) history.replaceState(null, "", `#/${i + 1}`);
    if (!silent) onChange?.(i);
  }

  const id = () => current + 1;
  function next() {
    if (stepHandlers[id()]?.forward?.()) return;
    show(current + 1);
  }
  function prev() {
    if (stepHandlers[id()]?.back?.()) return;
    show(current - 1);
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = e.target.tagName;
    const interactive = tag === "BUTTON" || tag === "A" || tag === "SELECT" || tag === "INPUT";
    const k = e.key;
    if (k === "Escape") { overlays.closeAll(); help.classList.remove("show"); return; }
    if (overlays.anyOpen() && !["n", "N", "o", "O", "s", "S"].includes(k)) return;
    if (tag === "SELECT" && k.startsWith("Arrow")) return;
    switch (k) {
      case "ArrowRight": e.preventDefault(); next(); break;
      case "ArrowLeft": e.preventDefault(); prev(); break;
      case " ": if (interactive) return; e.preventDefault(); next(); break;
      case "Home": e.preventDefault(); show(0); break;
      case "End": e.preventDefault(); show(total - 1); break;
      case "f": case "F": toggleFullscreen(); break;
      case "n": case "N": overlays.toggle("notes"); break;
      case "o": case "O": overlays.toggle("overview"); break;
      case "s": case "S": overlays.toggle("selector"); break;
      case "r": case "R": stepHandlers[id()]?.forward?.(); break;
      case "?": case "/": help.classList.toggle("show"); break;
      default: return;
    }
  });

  document.getElementById("btn-prev").addEventListener("click", prev);
  document.getElementById("btn-next").addEventListener("click", next);
  document.getElementById("btn-overview").addEventListener("click", () => overlays.toggle("overview"));

  const start = parseInt((location.hash.match(/#\/(\d+)/) || [])[1] || "1", 10) - 1;
  show(Number.isFinite(start) ? start : 0);
  window.addEventListener("hashchange", () => {
    const n = parseInt((location.hash.match(/#\/(\d+)/) || [])[1] || "1", 10) - 1;
    if (n !== current) show(n);
  });

  return { show, next, prev, get current() { return current; } };
}
