<script setup lang="ts">
import SectionHeroHome from '~/components/sections/SectionHeroHome.vue'
</script>

<template>
  <div data-ui>
    <SiteNav
      :active="null"
      :links="[]"
      :cta="null"
    />
    <main id="main">
      <SectionHeroHome />
    </main>
    <SiteFooter
      tagline="Wrocław"
      :links="[]"
      :linkedin="false"
    />
    <MobileTabBar />
  </div>
</template>
