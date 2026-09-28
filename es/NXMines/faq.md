# Preguntas frecuentes

---

## Instalación y compatibilidad

**¿NXMines funciona con Spigot?**

NXMines está desarrollado para **Paper 1.20+** y usa la API de Paper (classloader isolation, etc.). No está garantizado que funcione en Spigot puro. Se recomienda Paper, Purpur u otras distribuciones basadas en Paper.

---

**¿Es compatible con FastAsyncWorldEdit (FAWE)?**

Sí. NXMines detecta tanto WorldEdit como FAWE automáticamente. Puedes usar cualquiera de los dos para hacer selecciones al crear o redefinir minas.

---

**El servidor inicia pero NXMines no crea la base de datos.**

Revisa que el servidor tenga permisos de escritura en la carpeta `plugins/NXMines/`. El archivo `nxmines.db` (SQLite) se crea automáticamente al primer inicio. Si usas MySQL, asegúrate de que las credenciales en `config.yml` sean correctas y que el servidor MySQL esté accesible.

---

**¿Es compatible con versiones anteriores a 1.20?**

No está garantizado. El `api-version` del plugin está fijado en `1.20`. En versiones anteriores algunos materiales y APIs pueden no estar disponibles.

---

## Creación de minas

**El comando `/mine create` dice "No tienes una selección activa".**

Debes tener una selección de WorldEdit activa antes de ejecutar el comando. Usa la varita de WorldEdit (o `//wand`) y selecciona los dos puntos de tu región con click izquierdo y derecho. Si usas FAWE, funciona igual.

---

**Recibo "La región se solapa con otra mina".**

Por defecto las regiones de minas no pueden solaparse. Para permitirlo, edita `config.yml`:

```yaml
mines:
  allow-region-overlap: true
```

Y ejecuta `/mine reload`.

---

**El nombre de mi mina se rechaza como inválido.**

Los nombres solo pueden contener letras (`a-z`, `A-Z`), números (`0-9`), guiones (`-`) y guiones bajos (`_`). El nombre tampoco puede superar los 64 caracteres. Los espacios y caracteres especiales no están permitidos.

---

## GUI

**El menú del GUI se abre pero está vacío.**

Significa que no hay minas creadas todavía. Usa `/mine create <nombre>` para crear la primera mina.

---

**Arrastro un bloque al editor de composición pero no se añade.**

El bloque que arrastras debe ser un material sólido colocable. Materiales como agua, aire o ítems no colocables no son válidos como bloques de mina.

---

**Al guardar la composición recibo "No se puede superar el 100%".**

La suma de los porcentajes de todos los bloques asignados no puede exceder el 100%. El ítem de resumen (slot 4 del editor de composición) muestra el total asignado y el porcentaje restante disponible.

---

## Reinicios

**¿Cuándo se reinicia una mina automáticamente?**

NXMines reinicia una mina cuando:
1. Su temporizador llega a cero (según el intervalo configurado).
2. El porcentaje de bloques restantes cae por debajo de `auto-reset-percentage` (si está configurado en `config.yml`).

---

**¿Qué estrategia de reinicio usa NXMines?**

- Si el volumen de la región es ≤ `instant-reset-threshold` (por defecto 1000 bloques), se usa `InstantResetStrategy`: todos los bloques se colocan en un solo tick.
- Si es mayor, se usa `BatchResetStrategy`: los bloques se colocan por lotes de `blocks-per-tick` por tick para reducir el impacto en el TPS.

---

**Los mensajes de reinicio aparecen a todos los jugadores del servidor. ¿Puedo limitarlo?**

Sí. Edita la clave `broadcast-mode` en `config.yml`:

```yaml
mines:
  broadcast-mode: MINE      # Solo jugadores dentro de la mina
  # broadcast-mode: RADIUS  # Solo jugadores en un radio
  # broadcast-mode: GLOBAL  # Todos (por defecto)
  # broadcast-mode: NONE    # Nadie
  broadcast-radius: 100     # Solo aplica si broadcast-mode es RADIUS
```

---

## Drops

**Los drops no llegan al inventario del jugador.**

Comprueba que `drops.mode` en `config.yml` sea `INVENTORY`. Si tienes un plugin de auto-pickup (Drop2Inventory, AutoPickup, etc.), los drops siempre van al inventario independientemente del modo si `force-inventory-with-autopickup: true`.

---

**¿Puedo hacer que un drop ejecute un comando al recogerlo?**

Sí. En el editor de drops añade el comando con el prefijo `{console:<cmd>}` o `{player:<cmd>}`. El placeholder `%player%` se reemplaza por el nombre del jugador.

---

## Configuración

**Cambié `config.yml` pero los cambios no se aplican.**

Ejecuta `/mine reload` para aplicar cambios en caliente. Para cambios de base de datos (tipo o credenciales), es necesario reiniciar el servidor completamente.

---

**¿Puedo tener los mensajes en inglés?**

Sí. Cambia `messages: "es"` por `messages: "en"` en `config.yml` y ejecuta `/mine reload`.

---

## PlaceholderAPI

**Los placeholders `%nxmines_*%` muestran el texto sin resolver.**

Asegúrate de que PlaceholderAPI esté instalado y cargado **antes** que NXMines. El comando `/mine version` muestra si el hook de PAPI fue detectado correctamente. Si no aparece, instala PAPI y reinicia el servidor.
