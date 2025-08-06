---
title: Remote Access
description: Code Server
lastModified: '2025-01-07'
---

## Description

Access remote code via browser

## Dev Computer Setup

- Setup SSH server on dev computer
- Install VS Code Remote - SSH extension
- Install code-server deps

```bash
sudo apt install build-essential python3-dev
```

- Install nvm if new dev env:

```bash
sudo apt install npm // New dev envs
```

Install Node V20 for code-server:

```bash
nvm i 20
```

Switch current terminal session to V20:

```bash
nvm use 20
```

or make V20 default:

```bash
nvm alias default 20
```

- Install code-server:

```bash
curl -fsSL https://code-server.dev/install.sh | sh

```

- Start code-server either on boot:

```bash
sudo systemctl enable --now code-server@$USER
```

- or per project:

```bash
code-server
```
