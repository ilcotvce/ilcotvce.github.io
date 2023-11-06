import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICTC",
  description: "弘扬中华优秀传统文化 实现中华民族伟大复兴",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.svg",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '中国琴', link: '/ChineseQin/index.md' },
          { text: '中国棋', link: '/ChineseQi/index.md' },
          { text: '中国书法', link: '/ChineseShuFa/index.md' },
          { text: '中国画', link: '/ChineseHua/index.md' },
        ]
      }
    ],

    footer: {
      message: '人生如梦，一尊还酹江月',
      copyright: 'Cechnical Support © 2023-present Jiang Yue.'
    },

    // socialLinks: [
    //   { icon: 'github', link: 'ilcotvce.github.io' }
    // ]
  },
  base: '/',
  locales: {
    root: {
      label: '中文',
      lang: 'zh-cn'
    },
  }
})
