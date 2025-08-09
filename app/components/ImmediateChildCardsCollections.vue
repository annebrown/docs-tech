<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { findPageChildren } from '@nuxt/content/utils'
    import type { ContentNavigationItem } from '@nuxt/content'

    const route = useRoute()
    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
    const navigationWithoutApex = computed(() =>
        navigation.value?.[0]?.children?.map(item => ({
            ...item,
        })) ?? []
    )
    const children = computed(() =>
    findPageChildren(navigationWithoutApex.value, route.path)
    )
    const childrenWithDescriptions = ref([])
    onMounted(async () => {
        // Fetch description for each child
        const results = await Promise.all(
            children.value.map(async (child) => {
                // Query the content for this child's path
                const page = await queryCollection('docsTech').path(child.path).first()
                return {
                    ...child,
                    description: page?.description // Add description from frontmatter
                }
            })
        )
        childrenWithDescriptions.value = results
    })

</script>

<template><div>

    <div v-if="0"><!-- DEBUG -->
        <p class="text-4xl text-error">
            CHILDREN - Current path: {{ route.path }}
        </p>
        <DebugObject :items="childrenWithDescriptions" />
        <p class="text-4xl text-error">
            NAVIGATION - Current path: {{ route.path }}
        </p>
        <DebugObject :items="navigation" />
    </div>

    <div
        v-if="childrenWithDescriptions && childrenWithDescriptions.length"
        class="flex flex-row items-center justify-center gap-4 flex-wrap mx-auto"
    >
        <div
            v-for="item in childrenWithDescriptions"
            :key="item.path"
            class="h-16 m-0 p-0 text-center"
        >

            <ULink :to="item.path">
                <div class="card-glass-link align-middle p-2 pb-0">

                    <!-- Page Title -->
                    <div class="leading-5 m-0 text-center text-base font-bold text-(--ui-primary)">
                        {{ item.title }}
                    </div>

                    <!-- Page Description -->
                    <div class="m-0 leading-5 text-xs text-(--ui-text)">
                        {{ item.description }}
                    </div>

                </div>
            </ULink>

        </div>
    </div>

    <div v-else>Loading Sub-Topics...</div>

</div></template>
