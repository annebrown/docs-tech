---
title: Formatters
description: VSCode FormatterslastModified: '2025-03-11'
---

## Prettier

Add to app dev deps:

```bash
pnpm add -D prettier
```

To prevent the `Prettier - Code Formatter` extension from adding unwanted line feeds to CSS curly bracket delimeters, create `.prettierrc` with:

```json
{
  "bracketSpacing": false
}
```
