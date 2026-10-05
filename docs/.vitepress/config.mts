import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Evolinox",
  description: "My Website about me",
  lang: 'en-US',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/', activeMatch: '/projects/' },
      { text: 'About', link: '/about/', activeMatch: '/about/' }
    ],

    logo: 'https://avatars.githubusercontent.com/u/72224389?v=4',

    sidebar: [
      {
        items: [
          { text: 'Projects',
            link: '/projects/',
            collapsed: false,
            items: [
              { text: 'Railtrack', link: '/projects/railtrack'},
              { text: 'ZDE', link: '/projects/zde'}
            ]
          }
        ]
      },
      {
        text: 'About Me', link: '/about/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Evolinox' },
      { icon: 'instagram', link: 'https://www.instagram.com/pascal.72e' }
    ],

    footer: {
      copyright: 'Copyright © 2026, <a href="https://github.com/Evolinox">Evolinox</a>'
    },
  },

  head: [
    [
      'link',
      { 
        rel: 'icon',
        href: '/assets/favicon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicon.png'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/favicon.png'
      }
    ],
    [
      'script',
      {},
      `
      function resizeIframe(iframe) {
        iframe.height = (iframe.width/16)*9 + "px";
        console.log((iframe.width/16)*9 + "px")
        window.requestAnimationFrame(() => resizeIframe(iframe));
      }`
    ]
  ],

  lastUpdated : true
})
