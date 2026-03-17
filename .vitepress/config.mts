import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AGMP Docs",
  description: "Genomics & Chatbot Platform Documentation",

  // ------------------
  // Clean URLs
  // ------------------
  cleanUrls: true, // Removes .html from URLs (adds trailing slash, e.g., /faq/)

  themeConfig: {
    // ------------------
    // Top navigation bar
    // ------------------
    nav: [
      { text: 'AGMP documentation', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Releases', link: '/releases' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Tutorials', link: '/tutorials/markdown-examples' }
    ],

    // ------------------
    // Sidebar removed
    // ------------------
    // sidebar: [], // <-- removed to disable side navigation

    // ------------------
    // Local search
    // ------------------
    search: {
      provider: 'local'
    }
  }
})