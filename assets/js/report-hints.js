const reportHints = [];
const processedTargets = new WeakSet();

let mouseX = -9999;
let mouseY = -9999;

window.addEventListener("pointermove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function isReportLink(link) {
  const text = link.textContent.toLowerCase();
  const href = (link.getAttribute("href") || "").toLowerCase();

  return (
    text.includes("rapport") ||
    href.includes("rapport") ||
    href.endsWith(".pdf")
  );
}

function createSvgArrow(index) {
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.classList.add("report-easter-arrow");

  const defs = document.createElementNS(ns, "defs");

  const marker = document.createElementNS(ns, "marker");
  const markerId = `reportArrowHead-${index}`;
  marker.setAttribute("id", markerId);
  marker.setAttribute("markerWidth", "10");
  marker.setAttribute("markerHeight", "10");
  marker.setAttribute("refX", "8");
  marker.setAttribute("refY", "3");
  marker.setAttribute("orient", "auto");
  marker.setAttribute("markerUnits", "strokeWidth");

  const markerPath = document.createElementNS(ns, "path");
  markerPath.setAttribute("d", "M0,0 L0,6 L9,3 z");
  markerPath.setAttribute("fill", "rgba(102, 230, 255, 0.95)");

  marker.appendChild(markerPath);
  defs.appendChild(marker);

  const path = document.createElementNS(ns, "path");
  path.classList.add("report-easter-arrow-path");
  path.setAttribute("marker-end", `url(#${markerId})`);

  svg.appendChild(defs);
  svg.appendChild(path);

  return { svg, path };
}

function createReportHint(target) {
  if (processedTargets.has(target)) return;

  processedTargets.add(target);

  const index = reportHints.length;

  const hint = document.createElement("div");
  hint.className = "report-easter-hint";
  hint.textContent = "rapport ici";

  const { svg, path } = createSvgArrow(index);

  document.body.appendChild(svg);
  document.body.appendChild(hint);

  const rect = target.getBoundingClientRect();

  reportHints.push({
    target,
    hint,
    svg,
    path,
    currentX: rect.left + 120,
    currentY: rect.top - 70,
  });

  target.addEventListener(
    "click",
    () => {
      hint.classList.add("is-hidden");
      svg.classList.add("is-hidden");
    },
    { once: true },
  );
}

function scanReportButtons() {
  const links = [...document.querySelectorAll("a")];

  links.filter(isReportLink).forEach(createReportHint);
}

function isVisibleInViewport(rect) {
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < window.innerHeight &&
    rect.left < window.innerWidth
  );
}

function clampAroundTarget(x, y, targetX, targetY) {
  const dx = x - targetX;
  const dy = y - targetY;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  const minDistance = 85;
  const maxDistance = 260;

  if (distance < minDistance) {
    const scale = minDistance / distance;
    return {
      x: targetX + dx * scale,
      y: targetY + dy * scale,
    };
  }

  if (distance > maxDistance) {
    const scale = maxDistance / distance;
    return {
      x: targetX + dx * scale,
      y: targetY + dy * scale,
    };
  }

  return { x, y };
}

function animateReportHints() {
  for (const item of reportHints) {
    const rect = item.target.getBoundingClientRect();

    if (!isVisibleInViewport(rect)) {
      item.hint.classList.add("is-hidden");
      item.svg.classList.add("is-hidden");
      continue;
    }

    item.hint.classList.remove("is-hidden");
    item.svg.classList.remove("is-hidden");

    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;

    const placeRight = targetX < window.innerWidth * 0.65;

    let wantedX = targetX + (placeRight ? 135 : -210);
    let wantedY = targetY + 58;

    const hintRect = item.hint.getBoundingClientRect();

    const hintCenterX = item.currentX + hintRect.width / 2;
    const hintCenterY = item.currentY + hintRect.height / 2;

    const dxMouse = hintCenterX - mouseX;
    const dyMouse = hintCenterY - mouseY;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    const fleeRadius = 165;

    if (distMouse < fleeRadius) {
      const force = (fleeRadius - distMouse) / fleeRadius;
      const safeDist = distMouse || 1;

      wantedX += (dxMouse / safeDist) * force * 140;
      wantedY += (dyMouse / safeDist) * force * 95;
    }

    const clamped = clampAroundTarget(wantedX, wantedY, targetX, targetY);

    item.currentX += (clamped.x - item.currentX) * 0.095;
    item.currentY += (clamped.y - item.currentY) * 0.095;

    item.hint.style.transform = `translate3d(${item.currentX}px, ${item.currentY}px, 0)`;

    const newHintRect = item.hint.getBoundingClientRect();

    const startX =
      targetX < newHintRect.left ? newHintRect.left : newHintRect.right;

    const startY = newHintRect.top + newHintRect.height / 2;

    const arrowGap = 26;

    const dirX = targetX - startX;
    const dirY = targetY - startY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

    const endX = targetX - (dirX / dirLength) * arrowGap;
    const endY = targetY - (dirY / dirLength) * arrowGap;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2 - 35;

    item.path.setAttribute(
      "d",
      `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`,
    );
  }

  requestAnimationFrame(animateReportHints);
}

scanReportButtons();

setTimeout(scanReportButtons, 200);
setTimeout(scanReportButtons, 800);

const observer = new MutationObserver(() => {
  scanReportButtons();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

requestAnimationFrame(animateReportHints);
