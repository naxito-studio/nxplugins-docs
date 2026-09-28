# PlaceholderAPI

NXMines incluye una expansión de PlaceholderAPI que proporciona información en tiempo real sobre cada mina. Los placeholders funcionan en cualquier plugin compatible con PAPI: scoreboards, chat, hologramas, etc.

---

## Requisito

Debes tener **PlaceholderAPI** instalado en tu servidor. NXMines lo detecta automáticamente al iniciar. Si lo instalas después de que el servidor ya esté encendido, haz `/mine reload` o reinicia el servidor.

---

## Lista de placeholders

Todos los placeholders siguen el formato `%nxmines_<tipo>_<nombre_mina>%`, donde `<nombre_mina>` es el nombre interno de la mina en minúsculas.

| Placeholder | Descripción | Caché |
|---|---|---|
| `%nxmines_prefix_<mina>%` | Prefijo de la mina (MiniMessage renderizado). | Estático |
| `%nxmines_time_<mina>%` | Tiempo restante hasta el próximo reinicio (formato configurado en `config.yml`). | Dinámico |
| `%nxmines_blocks_<mina>%` | Número de bloques restantes en la mina. | Dinámico |
| `%nxmines_total_<mina>%` | Número total de bloques en la región de la mina. | Estático |
| `%nxmines_percentage_<mina>%` | Porcentaje de bloques restantes (2 decimales). | Dinámico |
| `%nxmines_world_<mina>%` | Nombre del mundo donde está la mina. | Estático |
| `%nxmines_status_<mina>%` | Estado actual de la mina: `ACTIVE`, `RESETTING` o `DISABLED`. | Estático |

> Los placeholders marcados como **Dinámico** se recalculan en cada petición. Los **Estáticos** se cachean y solo se invalidan cuando la mina cambia (nombre, región, prefijo, etc.) o cuando se ejecuta `/mine reload`.

---

## Ejemplos de uso

### Tiempo hasta el reinicio

```
Próximo reinicio: %nxmines_time_spawn_mine%
```
Resultado: `Próximo reinicio: 0h 4m 32s`

### Porcentaje de bloques

```
Mina Spawn: %nxmines_percentage_spawn_mine%%
```
Resultado: `Mina Spawn: 67.43%`

### Estado de la mina

```
Estado: %nxmines_status_spawn_mine%
```
Resultado: `Estado: ACTIVE`

---

## Formato del tiempo

El formato de `%nxmines_time_<mina>%` se configura en `config.yml`:

```yaml
text:
  time-format: "{h}h {m}m {s}s"
```

Tokens disponibles:

| Token | Descripción |
|---|---|
| `{h}` | Horas restantes |
| `{m}` | Minutos restantes |
| `{s}` | Segundos restantes |

Si quieres solo minutos y segundos:
```yaml
time-format: "{m}m {s}s"
```
