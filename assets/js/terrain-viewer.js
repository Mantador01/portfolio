import * as THREE from "https://esm.sh/three@0.165.0";
import { OrbitControls } from "https://esm.sh/three@0.165.0/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "https://esm.sh/three@0.165.0/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "https://esm.sh/three@0.165.0/examples/jsm/loaders/OBJLoader.js";

function getElement(target) {
  if (!target) return null;
  if (typeof target === "string") return document.querySelector(target);
  return target;
}

function setStatus(element, text) {
  if (element) element.textContent = text;
}

function makeMaterialsVisible(object) {
  object.traverse((child) => {
    if (!child.isMesh) return;

    child.geometry.computeVertexNormals();

    if (!child.material) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0x8fb2ff,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide,
      });
      return;
    }

    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    materials.forEach((material) => {
      material.side = THREE.DoubleSide;
      material.needsUpdate = true;
    });
  });
}

function disposeMaterial(material) {
  if (!material) return;

  const materials = Array.isArray(material) ? material : [material];

  materials.forEach((mat) => {
    if (!mat) return;

    // On évite de détruire les textures du cache global.
    mat.map = null;
    mat.normalMap = null;
    mat.roughnessMap = null;
    mat.metalnessMap = null;
    mat.dispose();
  });
}

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) disposeMaterial(child.material);
  });
}

function centerScaleAndFit(object, scene, camera, controls) {
  const terrainGroup = new THREE.Group();

  // Ton export terrain est en Z-up. Three.js est en Y-up.
  object.rotation.x = -Math.PI / 2;
  terrainGroup.add(object);
  scene.add(terrainGroup);

  terrainGroup.updateMatrixWorld(true);

  let box = new THREE.Box3().setFromObject(terrainGroup);
  let size = box.getSize(new THREE.Vector3());
  let center = box.getCenter(new THREE.Vector3());

  if (!Number.isFinite(size.x) || size.length() === 0) {
    throw new Error(
      "Bounding box invalide : OBJ vide ou géométrie non lisible.",
    );
  }

  // Centre le terrain autour de l'origine.
  object.position.sub(center);

  terrainGroup.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(terrainGroup);
  size = box.getSize(new THREE.Vector3());

  // Scale auto : le plus grand côté fait environ 700 unités.
  const maxDim = Math.max(size.x, size.y, size.z);
  terrainGroup.scale.setScalar(700 / maxDim);

  terrainGroup.updateMatrixWorld(true);
  box = new THREE.Box3().setFromObject(terrainGroup);
  size = box.getSize(new THREE.Vector3());
  center = box.getCenter(new THREE.Vector3());

  // Caméra reculée pour éviter que le modèle soit coupé.
  const finalMaxDim = Math.max(size.x, size.y, size.z);
  const distance = finalMaxDim * 0.1;

  camera.position.set(
    center.x + distance * 0.85,
    center.y + distance * 0.75,
    center.z + distance * 0.85,
  );

  camera.near = Math.max(0.1, distance / 1000);
  camera.far = distance * 30;
  camera.updateProjectionMatrix();

  controls.target.copy(center);
  controls.update();

  return terrainGroup;
}

function hasUVs(object) {
  let found = false;

  object.traverse((child) => {
    if (!child.isMesh) return;
    if (child.geometry?.attributes?.uv) found = true;
  });

  return found;
}

async function loadTexture(textureLoader, textureCache, url) {
  if (!url) return null;

  if (textureCache.has(url)) {
    return textureCache.get(url);
  }

  const texture = await textureLoader.loadAsync(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;

  textureCache.set(url, texture);
  return texture;
}

function applyTextureToObject(object, texture) {
  object.traverse((child) => {
    if (!child.isMesh) return;

    disposeMaterial(child.material);

    child.material = new THREE.MeshStandardMaterial({
      map: texture,
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
  });
}

function applyFallbackMaterial(object) {
  object.traverse((child) => {
    if (!child.isMesh) return;

    disposeMaterial(child.material);

    child.material = new THREE.MeshStandardMaterial({
      color: 0x8fb2ff,
      roughness: 0.9,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
  });
}

async function loadOBJWithOptionalMTL(
  model,
  textureUrl,
  textureLoader,
  textureCache,
) {
  const objLoader = new OBJLoader();
  objLoader.setPath(model.path);

  // Si aucune texture PNG n'est forcée, on laisse le MTL faire son travail.
  if (model.mtl && !textureUrl) {
    try {
      const mtlLoader = new MTLLoader();
      mtlLoader.setPath(model.path);
      mtlLoader.setResourcePath(model.path);

      const materials = await mtlLoader.loadAsync(model.mtl);
      materials.preload();
      objLoader.setMaterials(materials);
    } catch (error) {
      console.warn(
        `MTL impossible à charger pour ${model.label}. Chargement OBJ sans MTL.`,
        error,
      );
    }
  }

  const object = await objLoader.loadAsync(model.obj);

  if (textureUrl) {
    const texture = await loadTexture(textureLoader, textureCache, textureUrl);

    if (hasUVs(object)) {
      applyTextureToObject(object, texture);
    } else {
      console.warn(
        `${model.label} n'a pas d'UV. Le PNG ne peut pas être appliqué correctement.`,
      );
      applyFallbackMaterial(object);
    }
  } else {
    makeMaterialsVisible(object);
  }

  return object;
}

export function createTerrainViewer(options) {
  const canvas = getElement(options.canvas);
  const controlsContainer = getElement(options.controls);
  const qualityControlsContainer = getElement(options.qualityControls);
  const textureControlsContainer = getElement(options.textureControls);
  const status = getElement(options.status);

  const models = options.models ?? [];
  const qualities = options.qualities ?? [];
  const textures = options.textures ?? [];

  if (!canvas) {
    console.error("Canvas terrain introuvable.");
    return null;
  }

  if (!models.length) {
    console.error("Aucun terrain défini.");
    setStatus(status, "Aucun terrain défini");
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

  scene.add(new THREE.AmbientLight(0xffffff, 1.15));

  const sun = new THREE.DirectionalLight(0xffffff, 2.0);
  sun.position.set(300, 600, 800);
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0x9ccfff, 0.65);
  fill.position.set(-600, 300, 300);
  scene.add(fill);

  const textureLoader = new THREE.TextureLoader();
  const textureCache = new Map();

  let currentTerrain = null;
  let currentIndex = -1;
  let currentTextureIndex = Math.max(0, options.startTextureIndex ?? 0);
  let currentQuality = options.defaultQuality ?? "low";
  let loadToken = 0;

  function resolveModel(model) {
    // Compatibilité avec tes anciens modèles sans qualité.
    if (!model.qualities) {
      return model;
    }

    const variant =
      model.qualities[currentQuality] ??
      model.qualities.low ??
      Object.values(model.qualities)[0];

    return {
      ...model,
      ...variant,
    };
  }

  function resizeRenderer() {
    const container = canvas.parentElement ?? canvas;
    const width = Math.max(1, Math.floor(container.clientWidth));
    const height = Math.max(1, Math.floor(container.clientHeight));

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function getCurrentTextureUrl(model) {
    if (!textures.length) {
      return model.texture ?? null;
    }

    const selectedTexture = textures[currentTextureIndex];

    // "Original" : MTL si le modèle en a un, sinon texture par défaut du modèle.
    if (!selectedTexture || selectedTexture.url === null) {
      return model.texture ?? null;
    }

    // PNG forcé.
    return selectedTexture.url;
  }

  function updateButtons() {
    if (controlsContainer) {
      const select = controlsContainer.querySelector(
        "select[data-terrain-select]",
      );
      if (select) {
        select.value = String(currentIndex);
      }
    }

    if (qualityControlsContainer) {
      const select = qualityControlsContainer.querySelector(
        "select[data-quality-select]",
      );
      if (select) {
        select.value = String(currentQuality);
      }
    }

    if (textureControlsContainer) {
      const select = textureControlsContainer.querySelector(
        "select[data-texture-select]",
      );
      if (select) {
        select.value = String(currentTextureIndex);
      }
    }
  }

  async function loadTerrain(index) {
    const baseModel = models[index];
    if (!baseModel) return;

    const model = resolveModel(baseModel);

    currentIndex = index;
    updateButtons();

    const token = ++loadToken;
    const textureUrl = getCurrentTextureUrl(model);

    const qualityLabel =
      qualities.find((q) => q.id === currentQuality)?.label ?? currentQuality;

    setStatus(
      status,
      textureUrl
        ? `Chargement ${baseModel.label} · ${qualityLabel} + PNG...`
        : `Chargement ${baseModel.label} · ${qualityLabel}...`,
    );

    try {
      const object = await loadOBJWithOptionalMTL(
        model,
        textureUrl,
        textureLoader,
        textureCache,
      );

      if (token !== loadToken) return;

      if (currentTerrain) {
        scene.remove(currentTerrain);
        disposeObject(currentTerrain);
      }

      currentTerrain = centerScaleAndFit(object, scene, camera, orbitControls);

      const textureLabel = textureUrl
        ? ` · ${textureUrl.split("/").pop()}`
        : "";

      setStatus(status, `${baseModel.label} · ${qualityLabel}${textureLabel}`);
    } catch (error) {
      console.error(`Erreur chargement terrain ${baseModel.label}`, error);
      setStatus(status, `Erreur ${baseModel.label}`);
    }
  }

  function buildTerrainButtons() {
    if (!controlsContainer) return;

    controlsContainer.innerHTML = `
      <label class="terrain-select-label">
        <span>Terrain</span>
        <select class="terrain-select" data-terrain-select>
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

    const select = controlsContainer.querySelector(
      "select[data-terrain-select]",
    );

    select.addEventListener("change", () => {
      loadTerrain(Number(select.value));
    });
  }

  function buildQualityButtons() {
    if (!qualityControlsContainer || !qualities.length) return;

    qualityControlsContainer.innerHTML = `
      <label class="terrain-select-label">
        <span>Qualité</span>
        <select class="terrain-select" data-quality-select>
          ${qualities
            .map(
              (quality) => `
                <option value="${quality.id}">
                  ${quality.label}
                </option>
              `,
            )
            .join("")}
        </select>
      </label>
    `;

    const select = qualityControlsContainer.querySelector(
      "select[data-quality-select]",
    );

    select.addEventListener("change", () => {
      currentQuality = select.value;
      updateButtons();

      if (currentIndex >= 0) {
        loadTerrain(currentIndex);
      }
    });
  }

  function buildTextureButtons() {
    if (!textureControlsContainer || !textures.length) return;

    textureControlsContainer.innerHTML = `
      <label class="terrain-select-label">
        <span>Texture PNG</span>
        <select class="terrain-select" data-texture-select>
          ${textures
            .map(
              (texture, index) => `
                <option value="${index}">
                  ${texture.label}
                </option>
              `,
            )
            .join("")}
        </select>
      </label>
    `;

    const select = textureControlsContainer.querySelector(
      "select[data-texture-select]",
    );

    select.addEventListener("change", () => {
      currentTextureIndex = Number(select.value);
      updateButtons();

      if (currentIndex >= 0) {
        loadTerrain(currentIndex);
      }
    });
  }

  function animate() {
    resizeRenderer();
    orbitControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  buildTerrainButtons();
  buildQualityButtons();
  buildTextureButtons();

  resizeRenderer();
  animate();
  loadTerrain(options.startIndex ?? 0);

  window.addEventListener("resize", resizeRenderer);

  return {
    loadTerrain,
    scene,
    camera,
    renderer,
    controls: orbitControls,
  };
}
