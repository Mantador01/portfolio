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

  let explosion = {
    active: false,
    startTime: 0,
    duration: 1.8,
    strength: 0,
  };

  const explosionGroup = new THREE.Group();
  scene.add(explosionGroup);

  const explosionParticleCount = 420;
  const explosionPositions = new Float32Array(explosionParticleCount * 3);
  const explosionColors = new Float32Array(explosionParticleCount * 3);
  const explosionVelocities = [];

  for (let i = 0; i < explosionParticleCount; i++) {
    explosionPositions[i * 3 + 0] = 0;
    explosionPositions[i * 3 + 1] = 0;
    explosionPositions[i * 3 + 2] = 0;

    explosionColors[i * 3 + 0] = 1.0;
    explosionColors[i * 3 + 1] = 0.45;
    explosionColors[i * 3 + 2] = 0.05;

    explosionVelocities.push(new THREE.Vector3());
  }

  const explosionGeometry = new THREE.BufferGeometry();
  explosionGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(explosionPositions, 3),
  );
  explosionGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(explosionColors, 3),
  );

  const explosionMaterial = new THREE.PointsMaterial({
    size: 0.38,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const explosionParticles = new THREE.Points(
    explosionGeometry,
    explosionMaterial,
  );
  explosionGroup.add(explosionParticles);

  // Onde de choc
  const shockwaveGeometry = new THREE.RingGeometry(1, 1.08, 96);
  const shockwaveMaterial = new THREE.MeshBasicMaterial({
    color: 0xffaa33,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  const shockwave = new THREE.Mesh(shockwaveGeometry, shockwaveMaterial);
  shockwave.position.z = 0;
  explosionGroup.add(shockwave);
  const brandButton = document.querySelector("#brandExplosion");

  let explosionAlreadyUsed = false;
  function triggerBigExplosion() {
    if (explosionAlreadyUsed) return;
    explosionAlreadyUsed = true;
    explosion.active = true;
    explosion.startTime = performance.now();
    explosion.strength = 1.0;

    explosionGroup.position.set(0, 0, 18);

    for (let i = 0; i < explosionParticleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI;
      const speed = 14 + Math.random() * 32;

      const dir = new THREE.Vector3(
        Math.cos(angle) * Math.cos(elevation),
        Math.sin(elevation),
        Math.sin(angle) * Math.cos(elevation),
      ).normalize();

      explosionVelocities[i].copy(dir.multiplyScalar(speed));

      explosionPositions[i * 3 + 0] = (Math.random() - 0.5) * 1.2;
      explosionPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      explosionPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.2;

      const r = 1.0;
      const g = 0.25 + Math.random() * 0.55;
      const b = Math.random() * 0.08;

      explosionColors[i * 3 + 0] = r;
      explosionColors[i * 3 + 1] = g;
      explosionColors[i * 3 + 2] = b;
    }

    explosionGeometry.attributes.position.needsUpdate = true;
    explosionGeometry.attributes.color.needsUpdate = true;

    shockwave.scale.setScalar(0.1);
    shockwaveMaterial.opacity = 0.9;
    explosionMaterial.opacity = 1.0;

    document.body.classList.add("site-explosion", "site-big-explosion");

    setTimeout(() => {
      document.body.classList.remove("site-explosion", "site-big-explosion");
      document.body.classList.add("ac-explosion-used");
    }, 1200);
  }

  if (brandButton) {
    brandButton.addEventListener("click", (event) => {
      event.preventDefault();
      triggerBigExplosion();
    });
  }
  if (brandButton) {
    brandButton.addEventListener("click", (event) => {
      event.preventDefault();

      explosion.active = true;
      explosion.startTime = performance.now();
      explosion.strength = 1.0;

      document.body.classList.add("site-explosion");

      setTimeout(() => {
        document.body.classList.remove("site-explosion");
      }, 900);
    });
  }

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

      let x = base.x + Math.sin(t * base.speed + base.phase) * 0.8;
      let y = base.y + Math.cos(t * base.speed * 0.8 + base.phase) * 0.6;
      let z = base.z + Math.sin(t * base.speed * 0.6 + base.phase) * 0.7;

      if (explosion.active) {
        const elapsed = (now - explosion.startTime) * 0.001;
        const progress = Math.min(elapsed / explosion.duration, 1);
        const force = Math.sin(progress * Math.PI) * explosion.strength;

        const dir = new THREE.Vector3(base.x, base.y, base.z).normalize();

        x += dir.x * force * 32;
        y += dir.y * force * 22;
        z += dir.z * force * 28;

        if (progress >= 1) {
          explosion.active = false;
        }
      }

      pos[i * 3 + 0] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    particleGeometry.attributes.position.needsUpdate = true;

    group.rotation.y = t * 0.035 + mouse.x * 0.045;
    group.rotation.x = mouse.y * 0.035;

    updateLines();

    if (explosion.active) {
      const elapsed = (now - explosion.startTime) * 0.001;
      const progress = Math.min(elapsed / explosion.duration, 1);
      const fade = 1 - progress;

      for (let i = 0; i < explosionParticleCount; i++) {
        const vx = explosionVelocities[i].x;
        const vy = explosionVelocities[i].y;
        const vz = explosionVelocities[i].z;

        explosionPositions[i * 3 + 0] += vx * 0.035 * fade;
        explosionPositions[i * 3 + 1] += vy * 0.035 * fade - progress * 0.025;
        explosionPositions[i * 3 + 2] += vz * 0.035 * fade;
      }

      explosionGeometry.attributes.position.needsUpdate = true;

      explosionMaterial.opacity = Math.max(0, fade * 1.2);

      const shockScale = 1 + progress * 34;
      shockwave.scale.setScalar(shockScale);
      shockwaveMaterial.opacity = Math.max(0, 0.85 * fade);

      camera.position.x = (Math.random() - 0.5) * 0.32 * fade;
      camera.position.y = (Math.random() - 0.5) * 0.22 * fade;
      camera.position.z = 42 + (Math.random() - 0.5) * 0.45 * fade;

      if (progress >= 1) {
        explosion.active = false;
        explosionMaterial.opacity = 0;
        shockwaveMaterial.opacity = 0;
        camera.position.set(0, 0, 42);
      }
    }

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
