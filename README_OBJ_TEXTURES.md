# Terrains OBJ seuls + textures PNG globales

Tu as maintenant deux façons d'ajouter des terrains.

## 1. Méthode classique : OBJ + MTL + PNG

Dossier par terrain :

```txt
assets/models/terrain/
  terrain.obj
  terrain.mtl
  texture.png
```

Puis dans `assets/js/terrain-data.js` :

```js
{
  id: "terrain",
  label: "terrain",
  path: "assets/models/terrain/",
  obj: "terrain.obj",
  mtl: "terrain.mtl"
}
```

## 2. Nouvelle méthode : dossier avec uniquement des OBJ

Mets tes `.obj` ici :

```txt
assets/models/obj-only/
  obj-terrain-1.obj
  obj-terrain-2.obj
```

Mets les textures PNG ici :

```txt
assets/textures/terrain/
  shared.png
  texture-2.png
```

Puis dans `assets/js/terrain-data.js`, ajoute les OBJ :

```js
{
  id: "obj-terrain-1",
  label: "obj-terrain-1.obj",
  path: "assets/models/obj-only/",
  obj: "obj-terrain-1.obj",
  texture: "assets/textures/terrain/shared.png"
}
```

Et ajoute les PNG dans `TERRAIN_TEXTURES` :

```js
{
  id: "texture-2",
  label: "texture-2.png",
  url: "assets/textures/terrain/texture-2.png"
}
```

Les boutons en haut à gauche changent le terrain. Les boutons en haut à droite changent/remplacent la texture PNG.

Attention : pour que le PNG s'affiche correctement sur un OBJ, l'OBJ doit avoir des coordonnées UV. Si l'OBJ n'a pas d'UV, Three.js ne peut pas savoir comment plaquer l'image sur le terrain.
