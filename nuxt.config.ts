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
    domain: 'https://docs-template.nuxt.dev/',
    title: 'Tech Docs',
    description: 'Description of llms in nuxt config...',
    full: {
      title: 'Technology Development Docs',
      description: 'Notes on Technology Development'
    },
    sections: [
    //   {
    //     title: 'Getting Started',
    //     contentCollection: 'docsTech',
    //     contentFilters: [
    //       { field: 'path', operator: 'LIKE', value: '/getting-started%' }
    //     ]
    //   },
        {
        title: 'Frameworks',
        contentCollection: 'docsTech',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/frameworks%' }
        ]
      },
            {
        title: 'Shortcuts',
        contentCollection: 'docsTech',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/shortcuts%' }
        ]
      }
    ]
  }
})
