import { slides, renderSlides } from "./slides.js";
import { createNavigation } from "./navigation.js";
import { createOverlays } from "./presenter.js";
import { initInteractions } from "./interactions.js";
import { initDiagrams } from "./diagrams.js";
import { fitStage, createFlowAnimator } from "./animations.js";
import { manageImages } from "./asset-manager.js";

const stage = document.getElementById("stage");
const slideEls = renderSlides(stage);
manageImages(stage);
initDiagrams();
const stepHandlers = initInteractions();
fitStage(stage);

const flow = createFlowAnimator();
let nav;
const overlays = createOverlays({ goTo: (i) => nav.show(i), getCurrent: () => nav.current });
nav = createNavigation({
  slideEls,
  stepHandlers,
  overlays,
  onChange: (i) => { flow.onSlide(i); overlays.refresh(i); },
});
flow.onSlide(nav.current);
document.title = `${slides[nav.current].title} · From Idea to MVP`;
window.__deck = { nav, total: slides.length };
