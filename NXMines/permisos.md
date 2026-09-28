# Permissions

All NXMines permissions default to `op`, meaning only operators have them without additional configuration. You can assign them to ranks with any permissions plugin (LuckPerms, PermissionsEx, etc.).

---

## Permissions table

| Permission | Description | Default |
|---|---|---|
| `nxmines.admin` | Full access to all NXMines features. | `op` |
| `nxmines.gui` | Allows opening the main GUI menu with `/mine gui`. | `op` |
| `nxmines.create` | Allows creating mines with `/mine create`. | `op` |
| `nxmines.reset` | Allows forcing mine resets with `/mine reset`. | `op` |
| `nxmines.redefine` | Allows redefining a mine's region with `/mine redefine`. | `op` |
| `nxmines.reload` | Allows reloading the configuration with `/mine reload`. | `op` |
| `nxmines.convert` | Allows importing mines from other plugins with `/mine convert`. | `op` |
| `nxmines.version` | Allows viewing version information with `/mine version`. | `op` |

---

## Recommended hierarchy

```
nxmines.admin          ← full access
├── nxmines.gui        ← view the mine list and editor
├── nxmines.create     ← create mines
├── nxmines.reset      ← force resets
├── nxmines.redefine   ← redefine regions
├── nxmines.reload     ← reload configuration (admins only)
├── nxmines.convert    ← import mines (admins only)
└── nxmines.version    ← view version info
```

---

## LuckPerms example

Give GUI access to a `moderator` rank:

```bash
/lp group moderator permission set nxmines.gui true
/lp group moderator permission set nxmines.reset true
```

Give full access to an `admin` rank:

```bash
/lp group admin permission set nxmines.admin true
```

---

## Permission denied message

When a player lacks the required permission, they receive the message configured in `general.no-permission` of the messages file (`messages-es.yml` or `messages-en.yml`). By default:

```
[NXMines] You don't have permission to do that.
```
