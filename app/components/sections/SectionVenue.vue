<script setup lang="ts">
import { edition2026 } from '~/data/editions/2026'

const venue = edition2026.venue!
</script>

<template>
  <SectionBand
    id="venue"
    deep
  >
    <UiBadge class="mb-4.5">
      <UIcon
        name="i-lucide-map-pin"
        class="size-5"
      />
      Miejsce &bull; Venue
    </UiBadge>
    <h2 class="mb-10 font-display text-[26px] font-bold md:text-[34px]">
      Gdzie się spotykamy
    </h2>

    <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p class="mb-1.5 text-[22px] font-bold">
          {{ venue.name }}
        </p>
        <p class="mb-7 font-display text-[13px] tracking-[0.04em] text-slate">
          {{ venue.address }}
        </p>

        <dl class="mb-7.5">
          <div
            v-for="fact in venue.facts"
            :key="fact.k"
            class="grid grid-cols-[118px_1fr] gap-4 border-t border-dashed border-white/9 py-3 last:border-b"
          >
            <dt class="pt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-dim">
              {{ fact.k }}
            </dt>
            <dd class="m-0 text-[13px] leading-[1.55] text-white">
              {{ fact.v }}
              <small class="mt-0.5 block text-xs text-slate">{{ fact.sub }}</small>
            </dd>
          </div>
        </dl>

        <div class="flex flex-wrap gap-3">
          <UiButton
            :href="venue.navigateUrl"
            external
          >
            Nawiguj
          </UiButton>
          <UiButton
            variant="ghost"
            href="#agenda"
          >
            Zobacz agendę
          </UiButton>
        </div>
      </div>

      <div class="rounded-lg border border-white/10 border-l-2 border-l-accent bg-panel p-3.5">
        <div class="overflow-hidden">
          <iframe
            :title="venue.mapTitle"
            :src="venue.mapEmbedUrl"
            class="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
        <div class="mt-3 flex justify-between gap-3 font-display text-[10px] tracking-[0.16em] text-slate-dim uppercase">
          <span>{{ venue.coords }}</span>
          <span>{{ venue.address.split(',')[0] }}</span>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
