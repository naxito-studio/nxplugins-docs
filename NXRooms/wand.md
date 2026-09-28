# The Wand System

NXRooms rooms are built with a **3-stage physical wand** instead of typed coordinates. This page explains exactly how each stage works.

---

## Getting the wand

Run `/nxrooms wand` (requires `nxrooms.admin.wand`). You receive an unbreakable **"Room Selector"** item that starts as a **Golden Axe** — Stage 1.

The wand's lore updates live as you use it, always telling you what to click next.

---

## Stage 1 — Region selection (Golden Axe)

This defines the room's outer boundary: the cuboid that will contain the whole arena.

| Click | Action |
|---|---|
| Left click a block | Sets point 1 of the region. |
| Right click a block | Sets point 2 of the region. |

Any shape is accepted as long as the two points are not the exact same block — flat platforms, 1-block-wide corridors and full 3D boxes all work. Once both points are set and valid, the wand automatically upgrades to a **Diamond Axe** and moves to Stage 2.

---

## Stage 2 — Crystal opening selection (Diamond Axe)

This defines the **entrance**: a smaller area, inside or on the edge of the room, that gets sealed with a barrier block once the room fills up.

| Click | Action |
|---|---|
| Left click a block | Sets point 1 of the crystal opening. |
| Right click a block | Sets point 2 of the crystal opening. |

The crystal opening must fall within the room's region bounds (expanded by 1 block, so you can click the outer face of a border block). If it doesn't, you'll get an error and need to re-select it. Once both points are valid, the wand upgrades to a **Netherite Axe** — selection complete.

---

## Stage 3 — Confirming the room (Netherite Axe)

At this point clicking with the wand does nothing further; its lore simply shows the command to run:

```
/nxrooms create <name> <mode>
```

Running that command finalizes the room, creates its WorldGuard region, and — importantly — **automatically resets your wand back to Stage 1 (Golden Axe)**, so you can immediately start selecting the next room without running `/nxrooms wand` again.

---

## Visual feedback

Every click spawns a small burst of colored particles at the clicked block:

| Selection state | Particle color |
|---|---|
| Stage 1 (region) | Gold |
| Stage 2 (crystal opening) | Aqua |
| Completed | Aqua |

---

## Full flow at a glance

```
/nxrooms wand
    └─► Golden Axe (Stage 1)
            │  left click  → point 1
            │  right click → point 2
            └─► Diamond Axe (Stage 2)
                    │  left click  → crystal point 1
                    │  right click → crystal point 2
                    └─► Netherite Axe (Stage 3 — complete)
                            │  /nxrooms create <name> <mode>
                            └─► Room created, wand resets to Golden Axe
```

---

## Common errors

| Message | Cause |
|---|---|
| Invalid region coordinates | Both region points landed on the exact same block. |
| Crystal opening must be inside the room region | The crystal points fall outside the room's bounds. |
| Point must be in same world | The two region points are in different worlds (not currently supported). |
