---
title: WSL2
description: Windows Subsystem for Linux, Version 2
navigation: false
lastModified: '2025-01-08'
---

> Opinion: Not recommending Windows WLS2 for a dev env.  Stradling two OSes with incompatible file systems, using an IDE on one OS, to develop on another OS, plus maintaining two sets of user, app and system configs, etc, adds unnecessary levels of complexity.  Bare metal Linux, VM, container and/or cloud-based is easier to install and configure and offers superior flexibility and control over the entire dev to deploy cycle.

- [CLI](./wsl2-cli)
- [Desktop](desktop)

## SSH

```bash
$ DISPLAY=:0.0 SSH -y [hostname]
```

## Config

File: `/etc/wsl.conf`:

```ini
[boot]
systemd=true
[network]
generateHosts false
```

