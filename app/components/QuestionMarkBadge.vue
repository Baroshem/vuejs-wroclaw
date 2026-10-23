<template>
  <!-- Placeholder mark for talks/speakers that are not announced yet.
       Logo colours split along the glyph's own axis: full crimson stroke,
       white half-width strip on the inner side — the colour boundary runs
       along the stroke centreline, exactly like the half-split dot.
       Decorative only — callers must provide accessible text next to it.
       The white strip path's cubic part is a generated true-offset polyline
       (48 samples at −2.75 along exact normals of the centreline cubic). -->
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="block"
  >
    <path
      d="M30 36a20 20 0 0 1 40 0c0 13.5-20 12-20 34"
      stroke="#DC143C"
      stroke-width="11"
    />
    <path
      d="M32.75 36A17.25 17.25 0 0 1 67.25 36L67.25 36.00L67.23 36.65L67.17 37.26L67.08 37.83L66.95 38.37L66.80 38.88L66.61 39.36L66.39 39.84L66.14 40.30L65.86 40.75L65.55 41.20L65.20 41.64L64.82 42.08L64.41 42.52L63.97 42.97L63.50 43.41L63.00 43.86L62.48 44.31L61.93 44.76L61.36 45.22L60.77 45.69L60.16 46.17L59.54 46.66L58.91 47.16L58.27 47.68L57.61 48.21L56.96 48.77L56.30 49.35L55.64 49.95L54.99 50.57L54.34 51.23L53.70 51.92L53.08 52.64L52.47 53.40L51.87 54.19L51.30 55.03L50.76 55.90L50.24 56.82L49.76 57.78L49.31 58.79L48.90 59.84L48.53 60.94L48.20 62.08L47.92 63.27L47.68 64.52L47.49 65.81L47.36 67.15L47.28 68.55L47.25 70.00"
      stroke="#FFFFFF"
      stroke-width="5.5"
    />
    <rect
      x="44.5"
      y="80.5"
      width="5.5"
      height="11"
      fill="#FFFFFF"
    />
    <rect
      x="50"
      y="80.5"
      width="5.5"
      height="11"
      fill="#DC143C"
    />
  </svg>
</template>
