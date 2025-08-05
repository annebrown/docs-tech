<script setup lang="ts">
    import type { DropdownMenuItem } from '@nuxt/ui'
    // const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
    const { header } = useAppConfig()
    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

</script>

<template><div>
    <UHeader
        :ui="{ center: 'flex-1' }"
        :to="header?.to || '/'"
        side="left"
        toggle-side="right"
        mode="slideover"
    >
        <template #title>
            <!-- Logo and Domain Name -->
            <div class="mt-10">

                <!-- Logo -->
                <ULink href='/'>
                    <Logo class="z-0 inline-block w-18 h-auto
                        m-0 p-1 pr-0"/>
                </ULink>

                <!-- Domain Name -->
                <div class='z-10 inline-block align-top pt-5 pl-0.25
                    text-[--accent-light] dark:text-[--accent-dark]'>

                    <ULink href='/'>
                        <span class="w-fit h-fit m-0 p-0
                            text-primary text-[12px]"
                        >
                            -<span class="text-(--ui-secondary)">tech</span>.annebrown.ca
                        </span>
                    </ULink>

                </div><!-- Domain Name -->

            </div><!-- Logo and Domain Name -->
        </template>

        <!-- Search Bar -->
        <UContentSearchButton :collapsed="false" class="w-full" />

        <!-- Right Header -->
        <template #right>

            <UContentSearchButton
                v-if="header?.search"
                class="relative lg:hidden text-primary"
            />

            <UColorModeButton class="text-primary" />


            <UButton
                v-for="(link, index) of header.links"
                :key="index"
                v-bind="{ color: 'neutral', variant: 'link', ...link }"
            />

            <!-- <UDropdownMenu v-model:open="open" :items="items" :ui="{ content: 'w-48' }">
                <UButton label="Open" color="neutral" variant="outline" icon="i-lucide-menu" />
            </UDropdownMenu> -->
            <!-- <UDropdownMenu
                orientation="vertical"
                :items="items"
                to="/docs-tech"
                variant="link"
            >
                <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
            </UDropdownMenu> -->


        </template>
        <template #body>
            <UContentNavigation
                highlight
                :navigation="navigation"
            />
        </template>
    </UHeader>
</div></template>
