<script setup lang="ts">
    const route = useRoute()
    const currentPath = route.path
    const { data: allSubpages } = await useAsyncData(`subpages-${currentPath}`, () =>
        queryCollection('docsTech')
            .where('path', 'LIKE', `${currentPath}/%`)
            .where('path', '<>', currentPath)
            .all()
        )

    // Filter to get only immediate children
    const immediateSubpages = computed(() => {
        if (!allSubpages.value) return []
            return allSubpages.value.filter(page => {
                let relativePath = page.path.slice(currentPath.length)
                return !relativePath.slice(1).includes('/')
        })
    })
</script>

<template><div>
    <DebugObject v-if="0" :items="immediateSubpages" />

    <div
        v-if="immediateSubpages && immediateSubpages.length"
       class="flex flex-row items-center justify-center gap-4 flex-wrap mx-auto"
    >
        <div
            v-for="page in immediateSubpages"
            :key="page.path"
           class="card-glass-link h-16 m-0 p-0 text-center"
        >

            <ULink :to="page.path">
                <div class="align-middle p-2 pb-0">

                    <!-- Page Title -->
                    <div class="leading-5 m-0 text-center text-base font-bold text-(--ui-primary)">
                        {{ page.title }}
                        <!-- {{ page.title }}<span v-if="page.children.length > 0"> Home</span> -->
                    </div>

                    <!-- Page Description -->
                    <div class="m-0 leading-5 text-xs text-(--ui-text)">
                        {{ page.description }}
                    </div>

                </div>
            </ULink>

        </div>
    </div>

    <div v-else>Loading Sub-Topics...</div>

</div></template>
