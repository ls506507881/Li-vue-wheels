module.exports = {
  base: '/Li-vue-wheels/',
  title: 'Li-Vue UI',
  description: '一个正在完善的UI框架',
  themeConfig:{
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: '/https://googles.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/toast',
          '/components/popover'
        ]
      }
    ]
  }
  
}