export default [
  {
    path: '/',
    component: () => import('./docs/button/button.md'),
  },
  {
    path: '/components/button',
    component: () => import('./docs/button/button.md'),
  },
  {
    path: '/components/color',
    component: () => import('./docs/color/color.md'),
  }
]
