# Comandos

El comando principal es `/nxrooms`. Tiene un alias: `/rooms`.

---

## Resumen

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/nxrooms wand` | Te entrega la varita de selección de salas. | `nxrooms.admin.wand` |
| `/nxrooms create <nombre> <modo>` | Crea una sala a partir de tu selección con la varita. | `nxrooms.admin.create` |
| `/nxrooms delete <nombre>` | Elimina una sala existente. | `nxrooms.admin.delete` |
| `/nxrooms gui` | Abre el menú principal de salas. | `nxrooms.use.gui` |
| `/nxrooms stats [jugador]` | Muestra las estadísticas de un jugador. | `nxrooms.use.stats` |
| `/nxrooms top` | Muestra la tabla de clasificación. | `nxrooms.use.top` |
| `/nxrooms reload` | Recarga la configuración del plugin. | `nxrooms.admin.reload` |
| `/nxrooms forcestop <nombre>` | Detiene por la fuerza una sala activa. | `nxrooms.admin.forcestop` |
| `/nxrooms list` | Lista todas las salas. | `nxrooms.use.list` |
| `/nxrooms help` | Muestra la ayuda de comandos. | `nxrooms.use` |

---

## Detalle de cada subcomando

### `/nxrooms wand`

**Solo jugadores** (no funciona desde consola).

Te entrega la varita **Room Selector**, que empieza como un Hacha de Oro. Te guía a través de una selección de 3 etapas — consulta [Sistema de varita](wand.md) para el flujo completo.

---

### `/nxrooms create <nombre> <modo>`

Finaliza la creación de una sala una vez que tu selección con la varita está completa (tanto la región como la apertura de cristal han sido marcadas). `<modo>` acepta `1v1`, `2v2`, `3v3`, o cualquier otra combinación `NvM` como `1v2` o `2v3`.

```
/nxrooms create arena1 1v1
```

Si el nombre ya está en uso, o la selección con la varita no está terminada, el comando falla con un mensaje explicativo y no se crea nada.

---

### `/nxrooms delete <nombre>`

Elimina una sala de forma permanente: su región de WorldGuard, su configuración guardada y sus flags. Esto no se puede deshacer.

```
/nxrooms delete arena1
```

---

### `/nxrooms gui`

**Solo jugadores** (no funciona desde consola).

Abre el menú principal con la lista de salas. Consulta [Uso del GUI](gui.md) para la estructura completa del menú.

---

### `/nxrooms stats [jugador]`

Muestra el historial de victorias/derrotas, la calificación ELO y las rachas propias, o las del jugador indicado.

```
/nxrooms stats
/nxrooms stats Steve
```

El tab-completion sugiere los nombres de los jugadores conectados.

---

### `/nxrooms top`

Muestra la tabla de clasificación del servidor, ordenada por ELO.

---

### `/nxrooms reload`

Recarga `config.yml`, el archivo de idioma activo y todos los datos de salas en memoria desde disco.

---

### `/nxrooms forcestop <nombre>`

Termina inmediatamente una partida activa en la sala indicada, sin importar su estado actual.

```
/nxrooms forcestop arena1
```

---

### `/nxrooms list`

Lista todas las salas configuradas actualmente en el servidor, junto con su modo y estado.

---

### `/nxrooms help`

Muestra la lista de subcomandos disponibles con una breve descripción de cada uno.
