<div align="center">
  <img src="/nxrooms.png" alt="NXRooms Logo" width="200"/>
</div>

# NXRooms

**NXRooms** es un plugin de salas PvP competitivas para Minecraft, pensado para combates tipo arena en modos 1v1, 2v2 y 3v3. Usa un sistema de creación de salas físico basado en varita: sin coordenadas escritas a mano, sin configuración complicada — apuntas, haces click, y la sala queda lista.

---

## ¿Para qué sirve?

Si tu servidor quiere arenas PvP dedicadas donde los jugadores pelean en salas cerradas con paredes de cristal — con espectadores observando desde fuera, asignación automática de equipos y restauración completa del inventario/estado al terminar la partida — NXRooms te da todo el sistema listo para usar.

---

## ¿Qué puedes hacer con NXRooms?

- Crear salas con una **varita de 3 etapas** (región → entrada → confirmación), sin necesidad de comandos para la selección en sí.
- Jugar partidas de **1v1, 2v2 y 3v3**, además de cualquier otra combinación N contra M (`1v2`, `2v3`, etc.).
- Dejar que los jugadores **caminen físicamente** hacia la entrada de una sala para unirse — sin necesidad de comando `/join`.
- Ver partidas a través de **paredes de cristal** como espectador, sin afectar tu propio inventario.
- **Guardar y restaurar** automáticamente el inventario, efectos, experiencia y modo de juego de un jugador al entrar y salir de una sala.
- Activar o desactivar **flags por sala**: PVP, romper/colocar bloques, spawn de mobs, daño de caída/fuego/explosión, colocación de telaraña y lana, regeneración natural, conservar inventario.
- Aplicar **efectos de poción** (Velocidad, Fuerza, Resistencia, Prisa, etc.) automáticamente a todos dentro de una sala, con niveles ajustables.
- Elegir el **material de la barrera de cristal** que sella la entrada cuando una sala se llena, desde un menú con más de 20 tipos de vidrio, hielo y otros bloques.
- Cambiar el **modo de juego** de una sala y ajustar su **cuenta regresiva de apertura** directamente desde el GUI.
- Cambiar el idioma del plugin entre **inglés, español y portugués** con un click, desde un ícono de libro en el juego.

---

## Requisitos

| Requisito | Notas |
|---|---|
| Minecraft Paper | Recomendado. Spigot puede funcionar como alternativa. Versiones 1.20.x a 1.21.x |
| Java | 17 o 21 |
| WorldGuard | Obligatorio — se usa para proteger la región de cada sala |
| WorldEdit / FastAsyncWorldEdit | Opcional — solo necesario para funciones basadas en esquemáticos |
| LuckPerms | Opcional — para asignar permisos a rangos |
| PlaceholderAPI | Opcional — habilita los placeholders `%nxrooms_*%` |
| Vault | Opcional — integración de economía |

---

## Contenido de esta guía

- [Instalación](instalacion.md)
- [Comandos](comandos.md)
- [Permisos](permisos.md)
- [Sistema de varita](wand.md)
- [Uso del GUI](gui.md)
- [Flags y efectos de sala](flags.md)
- [Configuración — config.yml](configuracion/config-yml.md)
- [PlaceholderAPI](placeholders.md)
- [Preguntas frecuentes](faq.md)
