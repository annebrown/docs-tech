---
title: Setup
description: Setup Quartz SSG
lastModified: '2025-01-08'
---

Create a public GH repo (somerepo), omitting README and gitignore.

Clone Quartz repo:

```bash
gh repo clone https://github.com/jackyzha0/quartz.git somerepo
```

Initialize Quartz Server:

```bash
cd somerepo
pnpm i
npx quartz create
```

Dev Server:

```bash
npx quartz build --serve
```

Remove original remote repo link:

```bash
git remote rm origin
```

Provide new remote repo link for somerepo:

```bash
git remote add origin https://github.com/ghusername/somerepo.git
```
