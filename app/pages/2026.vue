<script setup lang="ts">
import SectionCFP from '~/components/sections/SectionCFP.vue'
import SectionEvent from '~/components/sections/SectionEvent.vue'
import SectionGallery from '~/components/sections/SectionGallery.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionSpeakers from '~/components/sections/SectionSpeakers.vue'
import SectionSponsors from '~/components/sections/SectionSponsors.vue'
import SectionVenue from '~/components/sections/SectionVenue.vue'

const sections = ['speakers', 'sponsors', 'agenda', 'venue', 'gallery', 'cfp'] as const
const { active } = useScrollSpy(sections)
</script>

<template>
  <div>
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
    >
      Przejdź do treści
    </a>
    <SiteNav :active="active" />
    <main id="main">
      <SectionHero />
      <SectionSpeakers />
      <SectionSponsors />
      <SectionEvent />
      <SectionVenue />
      <SectionGallery />
      <SectionCFP />
    </main>
    <SiteFooter />
    <MobileCtaBar />
  </div>
</template>
