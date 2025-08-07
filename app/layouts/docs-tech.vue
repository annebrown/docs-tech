<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'

    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
    // const navigationWithoutApex = computed(() => navigation.value?.[0]?.children ?? [])

    //Apex Removed, Topmost collapsed
    const navigationWithoutApex = computed(() =>
        navigation.value?.[0]?.children?.map(item => ({
            ...item,
            defaultOpen: false
        })) ?? []
    )
    // UTree
    // const navigationWithoutApex = computed(() =>
    //     navigation.value?.[0]?.children?.map(item => ({
    //         ...item,
    //         defaultExpanded: false
    //      })) ?? []
    // )
    // const expanded = ref([]) // No items expanded

// function mapTitlesToLabels(items) {
//   return items.map(item => ({
//     ...item,
//     label: item.title,
//     children: item.children ? mapTitlesToLabels(item.children) : undefined
//   }))
// }

// const navigationWithoutApex = computed(() =>
//   navigation.value?.[0]?.children
//     ? mapTitlesToLabels(navigation.value[0].children)
//     : []
// )



</script>

<template>
    <UContainer class="mx-0 my-0 px-0 py-0 sm:py-0">
        <UPage>
            <template #left  class="mx-0 px-0">
                <UPageAside class="mx-0 px-0">
                    <UContentNavigation
                        highlight
                        type="single"
                        defaultOpen=false
                        :navigation="navigationWithoutApex"
                         class="mx-0 px-0"
                    />
                </UPageAside>
            </template>
            <slot />
        </UPage>
    </UContainer>
</template>
