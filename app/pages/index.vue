<script setup lang="ts">
import SectionHeroHome from '~/components/sections/SectionHeroHome.vue'

const cta = { label: 'Edycja 2027', href: '/2027' }
</script>

<template>
  <div data-ui>
    <SiteNav
      :active="null"
      :links="[]"
      :cta="cta"
    />
    <main id="main">
      <SectionHeroHome />
    </main>
    <SiteFooter
      tagline="Wrocław"
      :links="[]"
      :linkedin="false"
    />
    <MobileCtaBar :cta="cta" />
  </div>
</template>
