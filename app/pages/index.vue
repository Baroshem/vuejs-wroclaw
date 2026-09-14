<script setup lang="ts">
import SectionCFP from '~/components/sections/SectionCFP.vue'
import SectionEvent from '~/components/sections/SectionEvent.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionSpeakers from '~/components/sections/SectionSpeakers.vue'
import SectionVenue from '~/components/sections/SectionVenue.vue'

const sections = ['speakers', 'agenda', 'venue', 'cfp'] as const
const { active } = useScrollSpy(sections)
</script>

<template>
  <div>
    <SiteNav :active="active" />
    <SectionHero />
    <SectionSpeakers />
    <SectionEvent />
    <SectionVenue />
    <SectionCFP />
    <SiteFooter />
    <MobileCtaBar />
  </div>
</template>
