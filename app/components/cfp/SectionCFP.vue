<script setup lang="ts">
import D20Badge from '~/components/cfp/D20Badge.vue'
import SectionBand from '~/components/layout/SectionBand.vue'
import UiBadge from '~/components/primitives/UiBadge.vue'
import UiButton from '~/components/primitives/UiButton.vue'
import type { Step } from '~/data/editions/types'

defineProps<{
  formUrl?: string
  steps: Step[]
}>()

const { t } = useI18n()
</script>

<template>
  <SectionBand id="cfp">
    <div class="relative rounded-xl border border-white/10 bg-linear-to-br from-accent/10 to-panel to-55% p-7 md:p-12">
      <UiBadge class="mb-5">
        <UIcon
          name="i-lucide-mic"
          class="size-5"
        />
        Call for Papers
      </UiBadge>
      <h2 class="mb-3.5 font-display text-[28px] font-bold md:text-[40px]">
        {{ t('sections.cfp.title') }}
      </h2>
      <p class="mb-8 max-w-120 leading-[1.7] text-slate">
        {{ t('sections.cfp.description') }}
      </p>
      <UiButton
        :href="formUrl"
        :external="!!formUrl"
        :disabled="!formUrl"
        class="mb-11"
      >
        {{ formUrl ? t('sections.cfp.apply') : `${t('sections.cfp.apply')} · ${t('common.soon')}` }}
      </UiButton>

      <div class="grid md:grid-cols-3">
        <div
          v-for="(s, i) in steps"
          :key="s.title"
          class="relative z-1 px-0 py-4 md:px-4 md:py-0"
          :class="i < steps.length - 1
            ? 'md:after:absolute md:after:top-5.5 md:after:left-[calc(50%+29px)] md:after:right-[calc(-50%+29px)] md:after:h-px md:after:bg-white/15 md:after:content-[\'\']'
            : ''"
        >
          <D20Badge
            :value="i + 1"
            class="mx-auto mb-3.5"
          />
          <p class="mb-1.5 font-display text-[15px] font-bold text-white">
            {{ s.title }}
          </p>
          <p class="m-0 text-xs leading-relaxed text-slate">
            {{ s.desc }}
          </p>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
