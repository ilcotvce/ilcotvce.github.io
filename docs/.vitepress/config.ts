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
        text: '开始探索',
        link: '/start.md',
        collapsed: true,
        items: [
          { text: '中国乐器', link: '/ChineseQin/' },
          { text: '中国棋类', link: '/ChineseQi/' },
          { text: '中国书法', link: '/ChineseShuFa/' },
          { text: '诗词歌赋', link: '/ShiCi/' },
          { text: '传统节日', link: '/JieRi/' },
          { text: '中国建筑', link: '/JianZhu/' },
          { text: '中医药学', link: '/ZhongYi/' },
          { text: '宗教哲学', link: '/ZongJiao/' },
          { text: '民间工艺', link: '/GongYi/' },
          { text: '中华武术', link: '/XiJu/' },
          { text: '传统服饰', link: '/FuShi/' },
          { text: '地域文化', link: '/DiYuWenHua/' },
          { text: '古玩器物', link: '/GuWan/' },
          { text: '饮食厨艺', link: '/YinShi/' },
          { text: '神话传说', link: '/ShenHua/' },
          { text: '诸子百家', link: '/BaiJia/' },
        ]
      },
      {
        text: '关于我们',
        link: '/about.md',
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
