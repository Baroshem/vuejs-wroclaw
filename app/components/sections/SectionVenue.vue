<script setup lang="ts">
const facts = [
  { k: 'Sala', v: 'Audytorium, poziom 1', sub: '180 miejsc, pełne nagłośnienie i streaming' },
  { k: 'Dojazd', v: 'Tram 1, 4, 10 — przystanek Uniwersytecka', sub: '8 minut pieszo od Rynku, przez most Słodowy' },
  { k: 'Parking', v: 'Parking podziemny Nowy Targ', sub: '~6 zł/h, 400 m od wejścia' },
  { k: 'Dostępność', v: 'Winda i wejście bez progów', sub: 'Napisz do nas, jeśli potrzebujesz wsparcia na miejscu' },
  { k: 'Po meetupie', v: 'Afterparty w Barbarze', sub: '10 minut spacerem, stolik od 21:00' }
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

    <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p class="mb-1.5 text-[22px] font-bold">
          Concordia Design
        </p>
        <p class="mb-7 font-display text-[13px] tracking-[0.04em] text-slate">
          Wyspa Słodowa 7, 50-266 Wrocław
        </p>

        <dl class="mb-7.5">
          <div
            v-for="fact in facts"
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
          <UiButton href="#">
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

      <div class="border-l-2 border-crimson bg-panel p-3.5">
        <div class="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Zrzut mapy okolicy Wyspy Słodowej"
            class="h-[320px] w-full object-cover"
          >
        </div>
        <div class="mt-3 flex justify-between gap-3 font-display text-[10px] tracking-[0.16em] text-slate-dim uppercase">
          <span>51.1128 N &bull; 17.0345 E</span>
          <span>Wyspa Słodowa</span>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
