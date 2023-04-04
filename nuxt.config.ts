// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    // target: 'static,
    // target: 'server', 
    /* ssr: false, */
    css: [
        '~/assets/fonts/fonts.css',
        '~/assets/reset.css',
        '~/assets/globalStyle.css',
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
     // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    pages: true,
    modules: [
        '@vite-pwa/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    ['defineStore', 'definePiniaStore'],
                ]
            },
        ]
    ],
    // https://vite-pwa-org.netlify.app
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Unidrum by Gleb Rudakov',
            short_name: 'Unidrum',
            // useWebmanifestExtension: false,
            lang: 'ru',
            theme_color: '#ffffff',
            icons: [
                {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                },
                {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
                },
            ],
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        client: {
            installPrompt: true,
            // you don't need to include this: only for testing purposes
            // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
            periodicSyncForUpdates: 20,
        },
        devOptions: {
            enabled: true,
            type: 'module',
        }
    },
})
