<script setup lang="ts">
import { mapContentNavigation } from '@nuxt/ui-pro/utils/content'


const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docsTech'))

// // Remove apex entry
// const items = computed(() => {
//   const mapped = mapContentNavigation(navigation.value)
//   return mapped.slice(1)
// })
const items = computed(() => mapContentNavigation(navigation.value))



const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docsTech'), {
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

provide('navigation', navigation)
provide('items', items)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader class="mx-2 md:mx-8" />

    <UMain   class="mx-2 md:mx-8 rounded-md">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
