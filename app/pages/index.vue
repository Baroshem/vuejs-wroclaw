<script setup lang="ts">
import SectionHeroHome from '~/components/sections/SectionHeroHome.vue'

const { t } = useI18n()
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
      :tagline="t('home.footerTagline')"
      :links="[]"
      :linkedin="false"
    />
    <MobileTabBar />
  </div>
</template>
