import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NXPlugins",
  description: "Documentación Oficial de Naxito's Studios",
  base: '/nxplugins-docs/',
  cleanUrls: true,
  lastUpdated: false,

  themeConfig: {
    // Logo de la barra superior (colocar tu logo en .vitepress/public/logo.png)
    logo: '/logo.png',
    siteTitle: 'NXPlugins',

    // Buscador integrado
    search: {
      provider: 'local'
    },

    // Enlaces de la barra superior de navegación
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'NXGuard', link: '/NXGuard/README' },
      { text: 'NXMines', link: '/NXMines/README' },
      { text: 'Discord', link: 'https://discord.gg/Xex24yPpWn' }
    ],

    // Enlaces a redes sociales en la barra superior
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/Xex24yPpWn' },
      { icon: 'github', link: 'https://github.com/naxito-studio' }
    ],

    // Menús laterales (Sidebar) para cada plugin
    sidebar: {
      '/NXGuard/': [
        {
          text: 'NXGuard',
          items: [
            { text: 'Introducción', link: '/NXGuard/README' },
            { text: 'Instalación', link: '/NXGuard/instalacion' },
            { text: 'Comandos', link: '/NXGuard/comandos' },
            { text: 'Permisos', link: '/NXGuard/permisos' },
            { text: 'Uso del GUI', link: '/NXGuard/gui' },
            { text: 'Sistema de Flags', link: '/NXGuard/flags' },
            { text: 'Preguntas Frecuentes', link: '/NXGuard/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/NXGuard/configuracion/config-yml' }
          ]
        }
      ],

      '/NXMines/': [
        {
          text: 'NXMines',
          items: [
            { text: 'Introducción', link: '/NXMines/README' },
            { text: 'Instalación', link: '/NXMines/instalacion' },
            { text: 'Comandos', link: '/NXMines/comandos' },
            { text: 'Permisos', link: '/NXMines/permisos' },
            { text: 'Uso del GUI', link: '/NXMines/gui' },
            { text: 'Sistema de Drops', link: '/NXMines/drops' },
            { text: 'PlaceholderAPI', link: '/NXMines/placeholders' },
            { text: 'Importar Minas (Convert)', link: '/NXMines/convert' },
            { text: 'Preguntas Frecuentes', link: '/NXMines/faq' }
          ]
        },
        {
          text: 'Configuración',
          items: [
            { text: 'config.yml', link: '/NXMines/configuracion/config-yml' },
            { text: 'menus.yml', link: '/NXMines/configuracion/menus-yml' },
            { text: 'particles.yml', link: '/NXMines/configuracion/particles-yml' },
            { text: 'sounds.yml', link: '/NXMines/configuracion/sounds-yml' }
          ]
        }
      ]
    },

    // Pie de página
    footer: {
      message: 'Desarrollado con ❤️ por Naxito\'s Studios',
      copyright: 'Copyright © 2026 Naxito\'s Studios'
    }
  }
})
