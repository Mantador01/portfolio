import * as THREE from "https://esm.sh/three@0.165.0";
import { OrbitControls } from "https://esm.sh/three@0.165.0/examples/jsm/controls/OrbitControls.js";
import { PLYLoader } from "https://esm.sh/three@0.165.0/examples/jsm/loaders/PLYLoader.js";

function getElement(target) {
  if (!target) return null;
  if (typeof target === "string") return document.querySelector(target);
  return target;
}

function setStatus(element, text) {
  if (element) element.textContent = text;
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
}

function centerScaleAndFit(object, scene, camera, controls) {
  const group = new THREE.Group();
  group.add(object);
  scene.add(group);

  group.updateMatrixWorld(true);

  let box = new THREE.Box3().setFromObject(group);
  let size = box.getSize(new THREE.Vector3());
  let center = box.getCenter(new THREE.Vector3());

  if (!Number.isFinite(size.x) || size.length() === 0) {
    throw new Error(
      "Bounding box invalide : PLY vide ou géométrie non lisible.",
    );
  }

  object.position.sub(center);

  group.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(group);
  size = box.getSize(new THREE.Vector3());
  center = box.getCenter(new THREE.Vector3());

  const maxDim = Math.max(size.x, size.y, size.z);
  group.scale.setScalar(500 / maxDim);

  group.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(group);
  size = box.getSize(new THREE.Vector3());
  center = box.getCenter(new THREE.Vector3());

  const finalMaxDim = Math.max(size.x, size.y, size.z);
  const distance = finalMaxDim * 0.8;

  camera.position.set(
    center.x + distance * 0.8,
    center.y + distance * 0.6,
    center.z + distance * 0.8,
  );

  camera.near = Math.max(0.1, distance / 1000);
  camera.far = distance * 30;
  camera.updateProjectionMatrix();

  controls.target.copy(center);
  controls.update();

  return group;
}

export function createPLYViewer(options) {
  const canvas = getElement(options.canvas);
  const controlsContainer = getElement(options.controls);
  const status = getElement(options.status);
  const models = options.models ?? [];

  if (!canvas) {
    console.error("Canvas PLY introuvable.");
    return null;
  }

  if (!models.length) {
    console.error("Aucun modèle PLY défini.");
    setStatus(status, "Aucun modèle PLY défini");
    return null;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x171a21);

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000000);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.08;

  scene.add(new THREE.AmbientLight(0xffffff, 1.1));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(300, 500, 700);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x9ccfff, 0.7);
  fillLight.position.set(-500, 300, 250);
  scene.add(fillLight);

  const loader = new PLYLoader();

  let currentObject = null;
  let currentIndex = -1;
  let loadToken = 0;

  function resizeRenderer() {
    const container = canvas.parentElement ?? canvas;
    const width = Math.max(1, Math.floor(container.clientWidth));
    const height = Math.max(1, Math.floor(container.clientHeight));

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updateSelect() {
    if (!controlsContainer) return;

    const select = controlsContainer.querySelector("select[data-ply-select]");
    if (select) {
      select.value = String(currentIndex);
    }
  }

  async function loadPLY(index) {
    const model = models[index];
    if (!model) return;

    currentIndex = index;
    updateSelect();

    const token = ++loadToken;

    setStatus(status, `Chargement ${model.label}...`);

    try {
      const geometry = await loader.loadAsync(model.url);

      if (token !== loadToken) return;

      geometry.computeVertexNormals();

      const hasVertexColors = Boolean(geometry.attributes.color);

      const material = new THREE.MeshStandardMaterial({
        color: hasVertexColors ? 0xffffff : 0x8fb2ff,
        vertexColors: hasVertexColors,
        roughness: 0.82,
        metalness: 0.0,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);

      if (model.rotation) {
        mesh.rotation.set(
          THREE.MathUtils.degToRad(model.rotation.x ?? 0),
          THREE.MathUtils.degToRad(model.rotation.y ?? 0),
          THREE.MathUtils.degToRad(model.rotation.z ?? 0),
        );
      }

      if (currentObject) {
        scene.remove(currentObject);
        disposeObject(currentObject);
      }

      currentObject = centerScaleAndFit(mesh, scene, camera, orbitControls);

      setStatus(status, model.label);
    } catch (error) {
      console.error(`Erreur chargement PLY ${model.label}`, error);
      setStatus(status, `Erreur ${model.label}`);
    }
  }

  function buildControls() {
    if (!controlsContainer) return;

    controlsContainer.innerHTML = `
      <label class="terrain-select-label">
        <span>Modèle PLY</span>
        <select class="terrain-select" data-ply-select>
          ${models
            .map(
              (model, index) => `
                <option value="${index}">
                  ${model.label}
                </option>
              `,
            )
            .join("")}
        </select>
      </label>
    `;

    const select = controlsContainer.querySelector("select[data-ply-select]");

    select.addEventListener("change", () => {
      loadPLY(Number(select.value));
    });
  }

  function animate() {
    resizeRenderer();
    orbitControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  buildControls();
  resizeRenderer();
  animate();
  loadPLY(options.startIndex ?? 0);

  window.addEventListener("resize", resizeRenderer);

  return {
    loadPLY,
    scene,
    camera,
    renderer,
    controls: orbitControls,
  };
}
