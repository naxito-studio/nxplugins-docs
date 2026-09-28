# GUI Usage

NXGuard has two main screens: the **regions menu** and the **flag editor**. Both are 54-slot inventories (6 rows × 9 columns).

---

## Regions menu

Opens with `/guard gui`.

### Layout

```
┌─────────────────────────────────────────────┐
│  R  R  R  R  R  R  R  R  R   ← row 1       │
│  R  R  R  R  R  R  R  R  R   ← row 2       │
│  R  R  R  R  R  R  R  R  R   ← row 3       │
│  R  R  R  R  R  R  R  R  R   ← row 4       │
│  R  R  R  R  R  R  R  R  R   ← row 5       │
│  ←  .  .  .  .  .  .  .  →   ← row 6 nav   │
└─────────────────────────────────────────────┘

R = region item
← = previous page button (slot 45)
→ = next page button (slot 53)
. = empty slots
```

- Rows 1-5 (slots 0-44) show up to **45 regions** per page, sorted alphabetically and case-insensitively.
- If there are more regions than slots, the **→** arrow appears in slot 53. If it is not the first page, **←** appears in slot 45.

### Region item

Each region is shown as a **WHITE_BANNER** (configurable) with:

- **Name:** the region ID in yellow.
- **Lore:**
  - World the region is in.
  - Region priority.
  - Number of flags with an assigned value and enabled (ALLOW).
  - Usage instruction.

### Interaction

| Action | Result |
|---|---|
| Left click on a region | Opens that region's flag editor. |
| Click on `←` | Goes to the previous page of regions. |
| Click on `→` | Goes to the next page of regions. |
| Click on any other slot | No effect. |

> It is not possible to take items out of the inventory or move them. All clicks are cancelled automatically.

---

## Flag editor

Opens when you click a region in the previous menu.

### Layout

```
┌─────────────────────────────────────────────┐
│  F  F  F  F  F  F  F  F  F   ← row 1       │
│  F  F  F  F  F  F  F  F  F   ← row 2       │
│  F  F  F  F  F  F  F  F  F   ← row 3       │
│  F  F  F  F  F  F  F  F  F   ← row 4       │
│  F  F  F  F  F  F  F  F  F   ← row 5       │
│  .  .  .  .  ←  .  .  .  →   ← row 6 nav   │
└─────────────────────────────────────────────┘

F = flag item
← = "Back to list" button (slot 49)
→ = "Next flags page" button (slot 53, only if there are more flags)
. = empty slots
```

- Rows 1-5 (slots 0-44) show up to **45 flags** per page, sorted alphabetically.
- If WorldGuard or WorldGuard Extra Flags have more than 45 registered flags, the **→** arrow appears in slot 53 to navigate to the next page.

### Flag item

Each flag is shown with a **color tint** depending on its state:

| Material | Color | State |
|---|---|---|
| `LIME_DYE` | Lime green | `ALLOW` — explicitly enabled |
| `RED_DYE` | Red | `DENY` — explicitly disabled |
| `GRAY_DYE` | Gray | `NONE` — no value set (uses WorldGuard's default) |

The **lore** of each flag is dynamic and shows:

1. The current state in colored text.
2. An empty separator line.
3. The click instructions **adapted to the current state**.

#### Lore examples

**Flag in NONE state (gray):**
```
State: Neutral (default)

Left click → enable (allow)
Right click → disable (deny)
```

**Flag in ALLOW state (lime):**
```
State: Enabled (allow)

Left click → disable (deny)
Right click → reset to neutral
```

**Flag in DENY state (red):**
```
State: Disabled (deny)

Left click → enable (allow)
Right click → reset to neutral
```

**Flag not editable from the GUI:**
```
State: Enabled (allow)

Not editable from the GUI
```

### Interaction

| Action | Current state | Result |
|---|---|---|
| Left click | NONE | → ALLOW |
| Left click | ALLOW | → DENY |
| Left click | DENY | → ALLOW |
| Right click | NONE | → DENY |
| Right click | ALLOW | → NONE |
| Right click | DENY | → NONE |
| Click on `←` (slot 49) | — | Returns to the regions menu on the page it was on. |
| Click on `→` (slot 53) | — | Goes to the next flags page. |

> Every time a flag is changed, the change is saved to disk immediately (`saveChanges()`) and the item slot is updated visually without closing the inventory.

---

## Full navigation

```
/guard gui
    └─► Regions menu (page 0)
            │  click on region
            └─► Flag editor (flagPage 0)
                    │  click → (slot 53)
                    └─► Flag editor (flagPage 1)
                            │  ...
                    │  click ← (slot 49)
                    └─► Regions menu (same list page)
```
