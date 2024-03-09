<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Evolinox.png',
    name: 'Evolinox',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/Evolinox' },
      { icon: 'discord', link: '' },
      { icon: 'youtube', link: ''}
    ]
  }
]
</script>

# About this Site

You might be wondering, why i chose Vitepress for my "personal" Website... Honestly, i don't know either... Vitepress is mainly designed for Documentations, but i kinda liked its look, so i tried to adopt it to my rather unique needs :D

<VPTeamMembers size="medium" :members="members" />