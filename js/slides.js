import { part1 } from "./content/part1.js";
import { part2 } from "./content/part2.js";
import { part3 } from "./content/part3.js";

export const slides = [...part1, ...part2, ...part3];

/** Render every slide section into the stage. */
export function renderSlides(stage) {
  const frag = document.createDocumentFragment();
  slides.forEach((s, i) => {
    const el = document.createElement("section");
    el.className = `slide ${s.cls}`;
    el.id = `slide-${s.id}`;
    el.dataset.index = String(i);
    el.setAttribute("aria-label", `Slide ${s.id} of ${slides.length}: ${s.title}`);
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = s.html;
    frag.appendChild(el);
  });
  stage.prepend(frag);
  return [...stage.querySelectorAll(".slide")];
}
