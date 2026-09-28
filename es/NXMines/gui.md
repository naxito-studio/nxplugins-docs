# Uso del GUI

NXMines tiene varios menús de inventario interconectados. Todos se abren desde `/mine gui` o haciendo click en el menú anterior. Los inventarios no permiten mover ni sacar ítems; todos los clics están cancelados salvo las acciones definidas.

---

## Menú principal — lista de minas

Se abre con `/mine gui`.

### Layout

```
┌─────────────────────────────────────────────┐
│  M  M  M  M  M  M  M  M  M   ← fila 1      │
│  M  M  M  M  M  M  M  M  M   ← fila 2      │
│  M  M  M  M  M  M  M  M  M   ← fila 3      │
│  M  M  M  M  M  M  M  M  M   ← fila 4      │
│  M  M  M  M  M  M  M  M  M   ← fila 5      │
│  ←  .  .  .  ✖  .  .  .  →   ← fila 6 nav │
└─────────────────────────────────────────────┘

M  = ítem de mina
←  = página anterior (slot 45)
→  = página siguiente (slot 53)
✖  = cerrar (slot 49)
.  = relleno (BLACK_STAINED_GLASS_PANE)
```

- Las filas 1–5 (slots 0–44) muestran hasta **45 minas** por página.
- Si hay más minas que slots, aparece la flecha **→** en slot 53.

### Ítem de mina

Cada mina se representa con un ítem (material configurable, por defecto `STONE`) con:

- **Nombre:** prefijo de color + nombre de la mina.
- **Lore:** mundo, coordenadas de la región, bloques restantes, tiempo hasta el próximo reinicio.

### Interacción

| Acción | Resultado |
|---|---|
| Click izquierdo en una mina | Abre el editor de esa mina. |
| Click derecho en una mina | Abre el menú de confirmación de eliminación. |
| Click en `←` | Va a la página anterior. |
| Click en `→` | Va a la página siguiente. |
| Click en `✖` | Cierra el inventario. |

---

## Editor de mina

Se abre al hacer click izquierdo en una mina del menú principal.

### Layout (4 filas — 36 slots)

```
┌─────────────────────────────────────────────┐
│  .  .  .  .  .  .  .  .  .   ← fila 1      │
│  .  DN P  RT BC D  I  RG .   ← fila 2      │
│  .  .  .  .  .  .  .  .  .   ← fila 3      │
│  .  .  .  .  ↩  .  .  .  .   ← fila 4 nav │
└─────────────────────────────────────────────┘

DN = Display Name (slot 10)   — NAME_TAG
P  = Mine Prefix (slot 11)    — PAPER
RT = Reset Interval (slot 12) — CLOCK
BC = Block Composition (slot 13) — GRASS_BLOCK
D  = Custom Drops (slot 14)   — CHEST
I  = GUI Icon Material (slot 15) — ITEM_FRAME
RG = Redefine Region (slot 16) — FILLED_MAP
↩  = Volver al listado (slot 31) — ARROW

Fila inferior:
FR = Force Reset (slot 28)    — REDSTONE
DU = Duplicate (slot 30)      — BOOK
EX = Export (slot 32)         — ENDER_CHEST
DE = Delete (slot 34)         — BARRIER
```

### Botones del editor

| Botón | Slot | Acción |
|---|---|---|
| **Display Name** | 10 | Pide por chat el nuevo nombre visible de la mina (acepta MiniMessage). |
| **Mine Prefix** | 11 | Pide por chat el nuevo prefijo (acepta MiniMessage). |
| **Reset Interval** | 12 | Abre el menú de intervalo de reinicio. |
| **Block Composition** | 13 | Abre el editor de composición de bloques. |
| **Custom Drops** | 14 | Abre el editor de tablas de drops. |
| **GUI Icon Material** | 15 | Pide por chat el material del icono en el GUI. |
| **Redefine Region** | 16 | Aplica tu selección activa de WorldEdit como nueva región. |
| **Force Reset** | 28 | Fuerza el reinicio inmediato de la mina. |
| **Duplicate** | 30 | Crea una copia de la mina con la misma composición y drops. |
| **Export** | 32 | Guarda la configuración de la mina en un YAML externo. |
| **Delete** | 34 | Abre el menú de confirmación para eliminar la mina. |
| **‹ Back** | 31 | Vuelve al menú principal de minas. |

---

## Editor de composición de bloques

Se abre desde el botón **Block Composition** del editor.

### Funcionamiento

- Las filas 1–5 muestran los bloques ya asignados a la mina con su porcentaje.
- Arrastra un bloque desde tu inventario a un slot vacío para añadirlo.
- El ítem de resumen (slot 4) muestra el porcentaje total asignado y el restante disponible.
- La composición total debe sumar exactamente **100%** para poder guardar.

### Interacción

| Acción | Resultado |
|---|---|
| Arrastrar bloque a slot vacío | Añade el bloque a la composición. |
| Click en un bloque existente | Abre el editor de porcentaje para ese bloque. |
| Click derecho en un bloque | Elimina ese bloque de la composición. |
| Click en `Save` (slot 49) | Guarda la composición si el total es 100%. |
| Click en `Cancel` (slot 53) | Cancela sin guardar. |

---

## Editor de intervalo de reinicio

Se abre desde el botón **Reset Interval** del editor.

Muestra una fila de opciones de tiempo predefinidas. Haz click en el tiempo deseado para aplicarlo a la mina.

---

## Editor de drops

Se abre desde el botón **Custom Drops** del editor. Consulta la sección [Sistema de drops](drops.md) para detalles completos.

---

## Menú de confirmación — eliminar mina

Se abre al hacer click derecho en una mina del menú principal, o desde el botón **Delete** del editor.

| Botón | Material | Acción |
|---|---|---|
| Confirm Delete | LIME_STAINED_GLASS_PANE | Elimina permanentemente la mina y todos sus datos. |
| Cancel | RED_STAINED_GLASS_PANE | Cancela y regresa al menú anterior. |

> **Nota:** La eliminación de una mina es **permanente** e irreversible. Todos sus datos (composición, drops, región) se borran de la base de datos.

---

## Navegación completa

```
/mine gui
    └─► Menú principal (lista de minas)
            │  click izquierdo en mina
            └─► Editor de mina
                    │  click Composition
                    └─► Editor de composición
                    │  click Drops
                    └─► Editor de drops
                    │  click Reset Interval
                    └─► Selector de intervalo
                    │  click ‹ Back
                    └─► Menú principal
            │  click derecho en mina
            └─► Confirmación de eliminación
```
