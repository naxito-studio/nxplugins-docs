# Permisos

Todos los permisos de NXGuard tienen `op` como valor por defecto, lo que significa que solo los operadores los tienen sin configuración adicional. Puedes asignarlos a rangos con cualquier plugin de permisos (LuckPerms, PermissionsEx, etc.).

---

## Tabla de permisos

| Permiso | Descripción | Default |
|---|---|---|
| `nxguard.use` | Permite usar `/guard` y ver la ayuda. Sin este permiso el jugador no puede ejecutar ningún subcomando. | `op` |
| `nxguard.gui` | Permite abrir el menú GUI de regiones con `/guard gui`. | `op` |
| `nxguard.info` | Permite consultar información de una región con `/guard info <región>`. | `op` |
| `nxguard.reload` | Permite recargar la configuración con `/guard reload`. | `op` |

---

## Jerarquía recomendada

```
nxguard.use          ← base, necesaria para todo
├── nxguard.gui      ← para poder abrir el GUI
├── nxguard.info     ← para ver info por chat
└── nxguard.reload   ← solo para administradores
```

> `nxguard.use` es el permiso padre. Sin él, los demás permisos no sirven porque el comando es rechazado antes de evaluar el subcomando.

---

## Ejemplo con LuckPerms

Dar acceso al GUI a un rango `moderador`:

```bash
/lp group moderador permission set nxguard.use true
/lp group moderador permission set nxguard.gui true
/lp group moderador permission set nxguard.info true
```

Dar acceso completo incluyendo reload a un rango `admin`:

```bash
/lp group admin permission set nxguard.use true
/lp group admin permission set nxguard.gui true
/lp group admin permission set nxguard.info true
/lp group admin permission set nxguard.reload true
```

---

## Mensajes de permiso denegado

Cuando un jugador no tiene el permiso necesario, recibe el mensaje configurado en `messages.no-permission` del `config.yml`. Por defecto:

```
[NXGuard] No tienes permiso para hacer eso.
```
