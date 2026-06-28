# Viewer terrains 3D

Le portfolio contient maintenant un viewer Three.js réutilisable.

## Emplacement des fichiers

Terrain 1 déjà prévu :

```txt
assets/models/terrain/
  terrain.obj
  terrain.mtl
  texture.png ou autres fichiers utilisés par le .mtl
```

Terrains supplémentaires :

```txt
assets/models/terrain-2/
  terrain.obj
  terrain.mtl
  texture.png

assets/models/terrain-3/
  terrain.obj
  terrain.mtl
  texture.png
```

## Ajouter un terrain

Ajoute le dossier, puis modifie :

```txt
assets/js/terrain-data.js
```

Exemple :

```js
{
  id: "terrain-4",
  label: "terrain-4",
  path: "assets/models/terrain-4/",
  obj: "terrain.obj",
  mtl: "terrain.mtl"
}
```

Si ton OBJ ou MTL n'a pas ce nom, change simplement `obj` et `mtl`.

## Où le viewer apparaît

- Accueil : dans le bloc 3D à droite.
- Page projet : ouvre `project.html?id=unity-terrain`.

Le projet correspondant est marqué dans `assets/js/projects.js` avec :

```js
terrainViewer: true
```

## Tester

```bash
cd ~/Dev/portfolio-id3d
python3 -m http.server 8000
```

Puis ouvre :

```txt
http://localhost:8000
```

## Ajout : OBJ seuls + PNG global

Tu peux maintenant mettre des fichiers `.obj` seuls dans :

```txt
assets/models/obj-only/
```

Et mettre les textures `.png` globales dans :

```txt
assets/textures/terrain/
```

Les boutons de gauche changent le terrain. Les boutons de droite changent/remplacent la texture PNG appliquée au terrain.

La liste des terrains et textures se règle dans :

```txt
assets/js/terrain-data.js
```
