<script setup lang="ts">
import { edition2026 } from '~/data/editions/2026'

const mainSponsors = edition2026.sponsors.main
const mediaPartners = edition2026.sponsors.media
</script>

<template>
  <SectionBand
    id="sponsors"
    deep
  >
    <SectionHeader
      class="mb-10"
      icon="i-lucide-handshake"
      badge="Sponsorzy & Partnerzy"
      title="Główny sponsor"
      description="Dzięki Storyblok wstęp na meetup jest wolny."
    />

    <ul class="m-0 grid list-none gap-3 p-0 md:mx-auto md:max-w-[calc(50%-0.875rem)] md:gap-7">
      <SponsorCard
        v-for="s in mainSponsors"
        :key="s.name"
        v-bind="s"
      />
    </ul>

    <SectionHeader
      class="mb-10 mt-16"
      title="Partnerzy medialni"
      description="Supabase i GDG Wrocław pomagają nam dotrzeć do społeczności."
    />

    <ul class="m-0 grid list-none gap-3 p-0 md:grid-cols-2 md:gap-7">
      <SponsorCard
        v-for="s in mediaPartners"
        :key="s.name"
        v-bind="s"
      />
    </ul>
  </SectionBand>
</template>
