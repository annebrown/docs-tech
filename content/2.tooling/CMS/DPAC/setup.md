---
title: Setup
description: DCAP Setup
lastModified: '2025-03-17'
---

## Install

The CMS app code can be loaded from a CDN, or installed and bundled with the app:

```bash
pnpm add decap-cms-app
```

## Config

### Nuxt and Next.js

Sample config file, `config.yml`, for Nuxt and Next.js frameworks:

```yml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images/uploads"
public_folder: "/uploads"

collections:
  - name: 'blog'
    label: 'Blog Posts'
    folder: 'content/blog'
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Featured Image', name: 'featured_image', widget: 'image' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

### Angular

For Angular apps, use the Nuxt/Next.js config, with `src/assets` as the `media_folder:` value.
