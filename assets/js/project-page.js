import { projects } from "./projects.js";
import {
  TERRAIN_MODELS,
  TERRAIN_TEXTURES,
  TERRAIN_QUALITIES,
} from "./terrain-data.js";
import { createTerrainViewer } from "./terrain-viewer.js";

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
      <img class="project-main-image" src="${project.cover}" alt="Aperçu du projet ${project.title}" />
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
}
