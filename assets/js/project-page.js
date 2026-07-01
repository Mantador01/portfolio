import { projects } from "./projects.js";
import {
  TERRAIN_MODELS,
  TERRAIN_TEXTURES,
  TERRAIN_QUALITIES,
} from "./terrain-data.js";
import { createTerrainViewer } from "./terrain-viewer.js";
import { PLY_MODELS } from "./ply-data.js";
import { createPLYViewer } from "./ply-viewer.js";

function heroVisual(project) {
  if (project.heroPlyModelId) {
    return `
      <div class="project-hero-ply-card">
        <canvas id="heroProjectPLY3d"></canvas>
        <div id="heroProjectPLYStatus" class="terrain-status">Chargement...</div>
      </div>
    `;
  }

  if (project.heroImages?.length) {
    return `
      <div class="project-hero-image-stack">
        ${project.heroImages
          .map(
            (image) => `
              <img src="${image.src}" alt="${image.alt ?? project.title}" />
            `,
          )
          .join("")}
      </div>
    `;
  }

  return `<img class="project-main-image" src="${project.cover}" alt="Aperçu du projet ${project.title}" />`;
}

const container = document.querySelector("#projectPage");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projects.find((item) => item.id === id) ?? projects[0];

document.title = `${project.title} — Portfolio ID3D`;

function list(items) {
  return `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function optionalLink(url, label, className = "button secondary") {
  if (!url) return "";
  return `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function mediaSection(project) {
  if (project.terrainViewer) {
    return `
      <section class="section media-section">
        <div class="section-heading">
    <p class="eyebrow">Résultats interactifs</p>
    <h2>Viewer interactif des terrains générés</h2>
        <p>
          Cette démo affiche les terrains générés. Le premier menu permet
          de changer de terrain exporté en OBJ/MTL, et le second menu permet d’appliquer
          différentes textures de descripteurs préconfig: altitude, pente, normales, courbure,
          humidité, réseaux routiers ou cartes de simulation.
        </p>
        </div>  
        <div class="terrain-viewer-card" aria-label="Viewer interactif de terrains 3D">
          <canvas id="projectTerrain3d" class="terrain-canvas"></canvas>
          <div id="projectTerrainControls" class="terrain-switcher" aria-label="Choix du terrain"></div>
          <div id="projectTerrainQualityControls" class="terrain-switcher terrain-quality-switcher" aria-label="Choix de la qualité"></div>
          <div id="projectTerrainTextureControls" class="terrain-switcher terrain-texture-switcher" aria-label="Choix de la texture"></div>
          <div id="projectTerrainStatus" class="terrain-status">Chargement...</div>
        </div>
      </section>
    `;
  }
  if (project.plyViewer) {
    return `
    <section class="section media-section">
      <div class="section-heading">
        <p class="eyebrow">Résultats interactifs</p>
        <h2>Viewer interactif des modèles géométriques</h2>
        <p>
          Cette démo affiche les surfaces générées pendant le projet : blobs,
          primitives SDF, opérations booléennes, blend lissé, érosion procédurale
          ou scènes composées. Les modèles sont exportés en PLY.
        </p>
      </div>

      <div class="terrain-viewer-card" aria-label="Viewer interactif de modèles PLY">
        <canvas id="projectPLY3d" class="terrain-canvas"></canvas>
        <div id="projectPLYControls" class="terrain-switcher" aria-label="Choix du modèle PLY"></div>
        <div id="projectPLYStatus" class="terrain-status">Chargement...</div>
      </div>
    </section>
  `;
  }
  if (project.screenshots?.length) {
    return `
    <section class="section media-section">
      <div class="section-heading">
        <p class="eyebrow">Quelques animations..</p>
        <h2>Résultats visuels du projet</h2>
        <p>
          Les captures ci-dessous montrent les principales simulations réalisées : objet rigide, fluide SPH et collisions
          événementielles.
        </p>
      </div>

      <div class="screenshot-grid">
        ${project.screenshots
          .map(
            (screenshot) => `
              <figure class="screenshot-card">
                <img src="${screenshot.src}" alt="${screenshot.caption}" />
                <figcaption>${screenshot.caption}</figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
  }

  return `
    <section class="section media-section">
      <div class="section-heading">
        <p class="eyebrow">Médias</p>
        <h2>Comment montrer ce projet</h2>
        <p>
          Ajoute ici une vidéo courte, des captures, des GIFs ou un lien vers une démo. Pour un projet lourd,
          montre une version simplifiée plutôt que les vrais fichiers volumineux.
        </p>
      </div>
      <div class="media-placeholder">
        <p>Remplace ce bloc par une vidéo :</p>
        <code>&lt;video src="assets/media/mon-projet.mp4" controls&gt;&lt;/video&gt;</code>
      </div>
    </section>
  `;
}

function setupImageLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `
    <button class="image-lightbox-close" aria-label="Fermer">×</button>
    <div class="image-lightbox-content">
      <img class="image-lightbox-img" src="" alt="" />
      <p class="image-lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector(".image-lightbox-img");
  const lightboxCaption = lightbox.querySelector(".image-lightbox-caption");
  const closeButton = lightbox.querySelector(".image-lightbox-close");

  function openLightbox(img, caption = "") {
    if (!img?.src) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt ?? "";
    lightboxCaption.textContent = caption || img.alt || "";
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");

    // On vide le src pour stopper les gros GIFs si besoin.
    setTimeout(() => {
      if (!lightbox.classList.contains("is-open")) {
        lightboxImg.src = "";
      }
    }, 200);
  }

  document.addEventListener("dblclick", (event) => {
    const screenshotCard = event.target.closest(".screenshot-card");
    const heroImage = event.target.closest(".project-hero-image-stack img");

    if (screenshotCard) {
      const img = screenshotCard.querySelector("img");
      const caption =
        screenshotCard.querySelector("figcaption")?.textContent?.trim() ?? "";
      openLightbox(img, caption);
      return;
    }

    if (heroImage) {
      openLightbox(heroImage, heroImage.alt);
    }
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

if (container) {
  container.innerHTML = `
    <section class="section project-hero">
      <div>
        <a class="back-link" href="index.html#projets">← Retour aux projets</a>
        <p class="eyebrow">${project.type} · ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="project-subtitle large">${project.subtitle}</p>
        <p class="hero-text">${project.description}</p>
        <ul class="tag-list">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <div class="hero-actions">
          ${optionalLink(project.github, "Voir le code GitHub", "button primary")}
          ${optionalLink(project.report, "Voir le rapport")}
          ${optionalLink(project.demo, "Voir la démo")}
          ${optionalLink(project.video, "Voir la vidéo")}
        </div>
      </div>
      ${heroVisual(project)}
    </section>

    <section class="section project-details-grid">
      <article class="detail-card">
        <h2>Mon travail</h2>
        ${list(project.role)}
      </article>
      <article class="detail-card">
        <h2>Difficultés techniques</h2>
        ${list(project.difficulties)}
      </article>
      <article class="detail-card">
        <h2>Résultats</h2>
        ${list(project.results)}
      </article>
    </section>

    ${mediaSection(project)}
  `;

  if (project.terrainViewer) {
    createTerrainViewer({
      canvas: "#projectTerrain3d",
      controls: "#projectTerrainControls",
      qualityControls: "#projectTerrainQualityControls",
      textureControls: "#projectTerrainTextureControls",
      status: "#projectTerrainStatus",
      models: TERRAIN_MODELS,
      qualities: TERRAIN_QUALITIES,
      textures: TERRAIN_TEXTURES,
      defaultQuality: "low",
    });
  }
  if (project.plyViewer) {
    createPLYViewer({
      canvas: "#projectPLY3d",
      controls: "#projectPLYControls",
      status: "#projectPLYStatus",
      models: PLY_MODELS,
      startIndex: 0,
    });
  }
  if (project.heroPlyModelId) {
    const heroModel = PLY_MODELS.find(
      (model) => model.id === project.heroPlyModelId,
    );

    if (heroModel) {
      createPLYViewer({
        canvas: "#heroProjectPLY3d",
        status: "#heroProjectPLYStatus",
        models: [heroModel],
        startIndex: 0,
      });
    }
  }
  setupImageLightbox();
}
