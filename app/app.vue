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

    const { data: navigation } = await useAsyncData(
        'navigation',
        () => queryCollectionNavigation('docsTech', ['description']))

    const { data: files } = useLazyAsyncData(
        'search',
        () => queryCollectionSearchSections('docsTech'),
        {
        server: false
        }
    )

    provide('navigation', navigation)
</script>

<template>
  <UApp class="bg-(--ab-water)">
    <NuxtLoadingIndicator />

    <AppHeader class="bg-(--ab-water)" />

    <UMain class="mb-0 rounded-lg bg-(--ab-ship)">

      <NuxtLayout class="mx-auto lg:pr-6 lg:pl-0">
        <NuxtPage class="" />
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
