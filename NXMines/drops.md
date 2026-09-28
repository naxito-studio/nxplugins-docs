# Drop System

NXMines lets you define what players get when breaking blocks inside a mine. Each mine has a **per-block drop table**: you can configure different drops for diamond, iron, stone, etc.

---

## How does it work?

When a player breaks a block inside a mine:

1. NXMines identifies which type of block was broken.
2. It looks up that block's drop table for the mine.
3. It evaluates each drop entry according to its **probability** (0–100%).
4. It delivers the drops that pass the random roll.

The delivery mode is defined in `config.yml` (`drops.mode`): `INVENTORY` (straight to the inventory) or `GROUND` (drops on the ground). If an auto-pickup plugin is active, `INVENTORY` is always used.

---

## What each drop entry can do

A drop entry (`DropEntry`) can configure the following:

| Field | Description |
|---|---|
| **Material** | The item that is delivered (e.g. `DIAMOND`, `IRON_INGOT`). |
| **Amount** | Minimum–maximum range of units (e.g. 1–3). |
| **Probability** | Percentage from 0 to 100 that this drop is delivered. |
| **Custom name** | Item name (accepts MiniMessage / color). |
| **Custom lore** | Item description (accepts MiniMessage / color). |
| **Enchantments** | Enchantments with their level. |
| **Experience** | XP points granted to the player. |
| **Commands** | Commands executed when the drop is delivered. |
| **Messages** | Messages sent to the player when they get the drop. |

---

## Commands in drops

The `commands` field of each drop supports two prefixes:

| Prefix | Executor |
|---|---|
| `{console:<cmd>}` | The command is executed by the server console. |
| `{player:<cmd>}` | The command is executed by the player. |

**Examples:**
```
{console:give %player% diamond 1}
{player:say I found a diamond!}
```

The `%player%` placeholder is replaced with the name of the player who broke the block.

---

## Drops editor (GUI)

Access it from the **Custom Drops** button in the mine editor.

### Drops menu layout (4 rows)

```
┌─────────────────────────────────────────────┐
│  D  D  D  D  D  D  D  D  D   ← rows 1-2    │
│  (drop entries)                              │
│  .  .  .  .  .  .  .  .  .   ← row 3       │
│  +  .  .  ✔  .  .  .  ↩  .   ← row 4 nav   │
└─────────────────────────────────────────────┘

+  = Add new drop (slot 27)   — EMERALD
✔  = Save table (slot 31)     — NETHER_STAR
↩  = Back to editor (slot 35) — ARROW
```

### Interaction

| Action | Result |
|---|---|
| Click on `+ Add Drop Rule` | Creates a new empty drop entry. |
| Click on an existing entry | Opens that drop's detail editor. |
| Click on `✔ Save Drop Table` | Saves all changes to the database. |
| Click on `‹ Back to Editor` | Returns to the mine editor without saving. |

---

## Persistence

Every time a drop table is saved from the GUI:

1. All entries are written to the database (SQLite or MySQL).
2. Changes apply immediately to newly broken blocks.

> Blocks that already dropped before saving are not affected retroactively.
