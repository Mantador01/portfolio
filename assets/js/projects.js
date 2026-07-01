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
  {
    id: "animation-physique",
    title: "Animation physique et simulations particulaires",
    subtitle: "C++ / Rigid Body / SPH / Collisions / Simulation",
    cover: "assets/media/zara.jpg",
    type: "Projet universitaire — Animation, Corps Articulés et Moteurs Physiques",
    year: "2026",
    short:
      "Projet de simulation physique combinant objet rigide, collisions, fluide particulaire SPH et simulation événementielle 1D inspirée de l’expérience des collisions de π.",
    description: `
    Projet réalisé dans le cadre de l’UE 
    <a href="https://perso.liris.cnrs.fr/florence.zara/Web/pages_html/M2Animation.html" target="_blank" rel="noreferrer">Animation, Corps Articulés et Moteurs Physiques</a>.
    Le travail porte sur plusieurs aspects de simulation physique : dynamique d’un objet
    rigide, intégration temporelle, collisions avec le sol, simulation de fluide par SPH,
    gestion des frontières, puis une simulation événementielle 1D inspirée de l’expérience
    des collisions permettant d’approcher les décimales de π.
  `,
    role: [
      "Implémentation de la dynamique d’un objet rigide à partir d’un repère local des sommets et d’une transformation rigide position/rotation",
      "Calcul de la masse totale, du barycentre, de la vitesse linéaire et de la vitesse angulaire via le tenseur d’inertie",
      "Mise en place d’une intégration temporelle de type Euler semi-implicite avec amortissement",
      "Ajout d’une ré-orthonormalisation de la matrice de rotation pour éviter la dérive numérique",
      "Gestion de collisions avec un plan droit ou incliné, correction de pénétration, frottement et réponse sans rebond",
      "Implémentation d’une simulation de fluide SPH : calcul des densités, pression, viscosité et accélérations",
      "Gestion des frontières du fluide dans une boîte avec réflexion amortie des particules",
      "Ajout d’un mode de simulation événementielle 1D pour compter les collisions entre deux objets et un mur",
      "Ajout d’un paramètre de masse permettant de reproduire le comportement de l’expérience des collisions de π",
    ],
    difficulties: [
      "Maintenir une transformation rigide cohérente sans déformation du maillage",
      "Éviter la dérive numérique de la rotation pendant l’intégration",
      "Gérer les collisions de manière stable avec correction de position et de vitesse",
      "Calculer les interactions SPH avec une approche simple mais coûteuse en O(n²)",
      "Trouver des paramètres stables pour la densité, la pression, la viscosité et les frontières",
      "Éviter de rater des collisions dans le mode π en passant d’un pas de temps classique à une simulation événementielle",
    ],
    results: [
      "Objet rigide animé avec gravité, intégration temporelle et collisions sur plan incliné",
      "Maillage mis à jour en temps réel à partir de l’état physique courant",
      "Simulation SPH de particules avec densité, pression, viscosité et collisions contre les frontières",
      "Réflexion amortie des particules sur une boîte de simulation",
      "Mode π collisions fonctionnel avec 31 collisions pour un ratio de masses 100:1",
      "Captures et vidéo de démonstration pour montrer les différents comportements simulés",
    ],
    tags: [
      "C++",
      "Simulation physique",
      "Rigid Body",
      "SPH",
      "Particules",
      "Collisions",
      "Euler semi-implicite",
      "Moteur physique",
      "Animation",
      "π collisions",
    ],
    github:
      "https://github.com/Mantador01/Animation-physique-et-simulations-particulaires",
    report: "assets/media/rapport-acamp1-cottier.pdf",
    demo: "",
    video:
      "https://drive.google.com/drive/folders/1cVRgldJz7exwME5FBPBB2q-q8ZztaGb4?usp=sharing",
    screenshots: [
      {
        src: "assets/media/proj2.gif",
        caption:
          "Simulation d’un objet rigide : intégration, gravité et collision avec un plan incliné",
      },
      {
        src: "assets/media/proj3.gif",
        caption:
          "Simulation de fluide SPH avec particules, densité, pression, viscosité et frontières",
      },
      {
        src: "assets/media/proj1.gif",
        caption:
          "Mode π collisions : simulation événementielle 1D avec deux objets et un mur",
      },
    ],
    heroImages: [
      {
        src: "assets/media/fluid1.png",
        alt: "",
      },
      {
        src: "assets/media/fluid2.png",
        alt: "",
      },
      {
        src: "assets/media/fluid3.png",
        alt: "",
      },
    ],
  },
  {
    id: "bipede-fsm-optimization",
    title: "Optimisation de locomotion bipède",
    subtitle: "C++ / FSM / Animation / Optimisation / Physique",
    cover: "assets/media/pronost.png",
    type: "Projet universitaire — Animation, Corps Articulés et Moteurs Physiques",
    year: "2026",
    short:
      "Projet d’animation physique autour d’un bipède : optimisation automatique des paramètres de marche, interpolation non linéaire, contrôle de vitesse, interactions environnementales et nouvelle FSM d’agenouillement.",
    description: `
    Projet réalisé dans le cadre de l’UE 
        <a href="https://perso.liris.cnrs.fr/nicolas.pronost/UCBL/M2ANIM/" target="_blank" rel="noreferrer">Animation, Corps Articulés et Moteurs Physiques</a>.
    L’objectif était d’améliorer le comportement d’un contrôleur de locomotion basé sur
    une machine à états finis : optimisation automatique des angles de marche, lissage
    des transitions, contrôle de vitesse en temps réel, ajout d’interactions physiques
    comme une cape ou une force de traînée, puis création d’un nouvel état permettant
    au personnage de s’agenouiller et de se relever.
  `,
    role: [
      "Implémentation d’une stratégie d’optimisation automatique des paramètres angulaires de marche",
      "Mise en place d’un Hill Climbing avec mutation adaptative pour tester de nouvelles configurations de marche",
      "Définition d’une fonction de coût combinant distance parcourue, énergie consommée et pénalité de chute",
      "Ajout d’une décroissance de l’amplitude de mutation pour stabiliser l’optimisation au fil des itérations",
      "Remplacement de transitions linéaires par une interpolation cubique SmoothStep afin de lisser les mouvements",
      "Ajout d’un contrôle temporel en temps réel via un multiplicateur de vitesse dans la FSM",
      "Paramétrage d’interactions physiques environnementales : cape en soft body et traînée de type fluide/boue",
      "Création d’une nouvelle FSM où le personnage passe à genou puis se relève en conservant son équilibre",
      "Analyse des logs d’optimisation pour suivre les records de distance et l’intérêt de continuer ou non les itérations",
    ],
    difficulties: [
      "Optimiser un grand nombre de paramètres angulaires sans faire diverger physiquement le bipède",
      "Construire une fonction de coût équilibrée entre distance, énergie et chute",
      "Éviter des mouvements trop robotiques causés par l’interpolation linéaire",
      "Stabiliser les transitions entre états pour réduire les pics de couple",
      "Faire varier la vitesse de locomotion sans casser les poses cibles de la FSM",
      "Ajouter une phase d’agenouillement et de relèvement sans que le personnage tombe",
      "Identifier le moment où l’optimisation n’apporte presque plus de gain significatif",
    ],
    results: [
      "Locomotion améliorée par optimisation automatique des paramètres de marche",
      "Mouvements plus fluides grâce à l’interpolation cubique SmoothStep",
      "Contrôle de vitesse en temps réel permettant d’accélérer ou de ralentir le personnage",
      "Ajout d’interactions physiques : cape articulée et zone de traînée type boue/neige",
      "Nouvelle machine à états permettant au personnage de s’agenouiller puis de se relever",
      "Résultat obtenu : environ 11.80 mètres parcourus en 5 secondes après optimisation",
      "Analyse de logs montrant la progression des records et la stagnation après plusieurs centaines d’itérations",
    ],
    tags: [
      "C++",
      "Animation",
      "FSM",
      "Locomotion",
      "Bipède",
      "Hill Climbing",
      "Optimisation",
      "SmoothStep",
      "Contrôle moteur",
      "Soft Body",
      "Simulation physique",
    ],
    github: "https://github.com/Mantador01/Optimisation-de-locomotion-bip-de",
    report: "assets/media/rapport-acamp2-cottier.pdf",
    demo: "",
    video:
      "https://drive.google.com/drive/folders/1cVRgldJz7exwME5FBPBB2q-q8ZztaGb4?usp=sharing",
    heroImages: [
      {
        src: "assets/media/pronost2.gif",
        alt: "",
      },
      {
        src: "assets/media/pronost5.png",
        alt: "",
      },
    ],
    screenshots: [
      {
        src: "assets/media/pronost3.gif",
        caption:
          "Contrôle temporel, cape soft body et traînée fluide/boue appliquée au bipède",
      },
      {
        src: "assets/media/pronost1.gif",
        caption:
          "Nouvelle FSM : le personnage s’agenouille puis se relève en gardant l’équilibre",
      },
      {
        src: "assets/media/pronost4.gif",
        caption:
          "Contrôle temporel temps réel : modification de la vitesse de locomotion au clavier via un multiplicateur de temps dans la FSM",
      },
    ],
  },
  {
    id: "unity-ik-spider",
    title: "Animation procédurale Unity : IK et locomotion d’araignée",
    subtitle: "Unity / C# / FABRIK / IK / Procedural Animation",
    cover: "assets/media/chara.jpg",
    type: "Projet universitaire — Animation de personnage",
    year: "2026",
    short:
      "Projet Unity autour de la cinématique inverse et de l’animation procédurale : IK personnalisée, cibles déplaçables, regard procédural et locomotion d’araignée avec placement automatique des pattes.",
    description: `
    Projet réalisé dans le cadre de l’UE 
        <a href="http://alexandre.meyer.pages.univ-lyon1.fr/m2-animation/" target="_blank" rel="noreferrer">Animation, Corps Articulés et Moteurs Physiques</a>.
    L’objectif était d’expérimenter l’animation procédurale sous Unity, en partant des notions de
    squelette, cinématique inverse, contrôle de mouvement et animation par script.
    Le projet contient une IK personnalisée, un système de cibles manipulables,
    un regard procédural vers une cible, puis une locomotion d’araignée où les pattes
    se replacent automatiquement au sol pendant que le corps s’équilibre selon les appuis.
  `,
    role: [
      "Implémentation d’un système de cinématique inverse personnalisé basé sur des chaînes articulées root → effecteur",
      "Création automatique de plusieurs chaînes IK à partir de couples source/cible",
      "Fusion des articulations partagées entre chaînes pour gérer plusieurs effecteurs sur un même squelette",
      "Déplacement interactif des cibles IK au clavier pour tester la réponse du solveur",
      "Ajout d’un système de regard procédural avec Animator IK et pondération du corps/de la tête",
      "Implémentation d’un look-at manuel avec limitation d’angle, rotation progressive et interpolation par Slerp",
      "Création d’une locomotion procédurale d’araignée : chaque patte possède une cible IK projetée au sol par raycast",
      "Déclenchement automatique d’un pas lorsque la cible d’une patte devient trop éloignée de sa position idéale",
      "Ajout d’un overshoot et d’une hauteur de pas pour rendre le mouvement des pattes plus naturel",
      "Équilibrage du corps de l’araignée à partir de la moyenne des positions des pieds et de la normale de support",
      "Contrôle clavier de l’araignée avec translation et rotation",
    ],
    difficulties: [
      "Construire une IK réutilisable au lieu de dépendre uniquement de l’IK humanoïde fournie par Unity",
      "Gérer plusieurs chaînes IK partageant certaines articulations sans obtenir de positions incohérentes",
      "Stabiliser les longueurs des segments pendant la résolution de la chaîne",
      "Éviter que les pattes de l’araignée glissent au sol ou se déplacent toutes en même temps",
      "Projeter correctement les cibles au sol avec des raycasts, même lorsque le corps se déplace",
      "Rendre le corps plus crédible en ajustant sa hauteur et son orientation selon les appuis",
      "Mélanger animation procédurale, contrôles clavier et contraintes de scène Unity",
    ],
    results: [
      "IK personnalisée fonctionnelle avec cibles interactives",
      "Système de regard procédural vers une cible, avec pondération du corps et de la tête",
      "Araignée contrôlable au clavier avec pattes qui se replacent automatiquement",
      "Placement des pieds au sol par raycast et mouvement de pas avec hauteur/overshoot",
      "Corps de l’araignée équilibré selon les quatre appuis",
      "Démo vidéo montrant les comportements procéduraux et les interactions",
    ],
    tags: [
      "Unity",
      "C#",
      "Animation procédurale",
      "Cinématique inverse",
      "IK",
      "FABRIK",
      "Squelette",
      "LookAt",
      "Quaternion",
      "Raycast",
      "Procedural Locomotion",
    ],
    github: "https://github.com/Mantador01/Animation-proc-durale-Unity",
    report: "",
    demo: "",
    video:
      "https://drive.google.com/drive/folders/1cVRgldJz7exwME5FBPBB2q-q8ZztaGb4?usp=sharing",
    heroImages: [
      {
        src: "assets/media/spider-walk-terrain.webp",
        alt: "Locomotion procédurale d’araignée",
      },
      {
        src: "assets/media/move.webp",
        alt: "",
      },
      {
        src: "assets/media/head-look.webp",
        alt: "",
      },
    ],
    screenshots: [
      {
        src: "assets/media/ik1.gif",
        caption: "Cinématique inverse sur une chaine.",
      },
      {
        src: "assets/media/ik2.webp",
        caption: "Cinématique inverse sur deux chaines.",
      },
      {
        src: "assets/media/ik3.webp",
        caption: "On lui rajoute des segments pour faire le lien.",
      },
      {
        src: "assets/media/spider-walk.webp",
        caption:
          "On a maintenant un animal (spider), les pattes se replacent automatiquement au sol pendant le déplacement.",
      },
      {
        src: "assets/media/capteur.webp",
        caption: "On a des target sous les pattes.",
      },
      {
        src: "assets/media/spider-walk-terrain.webp",
        caption: "Locomotion procédurale d’araignée",
      },
      {
        src: "assets/media/move.webp",
        caption:
          "Personnage avec une state machine (avancé, reculer, droite, gauce, les diagonales aussi, et le saut) avec les animations correspondantes.",
      },
      {
        src: "assets/media/head-look.webp",
        caption: "Regard procédural vers une cible",
      },
      {
        src: "assets/media/parametrable.png",
        caption: "Mécanisme parametrable à souhait !",
      },
      {
        src: "assets/media/scene.png",
        caption: "Exemple de GameObjects dans la scene",
      },
      {
        src: "assets/media/ik-script.png",
        caption: "Le script d'IK animation",
      },
      {
        src: "assets/media/animator.png",
        caption: "L'animator pour le bipède",
      },
      {
        src: "assets/media/blendtree.png",
        caption: "Le BlendTree associé.",
      },
    ],
  },
];
