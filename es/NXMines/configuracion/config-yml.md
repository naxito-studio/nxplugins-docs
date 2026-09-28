# Configuración — config.yml

El archivo `config.yml` se genera automáticamente en `plugins/NXMines/config.yml` la primera vez que el servidor inicia con el plugin. Para aplicar cambios usa `/mine reload` o reinicia el servidor.

---

## Archivo completo con comentarios

```yaml
# ============================================================
#  NXMines — Main Configuration
# ============================================================

# Idioma de los mensajes. Opciones: "es" (Español), "en" (English)
# Carga el archivo: plugins/NXMines/lang/messages-<messages>.yml
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
  # Bloques colocados por tick durante un reinicio por lotes.
  # Más alto = reinicio más rápido, mayor impacto en el TPS.
  blocks-per-tick: 5000

  # Las minas con un volumen <= a este valor usan InstantResetStrategy
  # (todos los bloques en un solo tick, sin sobrecarga de lotes).
  instant-reset-threshold: 1000

  # Número máximo de minas cargadas en memoria simultáneamente.
  # 0 = sin límite (carga todas las minas).
  max-loaded-mines: 0

# -----------------------------------------------------------------
# Mines
# -----------------------------------------------------------------
mines:
  # Permitir que las regiones de minas se solapen entre sí.
  allow-region-overlap: false

  # Advertir y pedir confirmación si el volumen cambia más que
  # esta fracción al redefinir (0.5 = 50%).
  redefine-size-change-warning-threshold: 0.5

  # Intervalo de reinicio por defecto en segundos para nuevas minas.
  default-reset-interval: 300

  # Si se deben emitir mensajes cuando una mina se reinicia.
  broadcast-reset-messages: true

  # Destinatarios de los mensajes de reinicio:
  #   GLOBAL  — todos los jugadores online
  #   RADIUS  — jugadores en un radio de broadcast-radius bloques
  #   MINE    — solo jugadores dentro de la región de la mina
  #   NONE    — desactivar mensajes de reinicio completamente
  broadcast-mode: GLOBAL
  broadcast-radius: 100

  # Forzar reinicio si la mina cae por debajo de este % de bloques.
  # 0 = desactivado.
  auto-reset-percentage: 0

# -----------------------------------------------------------------
# Drops
# -----------------------------------------------------------------
drops:
  # Cómo se entregan los drops:
  #   INVENTORY — van directamente al inventario del jugador
  #   GROUND    — caen al suelo en la posición del jugador
  mode: INVENTORY

  # Si hay un plugin de auto-pickup activo, siempre se usa INVENTORY.
  force-inventory-with-autopickup: true

# -----------------------------------------------------------------
# Text formatting
# -----------------------------------------------------------------
text:
  # Formato de fecha/hora para placeholders como %mine_next_reset%.
  # Usa patrones de Java DateTimeFormatter.
  datetime-format: "HH:mm:ss"

  # Formato del tiempo restante.
  # Tokens: {h} horas, {m} minutos, {s} segundos
  time-format: "{h}h {m}m {s}s"
```

---

## Referencia de secciones

### `messages`

| Clave | Tipo | Descripción |
|---|---|---|
| `messages` | String (`"es"` / `"en"`) | Idioma de los mensajes. Carga el archivo `lang/messages-<valor>.yml`. |

---

### `database`

| Clave | Tipo | Descripción |
|---|---|---|
| `type` | String | Motor de base de datos: `SQLITE`, `MYSQL` o `MARIADB`. |
| `sqlite.file` | String | Nombre del archivo SQLite dentro de `plugins/NXMines/`. |
| `mysql.host` | String | Host del servidor MySQL. |
| `mysql.port` | Integer | Puerto del servidor MySQL. |
| `mysql.database` | String | Nombre de la base de datos MySQL. |
| `mysql.username` | String | Usuario de la base de datos. |
| `mysql.password` | String | Contraseña de la base de datos. |
| `mysql.pool.*` | Varios | Parámetros del pool de conexiones HikariCP. |

> Cambiar el tipo de base de datos requiere reiniciar el servidor. Los datos **no** se migran automáticamente entre SQLite y MySQL.

---

### `performance`

| Clave | Tipo | Descripción |
|---|---|---|
| `blocks-per-tick` | Integer | Bloques colocados por tick en `BatchResetStrategy`. Valor por defecto: `5000`. |
| `instant-reset-threshold` | Integer | Volumen máximo (en bloques) para usar `InstantResetStrategy`. Valor por defecto: `1000`. |
| `max-loaded-mines` | Integer | Límite de minas en memoria. `0` = sin límite. |

---

### `mines`

| Clave | Tipo | Descripción |
|---|---|---|
| `allow-region-overlap` | Boolean | Si `true`, las regiones de minas pueden solaparse. |
| `redefine-size-change-warning-threshold` | Double (0–1) | Umbral de cambio de volumen para requerir confirmación al redefinir. |
| `default-reset-interval` | Integer | Intervalo de reinicio en segundos para nuevas minas. |
| `broadcast-reset-messages` | Boolean | Si `true`, se emiten mensajes al reiniciar una mina. |
| `broadcast-mode` | String | `GLOBAL`, `RADIUS`, `MINE` o `NONE`. |
| `broadcast-radius` | Integer | Radio en bloques (solo para `broadcast-mode: RADIUS`). |
| `auto-reset-percentage` | Integer (0–100) | Fuerza reinicio si los bloques caen por debajo de este %. `0` = desactivado. |

---

### `drops`

| Clave | Tipo | Descripción |
|---|---|---|
| `mode` | String | `INVENTORY` (inventario directo) o `GROUND` (al suelo). |
| `force-inventory-with-autopickup` | Boolean | Si hay auto-pickup, siempre usa `INVENTORY`. |

---

### `text`

| Clave | Tipo | Descripción |
|---|---|---|
| `datetime-format` | String | Patrón de `DateTimeFormatter` de Java para fechas. |
| `time-format` | String | Formato del tiempo restante. Tokens: `{h}`, `{m}`, `{s}`. |
