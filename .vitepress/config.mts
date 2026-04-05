import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AGMP Docs",
  description: "AGMP Documentation",
  base: '/agmp-docs/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'AGMP documentation', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Releases', link: '/releases' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Tutorials', link: '/tutorials/markdown-examples' }
    ],
    sidebar: {},
    search: {
      provider: 'local'
    }
  }
})