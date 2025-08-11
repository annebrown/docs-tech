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

    const headline = computed(() => findPageHeadline(navigation, route.path))

    // defineOgImageComponent('Docs-Tech', {
    // headline: headline.value
    // })
    // const headline = "HEADLINE"

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
    <div class="">
    <div  class="">
    <UPage v-if="page"  class="lg:ml-8 pl-4 lg:pl-4 pr-4">

        <UPageHeader
            :title="page.title"
            :description="page.description"
            :links="page.links"
            :headline="headline"
            class="pt-8"
        />

        <UPageBody class="">

            <DebugObject v-if="0" :items="navigation" />

            <ContentRenderer v-if="page" :value="page" class=""/>

            <!-- Child Route Cards-->
            <div class="mb-0 pb-0">
                <ImmediateChildCardsCollections />
            </div>

            <!-- <USeparator v-if="surround?.length" /> -->

            <UContentSurround :surround="surround" class="m-0 p-0"/>

        </UPageBody>

        <!-- Star Gunnel -->
        <template v-if="page?.body?.toc?.links?.length" #right class="m-0 p-0">
            <div class="m-0 p-0">
                <!-- Page TOC -->
                <UContentToc
                    :title="toc?.title"
                    :links="page.body?.toc?.links"
                    class="w-fit card-glass-narrow bg-transparent dark:bg-transparent"
                >
                    <!-- Links Under TOC -->
                    <template v-if="toc?.bottom" #bottom  class="">
                        <div
                            class="block space-y-6"
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
    </div>
    </div>
</div></template>
