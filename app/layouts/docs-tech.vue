<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'

    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

    const navigationWithoutApex = computed(() =>
        navigation.value?.[0]?.children?.map(item => ({
            ...item,
        })) ?? []
    )

</script>

<template>
    <UContainer class="mx-0 my-0 px-0 py-0 sm:py-0">

        <UPage>
            <template #left  class="mx-0 px-0">
                <UPageAside class=" mx-0 px-0">
                    <NaviMenu />
                </UPageAside>
            </template>

            <slot />

        </UPage>

    </UContainer>
</template>
