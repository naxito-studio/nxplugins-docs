# Instalación

## Requisitos previos

Antes de instalar NXMines asegúrate de tener:

- Un servidor **Paper 1.20** o superior.
- **WorldEdit** o **FastAsyncWorldEdit (FAWE)** instalado y funcionando.
- **Java 17** o superior.

> NXMines usa Paper como servidor objetivo. Puede funcionar en versiones derivadas como Purpur, pero el soporte oficial es solo para Paper.

---

## Pasos de instalación

### 1. Colocar el .jar en la carpeta plugins

Copia el archivo `NXMines-<version>.jar` dentro de la carpeta `plugins/` de tu servidor.

```
servidor/
└── plugins/
    ├── WorldEdit.jar      (o FastAsyncWorldEdit.jar)
    └── NXMines.jar        ← aquí
```

### 2. Iniciar o reiniciar el servidor

Arranca el servidor normalmente. NXMines generará su estructura de archivos en:

```
plugins/
└── NXMines/
    ├── config.yml
    ├── menus.yml
    ├── particles.yml
    ├── sounds.yml
    ├── nxmines.db         ← base de datos SQLite (por defecto)
    └── lang/
        ├── messages-es.yml
        └── messages-en.yml
```

### 3. Verificar la instalación

Revisa la consola. Si todo va bien verás líneas similares a:

```
[NXMines] Hook: WorldEdit detectado.
[NXMines] Hook: PlaceholderAPI detectado.
[NXMines] Base de datos: SQLite inicializada correctamente.
[NXMines] NXMines habilitado correctamente.
```

---

## Dependencias opcionales

| Plugin | Efecto al instalarlo |
|---|---|
| **PlaceholderAPI** | Habilita los placeholders `%nxmines_*%` para scoreboard, chat, etc. |
| **Vault** | Permite integración de economía en los drops (comandos de economía). |
| **CataMines** | Permite importar sus minas con `/mine convert catamines`. |
| **AxMines** | Permite importar sus minas con `/mine convert axmines`. |

Todos los plugins opcionales deben cargarse **antes** que NXMines. Al iniciar, NXMines informa en consola cuáles detectó.

---

## Cambiar el idioma

Por defecto los mensajes están en **español**. Para cambiarlos a inglés, edita `config.yml`:

```yaml
messages: "en"
```

Y ejecuta `/mine reload` para aplicar el cambio.

---

## Configurar base de datos MySQL

Por defecto NXMines usa SQLite (archivo local). Para usar MySQL o MariaDB edita la sección `database` del `config.yml`:

```yaml
database:
  type: MYSQL
  mysql:
    host: localhost
    port: 3306
    database: nxmines
    username: root
    password: "tu_contraseña"
```

Reinicia el servidor después de cambiar el tipo de base de datos. Los datos no se migran automáticamente entre SQLite y MySQL.

---

## Actualizar NXMines

1. Detén el servidor.
2. Reemplaza el `.jar` antiguo por el nuevo en `plugins/`.
3. Inicia el servidor.

> La carpeta `plugins/NXMines/` y todos sus archivos (incluida la base de datos) se conservan entre actualizaciones. Revisa las notas de la versión por si hay nuevas claves en los archivos de configuración.
