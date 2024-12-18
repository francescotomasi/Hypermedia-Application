import type {NuxtConfig} from '@nuxt/types'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Women Center',
            link: [
                {rel: 'icon', type: 'svg', href: '/HYP/contents/public/logo.svg'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ],
            htmlAttrs: {
                lang: 'en',
            }
        }
    },
    css: [
        '~/assets/css/global.css',
    ],
    ssr: true,
    // modules: [
    //     '@prisma/nuxt'
    // ]
});