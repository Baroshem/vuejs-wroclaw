<script setup lang="ts">
interface Sponsor {
  name: string
  role: string
  logo?: string
}

// Only Storyblok funds free entry; Supabase and GDG are media partners.
const mainSponsor: Sponsor = { name: 'Storyblok', role: 'Główny sponsor', logo: '/sponsors/storyblok.svg' }
const mediaPartners: Sponsor[] = [
  { name: 'Supabase', role: 'Partner medialny', logo: '/sponsors/supabase.svg' },
  { name: 'GDG Wrocław', role: 'Partner medialny', logo: '/sponsors/gdg-wroclaw.png' }
]
</script>

<template>
  <SectionBand
    id="sponsors"
    deep
  >
    <UiBadge class="mb-4.5">
      <UIcon
        name="i-lucide-handshake"
        class="size-5"
      />
      Sponsorzy &amp; Partnerzy
    </UiBadge>
    <h2 class="mb-3 font-display text-[26px] font-bold md:text-[34px]">
      Główny sponsor
    </h2>
    <p class="mb-10 max-w-160 text-[15px] leading-[1.75] text-slate">
      Dzięki Storyblok wstęp na meetup jest wolny.
    </p>

    <ul class="m-0 grid list-none gap-3 p-0 md:mx-auto md:max-w-[calc(50%-0.875rem)] md:gap-7">
      <li
        v-for="s in [mainSponsor]"
        :key="s.name"
        class="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-panel px-6 py-8"
      >
        <p class="m-0 font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim">
          {{ s.role }}
        </p>
        <div class="flex h-16 w-full items-center justify-center">
          <img
            v-if="s.logo"
            :src="s.logo"
            :alt="s.name"
            class="max-h-full max-w-[240px] object-contain"
          >
          <span
            v-else
            class="font-display text-2xl font-bold"
          >{{ s.name }}</span>
        </div>
      </li>
    </ul>

    <h2 class="mb-3 mt-16 font-display text-[26px] font-bold md:text-[34px]">
      Partnerzy medialni
    </h2>
    <p class="mb-10 max-w-160 text-[15px] leading-[1.75] text-slate">
      Supabase i GDG Wrocław pomagają nam dotrzeć do społeczności.
    </p>

    <ul class="m-0 grid list-none gap-3 p-0 md:grid-cols-2 md:gap-7">
      <li
        v-for="s in mediaPartners"
        :key="s.name"
        class="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-panel px-6 py-8"
      >
        <p class="m-0 font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim">
          {{ s.role }}
        </p>
        <div class="flex h-16 w-full items-center justify-center">
          <img
            v-if="s.logo"
            :src="s.logo"
            :alt="s.name"
            class="max-h-full max-w-[240px] object-contain"
          >
          <span
            v-else
            class="font-display text-2xl font-bold"
          >{{ s.name }}</span>
        </div>
      </li>
    </ul>
  </SectionBand>
</template>
