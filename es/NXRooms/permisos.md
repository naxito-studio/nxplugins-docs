# Permisos

NXRooms divide los permisos en tres grupos: **admin** (gestión de salas), **use** (funciones cotidianas del jugador) y **staff** (espectar). Los permisos de admin tienen `op` por defecto; los permisos básicos de `use` tienen `true` por defecto (otorgados a todos), así que los jugadores normales pueden abrir el GUI y ver estadísticas desde el primer momento.

---

## Permisos de administrador

| Permiso | Descripción | Default |
|---|---|---|
| `nxrooms.admin` | Otorga todos los permisos de admin listados abajo. | `op` |
| `nxrooms.admin.create` | Crear nuevas salas con `/nxrooms create`. | `op` |
| `nxrooms.admin.delete` | Eliminar salas con `/nxrooms delete`. | `op` |
| `nxrooms.admin.wand` | Recibir y usar la varita de selección de salas. | `op` |
| `nxrooms.admin.forcestop` | Detener por la fuerza una sala activa. | `op` |
| `nxrooms.admin.reload` | Recargar la configuración del plugin. | `op` |

> `nxrooms.admin` también es necesario para editar los flags, efectos de poción, modo, material de cristal y cuenta regresiva de apertura de una sala desde el menú de detalle del GUI.

---

## Permisos de jugador

| Permiso | Descripción | Default |
|---|---|---|
| `nxrooms.use` | Permiso base para las funciones básicas. | `true` |
| `nxrooms.use.gui` | Abrir el menú principal de salas con `/nxrooms gui`. | `true` |
| `nxrooms.use.stats` | Ver estadísticas de jugador con `/nxrooms stats`. | `true` |
| `nxrooms.use.top` | Ver la tabla de clasificación con `/nxrooms top`. | `true` |
| `nxrooms.use.list` | Listar todas las salas con `/nxrooms list`. | `true` |

---

## Permisos de staff

| Permiso | Descripción | Default |
|---|---|---|
| `nxrooms.staff.spectate.silent` | Espectar salas de forma silenciosa (sin aparecer como observador ante los jugadores dentro). | `op` |

---

## Jerarquía recomendada

```
nxrooms.admin                ← gestión completa de salas
├── nxrooms.admin.create
├── nxrooms.admin.delete
├── nxrooms.admin.wand
├── nxrooms.admin.forcestop
└── nxrooms.admin.reload

nxrooms.use                  ← otorgado a todos por defecto
├── nxrooms.use.gui
├── nxrooms.use.stats
├── nxrooms.use.top
└── nxrooms.use.list

nxrooms.staff.spectate.silent ← staff / moderadores
```

---

## Ejemplo con LuckPerms

Dar acceso a la gestión de salas a un rango `builder`:

```bash
/lp group builder permission set nxrooms.admin true
```

Dar acceso a espectar en silencio a un rango `staff`:

```bash
/lp group staff permission set nxrooms.staff.spectate.silent true
```

---

## Mensaje de permiso denegado

Cuando un jugador no tiene el permiso necesario, recibe el mensaje configurado en `errors.no-permission` del archivo de idioma activo. Por defecto:

```
You don't have permission to use this command
```
