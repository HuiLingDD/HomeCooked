// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // nitro: {
  //   preset: 'firebase',
  //   firebase: {
  //     gen: 2
  //   }
  // },
  css: ['@/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['@/plugins/pinia.ts'],
})
