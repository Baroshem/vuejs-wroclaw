<script setup lang="ts">
const speakers = [
  {
    name: 'Anna Kowalska',
    role: 'Senior Frontend Engineer @ NovaLabs',
    topic: 'Design systems in Vue',
    description: 'Jak zbudować spójny system komponentów, który przyspiesza współpracę i zmniejsza koszt utrzymania aplikacji.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Mateusz Nowak',
    role: 'Platform Engineer @ PixelForge',
    topic: 'Performance beyond render',
    description: 'Praktyczne techniki pomiaru i optymalizacji wydajności Vue, od SSR po selektywne ładowanie zasobów.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Karolina Wiśniewska',
    role: 'Lead Developer @ UI Craft',
    topic: 'From prototypes to production',
    description: 'Jak przejść od szybkich mocków do produkcyjnych, skalowalnych i bezpiecznych aplikacji Vue.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Piotr Zieliński',
    role: 'Developer Advocate @ DevFlow',
    topic: 'State management with clarity',
    description: 'Dobre wzorce organizacji stanu aplikacji oraz strategie utrwalania decyzji architektonicznych w zespole.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <section id="speakers" class="scroll-mt-24 py-20 md:py-24">
    <UContainer>
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <UBadge color="primary" variant="soft" class="mb-3 border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Speakers
          </UBadge>
          <h2 class="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Poznaj ekspertów
          </h2>
        </div>
        <p class="max-w-xl text-base leading-relaxed text-slate-300">
          Cztery inspirujące głosy z produkcyjnego doświadczenia — od design systems po performance i architekturę frontendu.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <UCard
          v-for="speaker in speakers"
          :key="speaker.name"
          class="group overflow-hidden border border-white/10 bg-slate-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(220,20,60,0.18)]"
        >
          <div class="relative overflow-hidden">
            <img :src="speaker.image" :alt="speaker.name" class="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0F172B] via-transparent to-transparent" />
          </div>

          <div class="space-y-4 p-5">
            <div class="space-y-2">
              <UBadge color="primary" variant="soft" class="border border-primary/40 bg-primary/10 text-primary">{{ speaker.topic }}</UBadge>
              <h3 class="text-2xl font-bold text-white">{{ speaker.name }}</h3>
              <p class="text-sm text-slate-300">{{ speaker.role }}</p>
            </div>
            <p class="text-sm leading-relaxed text-slate-400">
              {{ speaker.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
