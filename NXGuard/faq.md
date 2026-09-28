# Frequently Asked Questions

---

## Installation and compatibility

**Does NXGuard work with Spigot or only with Paper?**

It works with both. It is compiled against the Bukkit 1.20 API, so it is compatible with any server that implements it: Spigot, Paper, Purpur, etc.

---

**The server says "WorldGuard is not installed" but WorldGuard is in plugins/.**

Make sure WorldGuard loaded correctly before NXGuard. Check the console for errors thrown by WorldGuard during its load. If WorldGuard depends on WorldEdit, verify that WorldEdit is also present and error-free.

---

**Is it compatible with versions older than 1.20?**

It is not guaranteed. The plugin's `api-version` is fixed at `1.20`. In older versions some materials may not exist and the behavior is undefined.

---

## GUI

**The GUI opens but it is empty.**

It means the world the player is in has no regions registered in WorldGuard. Create at least one region with WorldEdit + WorldGuard before using the GUI.

---

**I click a flag but nothing happens.**

There are two possible causes:
1. The flag is a `StringFlag`, `IntegerFlag` or another non-boolean type — it is not editable from the GUI. The lore will show "Not editable from the GUI".
2. There was an error while saving. Check the server console for an NXGuard warning about `saveChanges()`.

---

**Flag changes are not kept between server restarts.**

If `saveChanges()` fails silently, changes are applied in memory but not on disk. Check the write permissions of the `world/region/` folder (or your world's name). WorldGuard needs to be able to write there.

---

**Can I open the GUI of a different world than the one I'm in?**

No. The GUI always shows the regions of the world the player is currently standing in. To see regions of another world you must teleport to that world first.

---

**The "Next page" arrow does not appear in the flag editor.**

It means all the registered flags fit on a single page (fewer than 45). This is normal on servers without extra flag plugins.

---

## Flags

**A flag shows as gray but WorldGuard applies it as if it were enabled. Why?**

The gray state means the region has no value assigned for that flag, but WorldGuard may inherit the value from a parent region or apply its own global default. NXGuard only shows the value assigned directly on the region, not the effective inherited value.

---

**How do I edit text flags (greeting, farewell) or numeric ones?**

It is not possible from the GUI because their value is not boolean. Use the WorldGuard command directly:

```
/rg flag <region> greeting Welcome to {name}
/rg flag <region> heal-amount 2
```

---

**Can I edit flags of the `__global__` region?**

Yes. `__global__` appears in the GUI list like any other region. Its flags affect the whole world, so edit them carefully.

---

## Configuration

**I changed config.yml but the GUIs are still the same.**

Run `/guard reload` to apply the changes. GUIs that are already open must be closed and reopened to show the new values.

---

**Can I change the materials of the flag items?**

Yes. In `config.yml` change the values of `gui.flag-active.material`, `gui.flag-deny.material` and `gui.flag-inactive.material` to any valid Bukkit material, for example `GREEN_STAINED_GLASS_PANE`, `RED_STAINED_GLASS_PANE`, etc.

---

**Can I change how many regions appear per page?**

Yes. Modify `settings.regions-per-page` in `config.yml`. The maximum recommended value is `45` so the navigation row stays on the last row of the inventory. If you set a higher value, region items could overlap the navigation buttons.

---

## WorldGuard Extra Flags

**I have WorldGuard Extra Flags installed but its flags don't show up.**

Make sure WorldGuard Extra Flags loaded before NXGuard. If the load order is correct, the console should show:

```
[NXGuard] WorldGuard Extra Flags detected — additional flags available.
```

If it shows the "not installed" line even though the plugin is present, it may be a version compatibility problem between WorldGuard Extra Flags and your WorldGuard version.
