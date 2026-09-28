# Sistema de drops

NXMines permite definir qué obtienen los jugadores al romper bloques dentro de una mina. Cada mina tiene una **tabla de drops por bloque**: puedes configurar drops distintos para el diamante, el hierro, la piedra, etc.

---

## ¿Cómo funciona?

Cuando un jugador rompe un bloque dentro de una mina:

1. NXMines identifica qué tipo de bloque fue roto.
2. Consulta la tabla de drops de ese bloque para la mina.
3. Evalúa cada entrada de drop según su **probabilidad** (0–100%).
4. Entrega los drops que superen la tirada de azar.

El modo de entrega está definido en `config.yml` (`drops.mode`): `INVENTORY` (directo al inventario) o `GROUND` (cae al suelo). Si hay un plugin de auto-pickup activo, siempre se usa `INVENTORY`.

---

## Qué puede hacer cada entrada de drop

Una entrada de drop (`DropEntry`) puede configurar lo siguiente:

| Campo | Descripción |
|---|---|
| **Material** | El ítem que se entrega (ej: `DIAMOND`, `IRON_INGOT`). |
| **Cantidad** | Rango mínimo–máximo de unidades (ej: 1–3). |
| **Probabilidad** | Porcentaje de 0 a 100 de que se entregue este drop. |
| **Nombre personalizado** | Nombre del ítem (acepta MiniMessage / color). |
| **Lore personalizado** | Descripción del ítem (acepta MiniMessage / color). |
| **Encantamientos** | Encantamientos con su nivel. |
| **Experiencia** | Puntos de XP que se otorgan al jugador. |
| **Comandos** | Comandos ejecutados al entregar el drop. |
| **Mensajes** | Mensajes enviados al jugador al obtener el drop. |

---

## Comandos en drops

El campo `commands` de cada drop admite dos prefijos:

| Prefijo | Ejecutor |
|---|---|
| `{console:<cmd>}` | El comando lo ejecuta la consola del servidor. |
| `{player:<cmd>}` | El comando lo ejecuta el jugador. |

**Ejemplos:**
```
{console:give %player% diamond 1}
{player:say ¡Encontré un diamante!}
```

El placeholder `%player%` se reemplaza por el nombre del jugador que rompió el bloque.

---

## Editor de drops (GUI)

Accede desde el botón **Custom Drops** del editor de mina.

### Layout del menú de drops (4 filas)

```
┌─────────────────────────────────────────────┐
│  D  D  D  D  D  D  D  D  D   ← filas 1-2   │
│  (entradas de drop)                          │
│  .  .  .  .  .  .  .  .  .   ← fila 3      │
│  +  .  .  ✔  .  .  .  ↩  .   ← fila 4 nav │
└─────────────────────────────────────────────┘

+  = Añadir nuevo drop (slot 27)  — EMERALD
✔  = Guardar tabla (slot 31)      — NETHER_STAR
↩  = Volver al editor (slot 35)   — ARROW
```

### Interacción

| Acción | Resultado |
|---|---|
| Click en `+ Add Drop Rule` | Crea una nueva entrada de drop vacía. |
| Click en una entrada existente | Abre el editor de detalle de ese drop. |
| Click en `✔ Save Drop Table` | Guarda todos los cambios en la base de datos. |
| Click en `‹ Back to Editor` | Vuelve al editor de mina sin guardar. |

---

## Persistencia

Cada vez que se guarda una tabla de drops desde el GUI:

1. Todas las entradas se escriben en la base de datos (SQLite o MySQL).
2. Los cambios se aplican inmediatamente para los nuevos bloques rotos.

> Los bloques que ya cayeron antes de guardar no se ven afectados retroactivamente.
