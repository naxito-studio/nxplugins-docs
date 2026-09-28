# Configuration — sounds.yml

The `sounds.yml` file controls the sounds played during mine events: reset start, reset end, mine creation, mine deletion and GUI actions.

To apply changes run `/mine reload`.

---

## Full file with comments

```yaml
# ============================================================
#  NXMines — Sounds
#  sound: name of the Bukkit Sound enum (see wiki.vg/Sounds)
#  volume: 0.0–1.0+ (affects the audible radius)
#  pitch: 0.5–2.0
#  enabled: true/false
# ============================================================

reset:
  start:
    enabled: true
    sound: BLOCK_BEACON_ACTIVATE
    volume: 1.0
    pitch: 1.0

  complete:
    enabled: true
    sound: BLOCK_BEACON_DEACTIVATE
    volume: 1.0
    pitch: 1.2

mine:
  created:
    enabled: true
    sound: ENTITY_PLAYER_LEVELUP
    volume: 1.0
    pitch: 1.0

  deleted:
    enabled: true
    sound: ENTITY_ITEM_BREAK
    volume: 1.0
    pitch: 0.8

gui:
  click:
    enabled: true
    sound: UI_BUTTON_CLICK
    volume: 0.5
    pitch: 1.0

  error:
    enabled: true
    sound: ENTITY_VILLAGER_NO
    volume: 0.8
    pitch: 1.0

  success:
    enabled: true
    sound: ENTITY_PLAYER_LEVELUP
    volume: 0.8
    pitch: 1.5
```

---

## Event reference

| Section | Description |
|---|---|
| `reset.start` | Sound when a mine reset begins. |
| `reset.complete` | Sound when a mine reset finishes. |
| `mine.created` | Sound when a new mine is created. |
| `mine.deleted` | Sound when a mine is deleted. |
| `gui.click` | Sound when clicking a GUI button. |
| `gui.error` | Sound when an error occurs in the GUI (e.g. invalid composition). |
| `gui.success` | Sound when a GUI action succeeds (e.g. saving the composition). |

---

## Fields per event

| Field | Type | Description |
|---|---|---|
| `enabled` | Boolean | If `false`, the sound for this event is disabled. |
| `sound` | String | Name of the Bukkit `Sound` enum. |
| `volume` | Double | Sound volume. Values above 1.0 increase the audible radius. |
| `pitch` | Double | Sound pitch (0.5 = low, 2.0 = high). |

---

## Common sound examples

| Sound name | Description |
|---|---|
| `BLOCK_BEACON_ACTIVATE` | Beacon activation (deep and smooth). |
| `BLOCK_BEACON_DEACTIVATE` | Beacon deactivation. |
| `ENTITY_PLAYER_LEVELUP` | Level up (cheerful). |
| `ENTITY_ITEM_BREAK` | Item breaking. |
| `UI_BUTTON_CLICK` | UI button click. |
| `ENTITY_VILLAGER_NO` | Villager grunt (rejection). |
| `BLOCK_ANVIL_USE` | Anvil use. |
| `ENTITY_ENDER_DRAGON_FLAP` | Ender dragon wings. |
| `BLOCK_NOTE_BLOCK_PLING` | Bright musical note. |

See the Bukkit documentation for the full list of sounds available in your version.
