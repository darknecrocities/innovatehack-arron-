/**
 * Animated SVG diagrams.
 *  - buildTree:  the "what does your problem need?" decision tree (slide 07)
 *  - buildArch:  the cloud vs on-device architecture (slide 10)
 *
 * Both are drawn on a fixed coordinate system and scaled to fit their container,
 * so nothing can collide or overflow regardless of the viewport size.
 * Product marks are cropped from the supplied logo files with a nested <svg>
 * viewBox, so the mark and the wordmark never overlap.
 */
const NS = "http://www.w3.org/2000/svg";
const SPARK = "M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z";

const defs = `<defs>
  <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4285F4"/><stop offset=".5" stop-color="#7C86D9"/><stop offset="1" stop-color="#D97C86"/>
  </linearGradient>
  <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#4285F4"/>
  </marker>
  <marker id="arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#34A853"/>
  </marker>
</defs>`;

const sparkle = (x, y, s = 2) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="${SPARK}" fill="url(#gem)"/></g>`;

/** Cropped product marks, measured from the supplied logo files. */
const MARKS = {
  flutter: { src: "assets/images/flutter_logo.png", iw: 953, ih: 272, crop: [4, 4, 214, 264] },
  firebase: { src: "assets/images/firebase_logo.png", iw: 640, ih: 640, crop: [211, 117, 219, 273] },
  mlkit: { src: "assets/images/google_ml_kit.png", iw: 1600, ih: 468, crop: [0, 54, 496, 360] },
  gcloud: { src: "assets/images/Google_cloud.png", iw: 225, ih: 225, crop: [52, 41, 121, 98] },
};

/** Renders one cropped product mark at (x, y) with the given height. */
function mark(x, y, h, key) {
  const m = MARKS[key];
  const [cx, cy, cw, ch] = m.crop;
  const w = Math.round(h * (cw / ch));
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${cx} ${cy} ${cw} ${ch}" preserveAspectRatio="xMidYMid meet"><image href="${m.src}" x="0" y="0" width="${m.iw}" height="${m.ih}"/></svg>`;
}

function svg(viewBox, inner, label) {
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", viewBox);
  s.setAttribute("class", "diagram");
  s.setAttribute("role", "img");
  s.setAttribute("aria-label", label);
  s.setAttribute("preserveAspectRatio", "xMidYMid meet");
  s.innerHTML = defs + inner;
  return s;
}

/* ------------------------------------------------------------------ tree */

const TREE = [
  { need: "Mobile", tool: "Flutter", mark: "flutter", when: "One codebase for Android and iOS, with fast UI iteration." },
  { need: "Backend", tool: "Firebase", mark: "firebase", when: "Managed Auth, Firestore, and Hosting without running servers." },
  { need: "Generative AI", tool: "Gemini", mark: "gemini", when: "Text, image, and structured output via the API or Firebase AI Logic." },
  { need: "Computer Vision", tool: "ML Kit", mark: "mlkit", when: "Ready-made on-device APIs for text, barcode, and face detection." },
  { need: "Offline AI", tool: "Google AI Edge", mark: "edge", when: "Run models on the device with LiteRT, no connection needed." },
  { need: "Custom Infrastructure", tool: "Google Cloud", mark: "gcloud", when: "Cloud Run, Vertex AI, and BigQuery for custom services at scale." },
];

const TREE_W = 1680;
const ROW_H = 92;
const ROW_GAP = 14;
const ROOT_W = 340;
const ROW_X = 420;
const MARK_X = 700;   // left edge of the product-mark column
const MARK_H = 38;
const TEXT_X = 786;   // left edge of the tool wordmark / description column

export function buildTree(root) {
  const H = TREE.length * ROW_H + (TREE.length - 1) * ROW_GAP;
  const rootH = 116;
  const rootY = (H - rootH) / 2;
  const rootCY = rootY + rootH / 2;

  let inner = "";

  // connectors from the root to every row
  TREE.forEach((t, i) => {
    const cy = i * (ROW_H + ROW_GAP) + ROW_H / 2;
    inner += `<path class="edge" d="M ${ROOT_W} ${rootCY} C ${ROOT_W + 70} ${rootCY}, ${ROW_X - 70} ${cy}, ${ROW_X} ${cy}"/>`;
  });

  // root statement, set as type rather than a boxed node
  inner += `<g class="node root">
    <line class="root-rule" x1="0" y1="${rootCY - 68}" x2="0" y2="${rootCY + 58}"/>
    <text x="26" y="${rootCY - 10}">What does your</text>
    <text x="26" y="${rootCY + 30}">problem need?</text>
  </g>`;

  // rows, separated by hairlines
  TREE.forEach((t, i) => {
    const y = i * (ROW_H + ROW_GAP);
    const markTop = y + (ROW_H - MARK_H) / 2;

    let icon = "";
    if (t.mark === "gemini") icon = sparkle(MARK_X + 2, markTop, MARK_H / 24);
    else if (t.mark === "edge") icon = `<circle cx="${MARK_X + MARK_H / 2}" cy="${markTop + MARK_H / 2}" r="11" fill="#34A853"/>`;
    else icon = mark(MARK_X, markTop, MARK_H, t.mark);

    inner += `<g class="node row" tabindex="0" data-tree="${i}">
      <title>${t.need} leads to ${t.tool}. ${t.when}</title>
      <rect x="${ROW_X}" y="${y}" width="${TREE_W - ROW_X}" height="${ROW_H}" rx="0"/>
      <text class="need" x="${ROW_X}" y="${y + 44}">${t.need}</text>
      <text class="arrow" x="670" y="${y + 44}">→</text>
      ${icon}
      <text class="tool" x="${TEXT_X}" y="${y + 39}">${t.tool}</text>
      <text class="sub" x="${TEXT_X}" y="${y + 64}">${t.when}</text>
      <line class="row-line" x1="${ROW_X}" y1="${y + ROW_H}" x2="${TREE_W}" y2="${y + ROW_H}"/>
    </g>`;
  });

  const s = svg(`0 0 ${TREE_W} ${H}`, inner,
    "Decision tree: Mobile leads to Flutter, Backend to Firebase, Generative AI to Gemini, " +
    "Computer Vision to ML Kit, Offline AI to Google AI Edge, and Custom Infrastructure to Google Cloud.");
  s.addEventListener("pointerover", (e) => highlight(s, e.target.closest("[data-tree]")));
  s.addEventListener("focusin", (e) => highlight(s, e.target.closest("[data-tree]")));
  s.addEventListener("pointerleave", () => highlight(s, null));
  root.replaceChildren(s);
}

function highlight(s, node) {
  s.querySelectorAll("[data-tree]").forEach((n) => n.classList.toggle("hot", n === node));
}

/* ------------------------------------------------------------- architecture */

export function buildArch(root) {
  const box = (x, y, w, h, title, subs, id, markSvg = "") => `
    <g class="node arch" data-n="${id}">
      <title>${title}</title>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20"/>
      ${markSvg}
      <text x="${x + (markSvg ? 78 : 22)}" y="${y + 44}">${title}</text>
      ${subs.map((t, i) => `<text class="sub" x="${x + 22}" y="${y + 78 + i * 26}">${t}</text>`).join("")}
    </g>`;

  const inner = `
    <rect class="zone green" x="0" y="0" width="290" height="540" rx="26"/>
    <text class="zone-label green" x="22" y="36">ON DEVICE</text>
    <rect class="zone blue" x="320" y="0" width="580" height="540" rx="26"/>
    <text class="zone-label blue" x="342" y="36">CLOUD</text>

    <path class="edge flow green" d="M 145 396 L 145 168" marker-end="url(#arrow-green)"/>
    <path class="edge flow blue" d="M 274 424 C 314 424, 314 148, 340 148" marker-end="url(#arrow-blue)"/>
    <path class="edge flow blue" d="M 274 470 L 340 470" marker-end="url(#arrow-blue)"/>
    <path class="edge flow blue" d="M 620 148 L 630 148" marker-end="url(#arrow-blue)"/>
    <path class="edge flow blue" d="M 620 448 L 630 448" marker-end="url(#arrow-blue)"/>

    ${box(16, 64, 258, 104, "ML Kit", ["On-device APIs"], "mlkit", mark(36, 82, 30, "mlkit"))}
    ${box(16, 396, 258, 104, "Flutter app", ["UI and app logic"], "flutter", mark(36, 414, 30, "flutter"))}
    ${box(340, 96, 280, 104, "Firebase", ["Auth · Firestore"], "fb")}
    ${box(340, 396, 280, 104, "Firebase AI Logic", ["Client SDK for Gemini"], "ail")}
    ${box(630, 88, 256, 120, "Google Cloud", ["Cloud Run · Vertex AI", "BigQuery"], "gc")}
    ${box(630, 396, 256, 104, "Gemini", ["Cloud inference"], "gem", sparkle(648, 414, 1.25))}
  `;

  const s = svg("0 0 900 540", inner,
    "Architecture: the Flutter app uses ML Kit on the device, Firebase for data and authentication, " +
    "Firebase AI Logic to reach Gemini in the cloud, and Google Cloud services behind Firebase.");
  root.replaceChildren(s);
}

export function initDiagrams() {
  const t = document.getElementById("tree-root");
  const a = document.getElementById("arch-root");
  if (t) buildTree(t);
  if (a) buildArch(a);
}
