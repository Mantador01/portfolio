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
      "Analyse de crashs natifs liés à la mémoire, au disque et aux gros append",
    ],
    difficulties: [
      "Éviter les écritures trop massives en une seule fois",
      "Garder une structure compatible VTKHDF",
      "Comprendre les contraintes de thread-safety HDF5",
      "Produire des fichiers lisibles par les outils de visualisation",
    ],
    results: [
      "Writer plus stable sur gros datasets",
      "Gestion explicite du chunking des données",
      "Meilleure compréhension des limites mémoire/disque",
      "Base solide pour des visualisations temporelles lourdes",
    ],
    tags: ["C++", "VTK", "HDF5", "HighFive", "Performance", "3D"],
    github: "https://github.com/ton-pseudo/vtkhdf-writer",
    demo: "",
    video: "",
  },
  {
    id: "unity-terrain",
    title: "Modélisation procédurale de mondes virtuels",
    subtitle: "C++ / Terrain Modeling / A* / Érosion / Three.js",
    cover: "assets/media/map.png",
    type: "Projet universitaire M2 — Modélisation de Mondes Virtuels",
    report: "assets/media/rapport-mmv-cottier.pdf",
    year: "2026",
    short:
      "Projet de terrain modeling combinant génération procédurale, descripteurs de relief, routes adaptées à la topographie, érosion et visualisation interactive de terrains 3D.",
    description: `
      Projet réalisé dans le cadre de l’UE
      <a href="https://perso.liris.cnrs.fr/eric.galin/M2/Landscapes/" target="_blank" rel="noreferrer">
      Modélisation de Mondes Virtuels   
      </a>.
      L’objectif était d’expérimenter plusieurs techniques de génération, d’analyse
      et de transformation de terrains 3D : couverture neigeuse basée sur altitude
      et pente, génération de routes par A*, terrassement automatique, placement
      procédural de villes, simulation de trafic, érosion hydraulique et thermique.
    `,
    role: [
      "Implémentation d’une simulation de couverture neigeuse basée sur l’altitude, la pente et une transition progressive pour éviter les coupures visuelles nettes",
      "Développement d’un pathfinding A* sur grille avec fonction de coût pénalisant les pentes trop fortes",
      "Ajout d’un système de terrassement automatique : aplatissement de la chaussée, déblai/remblai et transition douce avec le terrain",
      "Génération procédurale de villes par sampling avec contraintes géographiques : altitude, pente et distance minimale",
      "Construction d’un réseau routier reliant les villes, puis simulation simple d’agents de trafic sur les routes générées",
      "Implémentation d’une érosion hydraulique itérative : pluie, écoulement, transport de sédiments, dépôt et évaporation",
      "Ajout d’une érosion thermique pour stabiliser les pentes et adoucir les pics produits par certaines simulations",
      "Création d’un outil d’édition manuelle du terrain (God mod) avec projection de rayon et influence gaussienne",
      "Export des terrains en OBJ/MTL/PNG et intégration dans un viewer Three.js pour les présenter dans le portfolio :)",
    ],
    difficulties: [
      "Transformer des notions théoriques de terrain modeling en comportements visuels compréhensibles",
      "Équilibrer réalisme et lisibilité visuelle, notamment pour la neige, les routes et l’érosion",
      "Construire une fonction de coût qui ne cherche pas seulement le chemin le plus court, mais un chemin praticable selon la pente",
      "Modifier la géométrie du terrain autour des routes sans créer de ruptures trop brutales",
      "Gérer des simulations itératives sur une grille complète, avec un coût dépendant du nombre d’itérations et de la résolution du terrain",
    ],
    results: [
      "Plusieurs terrains visualisables dans Qt puis par la suite directement dans le portfolio avec changement de modèle et de texture",
      "Comparaison visuelle de différentes simulations : neige, érosion hydraulique, érosion thermique, routes et textures de descripteurs",
      "Routes générées en tenant compte du relief, avec contournement des fortes pentes et terrassement de la chaussée",
      "Système de villes et trafic procédural montrant une première couche d’organisation du monde virtuel",
      "Viewer WebGL réutilisable pour afficher d’autres terrains exportés",
    ],
    tags: [
      "C++",
      "Qt",
      "Terrain Modeling",
      "Heightfield",
      "A*",
      "Érosion",
      "Simulation",
      "Procédural",
      "OBJ/MTL",
      "Three.js",
      "WebGL",
    ],
    github: "https://github.com/Mantador01/mmv",
    demo: "",
    video: "",
    terrainViewer: true,
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
      "Visualisation avant/après",
    ],
    difficulties: [
      "Choisir les seuils robustes",
      "Éliminer le bruit",
      "Produire un résultat clair à montrer",
    ],
    results: [
      "Pipeline lisible",
      "Comparaison avant/après",
      "Code facilement réutilisable",
    ],
    tags: ["Python", "OpenCV", "Image", "Segmentation"],
    github: "https://github.com/ton-pseudo/opencv-segmentation",
    demo: "",
    video: "",
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
      "Préparation pour GitHub Pages",
    ],
    difficulties: [
      "Rester sobre et clair",
      "Ne pas rendre le site trop lourd",
      "Mettre en avant le fond technique sans noyer le recruteur",
    ],
    results: [
      "Portfolio rapide",
      "Déploiement gratuit possible",
      "Code facile à modifier",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "https://github.com/ton-pseudo/portfolio-id3d",
    demo: "https://ton-pseudo.github.io/portfolio-id3d/",
    video: "",
  },
  {
    id: "modelisation-geometrique",
    title: "Modélisation géométrique implicite",
    subtitle: "C++ / Qt / Blobs / SDF / Sphere Tracing",
    cover: "assets/media/implicit_surface_snail_low_res.png",
    type: "Projet universitaire — Modélisation Géométrique",
    heroPlyModelId: "submarine-scene",
    plyViewer: true,
    year: "2025",
    short:
      "Projet de modélisation géométrique autour des surfaces implicites : blobs, primitives SDF, opérations booléennes, blend lissé, sphere tracing, érosion procédurale et génération de terrain.",
    description: `
    Projet réalisé dans le cadre de l’UE
    <a href="https://perso.liris.cnrs.fr/eric.galin/M2/Implicits/" target="_blank" rel="noreferrer">Modélisation Géométrique</a>.
    L’objectif était d’expérimenter plusieurs représentations géométriques implicites :
    blobs, champs scalaires, distances signées, opérations booléennes, blend lissé,
    sphere tracing et génération procédurale de formes. Le projet contient aussi des
    tests de performance et plusieurs scènes de démonstration, dont une scène sous-marin
    construite avec des primitives implicites.
  `,
    role: [
      "Implémentation d’un système de blobs basé sur un champ scalaire implicite composé de primitives point et segment",
      "Utilisation d’un noyau de Wyvill pour obtenir une influence bornée, cubique et lisse aux frontières",
      "Ajout de paramètres de contrôle comme le rayon, le poids et la couleur des primitives",
      "Implémentation de primitives SDF : sphère, boîte, capsule et tore",
      "Implémentation d’opérations booléennes sur SDF : union, intersection, différence et blend lissé",
      "Comparaison entre union brute et fusion lissée pour obtenir des transitions plus propres entre primitives",
      "Développement d’un sphere tracing pour détecter l’intersection entre un rayon et une surface implicite",
      "Création d’un système d’érosion procédurale par impacts successifs de sphères sur une surface implicite",
      "Comparaison de performances entre évaluation incrémentale et évaluation batch",
      "Expérimentation d’une génération de terrain procédural par heightmap avec bruit de Perlin, amplitude, fréquence, octaves et coloration par altitude",
    ],
    difficulties: [
      "Comprendre et manipuler des surfaces implicites où la géométrie n’est pas stockée directement comme un maillage",
      "Trouver un bon compromis entre résolution, qualité du maillage et temps de calcul",
      "Gérer la fusion progressive des blobs sans produire de formes trop bruitées ou trop coûteuses",
      "Comparer les performances lorsque le nombre de primitives augmente fortement",
      "Différencier union brute, intersection, différence et blend lissé dans un système SDF",
      "Obtenir des effets d’érosion visuellement intéressants sans rendre l’évaluation trop lente",
      "Paramétrer la génération de terrain pour produire un résultat visuellement crédible/réaliste",
    ],
    results: [
      "Système de blobs capable de fusionner progressivement des sphères et segments en formes lisses",
      "Benchmarks montrant l’impact du nombre de primitives et de la résolution sur le temps de calcul",
      "Système SDF modulaire avec primitives et opérations combinables",
      "Exemples visuels de différence, intersection, union et smooth blend",
      "Sphere tracing fonctionnel sur surfaces implicites",
      "Effets d’érosion procédurale : cratères, bosses, formes lissées et formes plus brutes",
      "Terrain procédural généré par bruit avec coloration par altitude et biomes simples",
      "Scène finale sous-marin réalisée avec des primitives implicites",
    ],
    tags: [
      "C++",
      "Qt",
      "Modélisation géométrique",
      "Surfaces implicites",
      "Blobs",
      "SDF",
      "Sphere Tracing",
      "Marching Cubes",
      "Érosion",
      "Perlin Noise",
      "Heightmap",
    ],
    github: "https://github.com/Mantador01/modelisation-geometrique",
    report: "assets/media/rapport-mg-cottier.pdf",
    demo: "",
    video: "",
  },
];
