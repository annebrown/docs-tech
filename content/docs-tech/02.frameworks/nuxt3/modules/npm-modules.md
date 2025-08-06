---
title: NPM Modules
description: Nuxt Custom Libs
lastModified: '2025-01-08'
---

## Description

Notes on creating, registering and importing NPM modules (standalone Vue 3 component libs) for use with Nuxt3 apps.

## Imports

Standalone Vue 3 components built with Vite, do not get auto-imported in Nuxt apps.

Unless explicitly imported, Nuxt components like `NuxtLink` should be replaced with equivalent HTML elements, if moving Nuxt components into Vue modules.

## SSR Considerations

If an external, imported module will use a fetched object, the object should be passed as a prop, when it becomes available during hydration, prior to calling the module, to avoid errors caused by `undefined` fetched objects being accessed during SSR.

## Framework Agnostic

A standalone Vue component module should be framework-agnostic.  Besides enhacing portability, this will ensure that Nuxt-specific features (like useRoute()), do not cause issues during SSR where a fetched opject may not be fully available at that point in the component's lifecycle.

## Register Module Locally

Bypass the NPM registry by registering the local module globally, making it available to all local projects:

```bash
cd /path/to/module-project-root
pnpm link
```

### Import Module

```bash
cd /path/to/app-project-root
pnpm link name-of-module-project
```

### TailwindCSS Class Paths

Add modules's assets to paths scanned by TailwindCSS.

`tailwind-config.ts`:

```bash
// tailwind.config.js in your Nuxt app
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',

  ...

    '/path-to-module/name-of-module/src/components/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Deprecate

```bash
npm deprecate old-module-name "This package has been renamed to 'my-new-module-name'. Please use the new package instead."
```

npm deprecate @annebrown.ca/vue3-fleet-pub "This package has been renamed to '@annebrown.ca/nuxt3-fleet-pub'. Please use the new package instead."
