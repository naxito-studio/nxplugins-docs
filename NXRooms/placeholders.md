# PlaceholderAPI

NXRooms exposes a set of PlaceholderAPI placeholders for showing a player's competitive stats anywhere PAPI is supported: scoreboards, chat, holograms, tab lists, etc.

---

## Requirement

You need **PlaceholderAPI** installed on your server. It is listed as a soft-dependency, so NXRooms loads correctly with or without it, but the placeholders only resolve when PAPI is present.

---

## Placeholder list

| Placeholder | Description |
|---|---|
| `%nxrooms_wins%` | The player's total wins. |
| `%nxrooms_losses%` | The player's total losses. |
| `%nxrooms_winrate%` | The player's win rate. |
| `%nxrooms_elo%` | The player's current ELO rating. |
| `%nxrooms_rank_position%` | The player's position on the leaderboard. |
| `%nxrooms_current_room%` | The name of the room the player is currently in, if any. |
| `%nxrooms_current_mode%` | The mode of the room the player is currently in, if any. |
| `%nxrooms_ingame%` | `true` or `false` — whether the player is currently in an active match. |

---

## Usage example

```
&7ELO: &f%nxrooms_elo% &7| &7W/L: &a%nxrooms_wins%&7/&c%nxrooms_losses%
```

---

## Related commands

You can check the same statistics in-game without PlaceholderAPI using:

```
/nxrooms stats [player]
/nxrooms top
```

See [Commands](comandos.md) for details.
