export default defineAppConfig(
{
    ui: {
        colors: {
            primary: 'sky',
            neutral: 'gray',
            secondary: 'gray'
        }
    },
    uiPro: {
        contentNavigation: {
            slots: {
                root: 'pr-1',
                container: 'h-fit lg:h-fit',
                item: 'my-0',
                listWithChildren: 'ms-0 mb-0.5',
                itemWithChildren: 'data-[state=open]:mb-0.5',
                link: 'py-0.5 before:inset-y-0 gap-1.5 text-xs leading-tight',
            },
        },
        contentSurround: {
            slots: {
                root: 'my-0 pt-8',
                link: 'py-2',
            },
        },
        contentToc: {
            slots: {
                root: 'w-fit lg:mt-2 mx-0 sm:mx-0 px-4 lg:px-4 rounded-md',
                container: '',
               class: ''
            },
        },
        footer: {
            slots: {
                root: 'bg-(--ab-transom)',
                container: 'pt-2 pb-4 lg:pt-2 lg:pb-4',
                top: 'py-0 lg:py-0',
                bottom: 'py-0 lg:py-0',
                left: 'text-xs',
            },
        },
        header: {
            slots: {
                root: '',
                container: 'py-0',
                toggle: 'lg:block text-primary',
                content: 'lg:block',
                overlay: 'lg:block',
            },
        },
        main: {
            base: 'min-h-fit mx-0 lg:mx-4 py-2 pt-8',
        },
        pageBody: {
            base: 'py-0',
        },
        page: {
            slots: {
                root: 'relative lg:gap-0',
                container: '',
                center: 'lg:flex-none m-0 p-0 pb-2 rounded-lg bg-(--ab-midships)',
                left: 'z-100 lg:col-span-2 w-fit',
                right: 'lg:absolute lg:top-4 mt-2 lg:-right-4 lg:mt-2',
            },
        },
        pageAside: {
            slots: {
                root: 'lg:pe-0 lg:ms-0 py-0',
                topHeader: 'mx-0',
                container: '',
            },
        },
        pageFeature: {
            slots: {
                root: 'p-4 card-glass-link leading-5',
                container: '',
            },
        },
        pageHeader: {
            slots: {
                root: 'py-0',
                container: '',
            },
        },
        pageHero: {
            slots: {
                container: 'py-2 sm:py-2 sm:gap-y-4 lg:py-2',
            },
        },
        pageSection: {
            slots: {
                container: 'mt-4 mb-0 py-0 sm:py-0 lg:py-0',
            },
        },
    },
    header: {
        title: 'Tech Docs',
        to: '/',
        logo: {
            alt: 'Two sails with initials, AB',
            light: 'logo.svg',
            dark: 'logo.svg',
        },
        search: true,
        colorMode: true,
        links: [
            {
                icon: 'i-simple-icons-github',
                to: 'https://github.com/annebrown/docs-tech',
                target: '_blank',
                'aria-label': 'GitHub',
            },
        ],
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        colorMode: true,
        links: [
            {
                icon: 'i-simple-icons-github',
                to: 'https://github.com/annebrown/docs-tech',
                target: '_blank',
                'aria-label': 'annebrown on GitHub',
            },
        ],
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
                    target: '_blank',
                },
            ],
        },
    },
    flags: { debug: false },
})
;
