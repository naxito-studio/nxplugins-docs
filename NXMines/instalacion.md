# Installation

## Prerequisites

Before installing NXMines make sure you have:

- A **Paper 1.20** (or higher) server.
- **WorldEdit** or **FastAsyncWorldEdit (FAWE)** installed and working.
- **Java 17** or higher.

> NXMines targets Paper as its server platform. It may work on derived versions such as Purpur, but official support is for Paper only.

---

## Installation steps

### 1. Put the .jar in the plugins folder

Copy the `NXMines-<version>.jar` file into your server's `plugins/` folder.

```
server/
└── plugins/
    ├── WorldEdit.jar      (or FastAsyncWorldEdit.jar)
    └── NXMines.jar        ← here
```

### 2. Start or restart the server

Start the server normally. NXMines will generate its file structure at:

```
plugins/
└── NXMines/
    ├── config.yml
    ├── menus.yml
    ├── particles.yml
    ├── sounds.yml
    ├── nxmines.db         ← SQLite database (default)
    └── lang/
        ├── messages-es.yml
        └── messages-en.yml
```

### 3. Verify the installation

Check the console. If everything goes well you will see lines similar to:

```
[NXMines] Hook: WorldEdit detected.
[NXMines] Hook: PlaceholderAPI detected.
[NXMines] Database: SQLite initialized successfully.
[NXMines] NXMines enabled successfully.
```

---

## Optional dependencies

| Plugin | Effect when installed |
|---|---|
| **PlaceholderAPI** | Enables the `%nxmines_*%` placeholders for scoreboards, chat, etc. |
| **Vault** | Allows economy integration in drops (economy commands). |
| **CataMines** | Allows importing its mines with `/mine convert catamines`. |
| **AxMines** | Allows importing its mines with `/mine convert axmines`. |

All optional plugins must load **before** NXMines. On startup, NXMines reports in the console which ones it detected.

---

## Changing the language

By default the messages are in **Spanish**. To switch them to English, edit `config.yml`:

```yaml
messages: "en"
```

And run `/mine reload` to apply the change.

---

## Configuring a MySQL database

By default NXMines uses SQLite (local file). To use MySQL or MariaDB edit the `database` section of `config.yml`:

```yaml
database:
  type: MYSQL
  mysql:
    host: localhost
    port: 3306
    database: nxmines
    username: root
    password: "your_password"
```

Restart the server after changing the database type. Data is not migrated automatically between SQLite and MySQL.

---

## Updating NXMines

1. Stop the server.
2. Replace the old `.jar` with the new one in `plugins/`.
3. Start the server.

> The `plugins/NXMines/` folder and all its files (including the database) are kept between updates. Check the release notes in case there are new keys in the configuration files.
