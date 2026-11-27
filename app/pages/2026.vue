<script setup lang="ts">
import { createEdition2026 } from '~/data/editions/2026'

const { t, locale } = useI18n()
const edition = computed(() => createEdition2026(t, locale.value))
</script>

<template>
  <EditionPage :edition="edition" />
</template>
