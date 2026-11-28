<script setup lang="ts">
import AgendaCard from '~/components/agenda/AgendaCard.vue'
import BonusSlotCard from '~/components/agenda/BonusSlotCard.vue'
import SectionBand from '~/components/layout/SectionBand.vue'
import SectionHeader from '~/components/layout/SectionHeader.vue'
import UiButton from '~/components/primitives/UiButton.vue'
import type { BonusSlot, Talk } from '~/data/editions/types'

const props = defineProps<{
  /** null = topic not announced yet; an empty list shows four ? slots */
  talks: (Talk | null)[]
  bonus?: BonusSlot
  schedule: string[]
  externalUrl?: string
}>()

const { t } = useI18n()

const slots = computed(() => props.talks.length ? props.talks : Array.from({ length: 4 }, () => null))
</script>

<template>
  <SectionBand
    id="agenda"
    wide
  >
    <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
      <SectionHeader
        icon="i-lucide-calendar-clock"
        :badge="t('sections.agenda.badge')"
        :title="t('sections.agenda.title')"
      />
      <UiButton
        v-if="externalUrl"
        variant="ghost"
        :href="externalUrl"
        external
      >
        {{ t('sections.agenda.linkedin') }}
      </UiButton>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
      <AgendaCard
        v-for="(talk, i) in slots"
        :key="talk?.title ?? `tbd-${i}`"
        :talk="talk"
      />
    </div>
    <BonusSlotCard
      v-if="bonus"
      class="mt-3 md:mt-6"
      :label="bonus.label"
      no-badge
      :title="bonus.title"
      :meta="bonus.meta"
      :sub="bonus.sub"
    />
    <div
      v-if="schedule.length"
      class="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4 md:mt-10 md:gap-x-6 md:pt-5"
    >
      <span
        v-for="c in schedule"
        :key="c"
        class="font-display text-[11px] tracking-[0.12em] text-white"
      >{{ c }}</span>
    </div>
  </SectionBand>
</template>
