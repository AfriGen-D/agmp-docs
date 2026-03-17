import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AGMP Docs",
  description: "Genomics & Chatbot Platform Documentation",

  themeConfig: {
    // ------------------
    // Top navigation bar
    // ------------------
    nav: [
      { text: 'AGVD documentation', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Releases', link: '/releases' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Tutorials', link: '/tutorials/markdown-examples' }
    ],

    // ------------------
    // Sidebar for left navigation
    // ------------------
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Markdown Guide', link: '/tutorials/markdown-examples' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'API Examples', link: '/api/api-examples' }
        ]
      }
    ],

    // ------------------
    // Local search
    // ------------------
    search: {
      provider: 'local'
    }
  }
})