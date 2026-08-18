<script setup lang="ts">
import SectionCFP from '~/components/sections/SectionCFP.vue'
import SectionEvent from '~/components/sections/SectionEvent.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionSpeakers from '~/components/sections/SectionSpeakers.vue'
import SectionVenue from '~/components/sections/SectionVenue.vue'
</script>

<template>
  <div>
    <SectionHero />
    <SectionSpeakers />
    <SectionVenue />
    <SectionCFP />
    <SectionEvent />
  </div>
</template>
