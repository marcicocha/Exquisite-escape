// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "Exquisite Escape",
    },
  },
  css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],
  modules: [],
  plugins: ['~/plugins/vue-plugins/antd-ui.js', '@/plugins/components/global-components'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-import': true,
    },
  },
  vite: {
    plugins: [
      svgLoader({
        // Your settings.
        defaultImport: 'url',
      }),
    ],
  },
  // build: {
  //   loaders: {
  //     less: {
  //       modifyVars: {
  //         // Your theme variables
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },

})
