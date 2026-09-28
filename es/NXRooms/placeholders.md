# PlaceholderAPI

NXRooms expone un conjunto de placeholders de PlaceholderAPI para mostrar las estadísticas competitivas de un jugador en cualquier lugar donde se soporte PAPI: scoreboards, chat, hologramas, tab list, etc.

---

## Requisito

Necesitas tener **PlaceholderAPI** instalado en tu servidor. Está listado como dependencia blanda, así que NXRooms carga correctamente con o sin él, pero los placeholders solo se resuelven cuando PAPI está presente.

---

## Lista de placeholders

| Placeholder | Descripción |
|---|---|
| `%nxrooms_wins%` | El total de victorias del jugador. |
| `%nxrooms_losses%` | El total de derrotas del jugador. |
| `%nxrooms_winrate%` | El porcentaje de victorias del jugador. |
| `%nxrooms_elo%` | La calificación ELO actual del jugador. |
| `%nxrooms_rank_position%` | La posición del jugador en la tabla de clasificación. |
| `%nxrooms_current_room%` | El nombre de la sala en la que está el jugador actualmente, si hay alguna. |
| `%nxrooms_current_mode%` | El modo de la sala en la que está el jugador actualmente, si hay alguna. |
| `%nxrooms_ingame%` | `true` o `false` — si el jugador está actualmente en una partida activa. |

---

## Ejemplo de uso

```
&7ELO: &f%nxrooms_elo% &7| &7V/D: &a%nxrooms_wins%&7/&c%nxrooms_losses%
```

---

## Comandos relacionados

Puedes consultar las mismas estadísticas en el juego sin PlaceholderAPI usando:

```
/nxrooms stats [jugador]
/nxrooms top
```

Consulta [Comandos](comandos.md) para más detalles.
