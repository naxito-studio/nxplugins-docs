# Importing Mines from Other Plugins

NXMines can import mines from other popular mines plugins. The command is `/mine convert`.

---

## Supported plugins

| Argument | Source plugin |
|---|---|
| `catamines` | CataMines |
| `axmines` | AxMines |

---

## Usage

```bash
/mine convert <plugin> [mine|all] [--dry-run]
```

| Argument | Description |
|---|---|
| `<plugin>` | Name of the source plugin (`catamines` or `axmines`). |
| `[mine\|all]` | Name of a specific mine to import, or `all` for all of them. |
| `[--dry-run]` | Simulation: shows how many mines would be imported without making changes. |

---

## Examples

```bash
# Import all mines from CataMines
/mine convert catamines all

# Import only the "VIP" mine from AxMines
/mine convert axmines VIP

# Preview without real changes
/mine convert axmines all --dry-run
```

---

## What gets imported?

| Data | Imported? |
|---|---|
| Mine name | ✅ Yes |
| Region (coordinates) | ✅ Yes |
| Block composition | ✅ Yes |
| Display name and prefix | ✅ Yes |
| Reset interval | ✅ Yes |
| Drop tables | ❌ No (must be configured manually) |

---

## Behavior after importing

- Mines imported from AxMines are **removed from the** `plugins/AxMines/mines/` **folder** once they are imported successfully.
- If a mine with the same name already exists in NXMines, it is skipped and a warning is logged.
- If the imported composition percentage does not add up to 100%, it is normalized automatically and a warning is logged.
- Characters not allowed in the name are replaced with `_`.

---

## Result messages

```
[NXMines] Successfully imported 5 mine(s) from AxMines.
[NXMines] Import warning: Composition for 'mine_a' normalised from 95.00% to 100%.
[NXMines] Import warning: Skipped 'vip': already exists in NXMines.
```

---

## Dry-run

```
[NXMines] [Test mode] 5 mine(s) from AxMines would be imported. (No changes applied)
```

Dry-run does not create mines, delete files or modify the database. It is always safe to use before a real import.
