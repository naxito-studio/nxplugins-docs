# Installation

## Prerequisites

Before installing NXRooms make sure you have:

- A **Paper** server (recommended), Minecraft 1.20.x to 1.21.x.
- **Java 17 or 21**.
- **WorldGuard** installed — NXRooms uses it to protect each room's region.

> WorldEdit / FastAsyncWorldEdit, LuckPerms, PlaceholderAPI and Vault are optional soft-dependencies. NXRooms detects them automatically if present.

---

## Installation steps

### 1. Put the .jar in the plugins folder

Copy the `NXRooms-<version>.jar` file into your server's `plugins/` folder.

```
server/
└── plugins/
    ├── WorldGuard.jar
    └── NXRooms.jar        ← here
```

### 2. Start or restart the server

Start the server normally. NXRooms will generate its file structure at:

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

### 3. Verify the installation

Check the console. You should see:

```
[NXRooms] NXRooms has been enabled!
[NXRooms] Language loaded: English
```

---

## Building from source

If you prefer to compile the plugin yourself:

```bash
mvn clean package
```

This produces the plugin `.jar` under `target/`, ready to drop into `plugins/`.

---

## Changing the language

NXRooms ships with English, Spanish and Portuguese messages. The active language is stored in `config.yml`:

```yaml
language: "en"
```

Accepted values are `en`, `es` and `pt`. You can also change it in-game — see the language book in the [GUI guide](gui.md#language-selector).

---

## Key settings to check after installing

| Setting | What it controls | Default |
|---|---|---|
| `lobbyWorld` | The world where rooms are located. | `world` |
| `maxPlayers` | Maximum players allowed per room. | `10` |
| `wandMaterials.stage1/2/3` | The three axe materials used for the room-creation wand. | Iron / Golden / Diamond Axe |
| `resetCrystalMaterial` | Default block used for the entrance barrier. | `GLASS` |

See [Configuration — config.yml](configuracion/config-yml.md) for the full reference.
