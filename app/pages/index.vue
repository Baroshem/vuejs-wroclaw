<script setup lang="ts">
import SectionHeroHome from '~/components/sections/SectionHeroHome.vue'
</script>

<template>
  <div
    data-ui
    class="flex min-h-dvh flex-col"
  >
    <SiteNav
      :active="null"
      :links="[]"
      :cta="null"
    />
    <main
      id="main"
      class="flex flex-1 flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0"
    >
      <SectionHeroHome />
    </main>
    <MobileTabBar />
  </div>
</template>
