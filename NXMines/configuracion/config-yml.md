# Configuration — config.yml

The `config.yml` file is generated automatically at `plugins/NXMines/config.yml` the first time the server starts with the plugin. To apply changes use `/mine reload` or restart the server.

---

## Full file with comments

```yaml
# ============================================================
#  NXMines — Main Configuration
# ============================================================

# Language of the messages. Options: "es" (Español), "en" (English)
# Loads the file: plugins/NXMines/lang/messages-<messages>.yml
messages: "es"

# -----------------------------------------------------------------
# Database
# -----------------------------------------------------------------
database:
  # SQLITE | MYSQL | MARIADB
  type: SQLITE

  sqlite:
    file: "nxmines.db"

  mysql:
    host: localhost
    port: 3306
    database: nxmines
    username: root
    password: ""
    useSSL: false
    pool:
      maximum-pool-size: 10
      minimum-idle: 2
      connection-timeout: 5000
      idle-timeout: 600000
      max-lifetime: 1800000

# -----------------------------------------------------------------
# Performance
# -----------------------------------------------------------------
performance:
  # Blocks placed per tick during a batched reset.
  # Higher = faster reset, bigger impact on TPS.
  blocks-per-tick: 5000

  # Mines with a volume <= this value use InstantResetStrategy
  # (all blocks in a single tick, no batching overhead).
  instant-reset-threshold: 1000

  # Maximum number of mines loaded in memory at the same time.
  # 0 = no limit (loads all mines).
  max-loaded-mines: 0

# -----------------------------------------------------------------
# Mines
# -----------------------------------------------------------------
mines:
  # Allow mine regions to overlap each other.
  allow-region-overlap: false

  # Warn and ask for confirmation if the volume changes by more than
  # this fraction when redefining (0.5 = 50%).
  redefine-size-change-warning-threshold: 0.5

  # Default reset interval in seconds for new mines.
  default-reset-interval: 300

  # Whether messages should be broadcast when a mine resets.
  broadcast-reset-messages: true

  # Recipients of reset messages:
  #   GLOBAL  — all online players
  #   RADIUS  — players within broadcast-radius blocks
  #   MINE    — only players inside the mine's region
  #   NONE    — disable reset messages completely
  broadcast-mode: GLOBAL
  broadcast-radius: 100

  # Force a reset if the mine falls below this % of blocks.
  # 0 = disabled.
  auto-reset-percentage: 0

# -----------------------------------------------------------------
# Drops
# -----------------------------------------------------------------
drops:
  # How drops are delivered:
  #   INVENTORY — go straight to the player's inventory
  #   GROUND    — drop on the ground at the player's position
  mode: INVENTORY

  # If an auto-pickup plugin is active, INVENTORY is always used.
  force-inventory-with-autopickup: true

# -----------------------------------------------------------------
# Text formatting
# -----------------------------------------------------------------
text:
  # Date/time format for placeholders such as %mine_next_reset%.
  # Uses Java DateTimeFormatter patterns.
  datetime-format: "HH:mm:ss"

  # Format of the remaining time.
  # Tokens: {h} hours, {m} minutes, {s} seconds
  time-format: "{h}h {m}m {s}s"
```

---

## Section reference

### `messages`

| Key | Type | Description |
|---|---|---|
| `messages` | String (`"es"` / `"en"`) | Language of the messages. Loads the file `lang/messages-<value>.yml`. |

---

### `database`

| Key | Type | Description |
|---|---|---|
| `type` | String | Database engine: `SQLITE`, `MYSQL` or `MARIADB`. |
| `sqlite.file` | String | Name of the SQLite file inside `plugins/NXMines/`. |
| `mysql.host` | String | MySQL server host. |
| `mysql.port` | Integer | MySQL server port. |
| `mysql.database` | String | MySQL database name. |
| `mysql.username` | String | Database user. |
| `mysql.password` | String | Database password. |
| `mysql.pool.*` | Various | HikariCP connection pool parameters. |

> Changing the database type requires restarting the server. Data is **not** migrated automatically between SQLite and MySQL.

---

### `performance`

| Key | Type | Description |
|---|---|---|
| `blocks-per-tick` | Integer | Blocks placed per tick in `BatchResetStrategy`. Default value: `5000`. |
| `instant-reset-threshold` | Integer | Maximum volume (in blocks) to use `InstantResetStrategy`. Default value: `1000`. |
| `max-loaded-mines` | Integer | Limit of mines in memory. `0` = no limit. |

---

### `mines`

| Key | Type | Description |
|---|---|---|
| `allow-region-overlap` | Boolean | If `true`, mine regions can overlap. |
| `redefine-size-change-warning-threshold` | Double (0–1) | Volume change threshold that requires confirmation when redefining. |
| `default-reset-interval` | Integer | Reset interval in seconds for new mines. |
| `broadcast-reset-messages` | Boolean | If `true`, messages are broadcast when a mine resets. |
| `broadcast-mode` | String | `GLOBAL`, `RADIUS`, `MINE` or `NONE`. |
| `broadcast-radius` | Integer | Radius in blocks (only for `broadcast-mode: RADIUS`). |
| `auto-reset-percentage` | Integer (0–100) | Forces a reset if blocks fall below this %. `0` = disabled. |

---

### `drops`

| Key | Type | Description |
|---|---|---|
| `mode` | String | `INVENTORY` (straight to inventory) or `GROUND` (on the ground). |
| `force-inventory-with-autopickup` | Boolean | If there is auto-pickup, always uses `INVENTORY`. |

---

### `text`

| Key | Type | Description |
|---|---|---|
| `datetime-format` | String | Java `DateTimeFormatter` pattern for dates. |
| `time-format` | String | Format of the remaining time. Tokens: `{h}`, `{m}`, `{s}`. |
