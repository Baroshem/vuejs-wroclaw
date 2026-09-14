<script setup lang="ts">
const facts = [
  { k: 'Miejsce', v: 'Klimatyczny pub eventowy', sub: 'kultura, wystąpienia i spotkania w sercu Wrocławia' },
  { k: 'Dojazd', v: 'Ścisłe centrum — Podwale', sub: 'ok. 10 minut pieszo od Rynku' },
  { k: 'Parking', v: 'Strefa płatnego parkowania', sub: 'w okolicy; wygodnie też komunikacją miejską' },
  { k: 'Po meetupie', v: 'Afterparty na miejscu', sub: 'rozmowy przy piwie do ok. 22:00' }
]
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
          Klub Wędrówki
        </p>
        <p class="mb-7 font-display text-[13px] tracking-[0.04em] text-slate">
          Podwale 37/38, 50-040 Wrocław
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
          <UiButton
            href="https://www.google.com/maps/search/?api=1&query=Klub+W%C4%99dr%C3%B3wki+Podwale+37%2F38+Wroc%C5%82aw"
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
            title="Mapa okolicy Klubu Wędrówki"
            src="https://www.openstreetmap.org/export/embed.html?bbox=17.0249%2C51.0992%2C17.0349%2C51.1092&layer=mapnik&marker=51.10419%2C17.02990"
            class="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
        <div class="mt-3 flex justify-between gap-3 font-display text-[10px] tracking-[0.16em] text-slate-dim uppercase">
          <span>51.1042 N &bull; 17.0299 E</span>
          <span>Podwale 37/38</span>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
