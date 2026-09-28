# Commands

The main command is `/nxrooms`. It has one alias: `/rooms`.

---

## Summary

| Command | Description | Required permission |
|---|---|---|
| `/nxrooms wand` | Gives you the room-selection wand. | `nxrooms.admin.wand` |
| `/nxrooms create <name> <mode>` | Creates a room from your wand selection. | `nxrooms.admin.create` |
| `/nxrooms delete <name>` | Deletes an existing room. | `nxrooms.admin.delete` |
| `/nxrooms gui` | Opens the main rooms menu. | `nxrooms.use.gui` |
| `/nxrooms stats [player]` | Shows a player's statistics. | `nxrooms.use.stats` |
| `/nxrooms top` | Shows the leaderboard. | `nxrooms.use.top` |
| `/nxrooms reload` | Reloads the plugin configuration. | `nxrooms.admin.reload` |
| `/nxrooms forcestop <name>` | Force-stops an active room. | `nxrooms.admin.forcestop` |
| `/nxrooms list` | Lists all rooms. | `nxrooms.use.list` |
| `/nxrooms help` | Shows the command help. | `nxrooms.use` |

---

## Details of each subcommand

### `/nxrooms wand`

**Players only** (does not work from the console).

Hands you the **Room Selector** wand, which starts as a Golden Axe. It walks you through a 3-stage selection — see [The Wand System](wand.md) for the full flow.

---

### `/nxrooms create <name> <mode>`

Finalizes room creation once your wand selection is complete (both the region and the crystal opening have been marked). `<mode>` accepts `1v1`, `2v2`, `3v3`, or any other `NvM` combination such as `1v2` or `2v3`.

```
/nxrooms create arena1 1v1
```

If the name is already taken, or the wand selection is not finished, the command fails with an explanatory message and nothing is created.

---

### `/nxrooms delete <name>`

Permanently deletes a room: its WorldGuard region, its saved configuration and its flags. This cannot be undone.

```
/nxrooms delete arena1
```

---

### `/nxrooms gui`

**Players only** (does not work from the console).

Opens the main room list menu. See [GUI Usage](gui.md) for the full menu structure.

---

### `/nxrooms stats [player]`

Shows win/loss records, ELO rating and streaks for yourself, or for the given player.

```
/nxrooms stats
/nxrooms stats Steve
```

Tab-completion suggests the names of online players.

---

### `/nxrooms top`

Shows the server leaderboard, ranked by ELO.

---

### `/nxrooms reload`

Reloads `config.yml`, the active language file and all in-memory room data from disk.

---

### `/nxrooms forcestop <name>`

Immediately ends an active match in the given room, regardless of its current state.

```
/nxrooms forcestop arena1
```

---

### `/nxrooms list`

Lists every room currently configured on the server, along with its mode and state.

---

### `/nxrooms help`

Shows the list of available subcommands with a short description of each.
