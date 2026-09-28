# Importar minas desde otros plugins

NXMines puede importar minas de otros plugins populares de minas. El comando es `/mine convert`.

---

## Plugins soportados

| Argumento | Plugin origen |
|---|---|
| `catamines` | CataMines |
| `axmines` | AxMines |

---

## Uso

```bash
/mine convert <plugin> [mina|all] [--dry-run]
```

| Argumento | Descripción |
|---|---|
| `<plugin>` | Nombre del plugin origen (`catamines` o `axmines`). |
| `[mina\|all]` | Nombre de una mina específica a importar, o `all` para todas. |
| `[--dry-run]` | Simulación: muestra cuántas minas se importarían sin hacer cambios. |

---

## Ejemplos

```bash
# Importar todas las minas de CataMines
/mine convert catamines all

# Importar solo la mina "VIP" de AxMines
/mine convert axmines VIP

# Simulación previa sin cambios reales
/mine convert axmines all --dry-run
```

---

## ¿Qué se importa?

| Dato | ¿Se importa? |
|---|---|
| Nombre de la mina | ✅ Sí |
| Región (coordenadas) | ✅ Sí |
| Composición de bloques | ✅ Sí |
| Display name y prefijo | ✅ Sí |
| Intervalo de reinicio | ✅ Sí |
| Tablas de drops | ❌ No (deben configurarse manualmente) |

---

## Comportamiento tras la importación

- Las minas importadas desde AxMines se **eliminan de la carpeta** `plugins/AxMines/mines/` tras ser importadas correctamente.
- Si una mina con el mismo nombre ya existe en NXMines, se omite y se registra una advertencia.
- Si el porcentaje de composición importado no suma 100%, se normaliza automáticamente y se registra una advertencia.
- Los caracteres no permitidos en el nombre se reemplazan por `_`.

---

## Mensajes de resultado

```
[NXMines] Se importaron 5 mina(s) de AxMines correctamente.
[NXMines] Advertencia de importación: Composition for 'mine_a' normalised from 95.00% to 100%.
[NXMines] Advertencia de importación: Skipped 'vip': already exists in NXMines.
```

---

## Dry-run

```
[NXMines] [Modo prueba] Se importarían 5 mina(s) de AxMines. (Sin cambios aplicados)
```

El dry-run no crea minas, no elimina archivos ni modifica la base de datos. Es seguro usarlo siempre antes de una importación real.
