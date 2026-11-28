<script setup lang="ts">
import MobileTabBar from '~/components/layout/MobileTabBar.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteNav from '~/components/layout/SiteNav.vue'
import { useScrollSpy } from '~/composables/useScrollSpy'
import SectionCFP from '~/components/cfp/SectionCFP.vue'
import SectionEvent from '~/components/agenda/SectionEvent.vue'
import SectionGallery from '~/components/gallery/SectionGallery.vue'
import SectionHero from '~/components/hero/SectionHero.vue'
import SectionSpeakers from '~/components/speakers/SectionSpeakers.vue'
import SectionSponsors from '~/components/sponsors/SectionSponsors.vue'
import SectionVenue from '~/components/venue/SectionVenue.vue'
import type { Edition } from '~/data/editions/types'

// The only component that knows about an edition: it hands slices of the data to
// otherwise dumb sections. Sections without data render ? placeholders themselves.
const props = defineProps<{ edition: Edition }>()
const { t } = useI18n()

const link = (id: string) => ({ id, label: t(`nav.${id}`) })
const links = computed(() => [
  link('speakers'),
  link('sponsors'),
  link('agenda'),
  link('venue'),
  ...(props.edition.gallery ? [link('gallery')] : []),
  link('cfp')
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
      {{ t('a11y.skipToContent') }}
    </a>
    <SiteNav
      :active="active"
      :links="links"
      :cta="edition.nav.cta ?? null"
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
    <MobileTabBar />
  </div>
</template>
