---
title: SSH
description: Secure Shell
lastModified: '2025-01-08'
---

## Install

```bash
sudo apt install openssh-server
```

## Start Server

Enable and start SSH server:

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

## Status

```bash
sudo systemctl status ssh
```

## SSH Key

Generate new SSH key:

```bash
cd ~/.ssh
ssh-keygen -t ed25519 -C "devy"
```

Start ssh-agent:

```bash
eval "$(ssh-agent -s)"

```

Add key to ssh-agent:

```bash
ssh-add ~/.ssh/devy
```
