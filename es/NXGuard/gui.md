# Uso del GUI

NXGuard tiene dos pantallas principales: el **menú de regiones** y el **editor de flags**. Ambas son inventarios de 54 slots (6 filas × 9 columnas).

---

## Menú de regiones

Se abre con `/guard gui`.

### Layout

```
┌─────────────────────────────────────────────┐
│  R  R  R  R  R  R  R  R  R   ← fila 1      │
│  R  R  R  R  R  R  R  R  R   ← fila 2      │
│  R  R  R  R  R  R  R  R  R   ← fila 3      │
│  R  R  R  R  R  R  R  R  R   ← fila 4      │
│  R  R  R  R  R  R  R  R  R   ← fila 5      │
│  ←  .  .  .  .  .  .  .  →   ← fila 6 nav │
└─────────────────────────────────────────────┘

R = ítem de región
← = botón página anterior (slot 45)
→ = botón página siguiente (slot 53)
. = slots vacíos
```

- Las filas 1-5 (slots 0-44) muestran hasta **45 regiones** por página, ordenadas alfabéticamente sin distinción de mayúsculas.
- Si hay más regiones que slots, aparece la flecha **→** en slot 53. Si no es la primera página, aparece **←** en slot 45.

### Ítem de región

Cada región se muestra como un **WHITE_BANNER** (configurable) con:

- **Nombre:** el ID de la región en amarillo.
- **Lore:**
  - Mundo en el que está la región.
  - Prioridad de la región.
  - Número de flags con valor asignado y activas (ALLOW).
  - Instrucción de uso.

### Interacción

| Acción | Resultado |
|---|---|
| Click izquierdo en una región | Abre el editor de flags de esa región. |
| Click en `←` | Va a la página anterior de regiones. |
| Click en `→` | Va a la página siguiente de regiones. |
| Click en cualquier otro slot | Sin efecto. |

> No es posible sacar ítems del inventario ni moverlos. Todos los clics son cancelados automáticamente.

---

## Editor de flags

Se abre al hacer click en una región del menú anterior.

### Layout

```
┌─────────────────────────────────────────────┐
│  F  F  F  F  F  F  F  F  F   ← fila 1      │
│  F  F  F  F  F  F  F  F  F   ← fila 2      │
│  F  F  F  F  F  F  F  F  F   ← fila 3      │
│  F  F  F  F  F  F  F  F  F   ← fila 4      │
│  F  F  F  F  F  F  F  F  F   ← fila 5      │
│  .  .  .  .  ←  .  .  .  →   ← fila 6 nav │
└─────────────────────────────────────────────┘

F = ítem de flag
← = botón "Volver al listado" (slot 49)
→ = botón "Página siguiente de flags" (slot 53, solo si hay más flags)
. = slots vacíos
```

- Las filas 1-5 (slots 0-44) muestran hasta **45 flags** por página, ordenadas alfabéticamente.
- Si WorldGuard o WorldGuard Extra Flags tienen más de 45 flags registradas, aparece la flecha **→** en slot 53 para navegar a la siguiente página.

### Ítem de flag

Cada flag se muestra con un **tinte de color** según su estado:

| Material | Color | Estado |
|---|---|---|
| `LIME_DYE` | Verde lima | `ALLOW` — activada explícitamente |
| `RED_DYE` | Rojo | `DENY` — desactivada explícitamente |
| `GRAY_DYE` | Gris | `NONE` — sin valor asignado (usa el default de WorldGuard) |

El **lore** de cada flag es dinámico y muestra:

1. El estado actual en texto coloreado.
2. Una línea vacía de separación.
3. Las instrucciones de click **adaptadas al estado actual**.

#### Ejemplos de lore

**Flag en estado NONE (gris):**
```
Estado: Neutral (predeterminado)

Click izquierdo → activar (allow)
Click derecho → desactivar (deny)
```

**Flag en estado ALLOW (lima):**
```
Estado: Activada (allow)

Click izquierdo → desactivar (deny)
Click derecho → resetear a neutro
```

**Flag en estado DENY (rojo):**
```
Estado: Desactivada (deny)

Click izquierdo → activar (allow)
Click derecho → resetear a neutro
```

**Flag no editable desde GUI:**
```
Estado: Activada (allow)

No editable desde el GUI
```

### Interacción

| Acción | Estado actual | Resultado |
|---|---|---|
| Click izquierdo | NONE | → ALLOW |
| Click izquierdo | ALLOW | → DENY |
| Click izquierdo | DENY | → ALLOW |
| Click derecho | NONE | → DENY |
| Click derecho | ALLOW | → NONE |
| Click derecho | DENY | → NONE |
| Click en `←` (slot 49) | — | Vuelve al menú de regiones en la página donde estaba. |
| Click en `→` (slot 53) | — | Va a la siguiente página de flags. |

> Cada vez que se cambia una flag, el cambio se guarda en disco inmediatamente (`saveChanges()`) y el slot del ítem se actualiza visualmente sin cerrar el inventario.

---

## Navegación completa

```
/guard gui
    └─► Menú de regiones (página 0)
            │  click en región
            └─► Editor de flags (flagPage 0)
                    │  click → (slot 53)
                    └─► Editor de flags (flagPage 1)
                            │  ...
                    │  click ← (slot 49)
                    └─► Menú de regiones (misma página de lista)
```
