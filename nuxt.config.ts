export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  uiPro: {
    license: process.env.MY_ENVIRONMENT_VARIABLE
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://docs-tech.annebrown.ca/',
    title: 'Technical Development',
    description: 'Technology Development Notes'

    sections: [
      {
        title: 'Technical Development',
        description: 'Technology Development Notes',
        contentCollection: 'docsTech',
       },


  },
    runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV || 'development' // Fallback for safety
    }
  }
})
