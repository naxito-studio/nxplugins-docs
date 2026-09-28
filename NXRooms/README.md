<div align="center">
  <img src="/nxrooms.png" alt="NXRooms Logo" width="200"/>
</div>

# NXRooms

**NXRooms** is a competitive PvP rooms plugin for Minecraft, built for arena-style 1v1, 2v2 and 3v3 battles. It uses a physical, wand-based room creation system: no coordinates typed by hand, no complicated setup — you point, click, and the room is ready.

---

## What is it for?

If your server wants dedicated PvP arenas where players fight in enclosed, glass-walled rooms — with spectators watching from outside, automatic team assignment, and full inventory/state restoration when the match ends — NXRooms gives you the whole system out of the box.

---

## What can you do with NXRooms?

- Create rooms with a **3-stage wand** (region → entrance → confirm), no commands needed for the selection itself.
- Run **1v1, 2v2 and 3v3** matches, plus any other N vs M combination (`1v2`, `2v3`, etc.).
- Let players **physically walk into** a room's entrance to join — no `/join` command required.
- Watch matches through **glass walls** as a spectator, without affecting your own inventory.
- Automatically **save and restore** a player's inventory, effects, XP and game mode when they enter and leave a room.
- Toggle **per-room flags**: PVP, block break/place, mob spawning, fall/fire/explosion damage, cobweb and wool placement, natural regeneration, keep inventory.
- Apply **potion effects** (Speed, Strength, Resistance, Haste, etc.) automatically to everyone inside a room, with adjustable levels.
- Choose the **crystal barrier material** that seals the entrance once a room is full, from a menu of over 20 glass, ice and other block types.
- Cycle a room's **game mode** and adjust its **opening countdown** directly from the GUI.
- Switch the plugin's language between **English, Spanish and Portuguese** with a click, from an in-game book icon.

---

## Requirements

| Requirement | Notes |
|---|---|
| Minecraft Paper | Recommended. Spigot may work as a fallback. Versions 1.20.x to 1.21.x |
| Java | 17 or 21 |
| WorldGuard | Required — used to protect each room's region |
| WorldEdit / FastAsyncWorldEdit | Optional — only needed for schematic-based features |
| LuckPerms | Optional — for assigning permissions to ranks |
| PlaceholderAPI | Optional — enables `%nxrooms_*%` placeholders |
| Vault | Optional — economy integration |

---

## Guide contents

- [Installation](instalacion.md)
- [Commands](comandos.md)
- [Permissions](permisos.md)
- [The Wand System](wand.md)
- [GUI Usage](gui.md)
- [Room Flags & Effects](flags.md)
- [Configuration — config.yml](configuracion/config-yml.md)
- [PlaceholderAPI](placeholders.md)
- [FAQ](faq.md)
