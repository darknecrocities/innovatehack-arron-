/** Image handling: async decoding, load tracking, and visible fallback for missing files. */
export const imageStatus = [];

export function manageImages(root) {
  root.querySelectorAll("img").forEach((img) => {
    img.decoding = "async";
    const slide = img.closest(".slide");
    const record = (ok) => imageStatus.push({ src: img.getAttribute("src"), slide: slide ? Number(slide.id.replace("slide-", "")) : null, ok, w: img.naturalWidth, h: img.naturalHeight });
    const fail = () => {
      record(false);
      console.error(`Image failed to load: ${img.getAttribute("src")}`);
      img.alt = `${img.alt} (image unavailable)`;
      img.style.visibility = "hidden";
    };
    img.addEventListener("error", fail, { once: true });
    if (img.complete) (img.naturalWidth ? record(true) : fail());
    else img.addEventListener("load", () => record(true), { once: true });
  });
  window.__imageStatus = imageStatus;
}
