<script setup lang="ts">
    import { UPageFeature, UPageSection } from '#components'
    import type { ContentNavigationItem } from '@nuxt/content'
    import { findPageChildren } from '@nuxt/content/utils'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    // const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')


    // Get immediate children for the current route
    const immediateChildren = computed(() =>
        findPageChildren(navigation?.value, route.path)
    )
</script>

<template><div>
      <div
        v-if="immediateChildren"
        class=""
    >

        <!-- Debug -->
        <p v-if=0>HAS immediateChildren</p>

        <!-- <USeparator type="solid" class="pb-4"/> -->

        <div class="my-0 py-0 sm:py-0 lg:py-0 bg-(--ab-midships) rounded-md">
                <UPageSection
                    :ui="{
                        container: 'card-glass-link py-8 sm:py-8 lg:py-8 gap-2 sm:gap-4',
                        description: 'pb-4'
                    }"
                >
                    <div v-for="page in immediateChildren" :key="page.path">
                        <UPageFeature
                            :to="page.path"
                            :title="page.title"
                            :description="page.description"
                            class="card-glass-link h-16 m-0 p-0 px-4 text-center"
                        />
                    </div>
                </UPageSection>
        </div>
    </div>

</div></template>
