import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant.js'
/* 可视化图表模块 */
const echartsRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/echarts/columnChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/columnChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '柱状图',
          key: 'columnChart',
        },
      },
      {
        path: '/echarts/lineChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/lineChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '折线图',
          key: 'lineChart',
        },
      },
      {
        path: '/echarts/nestedChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/nestedChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '嵌套环形图',
          key: 'nestedChart',
        },
      },
      {
        path: '/echarts/pieChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/pieChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '饼图',
          key: 'pieChart',
        },
      },
      {
        path: '/echarts/radarChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/radarChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '雷达图',
          key: 'radarChart',
        },
      },
      {
        path: '/echarts/waterChart',
        element: lazyLoad(React.lazy(() => import('@/pages/echarts/waterChart/index.js'))),
        meta: {
          requiresAuth: true,
          title: '水形图',
          key: 'waterChart',
        },
      },
    ],
  },
]

export default echartsRouter
