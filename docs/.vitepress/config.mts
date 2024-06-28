import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Evolinox",
  description: "My Website about me",
  themeConfig: {
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
          { text: 'Overview', link: '/projects/' },
          {
            text: 'Personal',
            collapsed: false,
            items: [
              { text: 'SpookBot', link: '/projects/personal/spookbot'},
              { text: 'Communities', link: '/projects/personal/communities'},
              { text: 'Tic Tac Toe', link: '/projects/personal/tictactoe'}
            ]
          },
          {
            text: 'University',
            collapsed: true,
            items: [
              { text: 'DHBW Programming 1', link: '/projects/university/dhbw_prog_1'},
              { text: 'DHBW Programming 2', link: '/projects/university/dhbw_prog_2'}
            ]
          },
          {
            text: 'Modding',
            collapsed: true,
            items: [
              { text: 'ATC-2 Safety System', link: '/projects/modding/atc2'},
              { text: 'Vectron Camera Driver', link: '/projects/modding/vectron_camera'}
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
