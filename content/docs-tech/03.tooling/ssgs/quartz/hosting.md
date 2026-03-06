---
title: Hosting
description: Hosting Quartz Repos
lastModified: '2025-01-08'
---

## Dev Server

### Configure Custom URL

In `package.json`, add script for local host, like:

```json
"serve": "npx quartz build --serve --host 192.168.5.55 --port 5555"
```

### Launch Server

```bash
npx quartz build --serve
```

## Production Server

Vercel is my host of choice for

### vercel.json

Create or append to `vercel.json`:

```json
{
  "cleanUrls": true
}
```

### Vercel Project Config

Configure New Vercel Server:

Framework Preset: `Other`
Root Directory: `./`
Build and Output Settings > Build Command: `npx quartz build`

### Custom Domain

Configure `baseUrl` in `quartz.config.ts`:

```ts
baseUrl: "subdomain.somesite.com"
```
