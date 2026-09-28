# Preguntas frecuentes

---

## Instalación y compatibilidad

**¿Necesito WorldGuard para usar NXRooms?**

Sí. NXRooms usa WorldGuard para proteger la región de cada sala y replicar los flags base de PVP/Entry/Block. Sin él, la creación de salas no generará una región de protección, aunque el plugin en sí igual cargará.

---

**¿Qué versiones de Minecraft son compatibles?**

De 1.20.x a 1.21.x en Paper (recomendado), con Spigot como alternativa. Se requiere Java 17 o 21.

---

**¿Necesito WorldEdit o FAWE?**

Son dependencias blandas opcionales, listadas para funciones relacionadas con esquemáticos. La selección de salas con la varita en sí no las requiere — funciona con los propios eventos de interacción de bloques de Bukkit.

---

## Creación de salas

**Ejecuté `/nxrooms create` pero no pasó nada.**

Asegúrate de que tu selección con la varita esté completamente terminada — tanto la región (Etapa 1) como la apertura de cristal (Etapa 2) deben estar fijadas, lo que actualiza la varita a un Hacha de Netherite. Si la varita sigue siendo Hacha de Oro o de Diamante, la selección aún no está terminada.

---

**¿Una sala puede tener cualquier forma, o tiene que ser un cubo?**

Se acepta cualquier forma, siempre que las dos esquinas de la región no sean exactamente el mismo bloque. Plataformas planas de 1 bloque de alto y corredores angostos funcionan igual de bien que cajas 3D completas.

---

**Recibo "Crystal opening must be inside the room region".**

Los dos puntos que seleccionaste para la entrada deben caer dentro de la caja delimitadora de la sala (expandida en 1 bloque para que puedas hacer click en la cara exterior de una pared). Vuelve a ejecutar `/nxrooms wand` y reselecciona la entrada con más cuidado.

---

## Jugabilidad

**¿Cómo se une un jugador a una sala?**

Caminando físicamente por la entrada hacia el interior de la caja delimitadora de la sala. No hay comando `/join` — la entrada y salida se detectan mediante eventos de movimiento y teletransporte.

---

**¿Qué pasa cuando la sala se llena?**

El material de cristal configurado para esa sala (vidrio por defecto) se coloca en toda el área de la entrada, sellándola, y el estado de la sala cambia a `ACTIVE`.

---

**¿Qué pasa cuando los jugadores salen, uno por uno?**

Cuando la sala queda con exactamente un jugador restante, empieza una cuenta regresiva de apertura (configurable por sala, desde el menú de detalle). Si entra un segundo jugador antes de que termine, la cuenta regresiva se cancela. Al llegar a cero, se retira la barrera y la sala se reabre. Si también sale el último jugador, la barrera se retira de inmediato y la sala vuelve al estado `READY`.

---

**¿Pueden los espectadores entrar caminando a una sala activa?**

No. Los jugadores en modo de juego Espectador son teletransportados automáticamente de vuelta fuera de la barrera de cristal si intentan entrar a una sala activa.

---

## Configuración

**¿Puedo cambiar el idioma del plugin?**

Sí — ya sea configurando `language: "en"` / `"es"` / `"pt"` en `config.yml` y ejecutando `/nxrooms reload`, o desde el juego haciendo click en el libro de idioma del GUI de lista de salas (slot 45), que cicla por los tres idiomas al instante.

---

**¿`/nxrooms reload` afecta a las salas activas en ese momento?**

Recarga los archivos de configuración y vuelve a leer todos los datos de salas desde disco, así que cualquier cambio en memoria no guardado que se haya hecho fuera del flujo normal del GUI podría perderse. Los flags, efectos y ajustes de sala cambiados a través del GUI se guardan de inmediato, así que recargar justo después de usar el GUI es seguro.
