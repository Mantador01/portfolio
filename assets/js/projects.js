export const projects = [
  {
    id: "vtkhdf-writer",
    title: "Writer VTKHDF haute performance",
    subtitle: "C++ / VTK / HDF5 / HighFive",
    cover: "assets/media/vtkhdf.svg",
    type: "Projet stage / recherche appliquée",
    year: "2026",
    short:
      "Développement et optimisation d’un writer C++ capable d’écrire de très grands maillages temporels au format VTKHDF.",
    description:
      "Ce projet porte sur l’écriture performante de données scientifiques 3D volumineuses. L’objectif est de produire des fichiers exploitables dans VTK/ParaView tout en contrôlant la mémoire, les offsets temporels et les contraintes HDF5.",
    role: [
      "Migration d’une partie du code h5pp vers HighFive",
      "Gestion des attributs temporels PointData et CellData",
      "Écriture chunkée pour limiter les pics mémoire",
      "Tests de stress sur plusieurs dizaines de millions de points",
      "Analyse de crashs natifs liés à la mémoire, au disque et aux gros append"
    ],
    difficulties: [
      "Éviter les écritures trop massives en une seule fois",
      "Garder une structure compatible VTKHDF",
      "Comprendre les contraintes de thread-safety HDF5",
      "Produire des fichiers lisibles par les outils de visualisation"
    ],
    results: [
      "Writer plus stable sur gros datasets",
      "Gestion explicite du chunking des données",
      "Meilleure compréhension des limites mémoire/disque",
      "Base solide pour des visualisations temporelles lourdes"
    ],
    tags: ["C++", "VTK", "HDF5", "HighFive", "Performance", "3D"],
    github: "https://github.com/ton-pseudo/vtkhdf-writer",
    demo: "",
    video: ""
  },
  {
    id: "unity-terrain",
    title: "Terrain procédural Unity",
    subtitle: "Unity / C# / LOD / Perlin Noise",
    cover: "assets/media/unity.svg",
    type: "Projet 3D temps réel",
    year: "2025",
    short:
      "Génération d’un terrain procédural avec bruit de Perlin, niveaux de détail et déplacement caméra temps réel.",
    description:
      "Projet Unity orienté rendu temps réel. Le but est de générer une scène 3D navigable et optimisée avec des chunks, du LOD et des paramètres modifiables.",
    role: [
      "Implémentation du déplacement caméra",
      "Génération de terrain par bruit de Perlin",
      "Gestion de chunks et niveaux de détail",
      "Tests de performance en scène temps réel"
    ],
    difficulties: [
      "Éviter les baisses de FPS lors du chargement des chunks",
      "Organiser le code C# proprement",
      "Rendre la scène lisible et démontrable en WebGL"
    ],
    results: [
      "Scène 3D interactive",
      "Démo exportable en WebGL",
      "Base réutilisable pour un mini-jeu ou viewer 3D"
    ],
    tags: ["Unity", "C#", "LOD", "Procédural", "3D"],
    github: "https://github.com/ton-pseudo/unity-terrain",
    demo: "https://ton-pseudo.itch.io/terrain-demo",
    video: ""
  },
  {
    id: "opencv-segmentation",
    title: "Segmentation d’image OpenCV",
    subtitle: "Python / OpenCV / HSV / Morphologie",
    cover: "assets/media/opencv.svg",
    type: "Projet vision par ordinateur",
    year: "2025",
    short:
      "Pipeline de segmentation basé sur masques HSV, opérations morphologiques et extraction de régions d’intérêt.",
    description:
      "Projet de traitement d’image visant à isoler des objets ou zones spécifiques à partir d’images en utilisant différentes étapes de prétraitement.",
    role: [
      "Conversion RGB/HSV",
      "Création de masques",
      "Nettoyage par érosion/dilatation",
      "Visualisation avant/après"
    ],
    difficulties: [
      "Choisir les seuils robustes",
      "Éliminer le bruit",
      "Produire un résultat clair à montrer"
    ],
    results: [
      "Pipeline lisible",
      "Comparaison avant/après",
      "Code facilement réutilisable"
    ],
    tags: ["Python", "OpenCV", "Image", "Segmentation"],
    github: "https://github.com/ton-pseudo/opencv-segmentation",
    demo: "",
    video: ""
  },
  {
    id: "web-portfolio",
    title: "Portfolio web interactif",
    subtitle: "HTML / CSS / JavaScript / Three.js",
    cover: "assets/media/web.svg",
    type: "Projet web personnel",
    year: "2026",
    short:
      "Site portfolio statique avec pages projets, design responsive et mini visualisation 3D intégrée.",
    description:
      "Ce portfolio sert à présenter proprement mes projets techniques avec une interface simple, rapide et hébergeable gratuitement.",
    role: [
      "Développement de la structure HTML/CSS/JS",
      "Création d’un composant de cartes projets",
      "Intégration d’une scène Three.js légère",
      "Préparation pour GitHub Pages"
    ],
    difficulties: [
      "Rester sobre et clair",
      "Ne pas rendre le site trop lourd",
      "Mettre en avant le fond technique sans noyer le recruteur"
    ],
    results: [
      "Portfolio rapide",
      "Déploiement gratuit possible",
      "Code facile à modifier"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "https://github.com/ton-pseudo/portfolio-id3d",
    demo: "https://ton-pseudo.github.io/portfolio-id3d/",
    video: ""
  }
];
