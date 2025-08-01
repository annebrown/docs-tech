export default defineAppConfig({
    ui: {
        colors: {
            primary: 'sky',
            neutral: 'gray',
            secondary: 'gray'
        },
    },
    uiPro: {
        contentNavigation: {
            slots: {
                container: 'max-w-fit h-fit',
                list: 'isolate -mx-2.5 -mt-1',
                item: 'my-0',
                listWithChildren: 'ms-2 mb-0.5',
                itemWithChildren: 'data-[state=open]:mb-0.5',
                link: 'py-0.5 before:inset-y-0 gap-1.5 text-xs leading-tight'
            }
        },
        contentToc: {
            slots: {
                container: '',
            }
        },
        footer: {
            slots: {
                container: 'bg-(--ab-transom) py-2 lg:py-2',
                top: 'py-0 lg:py-0',
                bottom: 'py-0 lg:py-0',
                left: 'text-xs'
            }
        },
        header: {
            slots: {
                root: 'h-12',
                container: 'bg-(--ui-bg) py-0'
            }
        },
        main: {
            base: 'min-h-fit bg-(--ab-midships) mx-4 py-12'
        },
        pageBody: {
            base: 'bg-(--ab-midships)'
        },
        page: {
            slots: {
                center: 'bg-(--ab-midships) rounded',
                left: 'card-glass-narrow h-fit max-w-100 md:max-w-fit bg-(--ab-port-gunnel)',
                right: 'card-glass-narrow w-fit h-fit bg-(--ab-port-gunnel)'
            }
        },
        pageFeature: {
            slots: {
                root: 'p-4 card-glass-link leading-5',
                container: ''
            }
        },
        pageHero: {
            slots: {
                container: 'w-full py-2 sm:py-4 lg:py-8',
            }
        },
        pageSection: {
            slots: {
                container: 'mt-4 mb-0 py-0 sm:py-0 lg:py-0',
            }
        },
    },
    header: {
        title: 'Tech Docs',
        to: '/',
        logo: {
            alt: 'Two sails with initials, AB',
            light: '/logo.svg',
            dark: '/logo.svg'
        },
        search: true,
        colorMode: true,
        links: [
            {
                'icon': 'i-simple-icons-github',
                'to': 'https://github.com/annebrown/pub',
                'target': '_blank',
                'aria-label': 'GitHub'
            }
        ]
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        colorMode: true,
        links: [
            {
                'icon': 'i-simple-icons-github',
                'to': 'https://github.com/annebrown',
                'target': '_blank',
                'aria-label': 'annebrown on GitHub'
            }
        ]
    },
    toc: {
        title: 'Shortcuts',
        bottom: {
            title: 'Community',
            edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
            links: [
                {
                    icon: 'i-lucide-star',
                    label: 'Star on GitHub',
                    to: 'https://github.com/nuxt/ui',
                    target: '_blank'
                },
                {
                    icon: 'i-lucide-book-open',
                    label: 'Nuxt UI Pro docs',
                    to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
                    target: '_blank'
                },
                {
                    icon: 'i-simple-icons-nuxtdotjs',
                    label: 'Purchase a license',
                    to: 'https://ui.nuxt.com/pro/purchase',
                    target: '_blank'
                }
            ]
        }
    }
})
