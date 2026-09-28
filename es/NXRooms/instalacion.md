# Instalación

## Requisitos previos

Antes de instalar NXRooms asegúrate de tener:

- Un servidor **Paper** (recomendado), Minecraft 1.20.x a 1.21.x.
- **Java 17 o 21**.
- **WorldGuard** instalado — NXRooms lo usa para proteger la región de cada sala.

> WorldEdit / FastAsyncWorldEdit, LuckPerms, PlaceholderAPI y Vault son dependencias blandas opcionales. NXRooms las detecta automáticamente si están presentes.

---

## Pasos de instalación

### 1. Colocar el .jar en la carpeta plugins

Copia el archivo `NXRooms-<version>.jar` dentro de la carpeta `plugins/` de tu servidor.

```
servidor/
└── plugins/
    ├── WorldGuard.jar
    └── NXRooms.jar        ← aquí
```

### 2. Iniciar o reiniciar el servidor

Arranca el servidor normalmente. NXRooms generará su estructura de archivos en:

```
plugins/
└── NXRooms/
    ├── config.yml
    ├── kits.yml
    ├── rooms.yml
    ├── messages.yml
    ├── messages_en.yml
    ├── messages_es.yml
    └── messages_pt.yml
```

### 3. Verificar la instalación

Revisa la consola. Deberías ver:

```
[NXRooms] NXRooms has been enabled!
[NXRooms] Language loaded: Español
```

---

## Compilar desde el código fuente

Si prefieres compilar el plugin tú mismo:

```bash
mvn clean package
```

Esto genera el `.jar` del plugin en `target/`, listo para colocar en `plugins/`.

---

## Cambiar el idioma

NXRooms incluye mensajes en inglés, español y portugués. El idioma activo se guarda en `config.yml`:

```yaml
language: "es"
```

Los valores aceptados son `en`, `es` y `pt`. También puedes cambiarlo desde el juego — consulta el libro de idioma en la [guía del GUI](gui.md#selector-de-idioma).

---

## Ajustes clave a revisar tras instalar

| Ajuste | Qué controla | Por defecto |
|---|---|---|
| `lobbyWorld` | El mundo donde se ubican las salas. | `world` |
| `maxPlayers` | Máximo de jugadores permitidos por sala. | `10` |
| `wandMaterials.stage1/2/3` | Los tres materiales de hacha usados para la varita de creación de salas. | Hacha de hierro / oro / diamante |
| `resetCrystalMaterial` | Bloque por defecto usado para la barrera de la entrada. | `GLASS` |

Consulta [Configuración — config.yml](configuracion/config-yml.md) para la referencia completa.
