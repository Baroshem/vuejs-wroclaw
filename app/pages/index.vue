<script setup lang="ts">
import MobileTabBar from '~/components/layout/MobileTabBar.vue'
import SiteNav from '~/components/layout/SiteNav.vue'
import SectionHeroHome from '~/components/hero/SectionHeroHome.vue'
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
