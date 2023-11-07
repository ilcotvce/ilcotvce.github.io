import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICTC",
  description: "弘扬中华优秀传统文化 实现中华民族伟大复兴",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '中国乐器', link: '/ChineseQin/' },
          { text: '中国棋类', link: '/ChineseQi/' },
          { text: '中国书法', link: '/ChineseShuFa/' },
          { text: '中国画', link: '/ChineseHua/' },
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
    search: {
      provider: 'local',
    }
  },
  base: '/',
  locales: {
    root: {
      lang: 'zh-cn',
      label: '简体中文',
    },
  },
})
