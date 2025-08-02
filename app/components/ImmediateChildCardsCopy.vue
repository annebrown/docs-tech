<template>
  <div>
    <div
      v-if="immediateSubpages && immediateSubpages.length"
      class="flex flex-row items-center justify-center gap-4 flex-wrap mx-auto"
    >
      <div
        v-for="page in immediateSubpages"
        :key="page.path"
        class="card-glass-link h-16 m-0 p-0 px-4 text-center"
      >
        <ULink :to="page.path">
          <div class="align-middle p-2 pb-0">
            <!-- Page Title -->
            <div class="leading-5 m-0 text-center text-base font-bold text-(--ui-primary)">
              {{ page.title }}
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
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: allSubpages } = await useAsyncData(`subpages-${route.path}`, () =>
  queryCollection('docsTech')
    .where('path', 'LIKE', `${route.path}/%`)
    .where('path', '<>', route.path)
    .all()
)

    // Filter to get only immediate children
    const immediateSubpages = computed(() => {
        if (!allSubpages.value) return []
        return allSubpages.value.filter(page => {
        const relativePath = page.path.slice(route.path.length)
        return !relativePath.slice(1).includes('/')
        })
    })
</script>
