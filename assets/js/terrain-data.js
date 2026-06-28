export const TERRAIN_QUALITIES = [
  {
    id: "low",
    label: "Low quality",
  },
  {
    id: "good",
    label: "Good quality",
  },
];

export const TERRAIN_MODELS = [
  {
    id: "base",
    label: "terrain",
    qualities: {
      low: {
        path: "assets/models/terrain-low/base/",
        obj: "terrain.obj",
        mtl: "terrain.mtl",
      },
    },
  },
  {
    id: "current",
    label: "terrain_current",
    qualities: {
      low: {
        path: "assets/models/terrain-low/current/",
        obj: "terrain_current.obj",
        mtl: "terrain_current.mtl",
      },
      good: {
        path: "assets/models/terrain-good/current/",
        obj: "terrain_current.obj",
        mtl: "terrain_current.mtl",
      },
    },
  },
  {
    id: "hydraulic-strong",
    label: "terrain_hydraulic_strong",
    qualities: {
      low: {
        path: "assets/models/terrain-low/hydraulic-strong/",
        obj: "terrain_hydraulic_strong.obj",
        mtl: "terrain_hydraulic_strong.mtl",
      },
      good: {
        path: "assets/models/terrain-good/hydraulic-strong/",
        obj: "terrain_hydraulic_strong.obj",
        mtl: "terrain_hydraulic_strong.mtl",
      },
    },
  },
  {
    id: "hydraulic-ui",
    label: "terrain_hydraulic_ui",
    qualities: {
      low: {
        path: "assets/models/terrain-low/hydraulic-ui/",
        obj: "terrain_hydraulic_ui.obj",
        mtl: "terrain_hydraulic_ui.mtl",
      },
      good: {
        path: "assets/models/terrain-good/hydraulic-ui/",
        obj: "terrain_hydraulic_ui.obj",
        mtl: "terrain_hydraulic_ui.mtl",
      },
    },
  },
  {
    id: "road-terraform",
    label: "terrain_road_terraform",
    qualities: {
      low: {
        path: "assets/models/terrain-low/road-terraform/",
        obj: "terrain_road_terraform.obj",
        mtl: "terrain_road_terraform.mtl",
      },
      good: {
        path: "assets/models/terrain-good/road-terraform/",
        obj: "terrain_road_terraform.obj",
        mtl: "terrain_road_terraform.mtl",
      },
    },
  },
  {
    id: "sculpted",
    label: "terrain_sculpted_hill",
    qualities: {
      low: {
        path: "assets/models/terrain-low/sculpted/",
        obj: "terrain_sculpted_hill.obj",
        mtl: "terrain_sculpted_hill.mtl",
      },
      good: {
        path: "assets/models/terrain-good/sculpted/",
        obj: "terrain_sculpted_hill.obj",
        mtl: "terrain_sculpted_hill.mtl",
      },
    },
  },
  {
    id: "thermal-soft",
    label: "terrain_thermal_soft",
    qualities: {
      low: {
        path: "assets/models/terrain-low/thermal-soft/",
        obj: "terrain_thermal_soft.obj",
        mtl: "terrain_thermal_soft.mtl",
      },
      good: {
        path: "assets/models/terrain-good/thermal-soft/",
        obj: "terrain_thermal_soft.obj",
        mtl: "terrain_thermal_soft.mtl",
      },
    },
  },
  {
    id: "thermal-strong",
    label: "terrain_thermal_strong",
    qualities: {
      low: {
        path: "assets/models/terrain-low/thermal-strong/",
        obj: "terrain_thermal_strong.obj",
        mtl: "terrain_thermal_strong.mtl",
      },
      good: {
        path: "assets/models/terrain-good/thermal-strong/",
        obj: "terrain_thermal_strong.obj",
        mtl: "terrain_thermal_strong.mtl",
      },
    },
  },
];

export const TERRAIN_TEXTURES = [
  { id: "original", label: "Original", url: null },

  {
    id: "uniform",
    label: "00_uniform.png",
    url: "assets/textures/terrain/00_uniform.png",
  },
  {
    id: "elevation",
    label: "01_elevation.png",
    url: "assets/textures/terrain/01_elevation.png",
  },
  {
    id: "normals",
    label: "02_normals.png",
    url: "assets/textures/terrain/02_normals.png",
  },
  {
    id: "slope-gradient",
    label: "03_slope_gradient.png",
    url: "assets/textures/terrain/03_slope_gradient.png",
  },
  {
    id: "slope-average",
    label: "04_slope_average.png",
    url: "assets/textures/terrain/04_slope_average.png",
  },
  {
    id: "aspect",
    label: "05_aspect.png",
    url: "assets/textures/terrain/05_aspect.png",
  },
  {
    id: "eastness",
    label: "06_eastness.png",
    url: "assets/textures/terrain/06_eastness.png",
  },
  {
    id: "northness",
    label: "07_northness.png",
    url: "assets/textures/terrain/07_northness.png",
  },
  {
    id: "laplacian",
    label: "08_laplacian.png",
    url: "assets/textures/terrain/08_laplacian.png",
  },
  {
    id: "fract-laplacian",
    label: "09_fract_laplacian.png",
    url: "assets/textures/terrain/09_fract_laplacian.png",
  },
  {
    id: "curvature-mean",
    label: "10_curvature_mean.png",
    url: "assets/textures/terrain/10_curvature_mean.png",
  },
  {
    id: "curvature-gaussian",
    label: "11_curvature_gaussian.png",
    url: "assets/textures/terrain/11_curvature_gaussian.png",
  },
  { id: "tpi", label: "12_tpi.png", url: "assets/textures/terrain/12_tpi.png" },
  {
    id: "local-relief",
    label: "13_local_relief.png",
    url: "assets/textures/terrain/13_local_relief.png",
  },
  {
    id: "ruggedness",
    label: "14_ruggedness.png",
    url: "assets/textures/terrain/14_ruggedness.png",
  },
  {
    id: "stream-area-log",
    label: "15_stream_area_log.png",
    url: "assets/textures/terrain/15_stream_area_log.png",
  },
  {
    id: "wetness",
    label: "16_wetness.png",
    url: "assets/textures/terrain/16_wetness.png",
  },
  {
    id: "stream-power",
    label: "17_stream_power.png",
    url: "assets/textures/terrain/17_stream_power.png",
  },
  {
    id: "skyview",
    label: "18_skyview_approx.png",
    url: "assets/textures/terrain/18_skyview_approx.png",
  },
  {
    id: "geomorphons",
    label: "19_geomorphons.png",
    url: "assets/textures/terrain/19_geomorphons.png",
  },
  {
    id: "landforms",
    label: "20_landforms_tpi_class.png",
    url: "assets/textures/terrain/20_landforms_tpi_class.png",
  },

  {
    id: "road-network",
    label: "road_network_overlay.png",
    url: "assets/textures/terrain/road_network_overlay.png",
  },
  {
    id: "road-path",
    label: "road_path_overlay.png",
    url: "assets/textures/terrain/road_path_overlay.png",
  },
  {
    id: "traffic",
    label: "traffic_snapshot.png",
    url: "assets/textures/terrain/traffic_snapshot.png",
  },

  {
    id: "snow-500",
    label: "snow_alt_500m.png",
    url: "assets/textures/terrain/snow_alt_500m.png",
  },
  {
    id: "snow-1200",
    label: "snow_alt_1200m.png",
    url: "assets/textures/terrain/snow_alt_1200m.png",
  },
  {
    id: "snow-2200",
    label: "snow_alt_2200m.png",
    url: "assets/textures/terrain/snow_alt_2200m.png",
  },
  {
    id: "snow-3200",
    label: "snow_alt_3200m.png",
    url: "assets/textures/terrain/snow_alt_3200m.png",
  },

  {
    id: "baseline-density",
    label: "baseline_density.png",
    url: "assets/textures/terrain/baseline_density.png",
  },
  {
    id: "baseline-suitability",
    label: "baseline_suitability.png",
    url: "assets/textures/terrain/baseline_suitability.png",
  },
  {
    id: "low-diffusion-density",
    label: "low_diffusion_density.png",
    url: "assets/textures/terrain/low_diffusion_density.png",
  },
  {
    id: "low-diffusion-suitability",
    label: "low_diffusion_suitability.png",
    url: "assets/textures/terrain/low_diffusion_suitability.png",
  },
  {
    id: "high-diffusion-density",
    label: "high_diffusion_density.png",
    url: "assets/textures/terrain/high_diffusion_density.png",
  },
  {
    id: "high-diffusion-suitability",
    label: "high_diffusion_suitability.png",
    url: "assets/textures/terrain/high_diffusion_suitability.png",
  },
  {
    id: "selective-slope-density",
    label: "selective_slope_density.png",
    url: "assets/textures/terrain/selective_slope_density.png",
  },
  {
    id: "selective-slope-suitability",
    label: "selective_slope_suitability.png",
    url: "assets/textures/terrain/selective_slope_suitability.png",
  },
  {
    id: "strong-growth-density",
    label: "strong_growth_density.png",
    url: "assets/textures/terrain/strong_growth_density.png",
  },
  {
    id: "strong-growth-suitability",
    label: "strong_growth_suitability.png",
    url: "assets/textures/terrain/strong_growth_suitability.png",
  },
  {
    id: "wide-wetness-density",
    label: "wide_wetness_density.png",
    url: "assets/textures/terrain/wide_wetness_density.png",
  },
  {
    id: "wide-wetness-suitability",
    label: "wide_wetness_suitability.png",
    url: "assets/textures/terrain/wide_wetness_suitability.png",
  },
];
