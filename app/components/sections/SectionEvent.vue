<script setup lang="ts">
const agenda = [
  { time: '18:30', title: 'Powitanie i networking', description: 'Rozgrzewka, pierwsze rozmowy i integracja społeczności.' },
  { time: '19:00', title: 'Prezentacje', description: 'Cztery krótkie, praktyczne wystąpienia ekspertów.' },
  { time: '20:15', title: 'Q&A i dyskusja', description: 'Pytania od społeczności oraz live conversation.' },
  { time: '20:45', title: 'Afterparty', description: 'Kontynuacja rozmów i nawiązywanie nowych relacji.' }
]
</script>

<template>
  <section id="event-details" class="scroll-mt-24 pb-20 md:pb-24">
    <UContainer>
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <UBadge color="primary" variant="soft" class="mb-3 border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Event
          </UBadge>
          <h2 class="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Co czeka na uczestników?
          </h2>
        </div>
        <UButton
          label="Zobacz event na LinkedIn"
          to="https://www.linkedin.com/events/7287746621629587456/"
          target="_blank"
          color="primary"
          variant="outline"
          size="lg"
          trailing-icon="i-lucide-arrow-up-right"
          class="transition-transform duration-200 hover:-translate-y-0.5"
        />
      </div>

      <div class="grid gap-4 lg:grid-cols-4">
        <div v-for="item in agenda" :key="item.time" class="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5 transition hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_18px_50px_rgba(220,20,60,0.08)]">
          <p class="text-xs uppercase tracking-[0.25em] text-primary">{{ item.time }}</p>
          <h3 class="mt-4 text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ item.description }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
