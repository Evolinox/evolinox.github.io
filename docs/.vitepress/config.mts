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
      { text: 'Projects', link: '/projects/' },
      { text: 'About', link: '/about/' }
    ],

    logo: 'https://avatars.githubusercontent.com/u/72224389?v=4',

    sidebar: [
      {
        items: [
          { text: 'Projects',
            link: '/projects/',
            collapsed: false,
            items: [
              { text: 'SpookBot', link: '/projects/spookbot'},
              { text: 'Tic Tac Toe', link: '/projects/tictactoe'},
              { text: 'Digital', link: '/projects/digital'},
              {
                text: 'Modding',
                collapsed: true,
                items: [
                  { text: 'BR 193 BOXX', link: '/projects/modding/vectron_boxx'},
                  //{ text: 'BR 193 Scandinavia', link: '/projects/modding/vectron_scandinavia'},
                  { text: 'BR 193 Camera', link: '/projects/modding/vectron_camera'},
                  //{ text: 'ATC-2 System', link: '/projects/modding/atc2'},
                  { text: 'Zmigrod Scenarios', link: '/projects/modding/zmigrodtc'}
                ]
              }
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
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCXXdteIrezyZ_PbtmHTGLgA' },
      { icon: 'instagram', link: 'https://www.instagram.com/pascal.jedi/' }
    ],

    footer: {
      copyright: 'Copyright © 2024, <a href="https://github.com/Evolinox">Evolinox</a>'
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
