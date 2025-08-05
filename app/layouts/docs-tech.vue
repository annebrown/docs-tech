<script setup lang="ts">
    import type { ContentNavigationItem } from '@nuxt/content'

    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')


</script>

<template>
  <UContainer class="mx-0 px-0">
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="navigation"
          />
        </UPageAside>
      </template>

            <slot />

            <!-- Child Route Cards-->
            <div class="w-full mx-auto p-0 px-2">
                <ImmediateChildCards />
            </div>

        </UPage>
    </UContainer>
</template>
