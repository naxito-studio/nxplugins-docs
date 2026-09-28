# GUI Usage

NXMines has several interconnected inventory menus. They all open from `/mine gui` or by clicking in the previous menu. Inventories do not allow moving or taking items; all clicks are cancelled except the defined actions.

---

## Main menu — mine list

Opens with `/mine gui`.

### Layout

```
┌─────────────────────────────────────────────┐
│  M  M  M  M  M  M  M  M  M   ← row 1       │
│  M  M  M  M  M  M  M  M  M   ← row 2       │
│  M  M  M  M  M  M  M  M  M   ← row 3       │
│  M  M  M  M  M  M  M  M  M   ← row 4       │
│  M  M  M  M  M  M  M  M  M   ← row 5       │
│  ←  .  .  .  ✖  .  .  .  →   ← row 6 nav   │
└─────────────────────────────────────────────┘

M  = mine item
←  = previous page (slot 45)
→  = next page (slot 53)
✖  = close (slot 49)
.  = filler (BLACK_STAINED_GLASS_PANE)
```

- Rows 1–5 (slots 0–44) show up to **45 mines** per page.
- If there are more mines than slots, the **→** arrow appears in slot 53.

### Mine item

Each mine is represented by an item (configurable material, `STONE` by default) with:

- **Name:** color prefix + the mine's name.
- **Lore:** world, region coordinates, remaining blocks, time until the next reset.

### Interaction

| Action | Result |
|---|---|
| Left click on a mine | Opens that mine's editor. |
| Right click on a mine | Opens the delete confirmation menu. |
| Click on `←` | Goes to the previous page. |
| Click on `→` | Goes to the next page. |
| Click on `✖` | Closes the inventory. |

---

## Mine editor

Opens when you left click a mine in the main menu.

### Layout (4 rows — 36 slots)

```
┌─────────────────────────────────────────────┐
│  .  .  .  .  .  .  .  .  .   ← row 1       │
│  .  DN P  RT BC D  I  RG .   ← row 2       │
│  .  .  .  .  .  .  .  .  .   ← row 3       │
│  .  .  .  .  ↩  .  .  .  .   ← row 4 nav   │
└─────────────────────────────────────────────┘

DN = Display Name (slot 10)   — NAME_TAG
P  = Mine Prefix (slot 11)    — PAPER
RT = Reset Interval (slot 12) — CLOCK
BC = Block Composition (slot 13) — GRASS_BLOCK
D  = Custom Drops (slot 14)   — CHEST
I  = GUI Icon Material (slot 15) — ITEM_FRAME
RG = Redefine Region (slot 16) — FILLED_MAP
↩  = Back to list (slot 31) — ARROW

Bottom row:
FR = Force Reset (slot 28)    — REDSTONE
DU = Duplicate (slot 30)      — BOOK
EX = Export (slot 32)         — ENDER_CHEST
DE = Delete (slot 34)         — BARRIER
```

### Editor buttons

| Button | Slot | Action |
|---|---|---|
| **Display Name** | 10 | Asks in chat for the mine's new visible name (accepts MiniMessage). |
| **Mine Prefix** | 11 | Asks in chat for the new prefix (accepts MiniMessage). |
| **Reset Interval** | 12 | Opens the reset interval menu. |
| **Block Composition** | 13 | Opens the block composition editor. |
| **Custom Drops** | 14 | Opens the drop tables editor. |
| **GUI Icon Material** | 15 | Asks in chat for the icon material used in the GUI. |
| **Redefine Region** | 16 | Applies your active WorldEdit selection as the new region. |
| **Force Reset** | 28 | Forces an immediate reset of the mine. |
| **Duplicate** | 30 | Creates a copy of the mine with the same composition and drops. |
| **Export** | 32 | Saves the mine's configuration to an external YAML. |
| **Delete** | 34 | Opens the confirmation menu to delete the mine. |
| **‹ Back** | 31 | Returns to the main mines menu. |

---

## Block composition editor

Opens from the **Block Composition** button in the editor.

### How it works

- Rows 1–5 show the blocks already assigned to the mine with their percentage.
- Drag a block from your inventory to an empty slot to add it.
- The summary item (slot 4) shows the total assigned percentage and the remaining available one.
- The total composition must add up to exactly **100%** in order to save.

### Interaction

| Action | Result |
|---|---|
| Drag a block to an empty slot | Adds the block to the composition. |
| Click on an existing block | Opens the percentage editor for that block. |
| Right click on a block | Removes that block from the composition. |
| Click on `Save` (slot 49) | Saves the composition if the total is 100%. |
| Click on `Cancel` (slot 53) | Cancels without saving. |

---

## Reset interval editor

Opens from the **Reset Interval** button in the editor.

It shows a row of predefined time options. Click the desired time to apply it to the mine.

---

## Drops editor

Opens from the **Custom Drops** button in the editor. See the [Drop System](drops.md) section for full details.

---

## Confirmation menu — delete mine

Opens when you right click a mine in the main menu, or from the **Delete** button in the editor.

| Button | Material | Action |
|---|---|---|
| Confirm Delete | LIME_STAINED_GLASS_PANE | Permanently deletes the mine and all its data. |
| Cancel | RED_STAINED_GLASS_PANE | Cancels and returns to the previous menu. |

> **Note:** Deleting a mine is **permanent** and irreversible. All its data (composition, drops, region) is erased from the database.

---

## Full navigation

```
/mine gui
    └─► Main menu (mine list)
            │  left click on mine
            └─► Mine editor
                    │  click Composition
                    └─► Composition editor
                    │  click Drops
                    └─► Drops editor
                    │  click Reset Interval
                    └─► Interval selector
                    │  click ‹ Back
                    └─► Main menu
            │  right click on mine
            └─► Delete confirmation
```
