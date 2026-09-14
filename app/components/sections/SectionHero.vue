<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'

const audience = ['Dla developerów Vue i Nuxt', 'Case study i networking', 'Po polsku']
const stats = [
  { num: '4', label: 'Speakerów' },
  { num: '1', label: 'Edycja' },
  { num: '0 zł', label: 'Wstęp' }
]
</script>

<template>
  <section
    data-id="hero"
    class="grid items-center gap-10 px-5 pt-10 pb-14 md:min-h-screen md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-24"
  >
    <div>
      <UiBadge class="mb-7">
        <UIcon
          name="i-lucide-sparkle"
          class="size-5"
        />
        23 listopada &bull; Wrocław
      </UiBadge>

      <h1 class="mb-6 font-display text-[44px] leading-none font-bold tracking-tight md:text-[76px]">
        <span class="block text-white">Vue.js</span>
        <span class="block bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">Wrocław</span>
      </h1>

      <p class="mb-6 max-w-130 leading-relaxed text-slate">
        Lokalny meetup dla frontend developerów, architektów aplikacji i osób, które chcą budować
        lepszy web z Vue.js. Wieczór pełen praktycznych case study, świeżych pomysłów i networkingu.
      </p>

      <div class="mb-6.5 flex flex-wrap gap-2.5">
        <span
          v-for="a in audience"
          :key="a"
          class="inline-flex items-center gap-2 border border-white/12 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-slate"
        >
          <UIcon
            name="i-lucide-dot"
            class="size-6 text-accent"
          />
          {{ a }}
        </span>
      </div>

      <div class="mb-12 flex flex-wrap gap-4">
        <UiButton
          :href="RESERVE_URL"
          external
          class="max-md:flex-1 max-md:text-center"
        >
          Zarezerwuj miejsce
        </UiButton>
        <UiButton
          variant="ghost"
          href="#cfp"
          class="max-md:flex-1 max-md:text-center"
        >
          Zgłoś prelekcję
        </UiButton>
      </div>

      <div class="flex gap-8">
        <div
          v-for="s in stats"
          :key="s.label"
          class="min-w-23"
        >
          <div class="font-display text-3xl font-bold">
            {{ s.num }}
          </div>
          <div class="my-1 mb-2 text-[10px] uppercase tracking-[0.2em] text-slate">
            {{ s.label }}
          </div>
          <div class="h-0.5 w-full rounded-full bg-accent/60" />
        </div>
      </div>
    </div>

    <HeroSigil />
  </section>
</template>
