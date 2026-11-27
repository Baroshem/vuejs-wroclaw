<script setup lang="ts">
import { CFP_FORM_URL } from '~/utils/links'

// Placeholder copy for the next edition — update once date, venue and line-up are confirmed.
const audience = ['Dla developerów Vue i Nuxt', 'Case study i networking', 'Po polsku']
const stats = [
  { num: '2', label: 'Edycje' },
  { num: 'TBA', label: 'Speakerzy' },
  { num: 'TBA', label: 'Data' }
]
</script>

<template>
  <section
    data-id="hero"
    class="relative isolate grid items-center gap-10 px-5 pt-10 pb-14 md:min-h-[calc(100vh-var(--nav-h))] md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-0"
  >
    <HeroCosmos />
    <div>
      <UiBadge class="mb-7">
        <UIcon
          name="i-lucide-sparkle"
          class="size-5"
        />
        Wkrótce &bull; Wrocław
      </UiBadge>

      <h1 class="mb-6 font-display text-[44px] leading-none font-bold tracking-tight md:text-[min(76px,9vh)]">
        <span class="block text-white">Vue.js</span>
        <span class="block bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">Wrocław</span>
      </h1>

      <p class="mb-6 max-w-130 leading-relaxed text-slate">
        Lokalny meetup dla frontend developerów, architektów aplikacji i osób, które chcą budować
        lepszy web z Vue.js. Kolejna edycja już w przygotowaniu — szczegóły wkrótce.
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
          :href="CFP_FORM_URL"
          external
          class="max-md:flex-1 max-md:text-center"
        >
          Zgłoś prelekcję
        </UiButton>
        <UiButton
          variant="ghost"
          href="/2026"
          class="max-md:flex-1 max-md:text-center"
        >
          Zobacz edycję 11-2026
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

    <HeroSigil>
      <template #ring1>
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <NuxtLink
            to="/2026"
            aria-label="Edycja 11-2026 — przejdź do archiwum"
            class="block animate-[spin_26s_linear_infinite_reverse] rounded-full border border-white/20 bg-bg-deep px-3 py-1 font-display text-xs font-bold whitespace-nowrap text-slate shadow-[0_0_10px_rgba(148,163,184,0.35)] transition-colors hover:border-accent hover:text-white"
          >
            11-2026
          </NuxtLink>
        </div>
        <div class="absolute -bottom-3.5 left-1/2 -translate-x-1/2">
          <span class="block animate-[spin_26s_linear_infinite_reverse] rounded-full border border-accent bg-bg-deep px-3 py-1 font-display text-xs font-bold whitespace-nowrap text-white shadow-[0_0_14px_var(--color-accent)]">
            2027
          </span>
        </div>
      </template>
      <template #ring2>
        <span class="sr-only" />
      </template>
      <template #ring3>
        <span class="sr-only" />
      </template>
    </HeroSigil>
  </section>
</template>
