<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'
    const mdDocs = inject<Ref<ContentNavigationItem[]>>('mdDocs')
</script>

<template><div>
      <div
        v-if="mdDocs.length"
        class="flex flex-row items-center justify-center gap-4 flex-wrap mx-auto"
    >
        <!-- <p>HAS mdDocs</p> -->
        <div v-for="mdDoc in mdDocs"  :key="mdDoc.path" class="card-glass-link h-16 m-0 p-0 px-4 text-center">
            <!-- <li :key="mdDoc.path">
                <NuxtLink :to="mdDoc.path">{{ mdDoc.title }}</NuxtLink>
            </li> -->
            <ULink :to="mdDoc.path">
                <div class="align-middle p-2 pb-0">
                    <!-- Page Title -->
                    <div class="leading-5 m-0 text-center text-base font-bold text-(--ui-primary)">
                    {{ mdDoc.title }}
                    </div>
                    <!-- Page Description -->
                    <div class="m-0 leading-5 text-xs text-(--ui-text)">
                    {{ mdDoc.description }}
                    </div>
                </div>
            </ULink>
        </div>
    </div>
    <!-- <div
      v-if="immediateSubpages && immediateSubpages.length"
      class="flex flex-row items-center justify-center gap-4 flex-wrap mx-auto"
    >
      <div
        v-for="page in immediateSubpages"
        :key="page.path"
        class="card-glass-link h-16 m-0 p-0 px-4 text-center"
      >
        <ULink :to="page.path">
          <div class="align-middle p-2 pb-0">-->
            <!-- Page Title -->
            <!-- <div class="leading-5 m-0 text-center text-base font-bold text-(--ui-primary)">
              {{ page.title }}
            </div> -->
            <!-- Page Description -->
            <!-- <div class="m-0 leading-5 text-xs text-(--ui-text)">
              {{ page.description }}
            </div>
          </div>
        </ULink>
      </div>
    </div>
    <div v-else>Loading Sub-Topics...</div> -->
</div></template>
