/** Slide 6: swatch buttons recolor the type specimen via the --accent custom property. */
export function initPalette(root) {
  if (!root) return;
  const specimen = root.closest(".specimen");
  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".swatch");
    if (!btn) return;
    e.stopPropagation();
    const color = btn.dataset.color;
    if (color) specimen.style.setProperty("--accent", color);
    else specimen.style.removeProperty("--accent");
    root.querySelectorAll(".swatch").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
  });
  root.addEventListener("keydown", (e) => {
    if (e.target.closest(".swatch") && (e.key === "Enter" || e.key === " ")) e.stopPropagation();
  });
}
