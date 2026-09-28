# PlaceholderAPI

NXMines includes a PlaceholderAPI expansion that provides real-time information about each mine. Placeholders work in any PAPI-compatible plugin: scoreboards, chat, holograms, etc.

---

## Requirement

You must have **PlaceholderAPI** installed on your server. NXMines detects it automatically on startup. If you install it after the server is already running, do `/mine reload` or restart the server.

---

## Placeholder list

All placeholders follow the format `%nxmines_<type>_<mine_name>%`, where `<mine_name>` is the mine's internal name in lowercase.

| Placeholder | Description | Cache |
|---|---|---|
| `%nxmines_prefix_<mine>%` | The mine's prefix (rendered MiniMessage). | Static |
| `%nxmines_time_<mine>%` | Time remaining until the next reset (format configured in `config.yml`). | Dynamic |
| `%nxmines_blocks_<mine>%` | Number of blocks remaining in the mine. | Dynamic |
| `%nxmines_total_<mine>%` | Total number of blocks in the mine's region. | Static |
| `%nxmines_percentage_<mine>%` | Percentage of remaining blocks (2 decimals). | Dynamic |
| `%nxmines_world_<mine>%` | Name of the world where the mine is. | Static |
| `%nxmines_status_<mine>%` | Current status of the mine: `ACTIVE`, `RESETTING` or `DISABLED`. | Static |

> Placeholders marked **Dynamic** are recalculated on every request. **Static** ones are cached and only invalidated when the mine changes (name, region, prefix, etc.) or when `/mine reload` is run.

---

## Usage examples

### Time until reset

```
Next reset: %nxmines_time_spawn_mine%
```
Result: `Next reset: 0h 4m 32s`

### Block percentage

```
Spawn Mine: %nxmines_percentage_spawn_mine%%
```
Result: `Spawn Mine: 67.43%`

### Mine status

```
Status: %nxmines_status_spawn_mine%
```
Result: `Status: ACTIVE`

---

## Time format

The format of `%nxmines_time_<mine>%` is configured in `config.yml`:

```yaml
text:
  time-format: "{h}h {m}m {s}s"
```

Available tokens:

| Token | Description |
|---|---|
| `{h}` | Hours remaining |
| `{m}` | Minutes remaining |
| `{s}` | Seconds remaining |

If you only want minutes and seconds:
```yaml
time-format: "{m}m {s}s"
```
