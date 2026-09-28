# GUI Usage

NXRooms has three connected menus, all 54-slot inventories: the **room list**, the **room detail editor**, and two sub-editors (**flags** and **potion effects**), plus a **crystal material** picker.

---

## Room list menu

Opens with `/nxrooms gui` (requires `nxrooms.use.gui`).

### Layout

Rooms are placed in a 4×7 inner grid (slots on rows 2–5, columns 2–8), leaving the outer border for navigation.

| Slot area | Contents |
|---|---|
| Rows 2–5, inner columns | Room items (up to 28 per view) |
| Slot 45 (bottom-left) | Language selector book |

### Room item

Each room is shown as a colored block depending on its state:

| State | Material | Meaning |
|---|---|---|
| READY | `LIME_STAINED_GLASS` | Empty and available. |
| WAITING | `GLOWSTONE` | Has players but is not yet full. |
| ACTIVE | `REDSTONE_BLOCK` | Full — a match is in progress. |

Its lore shows the mode (e.g. `1v1`), the minimum player count, and the current state. Clicking a room opens its detail editor.

### Language selector {#language-selector}

Slot 45 holds an **enchanted book** showing the three supported languages (English, Spanish, Portuguese), with the active one marked in green and the others in red. Clicking it cycles to the next language in order: `en → es → pt → en …`, closes the menu, and confirms the change in chat.

---

## Room detail menu

Opens by clicking a room in the list.

| Slot | Button | Action | Permission |
|---|---|---|---|
| 11 | ← Back | Returns to the room list. | — |
| 13 | Room info | Shows name, mode, state and world (display only). | — |
| 15 | Delete Room | Permanently deletes the room. | `nxrooms.admin.delete` |
| 27 | Opening Countdown | Left-click: +1s (Shift: +5s). Right-click: −1s (Shift: −5s). Range 0–120s. | `nxrooms.admin` |
| 29 | Potion Effects | Opens the potion effects editor. | — |
| 31 | Room Flags | Opens the flags editor. | — |
| 33 | Change Mode | Cycles `1v1 → 2v2 → 3v3 → 1v2 → 2v1 → …`. | `nxrooms.admin` |
| 35 | Crystal Block | Opens the crystal material picker. | `nxrooms.admin` |

> The **Opening Countdown** is how long the room waits, once only one player remains after a match, before automatically removing the crystal barrier and reopening the entrance.

---

## Room Flags menu

Opens from slot 31 of the room detail menu. Editing requires `nxrooms.admin`.

Fourteen flags are shown as toggleable items, each colored by its current on/off state. Clicking any of them toggles it instantly and saves the change:

| Flag | Default | Controls |
|---|---|---|
| PVP | On | Whether players can damage each other inside the room. |
| Block Break | Off | Breaking non-special blocks. |
| Block Place | Off | Placing non-special blocks. |
| Mob Spawning | Off | Natural or event-based mob spawns inside the room. |
| Keep Inventory | On | Whether dying inside the room keeps the player's items and XP. |
| Fall Damage | On | Whether fall damage applies inside the room. |
| Hunger Drain | Off | Whether food level can decrease inside the room. |
| Fire Damage | Off | Damage from fire, lava and hot surfaces. |
| Explosion Damage | Off | Damage from block/entity explosions. |
| Cobweb Place | On | Placing cobwebs specifically (separate from the general Block Place flag). |
| Cobweb Break | On | Breaking cobwebs specifically. |
| Wool Place | On | Placing any wool color specifically. |
| Wool Break | On | Breaking any wool color specifically. |
| Natural Regen | On | Whether health regenerates from a full hunger bar. |

---

## Potion Effects menu

Opens from slot 29 of the room detail menu. Editing requires `nxrooms.admin`.

Nine effects are available — Speed, Strength, Resistance, Jump Boost, Regeneration, Fire Resistance, Invisibility, Night Vision and Haste — each shown with its current level and on/off state.

| Action | Result |
|---|---|
| Left click (disabled) | Enables the effect at Level 1. |
| Left click (enabled) | Increases the level by 1 (Shift: by 10), up to Level 100. |
| Right click | Disables the effect and resets it to Level 1. |

Enabled effects are applied continuously (infinite duration) to every player while they remain inside the room, and removed the moment they leave.

---

## Crystal Block menu

Opens from slot 35 of the room detail menu. Editing requires `nxrooms.admin`.

A grid of over 20 materials — every stained glass color, glass, cobweb, ice variants and barrier, plus a transparent "None" option (internally `AIR`) — lets you pick what fills the entrance once the room becomes full. The currently selected material is highlighted in green.

---

## Full navigation

```
/nxrooms gui
    └─► Room List
            │  click a room
            └─► Room Detail
                    │  click Room Flags
                    └─► Flags Editor  ──(Back)──► Room Detail
                    │  click Potion Effects
                    └─► Effects Editor ──(Back)──► Room Detail
                    │  click Crystal Block
                    └─► Crystal Picker ──(Back)──► Room Detail
                    │  click ← Back
                    └─► Room List
```
