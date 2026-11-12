const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scale the fixed 1920x1080 stage to fit the viewport while keeping 16:9. */
export function fitStage(stage) {
  const fit = () => {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `scale(${s})`;
    stage.style.margin = `${-(1080 * (1 - s)) / 2}px ${-(1920 * (1 - s)) / 2}px`;
  };
  fit();
  window.addEventListener("resize", fit);
  document.addEventListener("fullscreenchange", () => setTimeout(fit, 50));
}

/** Cycle through the application -> AI -> validation -> response steps while slide 9 is visible. */
export function createFlowAnimator() {
  let timer = null;
  const steps = () => [...document.querySelectorAll("#ai-flow .step")];
  const stop = () => { clearInterval(timer); timer = null; steps().forEach((s) => s.classList.remove("hot")); };
  return {
    onSlide(index) {
      stop();
      if (index !== 8) return;
      const els = steps();
      if (reduced()) { els.forEach((s) => s.classList.add("hot")); return; }
      let i = 0;
      const tick = () => { els.forEach((s, n) => s.classList.toggle("hot", n === i)); i = (i + 1) % els.length; };
      tick();
      timer = setInterval(tick, 1100);
    },
  };
}
