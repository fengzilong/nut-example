export default async ctx => {
  ctx.api.sidebar.configure( [
    {
      icon: '',
      title: '菜单',
      children: [
        { title: 'vue', path: 'pages/vue' },
        { title: 'react', path: 'pages/react' },
        { title: 'vue-in-markdown', path: 'pages/vue-in-markdown' },
        { title: 'markdown', path: 'pages/markdown' },
        { title: 'raw-javascript', path: 'pages/raw-javascript' },
      ]
    },

    {
      icon: '',
      title: 'GitHub',
      link: 'https://github.com/fengzilong/nut',
    },
  ] )
}
