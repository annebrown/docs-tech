<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'
    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

    //Apex Removed, Topmost collapsed
    const navigationWithoutApex = computed(() =>
        navigation.value?.[0]?.children?.map(item => ({
        ...item,
        })) ?? []
    )
</script>

<template><div>
    <DebugObject v-if="0" :items="navigationWithoutApex" />

    <ul class="font-extrabold text-md">
        <li><UIcon name="i-lucide-home" /> <ULink to="/">Home</ULink></li>
        <li><UIcon name="i-lucide-info" /> <ULink to="/about">About</ULink></li>
    </ul>

    <USeparator type="solid" class="pr-7 py-4" />

    <!-- <ul class="pb-2 font-extrabold text-md">
        <li><UIcon name="i-lucide-book-open" /> <ULink to="/docs-tech">Tech Docs</ULink></li>
    </ul> -->

    <UContentNavigation v-if="navigationWithoutApex"
        highlight
        type="multiple"
        collapsed
        defaultOpen
        :navigation="navigationWithoutApex"
        class="mx-0 px-0"
    />
</div></template>
