<script setup lang="ts">
import SectionCFP from '~/components/sections/SectionCFP.vue'
import SectionEvent from '~/components/sections/SectionEvent.vue'
import SectionGallery from '~/components/sections/SectionGallery.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionSpeakers from '~/components/sections/SectionSpeakers.vue'
import SectionSponsors from '~/components/sections/SectionSponsors.vue'
import SectionVenue from '~/components/sections/SectionVenue.vue'
import type { Edition } from '~/data/editions/types'

// The only component that knows about an edition: it hands slices of the data to
// otherwise dumb sections. Sections without data render ? placeholders themselves.
const props = defineProps<{ edition: Edition }>()

const links = computed(() => [
  { id: 'speakers', label: 'Prelegenci' },
  { id: 'sponsors', label: 'Sponsorzy' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'venue', label: 'Miejsce' },
  ...(props.edition.gallery ? [{ id: 'gallery', label: 'Galeria' }] : []),
  { id: 'cfp', label: 'CFP' }
])
const footerLinks = computed(() => links.value.filter(l => ['speakers', 'agenda', 'venue', 'cfp'].includes(l.id)))

const { active } = useScrollSpy(links.value.map(l => l.id))
</script>

<template>
  <div
    :class="`planet-${edition.slug}`"
    data-ui
  >
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
    >
      Przejdź do treści
    </a>
    <SiteNav
      :active="active"
      :links="links"
      :cta="edition.nav.cta"
    />
    <main id="main">
      <SectionHero v-bind="edition.hero" />
      <SectionSpeakers
        :host="edition.host"
        :speakers="edition.speakers"
        :bonus="edition.speakersBonus"
      />
      <SectionSponsors v-bind="edition.sponsors" />
      <SectionEvent v-bind="edition.agenda" />
      <SectionVenue :venue="edition.venue" />
      <SectionGallery
        v-if="edition.gallery"
        :photos="edition.gallery"
      />
      <SectionCFP v-bind="edition.cfp" />
    </main>
    <SiteFooter
      :tagline="edition.footer.tagline"
      :links="footerLinks"
      :linkedin="edition.footer.linkedin"
    />
    <MobileCtaBar :cta="edition.nav.cta" />
  </div>
</template>
