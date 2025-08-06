---
title: Content V2 to V3
description: Nuxt/content Module MigrationlastModified: '2025-01-08'
---

## Update Module

```bash
pnpm add @nuxt/content@^3
```

## Content Config

Create `@/content.config.ts`:

```ts
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

Remove sources from `nuxt.config.ts`, convert v2 sources to v3 collections and add to `content.config.ts`.

General @nuxt/content config remains in `nuxt.config.ts`.

## Sources - TODO

### /content

All files in the project's `@/content` folder are automatically parsed and included as sources by default, unless a `content.config.ts` is used.

If a `@/content.config.ts` file is present, use this configuration for the markdown files under `@/content/some-directory`:

```ts
collections: {

    // Project's /content/docs dir
    docs: defineCollection({
        type: 'page',
        source: 'docs/**/*.md', // @/content/docs/
    })
}
```

Since `@app/pages` has precedence over `@/content` for routes, `@/content/index.md` is ignored if `@/app/pages/index.vue`.

### Local External Folder

This v2 config in `nuxt.config.ts` for a local folder source:

```ts
sources: {
    docsLocal: {
        prefix: '/docs-local',
        driver: 'fs',
        base: resolve(__dirname, '/absolute/path/to/folder'),
    },
},
```

migrates to this v3 config for a local folder collection in `content.config.ts`:

```ts
collections: {
    docsLocal: defineCollection({
      type: 'page',
      source: {
        cwd: resolve('/absolute/path/to/folder'),
        include: '**',
        prefix: '/docs-local'
      }
    })
  }
```

### GitHub Repo

```ts
someRepo: defineCollection({
    type: 'page',
    source: {
        repository: 'https://github.com/annebrown/some-repo',
        include: '**',
        prefix: '/some-repo'
    }
})
```

## Content Query APIs

### queryContent

Replace `queryContent()` with `queryCollection()`

This from `/@pages/[...slug].ts`:

```ts
const { data: page } = await useAsyncData(route.path, () =>
        queryContent(route.path).findOne())
```

becomes this:

```ts
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)
```

This from `@@base/components/content/RouteDynamicImmediateChildCard`:

```ts
// Fetch immediate subpages of the current page
const { data: allSubpages } = await useAsyncData(`subpages-${currentPath}`, () =>
  queryContent(currentPath)
    .where({ _path: { $contains: currentPath }, _path: { $ne: currentPath } })
    .find()
)
```

becomes this:

```ts
const { data: allSubpages } = await useAsyncData(`subpages-${currentPath}`, () =>
  queryCollection('content')
    .where('path', 'LIKE', `${currentPath}/%`) // all sub-pages under current path
    .where('path', '<>', currentPath) // Exclude current page
    .all() // Fetch all matching files
)
```

`.path(path)` filters the specific path.

From `@@/base/conponents/content/ShowPageMeta`, this:

```ts
const { data: page } = await useAsyncData(`content-${path}`, () =>
  queryContent(path).findOne()
)
```

migrates to this:

```ts
const { data: page } = await useAsyncData(`content-${path}`, () =>
  queryCollection('content').path(path).first()
)
```

### fetchContentNavigation

Replace `fetchContentNavigation()` with `queryCollectionNavigation()`

In `@@/base/components/content/PortGunnel.vue`, this:

```ts
const { data: rawNavigation } = await useAsyncData('navigation', () => fetchContentNavigation())
```

becomes this:

```ts
const { data: rawNavigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
```

## Components

Replace the `<ContentDoc>` component with `<ContentRenderer>` and replace  `<ContentSlot>` with `<slot>`.

## Component Registration - TODO

Use `<ContentSomePathSomeContentModule />` instead of `<SomePathSomeContentModule />`.

## Deprecated APIs and Features

Remove `useContent`.  Instead, fetch page data using the collection-based API, then access ToC from returned page obj:

Replace this:

```ts
const { toc } = useContent()
```

with:

```ts
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
queryCollection('content').path(route.path).first()
)
const toc = page.value?.body?.toc
```

## Document-Driven Mode

Remove document-driven mode statement from `nuxt.config.ts`.

## Highlight

v2:

```ts
content: {
    highlight: {

        theme: {
            dark: 'github-dark',
            default: 'github-dark',
            light: 'github-light'
        },

        langs: [
            'console',
            'css',
            'diff',
            'properties',
            'go',
            'html',
            'ini',
            'java',
            'json',
            'js',
            'log',
            'md',
            'mdc',
            'mermaid',
            'perl',
            'regexp',
            'shell',
            'ts',
            'tsx',
            'vue',
            'yaml'
        ]
    } // highlight
}
```

v3

```ts
content: {
    build: {
        markdown: {
            highlight: {
                theme: {
                    default: 'github-light',
                    dark: 'github-dark'
                },
                langs: [
                    'console',
                    'css',
                    'diff',
                    'properties',
                    'go',
                    'html',
                    'ini',
                    'java',
                    'json',
                    'js',
                    'log',
                    'md',
                    'mdc',
                    'mermaid',
                    'perl',
                    'regexp',
                    'shell',
                    'ts',
                    'tsx',
                    'vue',
                    'yaml'
                ]
            } // highlight
        } // markdown
    } // build
} // content
```

## Run Dev Svr

```bash
rm -rf node_modules .nuxt pnpm-lock.yaml
pnpm store prune
pnpm i
pnpm dev
```
