# Sistema de varita

Las salas de NXRooms se construyen con una **varita física de 3 etapas** en lugar de coordenadas escritas. Esta página explica exactamente cómo funciona cada etapa.

---

## Obtener la varita

Ejecuta `/nxrooms wand` (requiere `nxrooms.admin.wand`). Recibes un ítem irrompible llamado **"Room Selector"** que empieza como un **Hacha de Oro** — Etapa 1.

El lore de la varita se actualiza en vivo mientras la usas, indicándote siempre qué hacer click a continuación.

---

## Etapa 1 — Selección de región (Hacha de Oro)

Esto define el límite exterior de la sala: el cuboide que contendrá toda la arena.

| Click | Acción |
|---|---|
| Click izquierdo en un bloque | Fija el punto 1 de la región. |
| Click derecho en un bloque | Fija el punto 2 de la región. |

Se acepta cualquier forma siempre que los dos puntos no sean exactamente el mismo bloque — plataformas planas, corredores de 1 bloque de ancho y cajas 3D completas funcionan todas. Una vez que ambos puntos están fijados y son válidos, la varita se actualiza automáticamente a un **Hacha de Diamante** y pasa a la Etapa 2.

---

## Etapa 2 — Selección de la apertura de cristal (Hacha de Diamante)

Esto define la **entrada**: un área más pequeña, dentro o en el borde de la sala, que se sella con un bloque de barrera cuando la sala se llena.

| Click | Acción |
|---|---|
| Click izquierdo en un bloque | Fija el punto 1 de la apertura de cristal. |
| Click derecho en un bloque | Fija el punto 2 de la apertura de cristal. |

La apertura de cristal debe caer dentro de los límites de la región de la sala (expandidos en 1 bloque, para que puedas hacer click en la cara exterior de un bloque del borde). Si no es así, obtendrás un error y deberás volver a seleccionarla. Una vez que ambos puntos son válidos, la varita se actualiza a un **Hacha de Netherite** — selección completa.

---

## Etapa 3 — Confirmar la sala (Hacha de Netherite)

En este punto, hacer click con la varita ya no hace nada más; su lore simplemente muestra el comando a ejecutar:

```
/nxrooms create <nombre> <modo>
```

Ejecutar ese comando finaliza la sala, crea su región de WorldGuard y — importante — **reinicia automáticamente tu varita a la Etapa 1 (Hacha de Oro)**, para que puedas empezar de inmediato a seleccionar la siguiente sala sin volver a ejecutar `/nxrooms wand`.

---

## Retroalimentación visual

Cada click genera una pequeña ráfaga de partículas de color en el bloque clicado:

| Estado de selección | Color de partícula |
|---|---|
| Etapa 1 (región) | Dorado |
| Etapa 2 (apertura de cristal) | Aguamarina |
| Completado | Aguamarina |

---

## Flujo completo de un vistazo

```
/nxrooms wand
    └─► Hacha de Oro (Etapa 1)
            │  click izquierdo  → punto 1
            │  click derecho    → punto 2
            └─► Hacha de Diamante (Etapa 2)
                    │  click izquierdo  → punto de cristal 1
                    │  click derecho    → punto de cristal 2
                    └─► Hacha de Netherite (Etapa 3 — completo)
                            │  /nxrooms create <nombre> <modo>
                            └─► Sala creada, la varita vuelve a Hacha de Oro
```

---

## Errores comunes

| Mensaje | Causa |
|---|---|
| Invalid region coordinates | Ambos puntos de la región cayeron en el mismo bloque exacto. |
| Crystal opening must be inside the room region | Los puntos de cristal caen fuera de los límites de la sala. |
| Point must be in same world | Los dos puntos de la región están en mundos diferentes (no soportado actualmente). |
