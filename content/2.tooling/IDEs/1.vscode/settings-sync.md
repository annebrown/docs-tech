---
title: Settings Sync
description: Sync VSCODE ConfiglastModified: '2025-01-07'
---

Synced settings:

  - Extensions Settings
  - Keyboard Shortcuts
  - Profiles
  - User Settings
  - User Snippets
  - UI State
  - User Tags

::alert
Eliminate settings sync for Extensions if memory is precipitous.
::


::alert{type="warning" icon="i-heroicons-exclamation-triangle"}
This is a warning alert with a custom icon.
::

## Settings Files

Alphabetizing facilitates mods and reduces dups.  

  - User Settings: `~/.config/Code/User/settings.json`
  - User Snippets: `~/.config/Code/User/snippets`

## Using .dotfiles

To ease VSCode config for new dev envs, .dotfiles could be used instead of VSCode's built-in settings sync.

See [New Dev Env](../../../oses/linux/new-dev-env) and the [Dotfiles Project](https://github.com/annebrown/dotfiles).  

Move Settings Files to .dotfiles:

```bash
mv ~/.config/Code/User/settings.json ~/.dotfiles/code/.config/Code/User/settings.json
mv ~/.config/Code/User/snippets/ ~./dotfiles/code/.config/Code/User/snippets
```

Link to .dotfiles

```bash
cd ~/.dotfiles
stow code
```

Resulting Links:

| Link | Target |
| :--- | :----- |
| `~/.config/Code/User/settings.json` | `~/.dotfiles/code/.config/Code/User/settings.json` |
| `~/.config/Code/User/snippets/`     | `~./dotfiles/code/.config/Code/User/snippets/`      |
