const brand = document.querySelector("#brandExplosion");
const hint = document.querySelector("#acEasterHint");
const arrow = document.querySelector("#acEasterArrow");
const arrowPath = document.querySelector("#acEasterArrowPath");

if (brand && hint && arrow && arrowPath) {
  let mouseX = -9999;
  let mouseY = -9999;

  let currentX = 190;
  let currentY = 105;

  const baseOffset = {
    x: 155,
    y: 72,
  };

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function clampAroundBrand(x, y, brandX, brandY) {
    const dx = x - brandX;
    const dy = y - brandY;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;

    const minDistance = 90;
    const maxDistance = 285;

    if (distance < minDistance) {
      const scale = minDistance / distance;
      return {
        x: brandX + dx * scale,
        y: brandY + dy * scale,
      };
    }

    if (distance > maxDistance) {
      const scale = maxDistance / distance;
      return {
        x: brandX + dx * scale,
        y: brandY + dy * scale,
      };
    }

    return { x, y };
  }

  function animateHint() {
    const brandRect = brand.getBoundingClientRect();

    const brandX = brandRect.left + brandRect.width / 2;
    const brandY = brandRect.top + brandRect.height / 2;

    let targetX = brandX + baseOffset.x;
    let targetY = brandY + baseOffset.y;

    const hintRect = hint.getBoundingClientRect();
    const hintCenterX = currentX + hintRect.width / 2;
    const hintCenterY = currentY + hintRect.height / 2;

    const dxMouse = hintCenterX - mouseX;
    const dyMouse = hintCenterY - mouseY;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    const fleeRadius = 170;

    if (distMouse < fleeRadius) {
      const force = (fleeRadius - distMouse) / fleeRadius;
      const safeDist = distMouse || 1;

      targetX += (dxMouse / safeDist) * force * 135;
      targetY += (dyMouse / safeDist) * force * 95;
    }

    const clamped = clampAroundBrand(targetX, targetY, brandX, brandY);

    currentX += (clamped.x - currentX) * 0.095;
    currentY += (clamped.y - currentY) * 0.095;

    hint.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    const newHintRect = hint.getBoundingClientRect();

    const startX = newHintRect.left + newHintRect.width * 0.12;
    const startY = newHintRect.top + newHintRect.height * 0.5;

    // On arrête la pointe de la flèche avant le bouton AC
    const arrowGap = 30; // augmente si tu veux plus d'espace

    const dirX = brandX - startX;
    const dirY = brandY - startY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

    const endX = brandX - (dirX / dirLength) * arrowGap;
    const endY = brandY - (dirY / dirLength) * arrowGap;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2 - 42;

    arrowPath.setAttribute(
      "d",
      `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`,
    );

    requestAnimationFrame(animateHint);
  }

  requestAnimationFrame(animateHint);
}
