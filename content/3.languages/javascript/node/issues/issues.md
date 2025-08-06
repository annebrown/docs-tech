---
title: Node.js Install EACCESS Error
description: Permissions error installing Node.jslastModified: '2025-01-08'
---

## Status

SOLVED

## Error

```bash
nvm install 20
npm ERR! code EACCES
  ...
```

## Solution

```bash
sudo chown -R $(whoami) ~/.npm
```
