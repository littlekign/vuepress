const { description } = require('../../package');

module.exports = {
  // host: 'localhost',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Fe-blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  /**
   * language config
   */
  locales: {
    '/': { lang: 'en-US' },
    '/zh/': { lang: 'zh-CN' },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {
        text: 'Fe',
        link: '/fe/',
        items: [
          { text: 'html', link: '/fe/html/' },
          { text: 'css', link: '/fe/css/' },
          { text: 'javascript', link: '/fe/javascript/' },
        ],
      },
      {
        text: 'Frameworks',
        link: '/frameworks/',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' },
        ],
      },
      {
        text: 'backend',
        link: '/backend/',
        items: [
          { text: 'nodejs', link: '/nodejs/' },
          { text: 'java', link: '/java/' },
          { text: 'php', link: '/php/' },
        ],
      },
      {
        text: 'algorithms',
        link: '/algorithms/',
      },
    ],
    sidebar: {
      '/algorithms/': [
        {
          title: 'Algorithms',
          children: [''],
        },
      ],
      '/fe/': [
        {
          title: 'FE note',
          path: '/javascript/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: 'javascript 基础',
              path: '/fe/javascript/js_basic/',
              children: [''],
            },
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
