---
title: queryCollectionNavigation
description: Collection Navi Tree
lastModified: '2025-01-08'
---

## Remove Apex entry

```Vue
<script setup lang="ts">
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const navigationWithoutApex = computed(() => navigation.value?.[0]?.children ?? [])
</script>

<template>
  <UContentNavigation
    highlight
    :navigation="navigationWithoutApex"
  />
</template>
```

## Request Additional Frontmatter

```ts
    const { data: navigation } = await useAsyncData(
        'navigation',
        () => queryCollectionNavigation('someCollectionName', ['description']))

```

## Programmatically Control  Expanded Items

```vue
<script setup lang='ts'>
    ...
    const expanded = ref([]) // No items expanded by default
</script>
<template>
    ...
    <UTree v-model:expanded="expanded" :items="items" />
<template>
```

## Map Navi for UI Components

Convert 'title' to 'label'

```vue
function mapTitlesToLabels(items) {
  return items.map(item => ({
    ...item,
    label: item.title,
    children: item.children ? mapTitlesToLabels(item.children) : undefined
  }))
}

const navigationWithoutApex = computed(() =>
  navigation.value?.[0]?.children
    ? mapTitlesToLabels(navigation.value[0].children)
    : []
)
```

```vue
function mapTitlesToLabels(items) {
  return items.map(item => ({
    ...item,
    label: item.title,
    children: item.children ? mapTitlesToLabels(item.children) : undefined
  }))
}

const navigationWithoutApex = computed(() =>
  navigation.value?.[0]?.children
    ? mapTitlesToLabels(navigation.value[0].children)
    : []
)
```

