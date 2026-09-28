# Permissions

NXRooms splits permissions into three groups: **admin** (room management), **use** (everyday player features) and **staff** (spectating). Admin permissions default to `op`; the basic `use` permissions default to `true` (granted to everyone) so regular players can open the GUI and check stats out of the box.

---

## Admin permissions

| Permission | Description | Default |
|---|---|---|
| `nxrooms.admin` | Grants every admin permission below. | `op` |
| `nxrooms.admin.create` | Create new rooms with `/nxrooms create`. | `op` |
| `nxrooms.admin.delete` | Delete rooms with `/nxrooms delete`. | `op` |
| `nxrooms.admin.wand` | Receive and use the room-selection wand. | `op` |
| `nxrooms.admin.forcestop` | Force-stop an active room. | `op` |
| `nxrooms.admin.reload` | Reload the plugin configuration. | `op` |

> `nxrooms.admin` is also required to edit a room's flags, potion effects, mode, crystal material and opening countdown from the GUI's room detail menu.

---

## Player permissions

| Permission | Description | Default |
|---|---|---|
| `nxrooms.use` | Base permission for basic features. | `true` |
| `nxrooms.use.gui` | Open the main rooms menu with `/nxrooms gui`. | `true` |
| `nxrooms.use.stats` | View player statistics with `/nxrooms stats`. | `true` |
| `nxrooms.use.top` | View the leaderboard with `/nxrooms top`. | `true` |
| `nxrooms.use.list` | List all rooms with `/nxrooms list`. | `true` |

---

## Staff permissions

| Permission | Description | Default |
|---|---|---|
| `nxrooms.staff.spectate.silent` | Spectate rooms silently (without appearing as an observer to the players inside). | `op` |

---

## Recommended hierarchy

```
nxrooms.admin                ← full room management
├── nxrooms.admin.create
├── nxrooms.admin.delete
├── nxrooms.admin.wand
├── nxrooms.admin.forcestop
└── nxrooms.admin.reload

nxrooms.use                  ← granted to everyone by default
├── nxrooms.use.gui
├── nxrooms.use.stats
├── nxrooms.use.top
└── nxrooms.use.list

nxrooms.staff.spectate.silent ← staff / moderators
```

---

## LuckPerms example

Give room-management access to a `builder` rank:

```bash
/lp group builder permission set nxrooms.admin true
```

Give silent spectating to a `staff` rank:

```bash
/lp group staff permission set nxrooms.staff.spectate.silent true
```

---

## Permission denied message

When a player lacks the required permission, they receive the message configured under `errors.no-permission` in the active language file. By default:

```
You don't have permission to use this command
```
