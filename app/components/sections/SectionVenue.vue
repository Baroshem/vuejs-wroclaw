<script setup lang="ts">
import { MAP_URL } from '~/utils/links'

const highlights = [
  'Nowoczesna przestrzeń coworkingowa',
  'Wysokiej jakości audio i projektor',
  'Networking i rozmowy po evencie',
  'Dostęp do Wi-Fi i strefy chillout'
]

const facts = [
  { k: 'Start', v: '18:30' },
  { k: 'Rozmowy', v: 'po sesji' }
]
</script>

<template>
  <SectionBand
    id="venue"
    deep
  >
    <UiBadge class="mb-4.5">
      Lokacja &bull; Quest Site
    </UiBadge>
    <h2 class="mb-10 font-display text-[26px] font-bold md:text-[34px]">
      Gdzie się spotykamy
    </h2>

    <div class="grid items-start gap-7 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      <div>
        <p class="mb-1.5 text-[22px] font-bold">
          Hub Wrocław
        </p>
        <p class="mb-7 font-display text-[13px] tracking-[0.04em] text-slate">
          ul. Market Square 18, 50-101 Wrocław
        </p>

        <ul class="mb-7.5 space-y-3">
          <li
            v-for="item in highlights"
            :key="item"
            class="flex items-center gap-3 text-[13px] text-white"
          >
            <span class="size-[5px] shrink-0 bg-crimson" />
            {{ item }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-3">
          <UiButton
            :href="MAP_URL"
            external
          >
            Pokaż na mapie
          </UiButton>
          <UiButton
            variant="ghost"
            href="#agenda"
          >
            Zobacz agendę
          </UiButton>
        </div>
      </div>

      <div class="bracket-frame relative bg-panel p-3.5">
        <span class="bl" /><span class="br" />
        <div class="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Nowoczesna przestrzeń eventowa"
            class="h-[280px] w-full object-cover"
          >
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div
            v-for="fact in facts"
            :key="fact.k"
            class="border-t border-dashed border-white/9 pt-3"
          >
            <p class="text-[10px] uppercase tracking-[0.18em] text-slate-dim">
              {{ fact.k }}
            </p>
            <p class="mt-1 font-display text-xl font-bold text-white">
              {{ fact.v }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
