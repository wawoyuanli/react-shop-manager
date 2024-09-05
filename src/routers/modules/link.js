import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
const linkRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '外部链接',
    },
    children: [
      {
        path: '/link/gitee',
        element: lazyLoad(React.lazy(() => import('@/pages/link/gitee/index'))),
        meta: {
          requiresAuth: true,
          title: 'gitee',
          key: 'gitee',
        },
      },
      {
        path: '/link/github',
        element: lazyLoad(React.lazy(() => import('@/pages/link/github/index'))),
        meta: {
          requiresAuth: true,
          title: 'github',
          key: 'github',
        },
      },
      {
        path: '/link/juejin',
        element: lazyLoad(React.lazy(() => import('@/pages/link/juejin/index'))),
        meta: {
          requiresAuth: true,
          title: 'juejin',
          key: 'juejin',
        },
      },
      {
        path: '/link/myBlog',
        element: lazyLoad(React.lazy(() => import('@/pages/link/myBlog/index'))),
        meta: {
          requiresAuth: true,
          title: 'myBlog',
          key: 'myBlog',
        },
      },
    ],
  },
]
export default linkRouter
