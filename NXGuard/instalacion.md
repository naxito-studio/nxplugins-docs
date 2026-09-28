# Installation

## Prerequisites

Before installing NXGuard make sure you have:

- A **Paper or Spigot 1.20** (or higher) server.
- **WorldEdit** installed (it ships with WorldGuard or is installed separately).
- **WorldGuard** installed and working.
- Java 17 or higher.

> NXGuard will not work if WorldGuard is not present. On startup, if it can't find it, the plugin disables itself automatically and leaves an error message in the console.

---

## Installation steps

### 1. Put the .jar in the plugins folder

Copy the `NXGuard-<version>.jar` file into your server's `plugins/` folder.

```
server/
└── plugins/
    ├── WorldGuard.jar
    ├── WorldEdit.jar
    └── NXGuard.jar        ← here
```

### 2. Start or restart the server

Start the server normally. NXGuard will generate its configuration file at:

```
plugins/
└── NXGuard/
    └── config.yml
```

### 3. Verify the installation

Check the console. You should see lines like these:

```
[NXGuard] Edit engine detected: WorldEdit
[NXGuard] WorldGuard Extra Flags not installed (optional).
[NXGuard] NXGuard enabled successfully.
```

If you see this instead:

```
[NXGuard] WorldGuard is not installed. NXGuard will be disabled.
```

it means WorldGuard is not in the `plugins/` folder or did not load correctly.

---

## Optional installation: WorldGuard Extra Flags

If you use **WorldGuard Extra Flags**, place it in `plugins/` too before starting. NXGuard detects it automatically and prints in the console:

```
[NXGuard] WorldGuard Extra Flags detected — additional flags available.
```

This makes all the extra flags from that plugin appear in the NXGuard GUI with no additional configuration.

---

## Updating NXGuard

1. Stop the server.
2. Replace the old `.jar` with the new one in `plugins/`.
3. Start the server.

> The `plugins/NXGuard/` folder and its `config.yml` are kept between updates. Check the release notes in case there are new keys in the configuration.
