# Configuración — config.yml

El archivo `config.yml` se genera automáticamente en `plugins/NXGuard/config.yml` la primera vez que el servidor inicia con el plugin. Para aplicar cambios usa `/guard reload` o reinicia el servidor.

---

## Archivo completo con comentarios

```yaml
# NXGuard — configuración general
# Colores con códigos legacy (&a, &c, etc.)

settings:
  # Cuántas regiones se muestran por página en el menú principal.
  # Valor recomendado: 45 (máximo para un inventario de 54 slots con fila de navegación).
  regions-per-page: 45

gui:
  # Título del menú principal de regiones.
  # Placeholders: {page} = página actual, {max_page} = total de páginas.
  main-title: "&8Regiones &7— &fPágina {page}/{max_page}"

  # Título del menú de flags de una región.
  # Placeholder: {region} = nombre de la región.
  flags-title: "&8Flags &7— &f{region}"

  # Ítem que representa cada región en el menú principal.
  region-item:
    material: WHITE_BANNER
    name: "&e{region}"
    lore:
      - "&7Mundo: &f{world}"
      - "&7Prioridad: &f{priority}"
      - "&7Flags activas: &f{active_flags}"
      - ""
      - "&aClick izquierdo &7→ editar flags"

  # Ítem para flags en estado ALLOW (activadas).
  flag-active:
    material: LIME_DYE
    name: "&a{flag}"

  # Ítem para flags en estado DENY (desactivadas explícitamente).
  flag-deny:
    material: RED_DYE
    name: "&c{flag}"

  # Ítem para flags en estado NONE (sin valor asignado, neutral).
  flag-inactive:
    material: GRAY_DYE
    name: "&7{flag}"

  # Botones de navegación
  navigation:
    previous:
      material: ARROW
      name: "&e← Página anterior"
    next:
      material: ARROW
      name: "&ePágina siguiente →"
    back:
      material: BARRIER
      name: "&cVolver al listado"

messages:
  prefix: "&8[&6NXGuard&8] &r"
  no-permission: "&cNo tienes permiso para hacer eso."
  reload-success: "&aConfiguración y mensajes recargados."
  worldguard-missing: "&cWorldGuard no está disponible."
  player-only: "&cEste comando solo puede usarse en el juego."
  region-not-found: "&cNo se encontró la región &f{region}&c en este mundo."
  no-regions: "&cNo hay regiones en este mundo."

  # Líneas del menú de ayuda (/guard sin argumentos).
  help:
    - "&6NXGuard &7— comandos:"
    - "&e/guard gui &7— menú de regiones"
    - "&e/guard info <región> &7— información de una región"
    - "&e/guard reload &7— recargar configuración"

  # Formato de /guard info <región>
  info-header: "&6Región &e{region}"
  info-world: "&7Mundo: &f{world}"
  info-priority: "&7Prioridad: &f{priority}"
  info-owners: "&7Dueños: &f{owners}"
  info-members: "&7Miembros: &f{members}"
  info-active-flags: "&7Flags activas: &f{count}"
  info-edit-engine: "&7Motor de ediciones: &f{engine}"
  info-flags-list: "&7Flags:"
  info-flag-line: "  &8- &f{flag}&8: &7{value}"

  # Mensajes de acción sobre flags
  flag-updated: "&aFlag &f{flag} &aactualizada."
  flag-not-editable: "&cEsta flag no se puede editar desde el GUI."

  # Mensajes de consola al iniciar
  startup-edit-engine: "Motor de ediciones detectado: {engine}"
  startup-extra-flags: "WorldGuard Extra Flags detectado — flags adicionales disponibles."
  startup-extra-flags-missing: "WorldGuard Extra Flags no instalado (opcional)."
```

---

## Referencia de secciones

### `settings`

| Clave | Tipo | Descripción |
|---|---|---|
| `regions-per-page` | Integer (1-45) | Regiones visibles por página en el menú principal. |

---

### `gui`

#### Títulos

| Clave | Placeholders disponibles |
|---|---|
| `main-title` | `{page}`, `{max_page}` |
| `flags-title` | `{region}` |

#### Ítems de región (`region-item`)

| Clave | Descripción |
|---|---|
| `material` | Nombre del material de Bukkit (ej: `WHITE_BANNER`, `PLAYER_HEAD`). |
| `name` | Nombre del ítem. Placeholder: `{region}`. |
| `lore` | Lista de líneas. Placeholders: `{world}`, `{priority}`, `{active_flags}`. |

#### Ítems de flag

Cada estado tiene su propia sección con `material` y `name`:

| Sección | Estado | Material por defecto |
|---|---|---|
| `flag-active` | ALLOW — activada | `LIME_DYE` |
| `flag-deny` | DENY — desactivada | `RED_DYE` |
| `flag-inactive` | NONE — neutral | `GRAY_DYE` |

El placeholder `{flag}` en `name` se reemplaza con el nombre de la flag.

#### Navegación (`navigation`)

| Clave | Descripción |
|---|---|
| `navigation.previous` | Botón de página anterior en el menú de regiones (slot 45). |
| `navigation.next` | Botón de página siguiente, tanto en regiones (slot 53) como en flags (slot 53). |
| `navigation.back` | Botón de volver al listado en el menú de flags (slot 49). |

---

### `messages`

Todos los mensajes soportan códigos de color con `&`. El `prefix` se añade automáticamente al inicio de cada mensaje enviado al jugador.

| Clave | Placeholders |
|---|---|
| `no-permission` | — |
| `reload-success` | — |
| `region-not-found` | `{region}` |
| `info-header` | `{region}` |
| `info-world` | `{world}` |
| `info-priority` | `{priority}` |
| `info-owners` | `{owners}` |
| `info-members` | `{members}` |
| `info-active-flags` | `{count}` |
| `info-edit-engine` | `{engine}` |
| `info-flag-line` | `{flag}`, `{value}` |
| `flag-updated` | `{flag}` |
| `startup-edit-engine` | `{engine}` |

---

## Códigos de color soportados

NXGuard usa el sistema de color legacy de Bukkit con el prefijo `&`:

| Código | Color |
|---|---|
| `&0` - `&9` | Negro a azul claro |
| `&a` | Verde claro |
| `&b` | Aqua |
| `&c` | Rojo claro |
| `&d` | Rosa |
| `&e` | Amarillo |
| `&f` | Blanco |
| `&l` | **Negrita** |
| `&o` | *Cursiva* |
| `&n` | Subrayado |
| `&m` | Tachado |
| `&r` | Reset |
