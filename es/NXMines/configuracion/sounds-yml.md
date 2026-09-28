# Configuración — sounds.yml

El archivo `sounds.yml` controla los sonidos que se reproducen durante eventos de minas: inicio de reinicio, fin de reinicio, creación de mina, eliminación de mina y acciones del GUI.

Para aplicar cambios ejecuta `/mine reload`.

---

## Archivo completo con comentarios

```yaml
# ============================================================
#  NXMines — Sounds
#  sound: nombre del enum Sound de Bukkit (ver wiki.vg/Sounds)
#  volume: 0.0–1.0+ (afecta el radio de audibilidad)
#  pitch: 0.5–2.0
#  enabled: true/false
# ============================================================

reset:
  start:
    enabled: true
    sound: BLOCK_BEACON_ACTIVATE
    volume: 1.0
    pitch: 1.0

  complete:
    enabled: true
    sound: BLOCK_BEACON_DEACTIVATE
    volume: 1.0
    pitch: 1.2

mine:
  created:
    enabled: true
    sound: ENTITY_PLAYER_LEVELUP
    volume: 1.0
    pitch: 1.0

  deleted:
    enabled: true
    sound: ENTITY_ITEM_BREAK
    volume: 1.0
    pitch: 0.8

gui:
  click:
    enabled: true
    sound: UI_BUTTON_CLICK
    volume: 0.5
    pitch: 1.0

  error:
    enabled: true
    sound: ENTITY_VILLAGER_NO
    volume: 0.8
    pitch: 1.0

  success:
    enabled: true
    sound: ENTITY_PLAYER_LEVELUP
    volume: 0.8
    pitch: 1.5
```

---

## Referencia de eventos

| Sección | Descripción |
|---|---|
| `reset.start` | Sonido al comenzar un reinicio de mina. |
| `reset.complete` | Sonido al terminar un reinicio de mina. |
| `mine.created` | Sonido al crear una nueva mina. |
| `mine.deleted` | Sonido al eliminar una mina. |
| `gui.click` | Sonido al hacer click en un botón del GUI. |
| `gui.error` | Sonido cuando ocurre un error en el GUI (ej: composición inválida). |
| `gui.success` | Sonido cuando una acción del GUI tiene éxito (ej: guardar composición). |

---

## Campos por evento

| Campo | Tipo | Descripción |
|---|---|---|
| `enabled` | Boolean | Si `false`, se desactiva el sonido de este evento. |
| `sound` | String | Nombre del enum `Sound` de Bukkit. |
| `volume` | Double | Volumen del sonido. Valores mayores a 1.0 aumentan el radio de audibilidad. |
| `pitch` | Double | Tono del sonido (0.5 = grave, 2.0 = agudo). |

---

## Ejemplos de sonidos comunes

| Nombre de sonido | Descripción |
|---|---|
| `BLOCK_BEACON_ACTIVATE` | Activación de baliza (profundo y suave). |
| `BLOCK_BEACON_DEACTIVATE` | Desactivación de baliza. |
| `ENTITY_PLAYER_LEVELUP` | Subir de nivel (alegre). |
| `ENTITY_ITEM_BREAK` | Ítem rompiéndose. |
| `UI_BUTTON_CLICK` | Click de botón de UI. |
| `ENTITY_VILLAGER_NO` | Gruñido de villager (rechazo). |
| `BLOCK_ANVIL_USE` | Uso de yunque. |
| `ENTITY_ENDER_DRAGON_FLAP` | Alas de dragón del end. |
| `BLOCK_NOTE_BLOCK_PLING` | Nota musical brillante. |

Consulta la documentación de Bukkit para la lista completa de sonidos disponibles en tu versión.
