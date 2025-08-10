<script setup lang="ts">
    const title = 'About'
    const description = "Tech Notes"

    definePageMeta({
        title: title,
        description: description,
        layout: 'docs-tech'
    })

    const route = useRoute()



const headline = "Public Docs"


</script>

<template>
    <div class="card-glass-narrow">
        <!-- Title -->
        <h1 class="py-4 text-4xl font-extrabold text-center text-(--ui-secondary)">
            {{ title }}
        </h1>

        <!-- Description -->
        <p class="mt-4 mb-0 pb-4 pl-4">
            {{ description }}
        </p>
        <p class="mt-4 mb-0 pb-4 pl-4">
            annebrown@gmail.com
        </p>

        <!-- Logo -->
        <ULink to="/">
            <NuxtImg
                src="logo.svg"
                class="z-50 absolute top-60 right-24 w-22 h-auto"
            />
        </ULink>

        <!-- Horiz Line -->
        <hr class="-ml-1 -mr-1 pt-0 pb-4 ab-hr">

        <!-- Links -->
        <p class="mb-4 pl-4 text-sm">

            <ULink
                to="https://annebrown.ca/prod"
                class="inline-block m-0 -mt-3 p-0 pt-2"
            >
                Other Sites
            </ULink>

        </p><!-- Links -->

    </div>
</template>
