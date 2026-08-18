<script setup lang="ts">
const venueHighlights = [
  'Nowoczesna przestrzeń coworkingowa',
  'Wysokiej jakości audio i proyector',
  'Networking i rozmowy po eventcie',
  'Dostęp do Wi‑Fi i strefy chillout'
]
</script>

<template>
  <section id="venue" class="scroll-mt-24 bg-slate-950/70 py-20 md:py-24">
    <UContainer class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div class="space-y-6">
        <div>
          <UBadge color="primary" variant="soft" class="mb-3 border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Venue
          </UBadge>
          <h2 class="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Spotkamy się w sercu Wrocławia
          </h2>
        </div>

        <p class="text-base leading-relaxed text-slate-300">
          Wspólnie zorganizujemy wieczór w przyjaznej, nowoczesnej przestrzeni, która sprzyja rozmowom i kontaktom między twórcami ekosystemu Vue.js.
        </p>

        <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-map-pin" class="h-5 w-5" />
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Lokalizacja</p>
              <h3 class="mt-2 text-2xl font-bold text-white">Hub Wrocław</h3>
              <p class="mt-2 text-slate-300">ul. Market Square 18, 50-101 Wrocław</p>
            </div>
          </div>
        </div>

        <ul class="space-y-3">
          <li v-for="item in venueHighlights" :key="item" class="flex items-center gap-3 text-slate-200">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
              <UIcon name="i-lucide-check" class="h-3.5 w-3.5" />
            </span>
            {{ item }}
          </li>
        </ul>

        <UButton
          label="Pokaż na mapie"
          to="https://maps.google.com/?q=Market%20Square%20Wroc%C5%82aw"
          target="_blank"
          color="primary"
          size="lg"
          trailing-icon="i-lucide-arrow-up-right"
          class="transition-transform duration-200 hover:-translate-y-0.5"
        />
      </div>

      <div class="rounded-[2rem] border border-white/10 bg-slate-900/60 p-4 shadow-[0_25px_70px_rgba(15,23,43,0.6)]">
        <div class="overflow-hidden rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Nowoczesna przestrzeń eventowa"
            class="h-[420px] w-full object-cover"
          />
        </div>

        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Start</p>
            <p class="mt-2 text-xl font-bold text-white">18:30</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Rozmowy</p>
            <p class="mt-2 text-xl font-bold text-white">po sesji</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
