# Flags y efectos de sala

Cada sala de NXRooms tiene su propio conjunto independiente de **flags** (reglas de activado/desactivado) y **efectos de poción**, ambos editables desde el GUI sin tocar ningún archivo. Esta página documenta qué hace realmente cada uno por dentro.

---

## Cómo se aplican los flags

Los flags no son flags de WorldGuard — son ajustes propios de NXRooms por sala, verificados directamente por los listeners de eventos del plugin cada vez que sucede algo en una ubicación dentro de una sala (o a un jugador que está en una). Esto significa que funcionan de forma independiente a los flags de WorldGuard que ya tengas configurados en esa misma región.

Dos flags — **PVP** y **Entry** — además se replican en la región de WorldGuard subyacente de la sala al crearla, como una capa base de protección:

```
PVP           → ALLOW
BLOCK_BREAK   → DENY
BLOCK_PLACE   → DENY
MOB_SPAWNING  → DENY
ENTRY         → ALLOW
```

El menú **Room Flags** del GUI te permite luego sobrescribir el comportamiento efectivo dentro de la sala para PVP, romper y colocar bloques (entre otros) por encima de esta base.

---

## Referencia completa de flags

| Clave del flag | Nombre en el GUI | Default | Qué hace |
|---|---|---|---|
| `pvp` | PVP | `true` | Cancela el daño entre jugadores (incluyendo proyectiles) dentro de la sala cuando está desactivado. |
| `block-break` | Block Break | `false` | Cancela romper cualquier bloque que no sea telaraña o lana. |
| `block-place` | Block Place | `false` | Cancela colocar cualquier bloque que no sea telaraña o lana. |
| `mob-spawning` | Mob Spawning | `false` | Cancela spawns de criaturas dentro de la sala, excepto los que tienen razón `CUSTOM`. |
| `keep-inventory` | Keep Inventory | `true` | Al morir dentro de la sala, conserva el inventario y la experiencia del jugador y limpia los drops; desactivado restaura el comportamiento normal de muerte. |
| `fall-damage` | Fall Damage | `true` | Cancela el daño de caída cuando está desactivado. |
| `hunger-drain` | Hunger Drain | `false` | Cancela las disminuciones del nivel de comida cuando está desactivado. |
| `fire-damage` | Fire Damage | `false` | Cancela el daño por fuego, fuego prolongado, lava y superficies calientes cuando está desactivado. |
| `explosion-damage` | Explosion Damage | `false` | Cancela el daño por explosiones de bloques y entidades cuando está desactivado. |
| `cobweb-place` | Cobweb Place | `true` | Controla colocar telarañas específicamente, independiente del flag general Block Place. |
| `cobweb-break` | Cobweb Break | `true` | Controla romper telarañas específicamente, independiente del flag general Block Break. |
| `wool-place` | Wool Place | `true` | Controla colocar cualquier bloque de lana de cualquier color específicamente. |
| `wool-break` | Wool Break | `true` | Controla romper cualquier bloque de lana de cualquier color específicamente. |
| `natural-regen` | Natural Regen | `true` | Cancela la regeneración de salud por barra de comida llena cuando está desactivado (no afecta otras fuentes de regeneración, como el efecto de poción Regeneración). |

> Los flags se verifican contra la sala a la que pertenece un jugador o la ubicación de un bloque — ya sea la sala en la que un jugador está registrado como "dentro" (tras caminar físicamente por la entrada), o la sala cuya caja delimitadora contiene la ubicación del evento, lo que aplique primero.

---

## Referencia de efectos de poción

| Clave del efecto | Nombre en el GUI | Tipo de Bukkit | Ícono |
|---|---|---|---|
| `speed` | Speed | `SPEED` | Azúcar |
| `strength` | Strength | `INCREASE_DAMAGE` | Polvo de Blaze |
| `resistance` | Resistance | `DAMAGE_RESISTANCE` | Peto de hierro |
| `jump_boost` | Jump Boost | `JUMP` | Pata de conejo |
| `regeneration` | Regeneration | `REGENERATION` | Rebanada de melón brillante |
| `fire_resistance` | Fire Resistance | `FIRE_RESISTANCE` | Crema de magma |
| `invisibility` | Invisibility | `INVISIBILITY` | Ojo de araña fermentado |
| `night_vision` | Night Vision | `NIGHT_VISION` | Zanahoria dorada |
| `haste` | Haste | `FAST_DIGGING` | Pico de hierro |

Los niveles van del 1 al 100 (internamente amplificador 0–99). Los efectos activados se reaplican con duración infinita y sin partículas/ícono visibles para el jugador, para que persistan de forma fluida durante toda la partida y se refresquen automáticamente al reaparecer.

---

## Dónde se aplican

- Los flags y efectos están vinculados a la **sala en sí**, no a una partida específica — persisten entre reinicios y se guardan en `rooms.yml` de inmediato cada vez que cambian.
- Cambiar el **modo** de una sala (1v1 → 2v2 → …) desde el GUI conserva todos sus flags y efectos; solo cambia el requisito de cantidad de jugadores.
- Cambiar el material de **crystal block** de una sala solo afecta la barrera de la entrada — no tiene efecto sobre los flags ni los efectos de poción.
