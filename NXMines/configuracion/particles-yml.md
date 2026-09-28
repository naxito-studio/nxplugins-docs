# Configuration — particles.yml

The `particles.yml` file controls the particles emitted during mine events: reset start, reset end and mine creation.

To apply changes run `/mine reload`.

---

## Full file with comments

```yaml
# ============================================================
#  NXMines — Particles
#  particle: name of the Bukkit Particle enum
#  count: number of particles to emit
#  offset-x/y/z: spread radius on each axis
#  extra: speed / extra value (depends on the particle type)
#  enabled: true/false
#
#  For REDSTONE dust particles:
#    color: "#RRGGBB"
#    dust-size: 1.0
# ============================================================

reset:
  start:
    enabled: true
    particle: HAPPY_VILLAGER
    count: 40
    offset-x: 1.0
    offset-y: 1.5
    offset-z: 1.0
    extra: 0.0

  complete:
    enabled: true
    particle: TOTEM_OF_UNDYING
    count: 60
    offset-x: 1.5
    offset-y: 2.0
    offset-z: 1.5
    extra: 0.0

mine:
  created:
    enabled: true
    particle: HAPPY_VILLAGER
    count: 30
    offset-x: 0.5
    offset-y: 0.5
    offset-z: 0.5
    extra: 0.0
```

---

## Event reference

| Section | Description |
|---|---|
| `reset.start` | Particles at the start of a mine reset. |
| `reset.complete` | Particles when a mine reset completes. |
| `mine.created` | Particles when a new mine is created. |

---

## Fields per event

| Field | Type | Description |
|---|---|---|
| `enabled` | Boolean | If `false`, particles for this event are disabled. |
| `particle` | String | Name of the Bukkit `Particle` enum (e.g. `HAPPY_VILLAGER`, `FLAME`, `REDSTONE`). |
| `count` | Integer | Number of particles to emit. |
| `offset-x` | Double | Spread radius on the X axis. |
| `offset-y` | Double | Spread radius on the Y axis. |
| `offset-z` | Double | Spread radius on the Z axis. |
| `extra` | Double | Extra particle speed (varies by type). |

---

## REDSTONE-type particles

For `REDSTONE` type particles you can add the following extra fields:

```yaml
reset:
  complete:
    enabled: true
    particle: REDSTONE
    count: 60
    offset-x: 1.5
    offset-y: 2.0
    offset-z: 1.5
    extra: 0.0
    color: "#FF4444"
    dust-size: 1.5
```

| Field | Type | Description |
|---|---|---|
| `color` | String (HEX) | Color of the REDSTONE particle in `#RRGGBB` format. |
| `dust-size` | Double | Size of the redstone dust. |

---

## Common particle examples

| Particle name | Description |
|---|---|
| `HAPPY_VILLAGER` | Bright green happy villager particles. |
| `TOTEM_OF_UNDYING` | Dramatic totem of undying effect. |
| `FLAME` | Small flames. |
| `HEART` | Hearts. |
| `CRIT` | Crits (golden stars). |
| `SPELL_WITCH` | Purple witch particles. |
| `EXPLOSION_NORMAL` | Small explosion. |
| `REDSTONE` | Redstone dust with configurable color. |

See the Bukkit documentation for the full list of particles available in your version.
