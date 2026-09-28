# NXMines

![NXMines Logo](../../.vitepress/public/nxmines.png)

**NXMines** es un plugin avanzado, modular y altamente configurable de minas para servidores Minecraft Paper 1.20+. Permite crear, gestionar y personalizar minas de minería con reinicio automático, composición de bloques personalizable, tablas de drops por bloque, interfaz gráfica completa y soporte para PlaceholderAPI y Vault.

---

## ¿Para qué sirve?

Si quieres tener zonas de minería en tu servidor que se regeneren automáticamente después de un tiempo (o cuando se vacían), NXMines te da todo lo necesario: crea minas usando tu selección de WorldEdit o FAWE, configura qué bloques aparecen (con sus porcentajes), define qué drops obtienen los jugadores al romper cada bloque, y gestiona todo desde un menú de inventario visual.

---

## ¿Qué puedes hacer con NXMines?

- Crear minas a partir de tu selección de WorldEdit / FAWE con un solo comando.
- Ver y gestionar todas tus minas desde un menú GUI paginado.
- Configurar la **composición de bloques** de cada mina con porcentajes precisos.
- Definir **tablas de drops personalizadas** por bloque: ítems, XP, comandos y mensajes.
- Ajustar el **intervalo de reinicio** de cada mina individualmente.
- Forzar reinicios manuales desde el GUI o por comando.
- **Redefinir la región** de una mina existente sin perder su configuración.
- **Duplicar** minas para reutilizar composición y drops.
- **Exportar** la configuración de una mina a un archivo YAML externo.
- **Importar minas** desde CataMines y AxMines con el comando `/mine convert`.
- Ver placeholders dinámicos en tiempo real con **PlaceholderAPI**.
- Elegir entre base de datos **SQLite** (por defecto) o **MySQL / MariaDB**.
- Personalizar partículas y sonidos para eventos de reinicio y creación.
- Soporte multiidioma: incluye mensajes en **español** e **inglés**.

---

## Requisitos

| Requisito | Notas |
|---|---|
| Minecraft Paper | Versión 1.20 o superior |
| Java | 17 o superior |
| WorldEdit **o** FastAsyncWorldEdit | Necesario para crear y redefinir minas |
| PlaceholderAPI | Opcional — habilita placeholders `%nxmines_*%` |
| Vault | Opcional — integración de economía |
| CataMines / AxMines | Opcional — solo necesario para importar minas |

---

## Contenido de esta guía

- [Instalación](instalacion.md)
- [Comandos](comandos.md)
- [Permisos](permisos.md)
- [Uso del GUI](gui.md)
- [Sistema de drops](drops.md)
- [PlaceholderAPI](placeholders.md)
- [Configuración — config.yml](configuracion/config-yml.md)
- [Configuración — menus.yml](configuracion/menus-yml.md)
- [Configuración — particles.yml](configuracion/particles-yml.md)
- [Configuración — sounds.yml](configuracion/sounds-yml.md)
- [Importar minas (Convert)](convert.md)
- [Preguntas frecuentes](faq.md)
