# Frequently Asked Questions

---

## Installation and compatibility

**Does NXMines work with Spigot?**

NXMines is developed for **Paper 1.20+** and uses the Paper API (classloader isolation, etc.). It is not guaranteed to work on pure Spigot. Paper, Purpur or other Paper-based distributions are recommended.

---

**Is it compatible with FastAsyncWorldEdit (FAWE)?**

Yes. NXMines detects both WorldEdit and FAWE automatically. You can use either one to make selections when creating or redefining mines.

---

**The server starts but NXMines does not create the database.**

Check that the server has write permissions on the `plugins/NXMines/` folder. The `nxmines.db` file (SQLite) is created automatically on first start. If you use MySQL, make sure the credentials in `config.yml` are correct and that the MySQL server is reachable.

---

**Is it compatible with versions older than 1.20?**

It is not guaranteed. The plugin's `api-version` is fixed at `1.20`. In older versions some materials and APIs may not be available.

---

## Creating mines

**The `/mine create` command says "You don't have an active selection".**

You must have an active WorldEdit selection before running the command. Use the WorldEdit wand (or `//wand`) and select the two points of your region with left and right click. If you use FAWE, it works the same way.

---

**I get "The region overlaps with another mine".**

By default mine regions cannot overlap. To allow it, edit `config.yml`:

```yaml
mines:
  allow-region-overlap: true
```

And run `/mine reload`.

---

**My mine's name is rejected as invalid.**

Names can only contain letters (`a-z`, `A-Z`), numbers (`0-9`), hyphens (`-`) and underscores (`_`). The name also cannot exceed 64 characters. Spaces and special characters are not allowed.

---

## GUI

**The GUI menu opens but it is empty.**

It means no mines have been created yet. Use `/mine create <name>` to create the first mine.

---

**I drag a block into the composition editor but it is not added.**

The block you drag must be a solid, placeable material. Materials such as water, air or non-placeable items are not valid as mine blocks.

---

**When saving the composition I get "Cannot exceed 100%".**

The sum of the percentages of all assigned blocks cannot exceed 100%. The summary item (slot 4 of the composition editor) shows the total assigned and the remaining available percentage.

---

## Resets

**When does a mine reset automatically?**

NXMines resets a mine when:
1. Its timer reaches zero (according to the configured interval).
2. The percentage of remaining blocks drops below `auto-reset-percentage` (if configured in `config.yml`).

---

**What reset strategy does NXMines use?**

- If the region's volume is ≤ `instant-reset-threshold` (1000 blocks by default), `InstantResetStrategy` is used: all blocks are placed in a single tick.
- If it is larger, `BatchResetStrategy` is used: blocks are placed in batches of `blocks-per-tick` per tick to reduce the impact on TPS.

---

**Reset messages appear to all players on the server. Can I limit that?**

Yes. Edit the `broadcast-mode` key in `config.yml`:

```yaml
mines:
  broadcast-mode: MINE      # Only players inside the mine
  # broadcast-mode: RADIUS  # Only players within a radius
  # broadcast-mode: GLOBAL  # Everyone (default)
  # broadcast-mode: NONE    # Nobody
  broadcast-radius: 100     # Only applies if broadcast-mode is RADIUS
```

---

## Drops

**Drops don't reach the player's inventory.**

Check that `drops.mode` in `config.yml` is `INVENTORY`. If you have an auto-pickup plugin (Drop2Inventory, AutoPickup, etc.), drops always go to the inventory regardless of the mode if `force-inventory-with-autopickup: true`.

---

**Can I make a drop run a command when it is picked up?**

Yes. In the drops editor add the command with the `{console:<cmd>}` or `{player:<cmd>}` prefix. The `%player%` placeholder is replaced with the player's name.

---

## Configuration

**I changed `config.yml` but the changes are not applied.**

Run `/mine reload` to apply changes on the fly. For database changes (type or credentials), a full server restart is required.

---

**Can I have the messages in English?**

Yes. Change `messages: "es"` to `messages: "en"` in `config.yml` and run `/mine reload`.

---

## PlaceholderAPI

**The `%nxmines_*%` placeholders show unresolved text.**

Make sure PlaceholderAPI is installed and loaded **before** NXMines. The `/mine version` command shows whether the PAPI hook was detected correctly. If it does not appear, install PAPI and restart the server.
