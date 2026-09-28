# Comandos

El comando principal es `/guard`. Tiene tres aliases: `/nxguard` y `/gregion`.

---

## Resumen

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/guard` | Muestra la ayuda con todos los subcomandos. | `nxguard.use` |
| `/guard gui` | Abre el menú GUI de regiones. | `nxguard.gui` |
| `/guard info <región>` | Muestra información de una región por chat. | `nxguard.info` |
| `/guard reload` | Recarga el archivo `config.yml` sin reiniciar. | `nxguard.reload` |

---

## Detalle de cada subcomando

### `/guard`

Sin argumentos muestra el menú de ayuda configurado en `messages.help` del `config.yml`.

```
[NXGuard] NXGuard — comandos:
[NXGuard] /guard gui — menú de regiones
[NXGuard] /guard info <región> — información de una región
[NXGuard] /guard reload — recargar configuración
```

---

### `/guard gui`

**Solo jugadores** (no funciona desde consola).

Abre el inventario GUI con la lista de regiones del mundo donde está parado el jugador. Si el mundo no tiene ninguna región registrada en WorldGuard, muestra el mensaje `messages.no-regions` y no abre el GUI.

**Flujo:**
1. El jugador ejecuta `/guard gui`.
2. Se abre el menú de lista de regiones (paginado).
3. Hace click en una región para abrir el editor de flags.
4. Edita las flags con clicks izquierdo/derecho.
5. Usa el botón "Volver" para regresar a la lista.

---

### `/guard info <región>`

**Solo jugadores** (no funciona desde consola).

Muestra por chat información detallada de la región indicada en el mundo actual del jugador. Si la región no existe, muestra el mensaje `messages.region-not-found`.

**Ejemplo de salida:**

```
[NXGuard] Región spawn
[NXGuard] Mundo: world
[NXGuard] Prioridad: 10
[NXGuard] Dueños: (ninguno)
[NXGuard] Miembros: (ninguno)
[NXGuard] Flags activas: 3
[NXGuard] Motor de ediciones: WorldEdit
[NXGuard] Flags:
[NXGuard]   - pvp: deny
[NXGuard]   - mob-spawning: deny
[NXGuard]   - fire-spread: deny
```

El comando tiene **tab-completion** para el nombre de región — al escribir `/guard info sp` se autocompletará con las regiones del mundo que empiecen por `sp`.

---

### `/guard reload`

Recarga el archivo `config.yml` en caliente sin reiniciar el servidor. Los cambios en títulos, materiales, mensajes y ajustes de paginación se aplican inmediatamente.

> Los GUIs que estén abiertos en ese momento **no** se actualizan solos. El jugador debe cerrar y volver a abrir el GUI para ver los cambios.
