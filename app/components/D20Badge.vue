<script setup lang="ts">
/** d20 facet net; only the centre number is dynamic. */
withDefaults(defineProps<{ value: number | string, locked?: boolean }>(), { locked: false })

const decoy = [
  { n: 12, x: 187, y: 93, r: -15 },
  { n: 4, x: 313, y: 93, r: 15 },
  { n: 8, x: 147, y: 190, r: -40 },
  { n: 14, x: 353, y: 190, r: 40 },
  { n: 18, x: 83, y: 273, r: -70 },
  { n: 2, x: 417, y: 273, r: 70 },
  { n: 16, x: 147, y: 383, r: -120 },
  { n: 6, x: 353, y: 383, r: 120 },
  { n: 10, x: 250, y: 370, r: 180 }
]

const edges = [
  [250, 110, 250, 30], [370, 320, 440, 360], [130, 320, 60, 360],
  [250, 110, 60, 140], [250, 110, 440, 140], [370, 320, 440, 140],
  [370, 320, 250, 470], [130, 320, 250, 470], [130, 320, 60, 140]
]
</script>

<template>
  <div
    class="h-13.25 w-11.5 shrink-0"
    :class="locked ? 'text-slate-dim' : 'text-white drop-shadow-[0_0_5px_rgba(220,20,60,0.35)]'"
  >
    <svg
      viewBox="55 25 390 450"
      class="block size-full"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="8"
        stroke-linejoin="round"
        stroke-linecap="round"
      >
        <polygon points="250,30 440,140 440,360 250,470 60,360 60,140" />
        <polygon points="250,110 370,320 130,320" />
        <line
          v-for="(e, i) in edges"
          :key="i"
          :x1="e[0]"
          :y1="e[1]"
          :x2="e[2]"
          :y2="e[3]"
        />
      </g>
      <g
        fill="currentColor"
        font-family="'Space Mono', monospace"
        font-weight="700"
        text-anchor="middle"
        dominant-baseline="central"
      >
        <text
          x="250"
          y="250"
          font-size="160"
        >{{ value }}</text>
        <text
          v-for="d in decoy"
          :key="d.n"
          :x="d.x"
          :y="d.y"
          font-size="60"
          :transform="`rotate(${d.r} ${d.x} ${d.y})`"
        >{{ d.n }}</text>
      </g>
    </svg>
  </div>
</template>
