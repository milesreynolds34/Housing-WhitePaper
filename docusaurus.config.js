// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Captive Coastal Market: Immediate Institutional Interventions for UCSB Off-Campus Housing',
  tagline: 'Stabilizing Isla Vista through university-directed master-leasing and strategic property acquisition',
  favicon: 'img/zombie.svg',

  future: {},

  url: 'https://milesreynolds34.github.io',
  baseUrl: '/Housing-WhitePaper/',
  organizationName: 'milesreynolds34',
  projectName: 'Housing-WhitePaper',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'paper',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/zombie.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Vonnegut Research Series',
        logo: {
          alt: 'Series mark',
          src: 'img/palm.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Table of Contents',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
