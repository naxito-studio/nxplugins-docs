# Instalación

## Requisitos previos

Antes de instalar NXGuard asegúrate de tener:

- Un servidor **Paper o Spigot 1.20** o superior.
- **WorldEdit** instalado (viene incluido con WorldGuard o se instala por separado).
- **WorldGuard** instalado y funcionando.
- Java 17 o superior.

> NXGuard no funcionará si WorldGuard no está presente. Al iniciar, si no lo detecta, se deshabilitará automáticamente y dejará un mensaje de error en la consola.

---

## Pasos de instalación

### 1. Colocar el .jar en la carpeta plugins

Copia el archivo `NXGuard-<version>.jar` dentro de la carpeta `plugins/` de tu servidor.

```
servidor/
└── plugins/
    ├── WorldGuard.jar
    ├── WorldEdit.jar
    └── NXGuard.jar        ← aquí
```

### 2. Iniciar o reiniciar el servidor

Arranca el servidor normalmente. NXGuard generará su archivo de configuración en:

```
plugins/
└── NXGuard/
    └── config.yml
```

### 3. Verificar la instalación

Revisa la consola. Deberías ver líneas como estas:

```
[NXGuard] Motor de ediciones detectado: WorldEdit
[NXGuard] WorldGuard Extra Flags no instalado (opcional).
[NXGuard] NXGuard habilitado correctamente.
```

Si en cambio ves:

```
[NXGuard] WorldGuard no está instalado. NXGuard se deshabilitará.
```

Significa que WorldGuard no está en la carpeta `plugins/` o no cargó correctamente.

---

## Instalación opcional: WorldGuard Extra Flags

Si usas **WorldGuard Extra Flags**, colócalo también en `plugins/` antes de iniciar. NXGuard lo detecta automáticamente y mostrará en consola:

```
[NXGuard] WorldGuard Extra Flags detectado — flags adicionales disponibles.
```

Esto hace que todas las flags extra del plugin aparezcan en el GUI de NXGuard sin configuración adicional.

---

## Actualizar NXGuard

1. Detén el servidor.
2. Reemplaza el `.jar` antiguo por el nuevo en `plugins/`.
3. Inicia el servidor.

> La carpeta `plugins/NXGuard/` y su `config.yml` se conservan entre actualizaciones. Revisa las notas de la versión por si hay nuevas claves en la configuración.
