import { contentSearch } from "#build/ui-pro";

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
        //         root: '',
                container: 'w-fit h-fit',
        //         list: '',
                item: 'my-0',
                listWithChildren: 'ms-0 mb-0.5',
                itemWithChildren: 'data-[state=open]:mb-0.5',
                link: 'py-0.5 before:inset-y-0 gap-1.5 text-xs leading-tight'
            }
        },
        contentSurround: {
            slots: {
                root: 'my-0 pt-8',
                link: 'py-0'
            }
        },
        contentToc: {
            slots: {
                root: 'rounded-md backdrop-none lg:bg-default/75 mx-0 sm:mx-0 border-0',
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
                container: 'bg-(--ui-bg) py-0',
                toggle: 'lg:block',
                content: 'lg:block',
                overlay: 'lg:block',
            }
        },
        main: {
            base: 'min-h-fit bg-(--ab-midships) mx-4 py-12'
        },
        pageBody: {
            base: 'py-0 bg-(--ab-midships)'
        },
        page: {
            slots: {
                container: 'relative m-0 p-0',
                center: 'bg-(--ab-midships) rounded',
                left: 'absolute top-4 left-2 card-glass-narrow h-fit bg-(--ab-port-gunnel)',
                right: 'card-glass-narrow h-fit w-fit bg-(--ab-port-gunnel)'
            }
        },
        pageAside: {
            slots: {
                root: 'lg:pe-0 lg:ms-0',
                topHeader: 'mx-0',
                container: ''
            }
        },
        pageFeature: {
            slots: {
                root: 'p-4 card-glass-link leading-5',
                container: ''
            }
        },
        pageHeader: {
            slots: {
                root: 'py-0',
                container: ''
            }
        },
        pageHero: {
            slots: {
                container: 'w-full py-2 sm:py-2 sm:gap-y-4',
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
            light: 'logo.svg',
            dark: 'logo.svg'
        },
        search: true,
        colorMode: true,
        links: [
            {
                'icon': 'i-simple-icons-github',
                'to': 'https://github.com/annebrown/docs-tech',
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
                'to': 'https://github.com/annebrown/docs-tech',
                'target': '_blank',
                'aria-label': 'annebrown on GitHub'
            }
        ]
    },
    toc: {
        title: 'On this Page',
        bottom: {
            title: 'Links',
            links: [
                {
                    icon: 'i-lucide-lab-home',
                    label: 'Home',
                    to: '/',
                },
                {
                    icon: 'i-lucide-lab-toolbox-2',
                    label: 'Other Sites',
                    to: 'https://annebrown.ca/prod',
                },
                                {
                    icon: 'i-lucide-star',
                    label: 'Star on GitHub',
                    to: 'https://github.com/annebrown/docs-tech',
                    target: '_blank'
                },
            ]
        }
    },
    flags: { debug: false }
})
