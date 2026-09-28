# Configuración — config.yml

El archivo `config.yml` se genera automáticamente en `plugins/NXRooms/config.yml` la primera vez que el servidor inicia con el plugin. Para aplicar cambios usa `/nxrooms reload` o reinicia el servidor.

---

## Archivo completo con comentarios

```yaml
# Idioma activo: "en", "es" o "pt"
language: "es"

# Máximo de jugadores permitidos por sala, como límite estricto
maxPlayers: 10

# Si el PVP está permitido globalmente (las salas igual tienen su propio flag de PVP)
pvp: true

# Mundo donde se ubican las salas
lobbyWorld: "world"

# Bloque por defecto usado para sellar la entrada de una sala cuando se llena
# (sobrescribible por sala desde el menú Crystal Block del GUI)
resetCrystalMaterial: "GLASS"

# Materiales usados para cada etapa de la varita de selección de salas
wandMaterials:
  stage1: "IRON_AXE"
  stage2: "GOLDEN_AXE"
  stage3: "DIAMOND_AXE"

# Reservado para futura creación de salas basada en esquemáticos
enableSchematics: false

# Reservado para un futuro sistema de apuestas
enableBets: false

# Máximo de espectadores permitidos por sala (0 = sin límite)
maxSpectators: 0

# Si se debe ocultar a otros jugadores de la tab list mientras se está en una sala
enableTablistHide: true

# Segundos que un jugador debe esperar después de combate antes de que se permitan ciertas acciones
cooldownAfterCombat: 60

# Segundos tras recibir daño en los que un jugador sigue considerándose "en combate"
timeoutInCombat: 30

# Cooldown, en segundos, antes de que el nombre de una sala eliminada pueda reutilizarse
deleteRoomCooldown: 30

# Cada cuánto (en ticks) se refresca el GUI de salas con datos en vivo
guiUpdateInterval: 20

# Total de jugadores necesarios para llenar una sala, por modo
playersPerTeam:
  1v1: 2
  2v2: 4
  3v3: 6

# Qué se reinicia/limpia cuando un jugador entra a una sala
cleanOnJoin:
  items: true
  effects: true
  potions: true
  armor: true
  inventory: true
  experience: true
  gameMode: "SURVIVAL"

# Nombre de visualización del servidor, usado en algunos mensajes/placeholders
serverName: "My Server"
```

---

## Referencia de secciones

| Clave | Tipo | Descripción |
|---|---|---|
| `language` | String (`"en"` / `"es"` / `"pt"`) | Idioma activo, carga `messages_<valor>.yml`. |
| `maxPlayers` | Integer | Límite estricto de jugadores por sala. |
| `pvp` | Boolean | Interruptor global de PVP (además del propio flag PVP de cada sala). |
| `lobbyWorld` | String | Nombre del mundo donde se ubican las salas. |
| `resetCrystalMaterial` | String (Material de Bukkit) | Material de barrera de entrada por defecto para salas recién creadas. |
| `wandMaterials.stage1/2/3` | String (Material de Bukkit) | Materiales usados para cada etapa de la varita. |
| `enableSchematics` | Boolean | Reservado para futuro soporte de esquemáticos. |
| `enableBets` | Boolean | Reservado para un futuro sistema de apuestas. |
| `maxSpectators` | Integer | Máximo de espectadores por sala. `0` = sin límite. |
| `enableTablistHide` | Boolean | Si se oculta a otros jugadores de la tab list dentro de una sala. |
| `cooldownAfterCombat` | Integer (segundos) | Duración del cooldown tras combate. |
| `timeoutInCombat` | Integer (segundos) | Cuánto tiempo se considera "en combate" a un jugador tras recibir daño. |
| `deleteRoomCooldown` | Integer (segundos) | Cooldown antes de reutilizar el nombre de una sala eliminada. |
| `guiUpdateInterval` | Integer (ticks) | Intervalo de refresco de datos en vivo del GUI. |
| `playersPerTeam.<modo>` | Integer | Total de jugadores necesarios para llenar una sala de ese modo. |
| `cleanOnJoin.*` | Boolean / String | Qué limpiar o reiniciar en el jugador al entrar a una sala. |
| `serverName` | String | Nombre de visualización usado en algunos mensajes y placeholders. |

---

## Ajustes por sala que viven fuera de config.yml

No todo es global — algunos ajustes se guardan **por sala** en `rooms.yml` y solo son editables a través del GUI, no de `config.yml`:

- Los **flags** de la sala (PVP, romper/colocar bloques, etc.) — consulta [Flags y efectos de sala](../flags.md).
- Los **efectos de poción** de la sala y sus niveles.
- La **cuenta regresiva de apertura** de la sala.
- El **material de la barrera de cristal** de la sala (sobrescribe `resetCrystalMaterial` solo para esa sala).
- El **modo** de la sala (`1v1`, `2v2`, etc.).

Esto se mantiene intencionalmente fuera de `config.yml`, ya que están pensados para ajustarse por arena, dentro del juego, sin editar archivos ni recargar el servidor.
