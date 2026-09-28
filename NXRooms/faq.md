# Frequently Asked Questions

---

## Installation and compatibility

**Do I need WorldGuard to run NXRooms?**

Yes. NXRooms uses WorldGuard to protect each room's region and to mirror baseline PVP/Entry/Block flags. Without it, room creation will not create a protection region, though the plugin itself will still load.

---

**Which Minecraft versions are supported?**

1.20.x through 1.21.x on Paper (recommended), with a Spigot fallback. Java 17 or 21 is required.

---

**Do I need WorldEdit or FAWE?**

They are optional soft-dependencies, listed for schematic-related features. The wand-based room selection itself does not require them — it works with Bukkit's own block interaction events.

---

## Creating rooms

**I ran `/nxrooms create` but nothing happened.**

Make sure your wand selection is fully complete — both the region (Stage 1) and the crystal opening (Stage 2) must be set, which upgrades the wand to a Netherite Axe. If the wand is still a Golden or Diamond Axe, the selection isn't finished yet.

---

**Can a room be any shape, or does it have to be a cube?**

Any shape is accepted, as long as the two region corners aren't the exact same block. Flat 1-block-tall platforms and thin corridors work just as well as full 3D boxes.

---

**I get "Crystal opening must be inside the room region".**

The two points you selected for the entrance must fall within the room's bounding box (expanded by 1 block so you can click the outer face of a wall). Re-run `/nxrooms wand` and reselect the entrance more carefully.

---

## Gameplay

**How does a player join a room?**

By physically walking through the entrance into the room's bounding box. There is no `/join` command — entry and exit are detected through movement and teleport events.

---

**What happens when the room fills up?**

The crystal material configured for that room (glass by default) is placed across the whole entrance area, sealing it, and the room's state switches to `ACTIVE`.

---

**What happens when players leave, one by one?**

When the room drops to exactly one remaining player, an opening countdown starts (configurable per room, from the room detail menu). If a second player enters before it finishes, the countdown is cancelled. When it reaches zero, the barrier is removed and the room reopens. If the last player also leaves, the barrier is removed immediately and the room resets to `READY`.

---

**Can spectators walk into an active room?**

No. Players in Spectator game mode are automatically teleported back outside the crystal barrier if they try to enter an active room.

---

## Configuration

**Can I change the plugin's language?**

Yes — either by setting `language: "en"` / `"es"` / `"pt"` in `config.yml` and running `/nxrooms reload`, or in-game by clicking the language book in the room list GUI (slot 45), which cycles through all three languages instantly.

---

**Does `/nxrooms reload` affect currently active rooms?**

It reloads configuration files and re-reads all room data from disk, so any unsaved in-memory changes made outside the normal GUI flow could be lost. Room flags, effects and settings changed through the GUI are saved immediately, so a reload right after using the GUI is safe.
