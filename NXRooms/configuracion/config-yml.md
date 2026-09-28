# Configuration — config.yml

The `config.yml` file is generated automatically at `plugins/NXRooms/config.yml` the first time the server starts with the plugin. To apply changes use `/nxrooms reload` or restart the server.

---

## Full file with comments

```yaml
# Active language: "en", "es" or "pt"
language: "en"

# Maximum players allowed per room, as a hard cap
maxPlayers: 10

# Whether PVP is allowed globally (rooms still have their own PVP flag)
pvp: true

# World where rooms are located
lobbyWorld: "world"

# Default block used to seal a room's entrance once it fills up
# (overridable per room from the GUI's Crystal Block menu)
resetCrystalMaterial: "GLASS"

# Materials used for each stage of the room-selection wand
wandMaterials:
  stage1: "IRON_AXE"
  stage2: "GOLDEN_AXE"
  stage3: "DIAMOND_AXE"

# Reserved for future schematic-based room creation
enableSchematics: false

# Reserved for a future betting system
enableBets: false

# Maximum spectators allowed per room (0 = unlimited)
maxSpectators: 0

# Whether to hide other players from the tab list while in a room
enableTablistHide: true

# Seconds a player must wait after combat before certain actions are allowed
cooldownAfterCombat: 60

# Seconds after taking damage that a player is still considered "in combat"
timeoutInCombat: 30

# Cooldown, in seconds, before a deleted room's name can be reused
deleteRoomCooldown: 30

# How often (in ticks) the room GUI refreshes its live data
guiUpdateInterval: 20

# Total players required to fill a room, per mode
playersPerTeam:
  1v1: 2
  2v2: 4
  3v3: 6

# What gets reset/cleared when a player enters a room
cleanOnJoin:
  items: true
  effects: true
  potions: true
  armor: true
  inventory: true
  experience: true
  gameMode: "SURVIVAL"

# Display name of the server, used in some messages/placeholders
serverName: "My Server"
```

---

## Section reference

| Key | Type | Description |
|---|---|---|
| `language` | String (`"en"` / `"es"` / `"pt"`) | Active language, loading `messages_<value>.yml`. |
| `maxPlayers` | Integer | Hard cap on players per room. |
| `pvp` | Boolean | Global PVP toggle (in addition to each room's own PVP flag). |
| `lobbyWorld` | String | World name where rooms are located. |
| `resetCrystalMaterial` | String (Bukkit `Material`) | Default entrance barrier material for newly created rooms. |
| `wandMaterials.stage1/2/3` | String (Bukkit `Material`) | Materials used for each wand stage. |
| `enableSchematics` | Boolean | Reserved for future schematic support. |
| `enableBets` | Boolean | Reserved for a future betting system. |
| `maxSpectators` | Integer | Maximum spectators per room. `0` = unlimited. |
| `enableTablistHide` | Boolean | Whether to hide other players from the tab list inside a room. |
| `cooldownAfterCombat` | Integer (seconds) | Post-combat cooldown duration. |
| `timeoutInCombat` | Integer (seconds) | How long a player is considered "in combat" after taking damage. |
| `deleteRoomCooldown` | Integer (seconds) | Cooldown before a deleted room's name can be reused. |
| `guiUpdateInterval` | Integer (ticks) | Refresh interval for live GUI data. |
| `playersPerTeam.<mode>` | Integer | Total players required to fill a room of that mode. |
| `cleanOnJoin.*` | Boolean / String | What to clear or reset on the player when they enter a room. |
| `serverName` | String | Display name used in some messages and placeholders. |

---

## Per-room settings that live outside config.yml

Not everything is global — some settings are stored **per room** in `rooms.yml` and are only editable through the GUI, not through `config.yml`:

- The room's **flags** (PVP, block break/place, etc.) — see [Room Flags & Effects](../flags.md).
- The room's **potion effects** and their levels.
- The room's **opening countdown**.
- The room's **crystal barrier material** (overrides `resetCrystalMaterial` for that room only).
- The room's **mode** (`1v1`, `2v2`, etc.).

These are intentionally kept out of `config.yml` since they're meant to be tuned per arena, in-game, without editing files or reloading the server.
