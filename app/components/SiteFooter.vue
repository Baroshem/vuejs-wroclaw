<script setup lang="ts">
const links = [
  { id: 'speakers', label: 'Prelegenci' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'venue', label: 'Miejsce' },
  { id: 'cfp', label: 'CFP' }
]
</script>

<template>
  <footer class="flex flex-wrap items-center justify-between gap-6 border-t border-white/7 px-5 py-10 text-xs text-slate-dim md:px-16">
    <span>&copy; {{ new Date().getFullYear() }} Vue.js Wrocław &bull; 23 listopada, Wrocław</span>
    <span class="flex gap-5">
      <a
        v-for="l in links"
        :key="l.id"
        :href="`#${l.id}`"
      >{{ l.label }}</a>
      <a
        href="https://www.linkedin.com/events/7287746621629587456/"
        target="_blank"
        rel="noopener"
      >LinkedIn</a>
    </span>
  </footer>
</template>
