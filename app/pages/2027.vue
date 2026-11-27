<script setup lang="ts">
import { CFP_FORM_URL } from '~/utils/links'
import SectionHeroNext from '~/components/sections/SectionHeroNext.vue'
import SectionPlaceholder from '~/components/sections/SectionPlaceholder.vue'

const links = [
  { id: 'speakers', label: 'Prelegenci' },
  { id: 'sponsors', label: 'Sponsorzy' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'venue', label: 'Miejsce' },
  { id: 'cfp', label: 'CFP' }
]
const cta = { label: 'Zgłoś prelekcję', href: CFP_FORM_URL, external: true }

const { active } = useScrollSpy(links.map(l => l.id))
</script>

<template>
  <div
    class="planet-2027"
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
      :cta="cta"
    />
    <main id="main">
      <SectionHeroNext />
      <SectionPlaceholder
        id="speakers"
        title="Prelegenci"
        description="Line-up kolejnej edycji jest w przygotowaniu."
        icon="i-lucide-users"
      />
      <SectionPlaceholder
        id="sponsors"
        title="Sponsorzy"
        description="Chcesz wesprzeć kolejną edycję? Odezwij się do organizatorów."
        icon="i-lucide-handshake"
        deep
      />
      <SectionPlaceholder
        id="agenda"
        title="Agenda"
        description="Harmonogram pojawi się po potwierdzeniu prelegentów."
        icon="i-lucide-calendar-clock"
      />
      <SectionPlaceholder
        id="venue"
        title="Miejsce"
        description="Lokalizacja i data zostaną ogłoszone wkrótce."
        icon="i-lucide-map-pin"
        deep
      />
      <SectionPlaceholder
        id="cfp"
        title="Call for Papers"
        description="Zgłoszenia prelekcji otwieramy wkrótce — w międzyczasie możesz skorzystać z formularza w nawigacji."
        icon="i-lucide-mic"
      />
    </main>
    <SiteFooter
      tagline="Kolejna edycja"
      :links="links"
      :linkedin="false"
    />
    <MobileCtaBar :cta="cta" />
  </div>
</template>
