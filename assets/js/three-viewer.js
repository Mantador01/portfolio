import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.165.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#hero3d");

if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(2.8, 2.2, 3.2);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.IcosahedronGeometry(1.15, 2);
  const material = new THREE.MeshStandardMaterial({
    metalness: 0.15,
    roughness: 0.55,
    wireframe: false
  });
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  const wireGeometry = new THREE.WireframeGeometry(geometry);
  const wireMaterial = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.45 });
  const wire = new THREE.LineSegments(wireGeometry, wireMaterial);
  group.add(wire);

  const points = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < 350; i += 1) {
    const radius = 1.75 + Math.random() * 0.25;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  }
  points.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  const pointCloud = new THREE.Points(
    points,
    new THREE.PointsMaterial({ size: 0.012, transparent: true, opacity: 0.75 })
  );
  scene.add(pointCloud);

  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const light = new THREE.DirectionalLight(0xffffff, 1.6);
  light.position.set(3, 4, 5);
  scene.add(light);

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    controls.update();
    pointCloud.rotation.y += 0.0009;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  animate();
}
