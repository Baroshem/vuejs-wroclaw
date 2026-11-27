<script setup lang="ts">
import { SITE_PAGES } from '~/utils/editions'

const route = useRoute()
</script>

<template>
  <nav
    aria-label="Edycje"
    class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-[rgba(6,8,11,0.96)] pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
  >
    <NuxtLink
      v-for="p in SITE_PAGES"
      :key="p.to"
      :to="p.to"
      class="relative flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors"
      :class="route.path === p.to
        ? 'text-accent-light before:absolute before:inset-x-6 before:top-0 before:h-0.5 before:bg-accent before:content-[\'\']'
        : 'text-slate'"
      :aria-current="route.path === p.to ? 'page' : undefined"
    >
      <UIcon
        :name="p.icon"
        class="size-5"
      />
      {{ p.label }}
    </NuxtLink>
  </nav>
</template>
