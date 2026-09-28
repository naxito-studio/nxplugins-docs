# Commands

The main command is `/guard`. It has two aliases: `/nxguard` and `/gregion`.

---

## Summary

| Command | Description | Required permission |
|---|---|---|
| `/guard` | Shows the help with all subcommands. | `nxguard.use` |
| `/guard gui` | Opens the regions GUI menu. | `nxguard.gui` |
| `/guard info <region>` | Shows information about a region in chat. | `nxguard.info` |
| `/guard reload` | Reloads the `config.yml` file without restarting. | `nxguard.reload` |

---

## Details of each subcommand

### `/guard`

With no arguments it shows the help menu configured in `messages.help` of `config.yml`.

```
[NXGuard] NXGuard — commands:
[NXGuard] /guard gui — regions menu
[NXGuard] /guard info <region> — information about a region
[NXGuard] /guard reload — reload configuration
```

---

### `/guard gui`

**Players only** (does not work from the console).

Opens the GUI inventory with the list of regions of the world the player is standing in. If the world has no regions registered in WorldGuard, it shows the `messages.no-regions` message and does not open the GUI.

**Flow:**
1. The player runs `/guard gui`.
2. The region list menu (paginated) opens.
3. They click a region to open its flag editor.
4. They edit the flags with left/right clicks.
5. They use the "Back" button to return to the list.

---

### `/guard info <region>`

**Players only** (does not work from the console).

Shows detailed information about the given region in the player's current world in chat. If the region does not exist, it shows the `messages.region-not-found` message.

**Example output:**

```
[NXGuard] Region spawn
[NXGuard] World: world
[NXGuard] Priority: 10
[NXGuard] Owners: (none)
[NXGuard] Members: (none)
[NXGuard] Active flags: 3
[NXGuard] Edit engine: WorldEdit
[NXGuard] Flags:
[NXGuard]   - pvp: deny
[NXGuard]   - mob-spawning: deny
[NXGuard]   - fire-spread: deny
```

The command has **tab-completion** for the region name — typing `/guard info sp` autocompletes with the regions of the world starting with `sp`.

---

### `/guard reload`

Reloads the `config.yml` file on the fly without restarting the server. Changes to titles, materials, messages and pagination settings apply immediately.

> GUIs that are open at that moment are **not** updated automatically. The player must close and reopen the GUI to see the changes.
