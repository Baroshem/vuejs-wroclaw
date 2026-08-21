<script setup lang="ts">
const speakers = [
  {
    name: 'Anna Kowalska',
    role: 'Senior Frontend Engineer',
    guild: 'NovaLabs',
    talk: 'Design systems in Vue',
    desc: 'Jak zbudować spójny system komponentów, który przyspiesza współpracę i zmniejsza koszt utrzymania aplikacji.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Mateusz Nowak',
    role: 'Platform Engineer',
    guild: 'PixelForge',
    talk: 'Performance beyond render',
    desc: 'Praktyczne techniki pomiaru i optymalizacji wydajności Vue, od SSR po selektywne ładowanie zasobów.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Karolina Wiśniewska',
    role: 'Lead Developer',
    guild: 'UI Craft',
    talk: 'From prototypes to production',
    desc: 'Jak przejść od szybkich mocków do produkcyjnych, skalowalnych i bezpiecznych aplikacji Vue.',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Piotr Zieliński',
    role: 'Developer Advocate',
    guild: 'DevFlow',
    talk: 'State management with clarity',
    desc: 'Dobre wzorce organizacji stanu aplikacji oraz strategie utrwalania decyzji architektonicznych w zespole.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  }
]
</script>

<template>
  <SectionBand
    id="speakers"
    deep
  >
    <div class="mb-11">
      <UiBadge>Drużyna &bull; Prelegenci</UiBadge>
      <h2 class="mt-3.5 font-display text-[26px] font-bold md:text-[34px]">
        Kto wystąpi
      </h2>
    </div>

    <div class="grid gap-7 md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
      <article
        v-for="s in speakers"
        :key="s.name"
        class="bracket-frame bg-panel p-8"
      >
        <span class="bl" /><span class="br" />

        <div class="mb-5 flex items-center gap-5">
          <div class="size-20 shrink-0 border border-crimson/45 p-0.5">
            <img
              :src="s.photo"
              :alt="s.name"
              class="size-full object-cover"
            >
          </div>
          <div>
            <p class="font-display text-xl font-bold">
              {{ s.name }}
            </p>
            <p class="mt-1 text-sm leading-relaxed tracking-[0.03em] text-slate">
              Klasa: <b class="font-bold text-crimson-light">{{ s.role }}</b><br>Gildia: {{ s.guild }}
            </p>
          </div>
        </div>

        <p class="text-xs uppercase tracking-[0.2em] text-slate-dim">
          Quest
        </p>
        <p class="mt-1.5 mb-4 font-display text-xl font-bold">
          {{ s.talk }}
        </p>
        <p class="m-0 border-t border-dashed border-white/8 pt-4 text-[15px] leading-[1.75] text-slate">
          {{ s.desc }}
        </p>
      </article>
    </div>
  </SectionBand>
</template>
