# Portfolio ID3D — starter simple

Ce portfolio est volontairement simple : HTML, CSS, JavaScript et une mini scène Three.js.
Il peut être hébergé directement sur GitHub Pages sans compilation.

## Modifier tes projets

Ouvre :

```txt
assets/js/projects.js
```

Puis modifie les objets du tableau `projects`.

## Ajouter tes médias

Mets tes images, vidéos, GIFs ou PDF dans :

```txt
assets/media/
```

Exemples :

```txt
assets/media/demo-vtkhdf.mp4
assets/media/screenshot-unity.png
assets/media/cv.pdf
```

## Tester en local

Le plus simple :

```bash
python3 -m http.server 8000
```

Puis ouvre :

```txt
http://localhost:8000
```

Évite d'ouvrir `index.html` directement avec `file://`, car les imports JavaScript modules peuvent être bloqués.

## Héberger gratuitement sur GitHub Pages

1. Crée un repo GitHub, par exemple `portfolio-id3d`.
2. Mets tous les fichiers dedans.
3. Va dans `Settings` → `Pages`.
4. Source : `Deploy from a branch`.
5. Branch : `main`, dossier `/root`.
6. Ton site sera disponible à une adresse du style :

```txt
https://ton-pseudo.github.io/portfolio-id3d/
```

## Héberger sur Netlify

1. Connecte ton GitHub à Netlify.
2. Choisis ton repo.
3. Build command : laisse vide.
4. Publish directory : `.`

## Ce qu'il faut remplacer

- `alexandre@example.com`
- `https://github.com/ton-pseudo`
- `https://www.linkedin.com/in/ton-profil`
- les liens GitHub/démo dans `assets/js/projects.js`
- le fichier `assets/media/cv.pdf`
