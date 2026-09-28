# Sistema de flags

NXGuard muestra y permite editar las flags de WorldGuard registradas en el servidor. Este documento explica cómo funcionan los tres estados, qué tipos de flags existen y cuáles son editables desde el GUI.

---

## Los tres estados de una flag

WorldGuard trabaja con flags que pueden tener o no un valor asignado. NXGuard los representa con tres estados visuales:

### NONE — Neutral (tinte gris)

La flag **no tiene ningún valor asignado** en esta región. WorldGuard aplicará su comportamiento predeterminado para esa flag, que puede ser heredado de una región padre o simplemente el valor por defecto del plugin.

> Este es el estado inicial de todas las flags en una región recién creada.

### ALLOW — Activada (tinte lima)

La flag tiene asignado el valor `ALLOW` (para `StateFlag`) o `true` (para `BooleanFlag`). Indica que el comportamiento asociado está **explícitamente permitido** en la región.

### DENY — Desactivada (tinte rojo)

La flag tiene asignado el valor `DENY` (para `StateFlag`) o `false` (para `BooleanFlag`). Indica que el comportamiento asociado está **explícitamente denegado** en la región.

---

## Tipos de flags en WorldGuard

WorldGuard registra diferentes tipos de flags según el valor que almacenan:

| Tipo | Descripción | Editable en GUI |
|---|---|---|
| `StateFlag` | Acepta `ALLOW`, `DENY` o sin valor. Es la más común. | ✅ Sí |
| `BooleanFlag` | Acepta `true` o `false`. | ✅ Sí |
| `StringFlag` | Almacena texto libre (ej: mensajes de entrada/salida). | ❌ No (requiere comando) |
| `IntegerFlag` | Almacena un número entero (ej: cantidad de curación). | ❌ No (requiere comando) |
| `DoubleFlag` | Almacena un número decimal. | ❌ No (requiere comando) |
| `LocationFlag` | Almacena coordenadas. | ❌ No (requiere comando) |
| `SetFlag` | Almacena un conjunto de valores. | ❌ No (requiere comando) |

Las flags `StringFlag`, `IntegerFlag`, etc. se muestran en el GUI con su estado actual (su valor se muestra como texto), pero los botones de click no están disponibles para ellas porque su lógica no es booleana. Para modificarlas usa el comando de WorldGuard:

```
/rg flag <región> <flag> <valor>
```

---

## Flags comunes de WorldGuard

Estas son algunas de las flags más usadas. Todas son `StateFlag` y por tanto editables desde el GUI:

| Flag | Descripción | Estado por defecto |
|---|---|---|
| `pvp` | Permite o deniega el combate entre jugadores. | DENY en `__global__` |
| `mob-spawning` | Permite o deniega el spawn de mobs. | ALLOW |
| `fire-spread` | Permite o deniega la propagación del fuego. | ALLOW |
| `lava-fire` | Permite o deniega que la lava cause fuego. | ALLOW |
| `block-break` | Permite o deniega romper bloques. | ALLOW para miembros |
| `block-place` | Permite o deniega colocar bloques. | ALLOW para miembros |
| `use` | Permite o deniega usar cofres, palancas, etc. | ALLOW para miembros |
| `interact` | Permite o deniega interacción general. | ALLOW para miembros |
| `chest-access` | Permite o deniega acceso a cofres específicamente. | ALLOW para miembros |
| `creeper-explosion` | Permite o deniega explosiones de creepers. | ALLOW |
| `tnt` | Permite o deniega explosiones de TNT. | ALLOW |
| `vehicle-place` | Permite o deniega colocar vehículos (barcas, minecarts). | ALLOW |
| `vehicle-destroy` | Permite o deniega destruir vehículos. | ALLOW |
| `sleep` | Permite o deniega dormir en camas. | ALLOW |
| `greeting` | Mensaje al entrar a la región (StringFlag). | Sin valor |
| `farewell` | Mensaje al salir de la región (StringFlag). | Sin valor |
| `heal-amount` | Cantidad de corazones que se regeneran (IntegerFlag). | Sin valor |
| `feed-amount` | Cantidad de comida que se regenera (IntegerFlag). | Sin valor |

---

## Cómo se guardan los cambios

Cada vez que se hace click en una flag editable desde el GUI, NXGuard:

1. Aplica el nuevo valor a la región en memoria mediante la API de WorldGuard.
2. Llama a `RegionManager.saveChanges()` para persistir los cambios en el archivo de regiones del mundo (normalmente `world/region/`).
3. Actualiza el ítem en el inventario para reflejar el nuevo estado visualmente.

Si `saveChanges()` lanza una excepción, se registra una advertencia en la consola y se notifica al jugador, pero el valor en memoria puede haberse aplicado igualmente.

---

## La región `__global__`

WorldGuard tiene una región especial llamada `__global__` que aplica a todo el mundo. Sus flags afectan a todas las áreas que no estén cubiertas por otra región. NXGuard la muestra en el GUI como cualquier otra región y permite editar sus flags de la misma manera.

> Cambiar flags en `__global__` tiene efecto en todo el mundo, no solo en una zona. Úsala con cuidado.
