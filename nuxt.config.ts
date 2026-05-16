// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#F59E0B', // Amber / Yellow
              secondary: '#1E293B', // Slate dark
              accent: '#FCD34D', // Light yellow
              background: '#FAFAF9', // Warm white
              surface: '#FFFFFF',
              info: '#3B82F6',
              success: '#10B981',
              warning: '#F59E0B',
              error: '#EF4444'
            }
          }
        }
      }
    }
  },
  app: {
    head: {
      title: 'OVA: Teorema de Pitágoras',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
