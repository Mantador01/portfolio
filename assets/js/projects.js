export const projects = [
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
  {
    id: "opengl-deferred-rungholt",
    title: "Rendu OpenGL d’une ville 3D avec optimisation",
    subtitle: "C++ / OpenGL / GLSL / Deferred Rendering / Frustum Culling",
    cover: "assets/media/mc.png",
    type: "Projet universitaire M2 — Synthèse d’image 3D",
    year: "2025",
    short:
      "Projet OpenGL autour du rendu d’une scène 3D complexe : caméra FPS, navigation walkable, rendu direct, rendu différé avec G-buffer et optimisation par frustum culling.",
    description: `
    Projet réalisé dans le cadre de l’UE 
    <a href="https://perso.univ-lyon1.fr/jean-claude.iehl/Public/educ/M2PROIMA/2025/tp2.html" target="_blank" rel="noreferrer">Synthèse d’image 3D</a>.
    L’objectif était de rendre
    une scène 3D conséquente d'une map du jeu Minecraft -> 'Rungholt' en OpenGL, puis d’améliorer l’expérience
    et les performances : caméra FPS au niveau du sol, grille de navigation walkable,
    éclairage avec nombreuses lumières ponctuelles, rendu différé par G-buffer et
    optimisation CPU par frustum culling sur des chunks de scène.
  `,
    role: [
      "Remplacement d’une caméra Orbiter par une caméra FPS avec déplacement ZQSD/WASD et orientation clavier",
      "Création d’une grille de navigation à partir du mesh de la ville pour bloquer les déplacements hors zones autorisées",
      "Échantillonnage du sol avec une fonction sample_ground retournant l’altitude et le caractère walkable d’une case",
      "Construction de la grille walkable en filtrant les triangles horizontaux orientés vers le haut et selon leur matériau",
      "Mise en place d’un rendu direct avec un grand nombre de lumières ponctuelles animées dans la scène",
      "Implémentation d’un rendu différé avec framebuffer et G-buffer : couleur diffuse, normales, positions et profondeur",
      "Écriture d’un shader G-buffer puis d’une deuxième passe d’éclairage lisant les textures du G-buffer",
      "Calcul de l’éclairage diffus par pixel avec accumulation des contributions des lumières",
      "Découpage spatial de la scène en chunks pour pouvoir optimiser un gros mesh unique",
      "Réorganisation des triangles par groupes afin de rendre les triangles d’un même chunk contigus dans le VBO",
      "Calcul d’une AABB par chunk et test de visibilité contre les six plans du frustum",
      "Extraction du frustum depuis la matrice MVP selon l’approche de Gribb/Hartmann",
      "Ajout d’un mode de debug permettant de visualiser l’effet du culling en maintenant une touche",
    ],
    difficulties: [
      "Passer d’une caméra de visualisation à une vraie navigation FPS sans traverser les zones non praticables",
      "Construire une navigation utilisable à partir d’un mesh de scène et de ses matériaux",
      "Gérer le coût important du rendu direct lorsque le nombre de lumières augmente",
      "Mettre en place correctement les textures multiples du G-buffer et les relire dans la passe différée",
      "Rendre une scène volumineuse constituée d’un seul gros mesh difficile à filtrer objet par objet",
      "Découper spatialement la scène sans casser l’ordre ou l’organisation des triangles dans le rendu",
      "Déboguer le frustum culling, notamment les cas où des chunks disparaissent alors qu’ils sont encore visibles",
    ],
    results: [
      "Navigation FPS dans la ville avec hauteur de caméra adaptée au sol",
      "Déplacements bloqués automatiquement lorsque la zone n’est pas walkable",
      "Rendu de la scène avec nombreuses lumières ponctuelles animées",
      "Rendu différé fonctionnel avec G-buffer et passe d’éclairage séparée",
      "Optimisation par chunking de la scène et frustum culling CPU",
      "Affichage de logs indiquant le nombre de triangles visibles après culling",
      "Mode de debug permettant de comparer la scène complète et les chunks réellement affichés",
    ],
    tags: [
      "C++",
      "OpenGL",
      "GLSL",
      "Synthèse d’image",
      "Deferred Rendering",
      "G-buffer",
      "Shader",
      "Frustum Culling",
      "AABB",
      "Chunking",
      "FPS Camera",
      "Rungholt",
    ],
    github: "https://github.com/Mantador01/synthese-d-image-3D-TP2",
    report: "assets/media/rapport-si3d-cottier.pdf",
    demo: "",
    video: "",
    heroImages: [
      {
        src: "assets/media/tri.png",
        alt: "",
      },
      {
        src: "assets/media/culling1.png",
        alt: "",
      },
      {
        src: "assets/media/culling2.png",
        alt: "",
      },
    ],
  },
  {
    id: "montecarlo-raytracing",
    title: "Ray tracing Monte Carlo et illumination globale",
    subtitle: "C++ / Ray Tracing / Monte Carlo / Möller-Trumbore",
    cover: "assets/media/indirect1.png",
    type: "Projet universitaire M2 — Synthèse d’image 3D",
    year: "2025",
    noHeroVisual: true,
    short:
      "Projet de rendu par lancer de rayons : intersection triangle, coordonnées barycentriques, normales interpolées, éclairage Monte Carlo, échantillonnage direct des sources et éclairage indirect diffus.",
    description: `
    Projet réalisé dans le cadre de l’UE 
    <a href="https://perso.univ-lyon1.fr/jean-claude.iehl/Public/educ/M2PROIMA/2025/tp3.html" target="_blank" rel="noreferrer">Synthèse d’image 3D</a>.
    L’objectif était
    d’implémenter plusieurs étapes d’un moteur de rendu par lancer de rayons :
    génération de rayons caméra, intersection rayon-triangle, visualisation des
    barycentres et normales, estimation Monte Carlo de la lumière, échantillonnage
    direct des triangles émissifs et ajout d’un rebond indirect diffus pour obtenir
    un premier effet de color bleeding.
  `,
    role: [
      "Génération d’un rayon caméra pour chaque pixel en reconstruisant les points near/far par inversion des matrices viewport, projection et vue",
      "Implémentation de l’intersection rayon-triangle avec l’algorithme de Möller-Trumbore",
      "Conservation de l’intersection la plus proche avec un paramètre t positif",
      "Récupération des coordonnées barycentriques du point d’intersection",
      "Visualisation de debug des barycentres avec une couleur du type (1-u-v, u, v)",
      "Interpolation des normales par coordonnées barycentriques puis affichage de abs(n) pour vérifier l’orientation",
      "Mise en place d’un éclairage Monte Carlo par échantillonnage de directions dans l’hémisphère",
      "Test de visibilité vers le ciel ou vers une source lumineuse pour produire ombres et illumination diffuse",
      "Création d’une liste de triangles émissifs pondérés par leur aire pour échantillonner directement les sources lumineuses",
      "Calcul d’un éclairage direct plus efficace en tirant des points directement sur les triangles lumineux",
      "Ajout d’un éclairage indirect avec un rebond diffus pour simuler la lumière réfléchie par les surfaces",
      "Ajout de modes d’exécution séparés pour afficher les normales, barycentres, éclairage direct, éclairage direct par émetteur et éclairage indirect",
    ],
    difficulties: [
      "Passer correctement d’un pixel écran à un rayon dans l’espace de la scène",
      "Déboguer les intersections triangle et vérifier les coordonnées barycentriques",
      "Gérer le bruit inhérent aux estimateurs Monte Carlo",
      "Comprendre la différence entre échantillonnage uniforme de l’hémisphère et échantillonnage direct des sources lumineuses",
      "Réduire le bruit de l’éclairage direct en visant explicitement les triangles émissifs",
      "Ajouter un rebond indirect sans exploser le coût de calcul",
      "Obtenir un rendu lisible malgré le compromis entre nombre d’échantillons, bruit et temps de rendu",
    ],
    results: [
      "Ray tracer capable d’intersecter une scène triangle par triangle",
      "Visualisation des barycentres pour vérifier les intersections",
      "Visualisation des normales interpolées pour contrôler l’orientation des surfaces",
      "Éclairage Monte Carlo avec ombres portées",
      "Éclairage direct par échantillonnage de triangles émissifs avec moins de grain",
      "Éclairage indirect à un rebond diffus montrant un effet de color bleeding",
      "Modes de rendu séparés pour comparer facilement les différentes étapes du TP",
    ],
    tags: [
      "C++",
      "Ray Tracing",
      "Monte Carlo",
      "Möller-Trumbore",
      "Barycentres",
      "Normals",
      "Direct Lighting",
      "Indirect Lighting",
      "Color Bleeding",
      "Cornell Box",
      "Synthèse d’image",
    ],
    github: "https://github.com/Mantador01/synthese-d-image-3D-TP3",
    report: "assets/media/rapport-si3dtp3-cottier.pdf",
    demo: "",
    video: "",
    heroImages: [
      {
        src: "assets/media/indirect1.png",
        alt: "Éclairage indirect avec un rebond diffus",
      },
    ],
    screenshots: [
      {
        src: "assets/media/normals.png",
        caption:
          "Mode 0 — Normales : interpolation barycentrique des normales puis affichage de abs(n) pour vérifier l’orientation des surfaces",
      },
      {
        src: "assets/media/barycentric.png",
        caption:
          "Mode 1 — Barycentres : intersection rayon-triangle avec Möller-Trumbore et affichage de la couleur (1-u-v, u, v)",
      },
      {
        src: "assets/media/direct_sky.png",
        caption:
          "Mode 2 — Éclairage direct : estimation Monte Carlo par directions tirées dans l’hémisphère, avec visibilité vers le ciel et ombres portées",
      },
      {
        src: "assets/media/direct_emit_area.png",
        caption:
          "Mode 3 — Éclairage direct par émetteur : tirage de points directement sur les triangles lumineux, pondérés par leur aire, pour réduire le bruit",
      },
      {
        src: "assets/media/indirect1.png",
        caption:
          "Mode 4 — Éclairage indirect : ajout d’un rebond diffus pour faire apparaître la lumière réfléchie et le color bleeding",
      },
    ],
  },
  {
    id: "mesh-diffusion-curvature",
    title: "Traitement de maillage : diffusion de chaleur et courbure",
    subtitle: "C++ / Mesh Processing / Laplacien cotangent / OFF / COFF",
    cover: "assets/media/diff.png",
    type: "Projet universitaire M2 — Maillage et géométrie algorithmique",
    year: "2025",
    short:
      "Projet C++ de traitement de maillage : structure de données triangulaire, chargement OFF/COFF, Laplacien cotangent, diffusion de chaleur et estimation de courbure moyenne signée/non signée.",
    description: `
    Projet réalisé autour du traitement de maillages triangulaires. J’ai mis en place
    une structure Mesh stockant les sommets, les triangles et leurs relations de voisinage,
    puis j’ai implémenté les opérateurs géométriques nécessaires au calcul du Laplacien
    discret. Le projet applique ensuite ces opérateurs à deux cas visuels : la diffusion
    de chaleur sur un modèle 3D et l’analyse de courbure moyenne avec plusieurs palettes
    de coloration.
  `,
    role: [
      "Création d’une structure de données Mesh avec sommets, triangles et voisinage par triangle opposé à chaque sommet",
      "Couture des arêtes avec une map basée sur std::minmax afin d’identifier les arêtes indépendamment de leur orientation",
      "Chargement et sauvegarde de fichiers OFF, puis export COFF pour associer une couleur à chaque sommet",
      "Calcul de l’aire des triangles et de l’aire associée à chaque sommet",
      "Implémentation des poids cotangents pour les arêtes du maillage",
      "Construction d’une liste d’adjacence pondérée par poids cotangents",
      "Implémentation du Laplacien discret scalaire",
      "Simulation explicite de diffusion de chaleur avec une source fixée par condition de Dirichlet",
      "Export de plusieurs frames COFF colorées pour visualiser la propagation de chaleur sur le modèle queen.off",
      "Calcul des normales de référence aux sommets par accumulation des normales de faces",
      "Calcul de la courbure moyenne non signée à partir du Laplacien des coordonnées",
      "Calcul de la courbure moyenne signée par projection du vecteur Laplacien sur la normale de référence",
      "Comparaison de plusieurs palettes de visualisation : bleu/rouge pour la chaleur, HSV, BWR et rainbow pour la courbure",
    ],
    difficulties: [
      "Construire un voisinage fiable entre triangles à partir d’un fichier OFF simple",
      "Gérer correctement les arêtes indépendamment de leur orientation",
      "Obtenir une adjacence cotangente cohérente sans compter plusieurs fois la même arête",
      "Choisir un pas de temps stable pour la diffusion explicite",
      "Visualiser correctement des valeurs scalaires sur un maillage via l’export COFF",
      "Interpréter la courbure moyenne non signée, qui ne distingue pas concave et convexe",
      "Normaliser les valeurs de courbure signée pour obtenir une coloration lisible",
      "Comparer les résultats obtenus avec une référence visuelle issue de MeshLab",
    ],
    results: [
      "Structure Mesh capable de charger, coudre et sauvegarder des maillages triangulaires OFF/COFF",
      "Laplacien discret cotangent opérationnel sur des champs scalaires et sur les coordonnées du maillage",
      "Diffusion de chaleur visible sur le modèle queen.off avec propagation progressive de la couleur",
      "Export de frames colorées montrant la chaleur qui se diffuse puis s’uniformise",
      "Calcul de courbure moyenne non signée avec coloration HSV",
      "Calcul de courbure moyenne signée permettant de distinguer zones concaves et convexes",
      "Visualisations BWR, HSV et rainbow pour comparer les détails fins du maillage",
      "Résultats comparés visuellement à une référence MeshLab",
    ],
    tags: [
      "C++",
      "Mesh Processing",
      "Maillage",
      "OFF",
      "COFF",
      "Laplacien",
      "Cotangent Weights",
      "Diffusion de chaleur",
      "Courbure moyenne",
      "Courbure signée",
      "Normals",
      "MeshLab",
    ],
    github:
      "https://github.com/Mantador01/Traitement-de-maillage-diffusion-de-chaleur-et-courbure",
    report: "assets/media/rapport-gam1-cottier.pdf",
    demo: "",
    video: "",
    heroImages: [
      {
        src: "assets/media/diff1.png",
        alt: "",
      },
      {
        src: "assets/media/diff2.png",
        alt: "",
      },
      {
        src: "assets/media/diff3.png",
        alt: "",
      },
    ],
    screenshots: [
      {
        src: "assets/media/diff4.png",
        caption:
          "Diffusion de chaleur : une source fixée sur un sommet propage progressivement sa température sur le maillage queen.off",
      },
      {
        src: "assets/media/bwr.png",
        caption:
          "Courbure moyenne : comparaison entre courbure non signée saturée en HSV et courbure signée en palette BWR",
      },
      {
        src: "assets/media/signed.png",
        caption: "Visualisation de courbure : courbature signée",
      },
      {
        src: "assets/media/hsv.png",
        caption: "Visualisation de courbure : palettes HSV continue",
      },
      {
        src: "assets/media/diff.png",
        caption:
          "Visualisation de courbure : comparaison avec une référence MeshLab",
      },
    ],
  },
  {
    id: "triangulation-delaunay",
    title: "Triangulation 2D et maillage Delaunay",
    subtitle: "C++ / Mesh Processing / Delaunay / Lawson / Terrain",
    cover: "assets/media/terrain2.png",
    type: "Projet universitaire — Triangulation et géométrie algorithmique",
    year: "2025",
    short:
      "Suite du projet de traitement de maillage : ajout d’opérations locales de triangulation, insertion de points 2D, prédicats géométriques, test Delaunay et algorithme de Lawson appliqué à un terrain.",
    description: `
    Ce projet prolonge le travail réalisé sur la structure Mesh précédente. Après avoir
    manipulé des maillages triangulaires pour la diffusion et la courbure, j’ai ajouté
    des opérations locales de triangulation : split de triangle, split d’arête et flip
    d’arête. Ces opérations servent ensuite à insérer des points dans une triangulation
    2D, à tester la propriété de Delaunay et à améliorer la qualité du maillage avec
    l’algorithme de Lawson. Le projet est aussi appliqué à un terrain généré depuis un
    nuage de points, en conservant Z comme altitude.
  `,
    role: [
      "Réutilisation et extension de ma structure Mesh précédente avec sommets, triangles et voisinage par faces opposées",
      "Implémentation du split d’un triangle en trois triangles autour d’un nouveau sommet",
      "Implémentation du split d’une arête en deux, avec gestion des un ou deux triangles incidents",
      "Implémentation du flip d’une arête interne pour remplacer la diagonale d’un quadrilatère",
      "Ajout de prédicats géométriques 2D : orientation signée, test point dans triangle et test de point sur segment",
      "Insertion naïve d’un point dans une triangulation : splitTriangle si le point est dedans, splitEdge s’il est sur une arête",
      "Gestion du cas où un point est en dehors de l’enveloppe convexe avec recherche des arêtes de bord visibles",
      "Expérimentation d’une insertion avec sommet fictif afin de traiter les points extérieurs puis retirer ce sommet",
      "Implémentation du test local Delaunay avec le prédicat inCircle sur deux triangles adjacents",
      "Détection des arêtes non Delaunay et affichage de logs de validation",
      "Implémentation de l’algorithme de Lawson global avec pile d’arêtes internes",
      "Propagation des flips après modification locale du maillage",
      "Insertion de points en 2D avec légalisation locale autour du nouveau sommet",
      "Construction d’un maillage terrain depuis un nuage de points en conservant Z comme altitude",
      "Comparaison entre une triangulation naïve rapide mais de mauvaise qualité et une triangulation Delaunay plus propre mais plus coûteuse",
    ],
    difficulties: [
      "Modifier localement la topologie du maillage sans casser les indices de sommets et de triangles",
      "Maintenir correctement le voisinage entre triangles après chaque split ou flip",
      "Gérer les orientations de faces pour éviter les faces inversées ou sombres",
      "Traiter séparément les points à l’intérieur, sur le bord ou en dehors de l’enveloppe convexe",
      "Mettre en place un sommet fictif puis supprimer correctement les triangles qui lui sont incidents",
      "Éviter les erreurs numériques dans les prédicats géométriques 2D avec une tolérance adaptée",
      "Tester correctement la propriété locale de Delaunay avec le cercle circonscrit",
      "Faire converger l’algorithme de Lawson en repoussant les bonnes arêtes dans la pile",
      "Trouver un compromis entre qualité du maillage et temps de calcul sur un nuage de points terrain",
    ],
    results: [
      "Opérations locales de triangulation fonctionnelles : splitTriangle, splitEdge et flipEdge",
      "Insertion de points dans une triangulation 2D avec gestion des cas intérieur, bord et extérieur",
      "Détection des arêtes non Delaunay dans une triangulation existante",
      "Transformation d’un maillage vers une triangulation localement Delaunay avec l’algorithme de Lawson",
      "Insertion de points avec légalisation locale pour conserver une meilleure qualité de triangles",
      "Comparaison visuelle entre triangulation naïve et triangulation Delaunay",
      "Application à un terrain reconstruit depuis un nuage de points avec altitude conservée en Z",
    ],
    tags: [
      "C++",
      "Mesh Processing",
      "Triangulation",
      "Delaunay",
      "Lawson",
      "Geometry Processing",
      "Computational Geometry",
      "Split Triangle",
      "Split Edge",
      "Edge Flip",
      "inCircle",
      "orient2D",
      "Terrain",
      "OFF",
    ],
    github:
      "https://github.com/Mantador01/Triangulation-2D-et-maillage-Delaunay",
    report: "assets/media/rapport-gam2-cottier.pdf",
    demo: "",
    video: "",
    heroImages: [
      {
        src: "assets/media/split.png",
        alt: "Split d’un triangle en trois",
      },
      {
        src: "assets/media/delaunay2.png",
        alt: "Algorithme de Lawson pour rendre la triangulation Delaunay",
      },
      {
        src: "assets/media/terrain2.png",
        alt: "Triangulation Delaunay appliquée à un terrain",
      },
    ],
    screenshots: [
      {
        src: "assets/media/split2.png",
        caption:
          "Split triangle : insertion d’un sommet dans une face et remplacement du triangle par trois nouveaux triangles",
      },
      {
        src: "assets/media/splitedge.png",
        caption:
          "Split edge : insertion d’un sommet sur une arête et découpe des triangles incidents",
      },
      {
        src: "assets/media/flipedge.png",
        caption:
          "Flip edge et prédicats 2D : orientation signée, point dans triangle et remplacement d’une diagonale interne",
      },
      {
        src: "assets/media/delaunay2.png",
        caption:
          "Lawson global : pile d’arêtes internes, test local Delaunay et flips successifs pour améliorer la triangulation",
      },
      {
        src: "assets/media/terrain1.png",
        caption:
          "Terrain : insertion 2D naïve sans le Delaunay sur un nuage de points avec Z conservé comme altitude",
      },
      {
        src: "assets/media/terrain2.png",
        caption:
          "Terrain : triangulation Delaunay sur un nuage de points avec Z conservé comme altitude",
      },
    ],
  },
  {
    id: "mesh-simplification-edge-collapse",
    title: "Simplification de maillage par Edge Collapse",
    subtitle: "C++ / Mesh Processing / Edge Collapse / Priority Queue",
    cover: "assets/media/simplification1.png",
    type: "Projet universitaire — Maillage et géométrie algorithmique",
    year: "2025",
    short:
      "Projet de simplification de maillage par contraction d’arêtes : sélection des arêtes courtes, fusion de sommets, suppression des triangles dégénérés et optimisation avec file de priorité.",
    description: `
    Ce projet poursuit le travail réalisé sur ma structure Mesh utilisée dans les projets
    précédents. L’objectif était cette fois de simplifier un maillage triangulaire en
    réduisant progressivement son nombre de sommets. J’ai implémenté une décimation
    par Edge Collapse : à chaque étape, l’arête considérée comme la moins importante
    est contractée, les triangles affectés sont mis à jour, les triangles dégénérés sont
    supprimés, puis le maillage est nettoyé. Le projet a été testé sur queen.off avec
    plusieurs niveaux de réduction.
  `,
    role: [
      "Réutilisation de la structure Mesh développée dans les projets précédents",
      "Implémentation d’une simplification de maillage par Edge Collapse",
      "Définition d’un coût de suppression basé sur la longueur de l’arête",
      "Sélection prioritaire des arêtes les plus courtes, considérées comme les moins importantes",
      "Ajout d’une structure EdgeCollapse contenant les deux sommets de l’arête et son coût",
      "Utilisation d’une std::priority_queue pour récupérer rapidement l’arête de coût minimal",
      "Fusion de deux sommets u et v en déplaçant u au milieu de l’arête",
      "Marquage du sommet v comme supprimé après contraction",
      "Mise à jour des triangles voisins pour remplacer les références à v par u",
      "Détection et suppression logique des triangles dégénérés contenant à la fois u et v",
      "Réinsertion des arêtes voisines modifiées dans la file de priorité",
      "Boucle de simplification jusqu’à atteindre le nombre de sommets cible",
      "Nettoyage final du maillage avec reconstruction des vecteurs de sommets et de triangles",
      "Export du maillage simplifié en OFF pour comparaison dans MeshLab",
    ],
    difficulties: [
      "Éviter une version naïve qui reparcourt tout le maillage à chaque suppression d’arête",
      "Optimiser la sélection de l’arête minimale avec une file de priorité",
      "Mettre à jour localement les triangles au lieu de parcourir tout le maillage inutilement",
      "Gérer les sommets supprimés sans casser les indices encore utilisés",
      "Identifier les triangles devenus dégénérés après contraction d’arête",
      "Nettoyer correctement les sommets et triangles morts à la fin de la simplification",
      "Préserver autant que possible la forme globale du modèle malgré une forte réduction",
      "Constater les limites d’un coût basé uniquement sur la longueur d’arête, notamment sur les détails fins et les parties isolées",
    ],
    results: [
      "Simplification progressive de queen.off à plusieurs niveaux de réduction",
      "Passage de 48 339 sommets et 96 714 faces à des versions beaucoup plus légères",
      "Réduction par deux, par quatre, puis jusqu’à environ 1 491 sommets et 2 988 faces",
      "Visualisation claire de la perte progressive de détails sur le maillage",
      "Meilleures performances grâce à l’utilisation d’une file de priorité",
      "Export final du maillage simplifié en OFF",
      "Observation que les parties fines ou isolées disparaissent rapidement car elles contiennent souvent des arêtes courtes",
    ],
    tags: [
      "C++",
      "Mesh Processing",
      "Maillage",
      "Simplification",
      "Decimation",
      "Edge Collapse",
      "Priority Queue",
      "OFF",
      "Queen.off",
      "Topology",
      "Geometry Processing",
      "MeshLab",
    ],
    github:
      "https://github.com/Mantador01/Simplification-de-maillage-par-Edge-Collapse",
    report: "assets/media/rapport-gam3-cottier.pdf",
    demo: "",
    video: "",
    screenshots: [
      {
        src: "assets/media/simplification1.png",
        caption: "Queen.off original — 48 339 sommets et 96 714 faces",
      },
      {
        src: "assets/media/simplification2.png",
        caption: "Simplification /2 — 24 169 sommets et 48 374 faces",
      },
      {
        src: "assets/media/simplification3.png",
        caption: "Simplification /4 — 12 084 sommets et 24 204 faces",
      },
      {
        src: "assets/media/simplification4.png",
        caption: "Simplification /6 — 6 042 sommets et 12 118 faces",
      },
      {
        src: "assets/media/simplification5.png",
        caption:
          "Simplification /8 — réduction forte avec perte visible des détails fins",
      },
      {
        src: "assets/media/simplification6.png",
        caption:
          "Simplification /10 — 1 491 sommets et 2 988 faces, les parties isolées disparaissent rapidement",
      },
    ],
  },
  {
    id: "compression-bwt-mtf-rle",
    title: "Compression sans perte avec BWT, MTF et RLE",
    subtitle: "C / Compression / Burrows-Wheeler / Move-To-Front / RLE",
    cover: "assets/media/compression.png",
    type: "Projet universitaire — Codage, transmission et compression",
    year: "2026",
    noHeroVisual: true,

    short:
      "Implémentation en C d’un pipeline de compression sans perte : transformation de Burrows-Wheeler, Move-To-Front, RLE optimisé sur les zéros et analyse statistique du flux compressé.",
    description: `
    Projet réalisé dans le cadre de l’UE 
        <a href="https://perso.univ-lyon1.fr/thierry.excoffier/COURS/COURS/TRANS_COMP_IMAGE/TP/blocksorting.html" target="_blank" rel="noreferrer">Codage, Transmission, Compression d’Image
    et de Vidéos</a>.

    L’objectif était d’implémenter une chaîne de compression sans perte
    en langage C. Le pipeline repose sur la transformation de Burrows-Wheeler pour
    regrouper les caractères similaires, Move-To-Front pour transformer cette proximité
    en séquences de zéros, puis un RLE spécialisé qui compresse principalement ces
    suites de zéros. Un égalisateur permet ensuite d’analyser la distribution des octets
    et d’estimer l’entropie restante du flux compressé.
  `,
    role: [
      "Développement du projet en langage C avec séparation des étapes dans plusieurs fichiers",
      "Implémentation de la transformation directe de Burrows-Wheeler sur un bloc d’octets",
      "Tri des rotations cycliques via un tableau d’indices et qsort",
      "Stockage des métadonnées nécessaires à la reconstruction : taille du bloc et index de ligne originale",
      "Implémentation de la transformation inverse BWT pour reconstruire exactement le flux initial",
      "Implémentation du Move-To-Front direct avec une table de 256 caractères",
      "Implémentation du Move-To-Front inverse pour restaurer le flux après décodage",
      "Implémentation d’un RLE spécialisé pour compresser uniquement les suites de zéros produites après MTF",
      "Implémentation du RLE inverse pour la décompression",
      "Création d’un égalisateur de probabilité pour mesurer la distribution des octets en sortie",
      "Calcul de l’entropie du flux compressé afin d’estimer le gain possible avec un codage statistique final",
      "Mise en place de tests sur fichiers répétitifs, fichiers texte/code et données binaires aléatoires",
      "Vérification de la réversibilité avec diff pour confirmer une reconstruction bit à bit",
    ],
    difficulties: [
      "Comprendre que la BWT ne compresse pas directement, mais prépare les données pour les étapes suivantes",
      "Conserver les métadonnées nécessaires pour rendre la transformation BWT réversible",
      "Implémenter la reconstruction inverse de la BWT sans perdre l’ordre original des caractères",
      "Faire le lien entre BWT et MTF : transformer les regroupements de caractères en séquences d’indices zéro",
      "Adapter le RLE au contexte post-MTF en compressant uniquement les suites de zéros",
      "Montrer que l’ordre des filtres est crucial pour obtenir un vrai gain de compression",
      "Gérer les cas où la compression augmente légèrement la taille, notamment sur les données aléatoires",
      "Analyser statistiquement le flux final pour comprendre la limite théorique de compression restante",
    ],
    results: [
      "Pipeline complet de compression sans perte : BWT → MTF → RLE",
      "Décompression inverse complète : IRLE → IMTF → IBWT",
      "Réversibilité validée avec diff : le fichier reconstruit est identique au bit près",
      "Sur un fichier répétitif, passage de 10 001 octets à 26 octets, soit environ 99,74% de compression",
      "Sur un fichier texte/code classique, passage de 947 octets à 784 octets, soit environ 17,21% de compression",
      "Sur un fichier binaire aléatoire, légère expansion de 10 000 octets à 10 061 octets, montrant l’absence de redondance exploitable",
      "Comparaison de l’ordre des filtres : BWT → MTF → RLE donne 26 octets, alors que BWT → RLE ou RLE → MTF → BWT donnent environ 10 009 octets",
      "Analyse statistique avec l’égalisateur : entropie mesurée à 3,267 bits/octet",
      "Estimation d’une taille minimale théorique de 11 octets avec un codage final de type Huffman",
    ],
    tags: [
      "C",
      "Compression",
      "Lossless Compression",
      "Burrows-Wheeler Transform",
      "BWT",
      "Move-To-Front",
      "MTF",
      "Run-Length Encoding",
      "RLE",
      "Entropy",
      "Probability",
      "Huffman",
      "Pipeline",
      "Binary Data",
    ],
    github:
      "https://github.com/Mantador01/Compression-sans-perte-avec-BWT-MTF-et-RLE",
    report: "assets/media/rapport-ctc-cottier.pdf",
    demo: "",
    video: "",
    compressionTerminal: true,
  },
  {
    id: "texture-synthesis-classification",
    title: "Synthèse et classification de textures",
    subtitle: "Python / NumPy / Pillow / OpenCV / K-means / Gabor",
    cover: "assets/media/D1.png",
    type: "Projet universitaire M2 — Modèles statistiques et fréquentiels pour l’image",
    year: "2025",
    short:
      "Projet Python mêlant synthèse de textures et classification non supervisée : Efros-Leung, Image Quilting, extraction de patchs, descripteurs Gabor et K-means maison.",
    description: `
    Projet réalisé autour de la synthèse et de la classification de textures. La première
    partie consiste à générer de nouvelles textures à partir d'un exemple source, avec
    une approche pixel par pixel inspirée d'Efros-Leung puis une approche par patchs
    avec Image Quilting et coutures minimales. La seconde partie construit un pipeline
    de classification non supervisée : découpage des images en patchs, extraction de
    descripteurs Gabor, apprentissage K-means, visualisation PCA et évaluation sur
    textures originales, synthétiques, bruitées et floutées.
  `,
    role: [
      "Implémentation d'une synthèse de texture pixel par pixel inspirée d'Efros-Leung",
      "Ajout d'une bordure à compléter autour d'une image source et création d'un masque des pixels connus",
      "Détection de la frontière des pixels à synthétiser à partir des voisins déjà connus",
      "Sélection des pixels à remplir en priorité selon le nombre de voisins connus",
      "Calcul d'un contexte local autour du pixel à synthétiser et recherche des meilleurs candidats dans l'image source",
      "Ajout d'un mode de choix aléatoire ou moyenne des candidats pour comparer texture et lissage",
      "Implémentation d'une synthèse par Image Quilting basée sur des patchs avec recouvrement",
      "Calcul du SSD sur les zones de chevauchement pour choisir les patchs compatibles",
      "Implémentation de coutures minimales verticales et horizontales par programmation dynamique",
      "Fusion des patchs avec masque de couture pour réduire les transitions visibles",
      "Découpage des textures en patchs sans recouvrement pour construire un dataset",
      "Création d'un split stratifié 50/50 entre ensemble d'optimisation DO et ensemble de test DT",
      "Extraction de descripteurs de texture avec une banque de filtres de Gabor à plusieurs orientations et échelles",
      "Implémentation d'un K-means maison utilisable en dimension quelconque",
      "Ajout de plusieurs initialisations K-means et conservation du modèle de plus faible inertie",
      "Évaluation par correspondance majoritaire entre clusters et vraies classes",
      "Génération de textures bruitées et floutées pour tester la robustesse du classifieur",
    ],
    difficulties: [
      "Rendre la synthèse de texture stable malgré une recherche de candidats coûteuse",
      "Choisir l'ordre de remplissage des pixels pour éviter les zones incohérentes",
      "Comparer les paramètres de synthèse : rayon, epsilon, sigma, stride et choix random/mean",
      "Gérer les transitions visibles entre patchs dans l'Image Quilting",
      "Implémenter les coutures minimales avec backtracking correct",
      "Construire des features pertinentes pour des textures, après essais avec des descripteurs moins adaptés",
      "Passer d'un K-means de test sur données 2D/3D à un pipeline utilisable sur des patchs de textures",
      "Associer des clusters non supervisés à des classes réelles via un mapping majoritaire",
      "Comparer les performances sur textures originales, synthétiques, bruitées et floutées",
    ],
    results: [
      "Synthèse de textures par extension progressive d'une image source avec remplissage de frontière",
      "Implémentation d'un Image Quilting avec choix de patchs par SSD et coutures minimales",
      "Pipeline complet de préparation de données : découpage en patchs, labels par dossiers et split DO/DT",
      "Extraction de features Gabor : plusieurs orientations et échelles, avec moyenne et écart-type des réponses",
      "K-means maison avec inertie, réinitialisation des clusters vides et plusieurs lancements",
      "Visualisation possible des clusters par PCA 2D sur les données de textures",
      "Évaluation des clusters par mapping majoritaire et matrice de confusion",
      "Tests prévus sur textures originales, textures synthétisées, textures bruitées et textures floutées",
    ],
    tags: [
      "Python",
      "NumPy",
      "Pillow",
      "OpenCV",
      "Matplotlib",
      "Texture Synthesis",
      "Efros-Leung",
      "Image Quilting",
      "Seam Cutting",
      "Dynamic Programming",
      "K-means",
      "Gabor Filters",
      "PCA",
      "Unsupervised Learning",
      "Texture Classification",
    ],
    github:
      "https://github.com/Mantador01/Synth-se-et-classification-de-textures",
    demo: "",
    video: "",
    compressionTerminal: false,
    heroImages: [
      {
        src: "assets/media/D1.png",
        alt: "",
      },
      {
        src: "assets/media/D2.png",
        alt: "",
      },
      {
        src: "assets/media/D3.png",
        alt: "",
      },
    ],
    screenshots: [
      {
        src: "assets/media/OG1.png",
        caption: "Texture original 1",
      },
      {
        src: "assets/media/D1.png",
        caption: "Texture synthétiser 1",
      },
      {
        src: "assets/media/OG2.png",
        caption: "Texture original 2",
      },
      {
        src: "assets/media/D2.png",
        caption: "Texture synthétiser 2",
      },
      {
        src: "assets/media/OG3.png",
        caption: "Texture original 3",
      },
      {
        src: "assets/media/D3.png",
        caption: "Texture synthétiser 3",
      },
      {
        src: "assets/media/OG4.png",
        caption: "Texture original 4",
      },
      {
        src: "assets/media/D4.png",
        caption: "Texture synthétiser 4",
      },
      {
        src: "assets/media/OG5.png",
        caption: "Texture original 5",
      },
      {
        src: "assets/media/D5.png",
        caption: "Texture synthétiser 5",
      },
      {
        src: "assets/media/OG6.png",
        caption: "Texture original 6",
      },
      {
        src: "assets/media/D6.png",
        caption: "Texture synthétiser 6",
      },
      {
        src: "assets/media/OG7.png",
        caption: "Texture original 7",
      },
      {
        src: "assets/media/D7.png",
        caption: "Texture synthétiser 7",
      },
    ],
  },

  {
    id: "frequency-image-processing",
    title: "Traitement fréquentiel de l’image et compression",
    subtitle: "Octave / MATLAB / Fourier / Filtrage / JPEG / JPEG2000",
    cover: "assets/media/freq.png",
    type: "Projet universitaire M2 — Modèles statistiques et fréquentiels pour l’image",
    year: "2025",
    short:
      "Projet d’analyse fréquentielle : transformée de Fourier, module/phase, filtrage passe-bas, anti-aliasing, ringing, interpolation fréquentielle, JPEG et JPEG2000.",
    description: `
    Projet réalisé dans le cadre de l’UE Modèles Statistiques et Fréquentiels pour
    l’Image. Le travail explore le lien entre spectre de Fourier et image spatiale :
    création de spectres synthétiques, transformée de Fourier inverse, influence de
    la fréquence et de l’orientation, rôle du module et de la phase, décimation et
    repliement spectral. Le projet traite aussi le filtrage fréquentiel, le phénomène
    de ringing, l’anti-aliasing avant sous-échantillonnage, l’agrandissement par
    zero-padding dans le domaine de Fourier, puis la compression JPEG et JPEG2000.
  `,
    role: [
      "Création de spectres synthétiques avec deux deltas symétriques et application de la transformée de Fourier inverse",
      "Étude de l’effet de la distance au centre du spectre sur la fréquence spatiale des franges",
      "Étude de l’effet de l’angle dans le spectre sur l’orientation des motifs dans l’image",
      "Création de masques fréquentiels : disque passe-bas et secteur angulaire orienté",
      "Analyse de la réponse spatiale de filtres fréquentiels par transformée inverse",
      "Construction d’un damier synthétique et analyse de son spectre de Fourier",
      "Séparation puis modification du module et de la phase pour comprendre leur rôle respectif",
      "Combinaison du module d’une image avec la phase d’une autre image pour montrer que la phase porte la structure",
      "Décimation naïve d’images et observation du repliement spectral dans la FFT",
      "Application d’un filtre passe-bas avant décimation pour limiter l’aliasing",
      "Comparaison de filtres fréquentiels idéaux, gaussiens, Butterworth et cosinus élevé",
      "Analyse du phénomène de ringing sur une image synthétique puis sur une vraie image",
      "Mise en œuvre d’un agrandissement d’image par zero-padding du spectre de Fourier",
      "Compression JPEG à plusieurs paramètres de qualité et calcul du débit en bits par pixel",
      "Comparaison visuelle entre JPEG et JPEG2000 à faibles débits",
      "Expérimentation de la scalabilité JPEG2000 en résolution et en couches de qualité",
      "Test de compression JPEG2000 avec région d’intérêt pour prioriser une zone centrale de l’image",
    ],
    difficulties: [
      "Interpréter visuellement le lien entre position d’un pic fréquentiel et motif spatial obtenu après TFI",
      "Comprendre que la distance au centre du spectre correspond à la fréquence spatiale",
      "Comprendre que l’orientation dans le spectre contrôle l’orientation du signal dans l’image",
      "Mettre en évidence le rôle majeur de la phase dans la structure visuelle de l’image",
      "Distinguer le rôle du module, qui influence davantage le contraste et l’énergie",
      "Visualiser le repliement spectral provoqué par une décimation naïve",
      "Trouver un compromis entre suppression de hautes fréquences et conservation de netteté",
      "Comparer les effets d’un filtre idéal brutal avec des filtres à transition plus douce",
      "Identifier le ringing et l’expliquer par la coupure fréquentielle nette",
      "Comparer objectivement JPEG et JPEG2000 avec des débits similaires",
      "Comprendre la scalabilité JPEG2000 : résolution, couches de qualité et région d’intérêt",
    ],
    results: [
      "Visualisation claire du fait que deux deltas fréquentiels produisent une onde plane en domaine spatial",
      "Grille de résultats montrant que plus les deltas sont loin du centre, plus les franges deviennent fines",
      "Observation que l’angle du spectre fait tourner l’orientation des franges",
      "Démonstration que la phase conserve fortement la structure de l’image, tandis que le module agit davantage sur le contraste",
      "Mise en évidence de l’aliasing et du repliement spectral lors d’une décimation naïve",
      "Réduction des artefacts d’aliasing grâce à un filtrage passe-bas avant décimation",
      "Observation du ringing avec un filtre idéal à coupure nette",
      "Comparaison des filtres : le Gaussien supprime le ringing mais floute fortement, tandis que Butterworth et Cosine élevé préservent mieux les contours",
      "Agrandissement d’image par zero-padding dans le domaine fréquentiel",
      "JPEG : mesure du compromis qualité/taille avec des paramètres q allant de 75 à 1",
      "Observation que la relation entre qualité JPEG et BPP n’est pas linéaire",
      "JPEG : apparition d’artefacts de blocs 8x8 à faible qualité",
      "JPEG2000 : dégradation plus progressive, plutôt sous forme de flou que de blocs",
      "JPEG2000 : extraction de plusieurs résolutions et couches de qualité depuis un même flux",
      "JPEG2000 ROI : conservation d’une zone centrale plus nette à faible débit",
    ],
    tags: [
      "Fourier",
      "FFT",
      "IFFT",
      "Image Processing",
      "Filtrage fréquentiel",
      "Anti-aliasing",
      "Ringing",
      "Butterworth",
      "Gaussian Filter",
      "Cosine Filter",
      "Phase",
      "Magnitude",
      "JPEG",
      "JPEG2000",
      "BPP",
      "ROI",
      "Octave",
      "MATLAB",
    ],
    github:
      "https://github.com/Mantador01/Traitement-fr-quentiel-de-l-image-et-compression",
    report: "assets/media/rapport-freq-cottier.pdf",
    demo: "",
    video: "",
    heroImages: [
      {
        src: "assets/media/img1.png",
      },
      {
        src: "assets/media/img2.png",
      },
      {
        src: "assets/media/img3.png",
      },
    ],
    screenshots: [
      {
        src: "assets/media/franges.png",
        caption:
          "Fourier : variation de la distance au centre et de l’angle des pics fréquentiels, avec effet direct sur la fréquence et l’orientation des franges",
      },
      {
        src: "assets/media/tigre.png",
        caption: "Module et phase : image d'un tigre",
      },
      {
        src: "assets/media/montagne.png",
        caption: "Module et phase : image d'une montagne",
      },
      {
        src: "assets/media/modulephase.png",
        caption:
          "Module et phase : Je combine le module de la montagne avec la phase du tigre et je fais la TFI.",
      },
      {
        src: "assets/media/phasemodule.png",
        caption: "Module et phase : idem ici mais pour la montagne",
      },
      {
        src: "assets/media/og.png",
        caption: "Décimation : image originale",
      },
      {
        src: "assets/media/deci2.png",
        caption: "Décimation : naîve 2",
      },
      {
        src: "assets/media/deci4.png",
        caption: "Décimation : naîve 4",
      },
      {
        src: "assets/media/deci8.png",
        caption: "Décimation : naîve 8",
      },
      {
        src: "assets/media/ogfft.png",
        caption: "Décimation : FFT originale",
      },
      {
        src: "assets/media/fftdeci2.png",
        caption: "Décimation : naîve 2",
      },
      {
        src: "assets/media/fftdeci4.png",
        caption: "Décimation : naîve 4",
      },
      {
        src: "assets/media/fftdeci8.png",
        caption: "Décimation : naîve 8",
      },
      {
        src: "assets/media/deci8antialia.png",
        caption:
          "Décimation : anti-aliasing + décimation 8, ce qui donne une image floue mais propre",
      },
    ],
  },
  {
    id: "vit-image-restoration",
    title: "Vision Transformer pour la restauration d’images",
    subtitle:
      "Deep Learning / Vision Transformer / Self-Attention / Inpainting",
    cover: "assets/media/vit.webp",
    type: "Projet universitaire M1 — Projet d’ouverture à la recherche",
    year: "2025",
    noHeroVisual: true,
    short:
      "Sujet d’ouverture à la recherche autour des Transformers appliqués à l’image : compréhension de l’attention, adaptation d’un Vision Transformer et reconstruction locale de patches masqués.",
    description: `
    Projet réalisé dans le cadre d’une UE d’ouverture à la recherche. L’objectif était
    d’étudier les Transformers, d’en comprendre les mécanismes fondamentaux, puis
    d’en explorer une application en vision par ordinateur. Après une phase de recherche
    sur les embeddings, la self-attention, la multi-head attention et le masquage, le
    projet s’est orienté vers la restauration d’images avec un Vision Transformer. L’image
    est découpée en petits patches traités comme des tokens, auxquels on ajoute un
    encodage positionnel pour préserver l’organisation spatiale. Le modèle est ensuite
    entraîné à reconstruire un patch masqué à partir du contexte visible.
  `,
    role: [
      "Étude bibliographique et vulgarisation du fonctionnement des Transformers",
      "Analyse du mécanisme d’attention : Query, Key, Value, scores d’attention, scaling et softmax",
      "Compréhension de la multi-head attention et de l’intérêt de plusieurs têtes spécialisées",
      "Étude du masquage dans les Transformers et de son rôle pour contrôler l’information accessible au modèle",
      "Transposition du principe des tokens texte aux images via le découpage en patches",
      "Mise en place du concept de patch embedding : aplatissement du patch puis projection dans un espace latent",
      "Étude de l’encodage positionnel pour conserver la position spatiale des patches",
      "Première expérimentation orientée classification, puis identification de la limite pour la restauration d’images",
      "Redéfinition de la tâche : passer d’une prédiction de classe à une prédiction de pixels manquants",
      "Test d’une première approche avec masquage d’un seul pixel",
      "Analyse de l’échec du masquage pixel par pixel, où le modèle tendait à prédire une valeur moyenne",
      "Mise en place d’une stratégie de patch masking en masquant un bloc 2×2 complet",
      "Adaptation de la sortie du modèle pour prédire quatre valeurs de pixels au lieu d’une classe",
      "Génération d’un dataset synthétique de petites images 4×4 avec patch 2×2 masqué aléatoirement",
      "Entraînement du modèle avec une perte MSE et l’optimiseur Adam",
      "Analyse qualitative des reconstructions obtenues et des limites du modèle",
      "Participation à la vidéo de vulgarisation pour expliquer les Transformers et leurs applications",
    ],
    difficulties: [
      "Comprendre une architecture initialement pensée pour le langage naturel puis l’adapter à l’image",
      "Faire le lien entre token texte et patch image",
      "Comprendre le rôle exact de Q, K et V dans le mécanisme de self-attention",
      "Gérer l’importance de l’encodage positionnel pour éviter que les patches soient reconstruits dans le désordre",
      "Passer d’une tâche de classification à une tâche de reconstruction locale",
      "Identifier pourquoi la prédiction d’un seul pixel masqué était trop pauvre en contexte",
      "Définir une tâche de restauration plus exploitable avec un patch 2×2 masqué",
      "Adapter la sortie du réseau et la fonction de perte à une prédiction de pixels",
      "Évaluer des résultats visuellement variables et pas toujours parfaits",
      "Comprendre les limites liées à la petite taille des images, au dataset synthétique et aux hyperparamètres",
    ],
    results: [
      "Production d’un cahier des charges définissant le sujet, les objectifs et les choix techniques autour des Vision Transformers",
      "Rédaction d’un rapport expliquant les Transformers, la self-attention, la multi-head attention, le masquage et l’adaptation à l’image",
      "Mise en évidence de l’importance de l’encodage positionnel pour la reconstruction d’images découpées en patches",
      "Évolution du sujet depuis une approche de classification vers une approche de restauration d’image",
      "Première tentative avec masquage d’un pixel jugée insuffisante, car le modèle prédisait souvent une valeur moyenne",
      "Nouvelle stratégie avec masquage d’un patch 2×2 pour forcer le modèle à apprendre un contexte spatial plus riche",
      "Entraînement sur 5000 images 4×4 générées aléatoirement avec patch 2×2 masqué",
      "Utilisation d’une loss MSE, de l’optimiseur Adam et d’un entraînement sur 30 époques",
      "Résultats expérimentaux : environ 35% de reconstructions échouées, 50% acceptables et 15% presque parfaites",
      "Conclusion positive sur la faisabilité, mais avec des limites sur la stabilité et la qualité des reconstructions",
      "Perspectives identifiées : meilleur fine-tuning, stratégies de masquage alternatives et passage à des images de plus grande taille",
      "Réalisation d’une vidéo de vulgarisation d’environ vingt minutes sur les Transformers",
    ],
    tags: [
      "Deep Learning",
      "Transformers",
      "Vision Transformer",
      "ViT",
      "Self-Attention",
      "Multi-Head Attention",
      "Patch Embedding",
      "Positional Encoding",
      "Image Restoration",
      "Inpainting",
      "Patch Masking",
      "MSE",
      "Adam",
      "Recherche",
      "IA",
    ],
    github:
      "https://github.com/Mantador01/ouverture-a-la-recherche-vit-inpainting-cifar10",
    report: "assets/media/rapport-vit-restauration-image.pdf",
    brief: "assets/media/cahier-des-charges-transformers.pdf",
    briefLabel: "Voir le cahier des charges",
    demo: "",
    video: "https://youtu.be/SsqCISrSwyM",
  },
];
