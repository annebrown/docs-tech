<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContainer class="mx-0 px-0">
    <UPage>
      <template #left class="">
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="navigation"
          />
        </UPageAside>
      </template>

      <slot />

    <!-- Child Route Cards-->
    <div class="mt-4 mx-auto p-2 rounded-lg bg-(--ab-midships)">
        <ImmediateChildCards />
    </div>

    </UPage>
  </UContainer>
</template>
