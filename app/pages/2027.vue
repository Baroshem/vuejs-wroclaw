<script setup lang="ts">
import EditionPage from '~/components/EditionPage.vue'
import { createEdition2027 } from '~/data/editions/2027'

const { t } = useI18n()
const edition = computed(() => createEdition2027(t))
</script>

<template>
  <EditionPage :edition="edition" />
</template>
