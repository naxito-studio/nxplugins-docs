# Configuración — particles.yml

El archivo `particles.yml` controla las partículas que se emiten durante eventos de minas: inicio de reinicio, fin de reinicio y creación de mina.

Para aplicar cambios ejecuta `/mine reload`.

---

## Archivo completo con comentarios

```yaml
# ============================================================
#  NXMines — Particles
#  particle: nombre del enum Particle de Bukkit
#  count: número de partículas a emitir
#  offset-x/y/z: radio de dispersión en cada eje
#  extra: velocidad / valor extra (depende del tipo de partícula)
#  enabled: true/false
#
#  Para partículas tipo REDSTONE dust:
#    color: "#RRGGBB"
#    dust-size: 1.0
# ============================================================

reset:
  start:
    enabled: true
    particle: HAPPY_VILLAGER
    count: 40
    offset-x: 1.0
    offset-y: 1.5
    offset-z: 1.0
    extra: 0.0

  complete:
    enabled: true
    particle: TOTEM_OF_UNDYING
    count: 60
    offset-x: 1.5
    offset-y: 2.0
    offset-z: 1.5
    extra: 0.0

mine:
  created:
    enabled: true
    particle: HAPPY_VILLAGER
    count: 30
    offset-x: 0.5
    offset-y: 0.5
    offset-z: 0.5
    extra: 0.0
```

---

## Referencia de eventos

| Sección | Descripción |
|---|---|
| `reset.start` | Partículas al inicio de un reinicio de mina. |
| `reset.complete` | Partículas al completar un reinicio de mina. |
| `mine.created` | Partículas al crear una nueva mina. |

---

## Campos por evento

| Campo | Tipo | Descripción |
|---|---|---|
| `enabled` | Boolean | Si `false`, se desactivan las partículas de este evento. |
| `particle` | String | Nombre del enum `Particle` de Bukkit (ej: `HAPPY_VILLAGER`, `FLAME`, `REDSTONE`). |
| `count` | Integer | Número de partículas a emitir. |
| `offset-x` | Double | Radio de dispersión en el eje X. |
| `offset-y` | Double | Radio de dispersión en el eje Y. |
| `offset-z` | Double | Radio de dispersión en el eje Z. |
| `extra` | Double | Velocidad extra de la partícula (varía según el tipo). |

---

## Partículas de tipo REDSTONE

Para partículas del tipo `REDSTONE` puedes añadir los campos adicionales:

```yaml
reset:
  complete:
    enabled: true
    particle: REDSTONE
    count: 60
    offset-x: 1.5
    offset-y: 2.0
    offset-z: 1.5
    extra: 0.0
    color: "#FF4444"
    dust-size: 1.5
```

| Campo | Tipo | Descripción |
|---|---|---|
| `color` | String (HEX) | Color de la partícula REDSTONE en formato `#RRGGBB`. |
| `dust-size` | Double | Tamaño del polvo de redstone. |

---

## Ejemplos de partículas comunes

| Nombre de partícula | Descripción |
|---|---|
| `HAPPY_VILLAGER` | Partículas verdes brillantes de villager feliz. |
| `TOTEM_OF_UNDYING` | Efecto dramático de tótem de inmortalidad. |
| `FLAME` | Llamas pequeñas. |
| `HEART` | Corazones. |
| `CRIT` | Críticos (estrellas doradas). |
| `SPELL_WITCH` | Partículas violetas de bruja. |
| `EXPLOSION_NORMAL` | Pequeña explosión. |
| `REDSTONE` | Polvo de redstone configurable en color. |

Consulta la documentación de Bukkit para la lista completa de partículas disponibles en tu versión.
