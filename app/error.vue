<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'
    import { findPageHeadline } from '@nuxt/content/utils'
    import type { NuxtError } from '#app'

    definePageMeta({
        title: 'Error',
        description: "Ah crap.",
        layout: 'docs-tech'
    })

    defineProps<{
        error: NuxtError
    }>()

    useHead({
        htmlAttrs: {
            lang: 'en'
        }
    })

    const route = useRoute()
    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')


const headline = computed(() => findPageHeadline(navigation, route.path))


</script>

<template>
  <UApp>
    <AppHeader />
        <UPageHeader
            :title="route.title"
            :description="route.description"
            :headline="headline"
        />
    <UMain   class="mx-2 md:mx-8 rounded-md">
      <NuxtLayout>

        <!-- Title -->
        <h1 class="pt-6 pb-4  text-4xl font-extrabold text-center text-(--ui-secondary)">
            {{ title }}
        </h1>

        <!-- Description -->
        <p class="mt-4 mb-0 pb-0 pl-4">
            {{ description }}
        </p>

        <hr class="mt-2 -ml-1 -mr-1  pt-0 ab-hr">

        <UError :error="error" />

      </NuxtLayout>
    </UMain>

    <AppFooter />

  </UApp>
</template>
