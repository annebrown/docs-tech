<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
const items = inject<Ref<ContentNavigationItem[]>>('navigation')

</script>

<template>
  <UContainer class="mx-0 px-0">
    <UPage>
      <template #left class="">
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="items"
          />
           <!-- <UTree v-if="items" :items="items" /> -->
        </UPageAside>
      </template>

      <slot />

    <!-- Child Route Cards-->
    <div class="w-full mx-auto p-0 px-2 rounded-lg bg-(--ab-midships)">
        <USeparator type="solid" color="secondary" class="pb-8"/>
        <ImmediateChildCards />
    </div>

    </UPage>
  </UContainer>
</template>
