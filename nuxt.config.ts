// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/fonts/fonts.css',
        '~/assets/reset.css',
        '~/assets/globalStyle.css',
    ],
    pages: true,
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    ['defineStore', 'definePiniaStore'],
                ]
            }
        ]
    ]
})
