import { projects } from "./projects.js";

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
          ${optionalLink(project.demo, "Voir la démo")}
          ${optionalLink(project.video, "Voir la vidéo")}
        </div>
      </div>
      <img class="project-main-image" src="${project.cover}" alt="Aperçu du projet ${project.title}" />
    </section>

    <section class="section project-details-grid">
      <article class="detail-card">
        <h2>Mon rôle</h2>
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
