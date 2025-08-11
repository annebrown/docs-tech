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
        class=" w-full mx-auto mb-8 pt-6 pb-4 px-2 flex flex-row items-center justify-center gap-4 flex-wrap rounded-lg bg-(--ab-ship)"
    >
        <div
            v-for="item in childrenWithDescriptions"
            :key="item.path"
            class="h-22 m-0 p-0 text-center"
        >
            <div class="card-glass-link align-middle p-2 pb-0">
                <ULink :to="item.path">

                    <!-- Page Title -->
                    <div class="leading-5 m-0 p-2 text-center text-base font-bold text-(--ui-primary)">
                        {{ item.title }}
                    </div>

                    <!-- Page Description -->
                    <div class="m-0 p-2 leading-5 text-xs text-(--ui-text)">
                        {{ item.description }}
                    </div>

                </ULink>
            </div>

        </div>
    </div>

</div></template>
