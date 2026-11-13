import { initMvp } from "./interactions/mvp.js";
import { initClear } from "./interactions/clear.js";
import { initSelector } from "./interactions/selector.js";
import { initPalette } from "./interactions/palette.js";

/** Mounts interactive widgets and returns per-slide step handlers (progressive reveals). */
export function initInteractions() {
  initMvp(document.getElementById("mvp-root"));
  initSelector(document.getElementById("selector"));
  initPalette(document.getElementById("palette"));
  const clear = initClear(document.getElementById("clear-root"));
  return { 12: { forward: () => clear.forward(), back: () => clear.back() } };
}
