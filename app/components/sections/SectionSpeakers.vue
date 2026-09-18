<script setup lang="ts">
const speakers = [
  {
    name: 'Prelegent',
    meta: '',
    talk: 'Temat wkrótce',
    desc: 'Szczegóły prelekcji ogłosimy wkrótce — obserwuj nasze kanały.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Prelegent',
    meta: '',
    talk: 'Temat wkrótce',
    desc: 'Szczegóły prelekcji ogłosimy wkrótce — obserwuj nasze kanały.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Prelegent',
    meta: '',
    talk: 'Temat wkrótce',
    desc: 'Szczegóły prelekcji ogłosimy wkrótce — obserwuj nasze kanały.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Prelegent',
    meta: '',
    talk: 'Temat wkrótce',
    desc: 'Szczegóły prelekcji ogłosimy wkrótce — obserwuj nasze kanały.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  }
]
</script>

<template>
  <SectionBand
    id="speakers"
    deep
    wide
  >
    <div class="mb-11">
      <UiBadge>
        <UIcon
          name="i-lucide-users"
          class="size-5"
        />
        Prelegenci
      </UiBadge>
      <h2 class="mt-3.5 font-display text-[26px] font-bold md:text-[34px]">
        Kto wystąpi
      </h2>
    </div>
    <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="s in speakers"
        :key="s.name"
        class="flex h-full flex-col rounded-xl border border-white/10 bg-panel p-8"
      >
        <div class="mb-5 flex h-20 items-center gap-5">
          <div class="size-20 shrink-0 rounded-full border border-white/15 p-0.5">
            <img
              :src="s.photo"
              :alt="s.name"
              class="size-full rounded-full object-cover"
            >
          </div>
          <div class="min-w-0">
            <p class="break-words font-display text-xl font-bold">
              {{ s.name }}
            </p>
            <p
              v-if="s.meta"
              class="mt-1 text-sm leading-relaxed tracking-[0.03em] text-slate"
            >
              {{ s.meta }}
            </p>
          </div>
        </div>

        <p class="text-xs uppercase tracking-[0.2em] text-slate-dim">
          Prelekcja
        </p>
        <p class="mt-1.5 mb-4 min-h-28 font-display text-xl font-bold">
          {{ s.talk }}
        </p>
        <p class="m-0 border-t border-white/8 pt-4 text-[15px] leading-[1.75] text-slate">
          {{ s.desc }}
        </p>
      </article>
    </div>
  </SectionBand>
</template>
