# Permissions

All NXGuard permissions default to `op`, meaning only operators have them without additional configuration. You can assign them to ranks with any permissions plugin (LuckPerms, PermissionsEx, etc.).

---

## Permissions table

| Permission | Description | Default |
|---|---|---|
| `nxguard.use` | Allows using `/guard` and viewing the help. Without this permission the player cannot run any subcommand. | `op` |
| `nxguard.gui` | Allows opening the regions GUI menu with `/guard gui`. | `op` |
| `nxguard.info` | Allows viewing region information with `/guard info <region>`. | `op` |
| `nxguard.reload` | Allows reloading the configuration with `/guard reload`. | `op` |

---

## Recommended hierarchy

```
nxguard.use          ← base, required for everything
├── nxguard.gui      ← to be able to open the GUI
├── nxguard.info     ← to see info in chat
└── nxguard.reload   ← administrators only
```

> `nxguard.use` is the parent permission. Without it, the other permissions are useless because the command is rejected before the subcommand is evaluated.

---

## LuckPerms example

Give GUI access to a `moderator` rank:

```bash
/lp group moderator permission set nxguard.use true
/lp group moderator permission set nxguard.gui true
/lp group moderator permission set nxguard.info true
```

Give full access, including reload, to an `admin` rank:

```bash
/lp group admin permission set nxguard.use true
/lp group admin permission set nxguard.gui true
/lp group admin permission set nxguard.info true
/lp group admin permission set nxguard.reload true
```

---

## Permission denied message

When a player lacks the required permission, they receive the message configured in `messages.no-permission` of `config.yml`. By default:

```
[NXGuard] You don't have permission to do that.
```
