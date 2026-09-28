# Room Flags & Effects

Every NXRooms room carries its own independent set of **flags** (on/off rules) and **potion effects**, both editable from the GUI without touching any file. This page documents what each one actually does under the hood.

---

## How flags are enforced

Flags are not WorldGuard flags — they are NXRooms' own per-room settings, checked directly by the plugin's event listeners whenever something happens at a location inside a room (or to a player standing in one). This means they work independently of whatever WorldGuard flags you may already have configured on the same region.

Two flags — **PVP** and **Entry** — are additionally mirrored onto the room's underlying WorldGuard region when it is created, as a baseline protection layer:

```
PVP           → ALLOW
BLOCK_BREAK   → DENY
BLOCK_PLACE   → DENY
MOB_SPAWNING  → DENY
ENTRY         → ALLOW
```

The in-GUI **Room Flags** menu then lets you override the effective in-room behavior for PVP, block breaking and block placing (among others) on top of this baseline.

---

## Full flag reference

| Flag key | GUI name | Default | What it does |
|---|---|---|---|
| `pvp` | PVP | `true` | Cancels player-vs-player damage (including from projectiles) inside the room when off. |
| `block-break` | Block Break | `false` | Cancels breaking any block that isn't a cobweb or wool. |
| `block-place` | Block Place | `false` | Cancels placing any block that isn't a cobweb or wool. |
| `mob-spawning` | Mob Spawning | `false` | Cancels creature spawns inside the room, except spawns with reason `CUSTOM`. |
| `keep-inventory` | Keep Inventory | `true` | On death inside the room, keeps the player's inventory and XP and clears drops; off restores normal death behavior. |
| `fall-damage` | Fall Damage | `true` | Cancels fall damage when off. |
| `hunger-drain` | Hunger Drain | `false` | Cancels food level decreases when off. |
| `fire-damage` | Fire Damage | `false` | Cancels damage from fire, fire ticks, lava and hot floors when off. |
| `explosion-damage` | Explosion Damage | `false` | Cancels damage from block and entity explosions when off. |
| `cobweb-place` | Cobweb Place | `true` | Governs placing cobwebs specifically, independent of the general Block Place flag. |
| `cobweb-break` | Cobweb Break | `true` | Governs breaking cobwebs specifically, independent of the general Block Break flag. |
| `wool-place` | Wool Place | `true` | Governs placing any wool-colored block specifically. |
| `wool-break` | Wool Break | `true` | Governs breaking any wool-colored block specifically. |
| `natural-regen` | Natural Regen | `true` | Cancels health regeneration from a satiated hunger bar when off (does not affect other regeneration sources, such as the Regeneration potion effect). |

> Flags are checked against whichever room a player or block location belongs to — either the room a player is registered as being "inside" (after physically walking through the entrance), or the room whose bounding box contains the event's location, whichever applies first.

---

## Potion effects reference

| Effect key | GUI name | Bukkit type | Icon |
|---|---|---|---|
| `speed` | Speed | `SPEED` | Sugar |
| `strength` | Strength | `INCREASE_DAMAGE` | Blaze Powder |
| `resistance` | Resistance | `DAMAGE_RESISTANCE` | Iron Chestplate |
| `jump_boost` | Jump Boost | `JUMP` | Rabbit's Foot |
| `regeneration` | Regeneration | `REGENERATION` | Glistering Melon Slice |
| `fire_resistance` | Fire Resistance | `FIRE_RESISTANCE` | Magma Cream |
| `invisibility` | Invisibility | `INVISIBILITY` | Fermented Spider Eye |
| `night_vision` | Night Vision | `NIGHT_VISION` | Golden Carrot |
| `haste` | Haste | `FAST_DIGGING` | Iron Pickaxe |

Levels run from 1 to 100 (internally amplifier 0–99). Enabled effects are re-applied with infinite duration and no particles/icon shown to the player, so they persist smoothly for the whole match and are automatically refreshed on respawn.

---

## Where these apply

- Flags and effects are attached to the **room itself**, not to a specific match — they persist across resets and are saved to `rooms.yml` immediately whenever changed.
- Cycling a room's **mode** (1v1 → 2v2 → …) from the GUI preserves all of its flags and effects; only the player-count requirement changes.
- Changing a room's **crystal block** material only affects the entrance barrier — it has no effect on flags or potion effects.
