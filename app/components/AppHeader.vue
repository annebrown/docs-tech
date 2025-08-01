<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="header?.to || '/'"
    class="border-none"
  >
    <UContentSearchButton
      v-if="header?.search"
      :collapsed="false"
      class="w-full"
    />

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0"
      />

      <span v-else-if="header?.title">

      </span>
    </template>

    <template

      #left
    >
    <!-- <NuxtLink
        :to="'/'"
        class="inline-block"
    >
        <span class="inline-block">
            <Logo class="w-12 my-auto" />
        </span>
        <span class="align-middle my-auto inline-block">
            {{ header.title }}
        </span>
    </NuxtLink> -->
     <!-- Logo and Domain Name -->
    <div class="mt-10">

        <!-- Logo -->
        <NuxtLink href='/'>
            <Logo class="z-0 inline-block w-18 h-auto
                m-0 p-1 pr-0"/>
        </NuxtLink>

        <!-- Domain Name -->
        <div class='z-10 inline-block align-top pt-5 pl-0.25
            text-[--accent-light] dark:text-[--accent-dark]'>

            <NuxtLink href='/'>
                <span class="w-fit h-fit m-0 p-0
                    text-primary text-[12px]"
                >
                    -<span class="text-(--ui-secondary)">tech</span>.annebrown.ca
                </span>
            </NuxtLink>

        </div><!-- Domain Name -->

    </div><!-- Logo and Domain Name -->

    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
