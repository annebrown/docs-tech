<script setup lang="ts">
import type { NuxtError } from '#app'

    defineProps<{
        error: NuxtError
    }>()

    useHead({
        htmlAttrs: {
            lang: 'en'
        }
    })
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

</script>

<template>
  <UApp>
    <AppHeader />

    <h2>AH CRAP!</h2>
    <UError :error="error" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
