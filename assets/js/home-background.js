import * as THREE from "https://esm.sh/three@0.165.0";

const canvas = document.querySelector("#threeHomeBackground");

if (canvas) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 42;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const group = new THREE.Group();
  scene.add(group);

  const particleCount = 170;
  const positions = new Float32Array(particleCount * 3);
  const basePositions = [];

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 95;
    const y = (Math.random() - 0.5) * 55;
    const z = (Math.random() - 0.5) * 45;

    positions[i * 3 + 0] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    basePositions.push({
      x,
      y,
      z,
      speed: 0.25 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
    });
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x66e6ff,
    size: 0.09,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  group.add(particles);

  const lineGeometry = new THREE.BufferGeometry();
  const maxLines = 260;
  const linePositions = new Float32Array(maxLines * 2 * 3);

  lineGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(linePositions, 3),
  );

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x66e6ff,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  group.add(lines);

  const mouse = {
    x: 0,
    y: 0,
  };

  window.addEventListener("pointermove", (event) => {
    mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  function updateLines() {
    const pos = particleGeometry.attributes.position.array;
    let lineIndex = 0;
    const maxDistance = 10.5;

    for (let i = 0; i < particleCount; i++) {
      const ix = pos[i * 3 + 0];
      const iy = pos[i * 3 + 1];
      const iz = pos[i * 3 + 2];

      for (let j = i + 1; j < particleCount; j++) {
        if (lineIndex >= maxLines) break;

        const jx = pos[j * 3 + 0];
        const jy = pos[j * 3 + 1];
        const jz = pos[j * 3 + 2];

        const dx = ix - jx;
        const dy = iy - jy;
        const dz = iz - jz;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < maxDistance) {
          const offset = lineIndex * 6;

          linePositions[offset + 0] = ix;
          linePositions[offset + 1] = iy;
          linePositions[offset + 2] = iz;

          linePositions[offset + 3] = jx;
          linePositions[offset + 4] = jy;
          linePositions[offset + 5] = jz;

          lineIndex++;
        }
      }
    }

    for (let i = lineIndex * 6; i < linePositions.length; i++) {
      linePositions[i] = 0;
    }

    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.setDrawRange(0, lineIndex * 2);
  }

  let start = performance.now();

  function animate(now) {
    const t = (now - start) * 0.001;

    const pos = particleGeometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      const base = basePositions[i];

      pos[i * 3 + 0] = base.x + Math.sin(t * base.speed + base.phase) * 0.8;
      pos[i * 3 + 1] =
        base.y + Math.cos(t * base.speed * 0.8 + base.phase) * 0.6;
      pos[i * 3 + 2] =
        base.z + Math.sin(t * base.speed * 0.6 + base.phase) * 0.7;
    }

    particleGeometry.attributes.position.needsUpdate = true;

    group.rotation.y = t * 0.035 + mouse.x * 0.045;
    group.rotation.x = mouse.y * 0.035;

    updateLines();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight, false);
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      start = performance.now();
    }
  });
}
