<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'

    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')


</script>

<template>
    <UContainer class="mx-0 px-0">
        <UPage>
            <template #left>
                <UPageAside>
                    <UContentNavigation
                        highlight
                        :navigation="navigation"
                    />
                </UPageAside>
            </template>
            <slot />
        </UPage>
    </UContainer>
</template>
