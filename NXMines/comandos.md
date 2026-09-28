# Commands

The main command is `/mine`. It has one alias: `/nxmines`.

---

## Summary

| Command | Description | Required permission |
|---|---|---|
| `/mine help` | Shows the list of available subcommands. | — |
| `/mine create <name>` | Creates a mine with your WorldEdit / FAWE selection. | `nxmines.create` |
| `/mine gui` | Opens the GUI menu with the list of all mines. | `nxmines.gui` |
| `/mine reset <name>` | Forces an immediate reset of a mine. | `nxmines.reset` |
| `/mine redefine <name> [confirm]` | Replaces a mine's region with your current selection. | `nxmines.redefine` |
| `/mine reload` | Reloads all configuration files without restarting. | `nxmines.reload` |
| `/mine convert <plugin> [mine\|all] [--dry-run]` | Imports mines from another plugin (CataMines or AxMines). | `nxmines.convert` |
| `/mine version` | Shows the plugin version and the hooks status. | `nxmines.version` |

---

## Details of each subcommand

### `/mine create <name>`

**Players only** (does not work from the console).

Creates a new mine using the active WorldEdit or FAWE selection as its region. The name must contain only letters, numbers, hyphens and underscores (maximum 64 characters).

**Flow:**
1. Select the area in WorldEdit with the wand (`//wand`) and set the two points.
2. Run `/mine create spawn_mine`.
3. The mine is created and its reset counter starts.
4. Access the GUI with `/mine gui` to configure composition and drops.

**Possible errors:**
- `Invalid name` — the name contains disallowed characters.
- `A mine with that name already exists` — use a different name.
- `You don't have an active selection` — make a WorldEdit selection first.
- `The region overlaps with another mine` — adjust the selection or enable `allow-region-overlap` in `config.yml`.

---

### `/mine gui`

**Players only** (does not work from the console).

Opens the main GUI menu with the list of all the server's mines. From here you can see each mine's status and access its editor.

---

### `/mine reset <name>`

Available from the console and for players.

Forces an immediate reset of the given mine, regardless of its timer. If the mine is already resetting, it shows an error message.

```
/mine reset spawn_mine
```

Tab-completion autocompletes with the names of existing mines.

---

### `/mine redefine <name> [confirm]`

**Players only** (does not work from the console).

Replaces the region of an existing mine with your active WorldEdit / FAWE selection. Composition, drops and the rest of the configuration are kept.

If the volume of the new region differs from the original by more than the configured threshold (`redefine-size-change-warning-threshold` in `config.yml`), a warning is shown and confirmation is required:

```
/mine redefine spawn_mine
# → Warning: the new region differs in size (500 → 2000 blocks).
#   Confirm with /mine redefine spawn_mine confirm

/mine redefine spawn_mine confirm
# → The region of mine spawn_mine has been updated.
```

---

### `/mine reload`

Available from the console and for players.

Hot-reloads all configuration files:
- `config.yml`
- `menus.yml`
- `particles.yml`
- `sounds.yml`
- `lang/messages-<language>.yml`

Changes to messages, menus and performance settings apply immediately. GUIs that are open must be closed and reopened to reflect the new values.

---

### `/mine convert <plugin> [mine|all] [--dry-run]`

Available from the console and for players.

Imports mines from another compatible mines plugin. The currently supported plugins are:

| `<plugin>` argument | Source |
|---|---|
| `catamines` | Imports from CataMines |
| `axmines` | Imports from AxMines |

**Examples:**

```bash
# Import all mines from CataMines
/mine convert catamines all

# Import only mine "A" from AxMines
/mine convert axmines A

# Simulation without applying changes (dry-run)
/mine convert catamines all --dry-run
```

> The `--dry-run` mode shows how many mines would be imported without making real changes. Useful for checking before running.

---

### `/mine version`

Shows information about the plugin, the server environment and the status of each hook:

```
 NXMines v1.0.0
 Author(s): Naxito's Studios

 Java: 17.0.9
 Server: git-Paper-388 / 1.20.4-R0.1-SNAPSHOT
 Database: SQLITE

 Plugin Hooks:
   WorldEdit/FAWE : ✔ WorldEdit 7.2.15
   PlaceholderAPI : ✔ 2.11.6
   Vault          : ✘ not found
   CataMines      : ✘ not found
   AxMines        : ✘ not found
```
