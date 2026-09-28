# Preguntas frecuentes

---

## Instalación y compatibilidad

**¿NXGuard funciona con Spigot o solo con Paper?**

Funciona con ambos. Está compilado contra la API de Bukkit 1.20, por lo que es compatible con cualquier servidor que la implemente: Spigot, Paper, Purpur, etc.

---

**El servidor dice "WorldGuard no está instalado" pero WorldGuard sí está en plugins/.**

Asegúrate de que WorldGuard cargó correctamente antes de NXGuard. Revisa la consola para ver si WorldGuard lanzó errores durante su carga. Si WorldGuard depende de WorldEdit, verifica que WorldEdit también esté presente y sin errores.

---

**¿Es compatible con versiones anteriores a 1.20?**

No está garantizado. El `api-version` del plugin está fijado en `1.20`. En versiones anteriores algunos materiales pueden no existir y el comportamiento no está definido.

---

## GUI

**El GUI se abre pero está vacío.**

Significa que el mundo en el que está el jugador no tiene regiones registradas en WorldGuard. Crea al menos una región con WorldEdit + WorldGuard antes de usar el GUI.

---

**Hago click en una flag pero no pasa nada.**

Puede tener dos causas:
1. La flag es de tipo `StringFlag`, `IntegerFlag` u otro tipo no booleano — no es editable desde el GUI. El lore mostrará "No editable desde el GUI".
2. Hubo un error al guardar. Revisa la consola del servidor para ver si hay una advertencia de NXGuard sobre `saveChanges()`.

---

**Los cambios en las flags no se guardan entre reinicios del servidor.**

Si `saveChanges()` falla silenciosamente, los cambios se aplican en memoria pero no en disco. Revisa los permisos de escritura de la carpeta `world/region/` (o el nombre de tu mundo). WorldGuard necesita poder escribir ahí.

---

**¿Puedo abrir el GUI de un mundo diferente al que estoy?**

No. El GUI siempre muestra las regiones del mundo donde está parado el jugador en ese momento. Para ver regiones de otro mundo debes teletransportarte a ese mundo primero.

---

**La flecha de "Página siguiente" no aparece en el editor de flags.**

Significa que todas las flags registradas caben en una sola página (menos de 45). Esto es normal en servidores sin plugins extra de flags.

---

## Flags

**Una flag aparece en gris pero WorldGuard la aplica como si estuviera activa. ¿Por qué?**

El estado gris significa que la región no tiene un valor asignado para esa flag, pero WorldGuard puede heredar el valor de una región padre o aplicar su propio default global. NXGuard solo muestra el valor asignado directamente en la región, no el valor efectivo heredado.

---

**¿Cómo edito flags de tipo texto (greeting, farewell) o numéricas?**

Desde el GUI no es posible editarlas porque su valor no es booleano. Usa el comando de WorldGuard directamente:

```
/rg flag <región> greeting Bienvenido a {name}
/rg flag <región> heal-amount 2
```

---

**¿Puedo editar flags de la región `__global__`?**

Sí. `__global__` aparece en la lista del GUI como cualquier otra región. Sus flags afectan a todo el mundo, así que edítalas con cuidado.

---

## Configuración

**Cambié el config.yml pero los GUIs siguen iguales.**

Ejecuta `/guard reload` para aplicar los cambios. Los GUIs que ya estén abiertos deben cerrarse y reabrirse para mostrar los nuevos valores.

---

**¿Puedo cambiar los materiales de los ítems de flags?**

Sí. En `config.yml` cambia los valores de `gui.flag-active.material`, `gui.flag-deny.material` y `gui.flag-inactive.material` por cualquier material válido de Bukkit, por ejemplo `GREEN_STAINED_GLASS_PANE`, `RED_STAINED_GLASS_PANE`, etc.

---

**¿Puedo cambiar cuántas regiones aparecen por página?**

Sí. Modifica `settings.regions-per-page` en `config.yml`. El valor máximo recomendado es `45` para que la fila de navegación quede en la última fila del inventario. Si pones un valor mayor, los ítems de región podrían solaparse con los botones de navegación.

---

## WorldGuard Extra Flags

**Tengo WorldGuard Extra Flags instalado pero sus flags no aparecen.**

Asegúrate de que WorldGuard Extra Flags cargó antes que NXGuard. Si el orden de carga es correcto, la consola debería mostrar:

```
[NXGuard] WorldGuard Extra Flags detectado — flags adicionales disponibles.
```

Si muestra la línea de "no instalado" aunque el plugin esté presente, puede ser un problema de compatibilidad de versiones entre WorldGuard Extra Flags y tu versión de WorldGuard.
