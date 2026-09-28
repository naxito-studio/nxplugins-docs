# Uso del GUI

NXRooms tiene tres menús conectados, todos inventarios de 54 slots: la **lista de salas**, el **editor de detalle de sala**, y dos sub-editores (**flags** y **efectos de poción**), más un selector de **material de cristal**.

---

## Menú de lista de salas

Se abre con `/nxrooms gui` (requiere `nxrooms.use.gui`).

### Layout

Las salas se colocan en una cuadrícula interior de 4×7 (filas 2–5, columnas 2–8), dejando el borde exterior para la navegación.

| Área de slots | Contenido |
|---|---|
| Filas 2–5, columnas interiores | Ítems de sala (hasta 28 por vista) |
| Slot 45 (esquina inferior izquierda) | Libro selector de idioma |

### Ítem de sala

Cada sala se muestra como un bloque de color según su estado:

| Estado | Material | Significado |
|---|---|---|
| READY | `LIME_STAINED_GLASS` | Vacía y disponible. |
| WAITING | `GLOWSTONE` | Tiene jugadores pero aún no está llena. |
| ACTIVE | `REDSTONE_BLOCK` | Llena — hay una partida en curso. |

Su lore muestra el modo (ej: `1v1`), el mínimo de jugadores y el estado actual. Hacer click en una sala abre su editor de detalle.

### Selector de idioma {#selector-de-idioma}

El slot 45 contiene un **libro encantado** que muestra los tres idiomas soportados (inglés, español, portugués), con el activo marcado en verde y los demás en rojo. Hacer click en él cambia al siguiente idioma en orden: `en → es → pt → en …`, cierra el menú y confirma el cambio en el chat.

---

## Menú de detalle de sala

Se abre al hacer click en una sala de la lista.

| Slot | Botón | Acción | Permiso |
|---|---|---|---|
| 11 | ← Back | Vuelve a la lista de salas. | — |
| 13 | Info de la sala | Muestra nombre, modo, estado y mundo (solo lectura). | — |
| 15 | Delete Room | Elimina la sala de forma permanente. | `nxrooms.admin.delete` |
| 27 | Opening Countdown | Click izquierdo: +1s (Shift: +5s). Click derecho: −1s (Shift: −5s). Rango 0–120s. | `nxrooms.admin` |
| 29 | Potion Effects | Abre el editor de efectos de poción. | — |
| 31 | Room Flags | Abre el editor de flags. | — |
| 33 | Change Mode | Cicla `1v1 → 2v2 → 3v3 → 1v2 → 2v1 → …`. | `nxrooms.admin` |
| 35 | Crystal Block | Abre el selector de material de cristal. | `nxrooms.admin` |

> La **Opening Countdown** es el tiempo que espera la sala, una vez que solo queda un jugador tras una partida, antes de retirar automáticamente la barrera de cristal y reabrir la entrada.

---

## Menú de Room Flags

Se abre desde el slot 31 del menú de detalle. Editarlo requiere `nxrooms.admin`.

Se muestran catorce flags como ítems activables, cada uno coloreado según su estado actual de activado/desactivado. Hacer click en cualquiera lo cambia al instante y guarda el cambio:

| Flag | Default | Controla |
|---|---|---|
| PVP | Activado | Si los jugadores pueden dañarse entre sí dentro de la sala. |
| Block Break | Desactivado | Romper bloques que no sean especiales. |
| Block Place | Desactivado | Colocar bloques que no sean especiales. |
| Mob Spawning | Desactivado | Spawns de mobs naturales o por evento dentro de la sala. |
| Keep Inventory | Activado | Si morir dentro de la sala conserva los ítems y la experiencia del jugador. |
| Fall Damage | Activado | Si el daño de caída se aplica dentro de la sala. |
| Hunger Drain | Desactivado | Si el nivel de comida puede disminuir dentro de la sala. |
| Fire Damage | Desactivado | Daño por fuego, lava y superficies calientes. |
| Explosion Damage | Desactivado | Daño por explosiones de bloques/entidades. |
| Cobweb Place | Activado | Colocar telarañas específicamente (separado del flag general de Block Place). |
| Cobweb Break | Activado | Romper telarañas específicamente. |
| Wool Place | Activado | Colocar cualquier color de lana específicamente. |
| Wool Break | Activado | Romper cualquier color de lana específicamente. |
| Natural Regen | Activado | Si la salud se regenera cuando la barra de comida está llena. |

---

## Menú de Potion Effects

Se abre desde el slot 29 del menú de detalle. Editarlo requiere `nxrooms.admin`.

Hay nueve efectos disponibles — Velocidad, Fuerza, Resistencia, Salto, Regeneración, Resistencia al Fuego, Invisibilidad, Visión Nocturna y Prisa — cada uno mostrado con su nivel actual y estado de activado/desactivado.

| Acción | Resultado |
|---|---|
| Click izquierdo (desactivado) | Activa el efecto en Nivel 1. |
| Click izquierdo (activado) | Aumenta el nivel en 1 (Shift: en 10), hasta el Nivel 100. |
| Click derecho | Desactiva el efecto y lo reinicia al Nivel 1. |

Los efectos activados se aplican de forma continua (duración infinita) a todos los jugadores mientras permanezcan dentro de la sala, y se retiran en el momento en que salen.

---

## Menú de Crystal Block

Se abre desde el slot 35 del menú de detalle. Editarlo requiere `nxrooms.admin`.

Una cuadrícula de más de 20 materiales — todos los colores de vidrio teñido, vidrio, telaraña, variantes de hielo y barrera, además de una opción transparente "None" (internamente `AIR`) — te permite elegir qué llena la entrada cuando la sala se llena. El material seleccionado actualmente se resalta en verde.

---

## Navegación completa

```
/nxrooms gui
    └─► Lista de salas
            │  click en una sala
            └─► Detalle de sala
                    │  click en Room Flags
                    └─► Editor de flags  ──(Back)──► Detalle de sala
                    │  click en Potion Effects
                    └─► Editor de efectos ──(Back)──► Detalle de sala
                    │  click en Crystal Block
                    └─► Selector de cristal ──(Back)──► Detalle de sala
                    │  click en ← Back
                    └─► Lista de salas
```
