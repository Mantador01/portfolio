import { projects } from "./projects.js";

const projectGrid = document.querySelector("#projectGrid");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  article.innerHTML = `
    <a class="project-cover" href="project.html?id=${project.id}" aria-label="Voir le projet ${project.title}">
      <img src="${project.cover}" alt="Aperçu du projet ${project.title}" loading="lazy" />
    </a>
    <div class="project-card-content">
      <div class="project-meta">
        <span>${project.type}</span>
        <span>${project.year}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-subtitle">${project.subtitle}</p>
      <p>${project.short}</p>
      <ul class="tag-list compact">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      <a class="text-link" href="project.html?id=${project.id}">Voir la fiche projet →</a>
    </div>
  `;

  return article;
}

if (projectGrid) {
  projectGrid.append(...projects.map(createProjectCard));
}
