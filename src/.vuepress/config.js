module.exports = {

  base: '/',

  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  locales: {

    '/': {
      title: "Mask Product Documentation ",
      lang: 'zh-CN',
      description: '项目草稿'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/js/jquery.slim.min.js' }],
    ['script', { src: '/js/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.fancybox.min.css' }]
  ],
  themeConfig: {
    repo: 'xiazhiming/Documents',
    docsDir: 'docs',
    editLinks: true,
    subSidebar: 'auto',
     mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    locales: {

      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },

        sidebar: {
          '/app/': [
            '', /* /foo/ */
            'one', /* /foo/one.html */
            'two' /* /foo/two.html */
          ],

          '/pc/': [
            '', /* /bar/ */

            'Dashboard',
            'Restore',
            'Register',
            'SignIn',
            'SignUp',
            'ForgotPassword',
            'Personas',
            'Post',
            'Contacts',
            'Group',
            'File',
            'Wallet',
            'Transfer',
            'Swap',
            'RedPacket',
            'Buy',
            'History',
            'Sale',
            'Settings',
            'General',
            'Backup',
            'Restore-login',
            'ChangeEmail',
            'ChangePassword',
            'PasswordAuthorization'


            
          ],

          // fallback
          '/': [
            '', /* / */

          ]


        },


        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,

      },

    }
  }
}