# Permisos

Todos los permisos de NXMines tienen `op` como valor por defecto, lo que significa que solo los operadores los tienen sin configuración adicional. Puedes asignarlos a rangos con cualquier plugin de permisos (LuckPerms, PermissionsEx, etc.).

---

## Tabla de permisos

| Permiso | Descripción | Default |
|---|---|---|
| `nxmines.admin` | Acceso completo a todas las funciones de NXMines. | `op` |
| `nxmines.gui` | Permite abrir el menú GUI principal con `/mine gui`. | `op` |
| `nxmines.create` | Permite crear minas con `/mine create`. | `op` |
| `nxmines.reset` | Permite forzar el reinicio de minas con `/mine reset`. | `op` |
| `nxmines.redefine` | Permite redefinir la región de una mina con `/mine redefine`. | `op` |
| `nxmines.reload` | Permite recargar la configuración con `/mine reload`. | `op` |
| `nxmines.convert` | Permite importar minas desde otros plugins con `/mine convert`. | `op` |
| `nxmines.version` | Permite ver la información de versión con `/mine version`. | `op` |

---

## Jerarquía recomendada

```
nxmines.admin          ← acceso total
├── nxmines.gui        ← ver la lista y el editor de minas
├── nxmines.create     ← crear minas
├── nxmines.reset      ← forzar reinicios
├── nxmines.redefine   ← redefinir regiones
├── nxmines.reload     ← recargar configuración (solo admins)
├── nxmines.convert    ← importar minas (solo admins)
└── nxmines.version    ← ver info de versión
```

---

## Ejemplo con LuckPerms

Dar acceso al GUI a un rango `moderador`:

```bash
/lp group moderador permission set nxmines.gui true
/lp group moderador permission set nxmines.reset true
```

Dar acceso completo a un rango `admin`:

```bash
/lp group admin permission set nxmines.admin true
```

---

## Mensaje de permiso denegado

Cuando un jugador no tiene el permiso necesario, recibe el mensaje configurado en `general.no-permission` del archivo de mensajes (`messages-es.yml` o `messages-en.yml`). Por defecto:

```
[NXMines] No tienes permiso para hacer eso.
```
