<script setup lang="ts">
    import { findPageHeadline } from '@nuxt/content/utils'
    import type { ContentNavigationItem } from '@nuxt/content'

    definePageMeta({
        layout: 'docs-tech'
    })

    const route = useRoute()

    const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
    const { toc } = useAppConfig()

    const { data: page } = await useAsyncData(
        route.path,
        () => queryCollection('docsTech').path(route.path).first()
    )
    if (!page.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page not found',
            fatal: true })
    }

    const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
    return queryCollectionItemSurroundings('docsTech', route.path, {
        fields: ['title', 'description']
    })
    })

    // const headline = computed(() => findPageHeadline(navigation, route.path))

    // defineOgImageComponent('Docs-Tech', {
    // headline: headline.value
    // })
    const headline = "HEADLINE"

    const links = computed(() => {
    const links = []

    if (toc?.bottom?.edit) {
        links.push({
        icon: 'i-lucide-external-link',
        label: 'Edit this page',
        to: `${toc.bottom.edit}/${page?.value?.stem}.${page?.value?.extension}`,
        })
    }
        return [...links, ...(toc?.bottom?.links || [])].filter(Boolean)
    })
</script>

<template><div>

    <UPage v-if="page">

        <UPageHeader
            :title="page.title"
            :description="page.description"
            :links="page.links"
            :headline="headline"
            class="pt-8"
        />

        <UPageBody>

            <DebugObject v-if="0" :items="navigation" />

            <ContentRenderer v-if="page" :value="page" class="py-0 my-0"/>

            <!-- Child Route Cards-->
            <div class="w-full mx-auto mb-0 p-0 pt-8 px-2">
                <ImmediateChildCardsCollections />
            </div>

            <!-- <USeparator v-if="surround?.length" /> -->

            <UContentSurround :surround="surround" />

        </UPageBody>

        <!-- Star Gunnel -->
        <template v-if="page?.body?.toc?.links?.length" #right class="card-glass-narrow">
            <div class="">
                <!-- Page TOC -->
                <UContentToc
                    :title="toc?.title"
                    :links="page.body?.toc?.links"

                >
                    <!-- Links Under TOC -->
                    <template v-if="toc?.bottom" #bottom >
                        <div
                            class="hidden md:block space-y-6"
                            :class="{ '!mt-6': page.body?.toc?.links?.length }"
                        >
                            <USeparator
                                v-if="page.body?.toc?.links?.length"
                                type="solid"
                            />

                            <UPageLinks v-if="toc"
                                :title="toc.bottom.title"
                                :links="links"
                            />
                        </div>
                    </template>
                </UContentToc>
            </div>
        </template><!-- Star Gunnel -->

    </UPage>
</div></template>
