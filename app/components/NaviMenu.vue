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
        <li><ULink to="/">Home</ULink></li>
        <li><ULink to="/about">About</ULink></li>
    </ul>

    <USeparator class="py-4" color="secondary"/>

    <!-- <p class="pb-4 font-extrabold text-sm">
        Tech Docs
    </p> -->

    <UContentNavigation v-if="navigationWithoutApex"
        highlight
        type="multiple"
        collapsed
        defaultOpen
        :navigation="navigationWithoutApex"
        class="mx-0 px-0"
    />
</div></template>
