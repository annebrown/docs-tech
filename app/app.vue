<script setup lang="ts">
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

    const route = useRoute()
    const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docsTech'))
    const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docsTech'), {
        server: false
    })

    // Remove apex entry
    // const mappedNavigation = mapContentNavigation(navigation)
    // const naviTree = mappedNavigation.slice(1)

    provide('navigation', navigation)
    // provide('naviTree', naviTree)
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
