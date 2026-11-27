<script setup lang="ts">
import type { Cta, Stat } from '~/data/editions/types'

defineProps<{
  badge: string
  description: string
  audience: string[]
  stats: Stat[]
  ctas: Cta[]
}>()
</script>

<template>
  <section
    data-id="hero"
    class="relative isolate grid items-center gap-10 px-5 pt-10 pb-14 md:min-h-[calc(100vh-var(--nav-h))] md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-0"
  >
    <div data-copy>
      <UiBadge class="mb-7">
        <UIcon
          name="i-lucide-sparkle"
          class="size-5"
        />
        {{ badge }}
      </UiBadge>

      <h1 class="mb-6 font-display text-[44px] leading-none font-bold tracking-tight md:text-[min(76px,9vh)]">
        <span class="block text-white">Vue.js</span>
        <span class="block bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">Wrocław</span>
      </h1>

      <p class="mb-6 max-w-130 leading-relaxed text-slate">
        {{ description }}
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
          v-for="c in ctas"
          :key="c.label"
          :variant="c.variant"
          :href="c.href"
          :external="c.external"
          :download="c.download ? '' : undefined"
          :disabled="c.disabled"
          class="max-md:flex-1 max-md:text-center"
        >
          {{ c.label }}
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

    <HeroSigil class="max-md:order-first" />
  </section>
</template>
