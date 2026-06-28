import { TERRAIN_MODELS, TERRAIN_QUALITIES } from "./terrain-data.js";
import { createTerrainViewer } from "./terrain-viewer.js";

const homeTerrain =
  TERRAIN_MODELS.find((terrain) => terrain.id === "terrain") ??
  TERRAIN_MODELS[0];

createTerrainViewer({
  canvas: "#hero3d",
  models: [homeTerrain],
  qualities: TERRAIN_QUALITIES,
  textures: [],
  defaultQuality: "low",
});
