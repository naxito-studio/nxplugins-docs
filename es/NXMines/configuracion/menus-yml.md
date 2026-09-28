# Configuración — menus.yml

El archivo `menus.yml` controla el diseño visual de todos los menús de inventario de NXMines: títulos, materiales, slots, nombres e ítems de relleno. Los textos soportan **MiniMessage**, HEX (`#RRGGBB`) y códigos legacy (`&a`).

Para aplicar cambios ejecuta `/mine reload`. Los menús ya abiertos deben cerrarse y reabrirse.

---

## Archivo completo con comentarios

```yaml
# ============================================================
#  NXMines — Menus Layout
#  Slot indices are 0-based (Bukkit convention).
#  Text values support MiniMessage, HEX, and legacy codes.
# ============================================================

# -----------------------------------------------------------------
# Main Menu (list of all mines)
# -----------------------------------------------------------------
main-menu:
  title: "<gold><b>NXMines</b> <dark_gray>— <gray>Mine List"
  rows: 6

  navigation:
    close-slot: 49
    close-material: BARRIER
    close-name: "<red><b>✖ Close</b>"

    next-page-slot: 53
    next-page-material: ARROW
    next-page-name: "<yellow><b>Next Page</b> <gray>»"

    prev-page-slot: 45
    prev-page-material: ARROW
    prev-page-name: "<gray>« <yellow><b>Previous Page</b>"

  # Ítem de relleno en los slots vacíos de la fila 6
  filler:
    material: BLACK_STAINED_GLASS_PANE
    name: " "

  mine-item:
    default-material: STONE
    name: "<gold><b>Mina</b> <dark_gray>│ <yellow>%mine_name%"
    lore:
      - "<dark_gray>─────────────────────────────"
      - " <gold><b>MINE DETAILS</b>"
      - "  <dark_gray>▪ <gray>Name: <yellow>%mine_name%"
      - "  <dark_gray>▪ <gray>Prefix: <white>%mine_prefix%"
      - "  <dark_gray>▪ <gray>Status: %mine_status%"
      - ""
      - " <aqua><b>LOCATION & REGION</b>"
      - "  <dark_gray>▪ <gray>World: <white>%mine_world%"
      - "  <dark_gray>▪ <gray>Bounds: <gray>%mine_region%"
      - ""
      - " <light_purple><b>BLOCKS & RESET</b>"
      - "  <dark_gray>▪ <gray>Blocks Left: <green>%mine_blocks%"
      - "  <dark_gray>▪ <gray>Next Reset: <gold>%mine_time%"
      - "<dark_gray>─────────────────────────────"
      - " <yellow><b>LEFT-CLICK</b> <dark_gray>» <gray>Open Editor"
      - " <red><b>RIGHT-CLICK</b> <dark_gray>» <gray>Delete Mine"
      - "<dark_gray>─────────────────────────────"

# -----------------------------------------------------------------
# Confirmation Menu (mine deletion)
# -----------------------------------------------------------------
confirm-menu:
  title: "<dark_red>Delete <white>%mine_name%<dark_red>?"
  confirm-material: LIME_STAINED_GLASS_PANE
  confirm-name: "<green><b>✔ Confirm Delete</b>"
  cancel-material: RED_STAINED_GLASS_PANE
  cancel-name: "<red><b>✘ Cancel</b>"

# -----------------------------------------------------------------
# Mine Editor Menu
# -----------------------------------------------------------------
editor-menu:
  title: "<gold><b>Editor</b> <dark_gray>— <white>%mine_name%"
  rows: 4

  buttons:
    display-name:
      slot: 10
      material: NAME_TAG
      name: "<gold><b>Display Name</b>"

    prefix:
      slot: 11
      material: PAPER
      name: "<gold><b>Mine Prefix</b>"

    reset-time:
      slot: 12
      material: CLOCK
      name: "<gold><b>Reset Interval</b>"

    composition:
      slot: 13
      material: GRASS_BLOCK
      name: "<gold><b>Block Composition</b>"

    drops:
      slot: 14
      material: CHEST
      name: "<gold><b>Custom Drop Tables</b>"

    icon:
      slot: 15
      material: ITEM_FRAME
      name: "<gold><b>GUI Icon Material</b>"

    region:
      slot: 16
      material: FILLED_MAP
      name: "<gold><b>Redefine Region</b>"

    reset-now:
      slot: 28
      material: REDSTONE
      name: "<red><b>Force Reset Now</b>"

    duplicate:
      slot: 30
      material: BOOK
      name: "<yellow><b>Duplicate Mine</b>"

    export:
      slot: 32
      material: ENDER_CHEST
      name: "<aqua><b>Export Configuration</b>"

    delete:
      slot: 34
      material: BARRIER
      name: "<red><b>Delete Mine</b>"

    back:
      slot: 31
      material: ARROW
      name: "<gray><b>‹ Back to Mines</b>"

# -----------------------------------------------------------------
# Composition Editor Menu
# -----------------------------------------------------------------
composition-menu:
  title: "<gold><b>Composition</b> <dark_gray>— <white>%mine_name%"
  rows: 6

  remaining-item:
    slot: 4
    material: GREEN_STAINED_GLASS_PANE
    name: "<gold><b>Composition Overview</b>"

  save-button:
    slot: 49
    material: EMERALD
    name: "<green><b>✔ Save Composition</b>"

  cancel-button:
    slot: 53
    material: BARRIER
    name: "<red><b>✘ Cancel</b>"

# -----------------------------------------------------------------
# Drop Editor Menu
# -----------------------------------------------------------------
drop-menu:
  title: "<gold><b>Drops</b>"
  rows: 4

  add-button:
    slot: 27
    material: EMERALD
    name: "<green><b>+ Add Drop Rule</b>"

  save-button:
    slot: 31
    material: NETHER_STAR
    name: "<green><b>✔ Save Drop Table</b>"

  back-button:
    slot: 35
    material: ARROW
    name: "<gray><b>‹ Back to Editor</b>"

# -----------------------------------------------------------------
# Block Percentage Editor Menu
# -----------------------------------------------------------------
percentage-menu:
  title: "<gold><b>Porcentaje</b>"
```

---

## Referencia de placeholders en ítems de mina

| Placeholder | Descripción |
|---|---|
| `%mine_name%` | Nombre interno de la mina. |
| `%mine_display_name%` | Nombre visible (display name). |
| `%mine_prefix%` | Prefijo de la mina. |
| `%mine_status%` | Estado: `ACTIVE`, `RESETTING` o `DISABLED`. |
| `%mine_world%` | Nombre del mundo. |
| `%mine_region%` | Coordenadas de la región. |
| `%mine_blocks%` | Bloques restantes. |
| `%mine_time%` | Tiempo hasta el próximo reinicio. |
| `%mine_reset_interval%` | Intervalo de reinicio configurado. |
| `%mine_icon%` | Material del icono en el GUI. |
| `%composition_count%` | Número de bloques definidos en la composición. |
| `%drop_count%` | Número de entradas de drop configuradas. |
| `%total_assigned%` | Porcentaje total asignado en la composición. |
| `%percentage_left%` | Porcentaje restante sin asignar. |

---

## Formato de texto

Todos los campos de texto en `menus.yml` aceptan:

- **MiniMessage**: `<gold>`, `<b>`, `<italic>`, `<#FF5733>`, etc.
- **Códigos legacy**: `&a`, `&l`, `&c`, etc.
- **HEX**: `&#FF5733` (formato legacy con `&`) o `<#FF5733>` (MiniMessage).
