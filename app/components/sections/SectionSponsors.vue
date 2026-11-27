<script setup lang="ts">
import type { Sponsor } from '~/data/editions/types'

defineProps<{
  title: string
  description: string
  mediaTitle: string
  mediaDescription: string
  main: Sponsor[]
  media: Sponsor[]
}>()

const { t } = useI18n()
</script>

<template>
  <SectionBand
    id="sponsors"
    deep
  >
    <SectionHeader
      class="mb-10"
      icon="i-lucide-handshake"
      :badge="t('sections.sponsors.badge')"
      :title="title"
      :description="description"
    />

    <PlaceholderCard
      v-if="!main.length && !media.length"
      :label="t('sections.sponsors.soon')"
    />

    <template v-else>
      <ul
        v-if="main.length"
        class="m-0 grid list-none gap-3 p-0 md:mx-auto md:max-w-[calc(50%-0.875rem)] md:gap-7"
      >
        <SponsorCard
          v-for="s in main"
          :key="s.name"
          v-bind="s"
        />
      </ul>

      <template v-if="media.length">
        <SectionHeader
          class="mb-10 mt-16"
          :title="mediaTitle"
          :description="mediaDescription"
        />

        <ul class="m-0 grid list-none gap-3 p-0 md:grid-cols-2 md:gap-7">
          <SponsorCard
            v-for="s in media"
            :key="s.name"
            v-bind="s"
          />
        </ul>
      </template>
    </template>
  </SectionBand>
</template>
