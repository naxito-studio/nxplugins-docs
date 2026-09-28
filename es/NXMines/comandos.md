# Comandos

El comando principal es `/mine`. Tiene un alias: `/nxmines`.

---

## Resumen

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/mine help` | Muestra la lista de subcomandos disponibles. | — |
| `/mine create <nombre>` | Crea una mina con tu selección de WorldEdit / FAWE. | `nxmines.create` |
| `/mine gui` | Abre el menú GUI con la lista de todas las minas. | `nxmines.gui` |
| `/mine reset <nombre>` | Fuerza el reinicio inmediato de una mina. | `nxmines.reset` |
| `/mine redefine <nombre> [confirm]` | Reemplaza la región de una mina con tu selección actual. | `nxmines.redefine` |
| `/mine reload` | Recarga todos los archivos de configuración sin reiniciar. | `nxmines.reload` |
| `/mine convert <plugin> [mina\|all] [--dry-run]` | Importa minas desde otro plugin (CataMines o AxMines). | `nxmines.convert` |
| `/mine version` | Muestra la versión del plugin y el estado de los hooks. | `nxmines.version` |

---

## Detalle de cada subcomando

### `/mine create <nombre>`

**Solo jugadores** (no funciona desde consola).

Crea una nueva mina usando la selección activa de WorldEdit o FAWE como región. El nombre debe contener solo letras, números, guiones y guiones bajos (máximo 64 caracteres).

**Flujo:**
1. Selecciona el área en WorldEdit con la varita (`//wand`) y define los dos puntos.
2. Ejecuta `/mine create spawn_mine`.
3. La mina se crea y su contador de reinicio empieza.
4. Accede al GUI con `/mine gui` para configurar composición y drops.

**Errores posibles:**
- `Nombre inválido` — el nombre contiene caracteres no permitidos.
- `Ya existe una mina con ese nombre` — usa un nombre diferente.
- `No tienes una selección activa` — haz una selección en WorldEdit primero.
- `La región se solapa con otra mina` — ajusta la selección o activa `allow-region-overlap` en `config.yml`.

---

### `/mine gui`

**Solo jugadores** (no funciona desde consola).

Abre el menú GUI principal con la lista de todas las minas del servidor. Desde aquí puedes ver el estado de cada mina y acceder a su editor.

---

### `/mine reset <nombre>`

Disponible desde consola y para jugadores.

Fuerza el reinicio inmediato de la mina indicada, independientemente de su temporizador. Si la mina ya está reiniciándose, muestra un mensaje de error.

```
/mine reset spawn_mine
```

El tab-completion autocompleta con los nombres de las minas existentes.

---

### `/mine redefine <nombre> [confirm]`

**Solo jugadores** (no funciona desde consola).

Reemplaza la región de una mina existente con tu selección activa de WorldEdit / FAWE. La composición, los drops y el resto de configuración se conservan.

Si el volumen de la nueva región difiere del original en más del umbral configurado (`redefine-size-change-warning-threshold` en `config.yml`), se muestra una advertencia y se requiere confirmación:

```
/mine redefine spawn_mine
# → Advertencia: la nueva región difiere en tamaño (500 → 2000 bloques).
#   Confirma con /mine redefine spawn_mine confirm

/mine redefine spawn_mine confirm
# → La región de la mina spawn_mine ha sido actualizada.
```

---

### `/mine reload`

Disponible desde consola y para jugadores.

Recarga en caliente todos los archivos de configuración:
- `config.yml`
- `menus.yml`
- `particles.yml`
- `sounds.yml`
- `lang/messages-<idioma>.yml`

Los cambios en mensajes, menús y ajustes de rendimiento se aplican inmediatamente. Los GUIs que estén abiertos deben cerrarse y reabrirse para reflejar los nuevos valores.

---

### `/mine convert <plugin> [mina|all] [--dry-run]`

Disponible desde consola y para jugadores.

Importa minas desde otro plugin de minas compatible. Los plugins soportados actualmente son:

| Argumento `<plugin>` | Origen |
|---|---|
| `catamines` | Importa desde CataMines |
| `axmines` | Importa desde AxMines |

**Ejemplos:**

```bash
# Importar todas las minas de CataMines
/mine convert catamines all

# Importar solo la mina "A" de AxMines
/mine convert axmines A

# Simulación sin aplicar cambios (dry-run)
/mine convert catamines all --dry-run
```

> El modo `--dry-run` muestra cuántas minas se importarían sin hacer cambios reales. Útil para verificar antes de ejecutar.

---

### `/mine version`

Muestra información sobre el plugin, el entorno del servidor y el estado de cada hook:

```
 NXMines v1.0.0
 Autor(es): Naxito's Studios

 Java: 17.0.9
 Servidor: git-Paper-388 / 1.20.4-R0.1-SNAPSHOT
 Base de Datos: SQLITE

 Hooks de Plugins:
   WorldEdit/FAWE : ✔ WorldEdit 7.2.15
   PlaceholderAPI : ✔ 2.11.6
   Vault          : ✘ not found
   CataMines      : ✘ not found
   AxMines        : ✘ not found
```
