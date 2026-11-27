<script setup lang="ts">
import { edition2026 } from '~/data/editions/2026'

const { talks: agendaSlots, schedule: chips, externalUrl } = edition2026.agenda
const bonus = edition2026.agenda.bonus!
</script>

<template>
  <SectionBand
    id="agenda"
    wide
  >
    <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <UiBadge class="mb-4.5">
          <UIcon
            name="i-lucide-calendar-clock"
            class="size-5"
          />
          Agenda
        </UiBadge>
        <h2 class="font-display text-[26px] font-bold md:text-[34px]">
          Co czeka na uczestników?
        </h2>
      </div>
      <UiButton
        variant="ghost"
        :href="externalUrl"
        external
      >
        Zobacz na LinkedIn
      </UiButton>
    </div>

    <!-- md+: poziomy rząd kart "temat wkrótce" -->
    <div class="hidden md:block">
      <div class="grid grid-cols-4 gap-6">
        <template
          v-for="(talk, i) in agendaSlots"
          :key="talk?.title ?? `tbd-${i}`"
        >
          <div
            v-if="talk"
            class="relative flex pb-1.5 pr-1.5 before:absolute before:bottom-0 before:left-1.5 before:right-0 before:top-1.5 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55"
          >
            <div class="relative flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-panel px-4 py-8 text-center">
              <p class="m-0 font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim">
                Prelekcja
              </p>
              <p class="m-0 font-display text-lg font-bold leading-snug">
                {{ talk.title }}
              </p>
              <p class="m-0 text-sm text-slate">
                {{ talk.speaker }}
              </p>
            </div>
          </div>
          <div
            v-else
            class="relative flex pb-1.5 pr-1.5 before:absolute before:bottom-0 before:left-1.5 before:right-0 before:top-1.5 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55"
          >
            <div class="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-panel px-4 py-8">
              <QuestionMarkBadge class="relative z-1 size-14" />
              <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim">
                Temat wkrótce
              </p>
            </div>
          </div>
        </template>
      </div>
      <BonusSlotCard
        class="mt-6"
        :label="bonus.label"
        no-badge
        :title="bonus.title"
        :meta="bonus.meta"
        :sub="bonus.sub"
      />
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
        <span
          v-for="c in chips"
          :key="c"
          class="font-display text-[11px] tracking-[0.12em] text-white"
        >{{ c }}</span>
      </div>
    </div>

    <!-- mobile -->
    <div class="md:hidden">
      <div class="grid grid-cols-2 gap-3">
        <template
          v-for="(talk, i) in agendaSlots"
          :key="talk?.title ?? `tbd-${i}`"
        >
          <div
            v-if="talk"
            class="relative flex pb-1 pr-1 before:absolute before:bottom-0 before:left-1 before:right-0 before:top-1 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55"
          >
            <div class="relative flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-panel px-3 py-6 text-center">
              <p class="m-0 font-display text-[9px] uppercase tracking-[0.18em] text-slate-dim">
                Prelekcja
              </p>
              <p class="m-0 font-display text-sm font-bold leading-snug">
                {{ talk.title }}
              </p>
              <p class="m-0 text-xs text-slate">
                {{ talk.speaker }}
              </p>
            </div>
          </div>
          <div
            v-else
            class="relative flex pb-1 pr-1 before:absolute before:bottom-0 before:left-1 before:right-0 before:top-1 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55"
          >
            <div class="relative flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-panel px-4 py-6">
              <QuestionMarkBadge class="relative z-1 size-10" />
              <p class="m-0 text-center font-display text-[9px] uppercase tracking-[0.18em] text-slate-dim">
                Temat wkrótce
              </p>
            </div>
          </div>
        </template>
      </div>
      <BonusSlotCard
        class="mt-3"
        :label="bonus.label"
        no-badge
        :title="bonus.title"
        :meta="bonus.meta"
        :sub="bonus.sub"
      />
      <div class="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4">
        <span
          v-for="c in chips"
          :key="c"
          class="font-display text-[11px] tracking-[0.12em] text-white"
        >{{ c }}</span>
      </div>
    </div>
  </SectionBand>
</template>
