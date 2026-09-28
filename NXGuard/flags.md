# Flag System

NXGuard shows and lets you edit the WorldGuard flags registered on the server. This document explains how the three states work, which types of flags exist and which ones are editable from the GUI.

---

## The three states of a flag

WorldGuard works with flags that may or may not have an assigned value. NXGuard represents them with three visual states:

### NONE — Neutral (gray tint)

The flag has **no value assigned** in this region. WorldGuard will apply its default behavior for that flag, which may be inherited from a parent region or simply the plugin's default value.

> This is the initial state of all flags in a newly created region.

### ALLOW — Enabled (lime tint)

The flag has the value `ALLOW` (for `StateFlag`) or `true` (for `BooleanFlag`). It indicates that the associated behavior is **explicitly allowed** in the region.

### DENY — Disabled (red tint)

The flag has the value `DENY` (for `StateFlag`) or `false` (for `BooleanFlag`). It indicates that the associated behavior is **explicitly denied** in the region.

---

## Flag types in WorldGuard

WorldGuard registers different types of flags depending on the value they store:

| Type | Description | Editable in GUI |
|---|---|---|
| `StateFlag` | Accepts `ALLOW`, `DENY` or no value. The most common one. | ✅ Yes |
| `BooleanFlag` | Accepts `true` or `false`. | ✅ Yes |
| `StringFlag` | Stores free text (e.g. entry/exit messages). | ❌ No (requires a command) |
| `IntegerFlag` | Stores an integer number (e.g. healing amount). | ❌ No (requires a command) |
| `DoubleFlag` | Stores a decimal number. | ❌ No (requires a command) |
| `LocationFlag` | Stores coordinates. | ❌ No (requires a command) |
| `SetFlag` | Stores a set of values. | ❌ No (requires a command) |

`StringFlag`, `IntegerFlag`, etc. are shown in the GUI with their current state (their value is shown as text), but the click buttons are not available for them because their logic is not boolean. To modify them use the WorldGuard command:

```
/rg flag <region> <flag> <value>
```

---

## Common WorldGuard flags

These are some of the most used flags. All of them are `StateFlag`s and therefore editable from the GUI, except where noted:

| Flag | Description | Default state |
|---|---|---|
| `pvp` | Allows or denies combat between players. | DENY in `__global__` |
| `mob-spawning` | Allows or denies mob spawning. | ALLOW |
| `fire-spread` | Allows or denies fire spread. | ALLOW |
| `lava-fire` | Allows or denies lava causing fire. | ALLOW |
| `block-break` | Allows or denies breaking blocks. | ALLOW for members |
| `block-place` | Allows or denies placing blocks. | ALLOW for members |
| `use` | Allows or denies using chests, levers, etc. | ALLOW for members |
| `interact` | Allows or denies general interaction. | ALLOW for members |
| `chest-access` | Allows or denies access to chests specifically. | ALLOW for members |
| `creeper-explosion` | Allows or denies creeper explosions. | ALLOW |
| `tnt` | Allows or denies TNT explosions. | ALLOW |
| `vehicle-place` | Allows or denies placing vehicles (boats, minecarts). | ALLOW |
| `vehicle-destroy` | Allows or denies destroying vehicles. | ALLOW |
| `sleep` | Allows or denies sleeping in beds. | ALLOW |
| `greeting` | Message when entering the region (StringFlag, not editable in GUI). | No value |
| `farewell` | Message when leaving the region (StringFlag, not editable in GUI). | No value |
| `heal-amount` | Amount of hearts regenerated (IntegerFlag, not editable in GUI). | No value |
| `feed-amount` | Amount of food regenerated (IntegerFlag, not editable in GUI). | No value |

---

## How changes are saved

Every time you click an editable flag in the GUI, NXGuard:

1. Applies the new value to the region in memory through the WorldGuard API.
2. Calls `RegionManager.saveChanges()` to persist the changes to the world's regions file (normally `world/region/`).
3. Updates the item in the inventory to visually reflect the new state.

If `saveChanges()` throws an exception, a warning is logged in the console and the player is notified, but the in-memory value may have been applied anyway.

---

## The `__global__` region

WorldGuard has a special region called `__global__` that applies to the whole world. Its flags affect every area not covered by another region. NXGuard shows it in the GUI like any other region and lets you edit its flags the same way.

> Changing flags in `__global__` affects the whole world, not just one area. Use it with care.
