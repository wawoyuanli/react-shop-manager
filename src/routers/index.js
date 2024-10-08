import { Navigate, useRoutes } from 'react-router-dom'
import React from 'react'
import { lazy } from 'react'
import lazyLoad from '@/routers/utils/lazyLoad.js'
// import aa from "./modules/app.js";
/* 登录 */
// import LoginNew from '@/pages/loginNew/index.jsx'
import HomeApp from '@/pages/mobile/home/index.js'
import ContactUs from '@/pages/mobile/contactUs/index.js'
import AppDetail from '@/pages/mobile/detail/index.js'
/* 配置路由映射 （不同的路由对应渲染不同的页面组件） */

/* 导入所有router */
const metaRouters = import.meta.globEager('./modules/*.js')
/* 处理路由 */
const routerArray = [
  // {
  //   path: '/a',
  //   element: lazyLoad(lazy(() => import('@/pages/mobile/home/index.js'))),
  // },
]
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach(key => {
    routerArray.push(...metaRouters[item][key])
  })
})

const rootRouter = [
  {
    path: '/',
    element: lazyLoad(lazy(() => import('@/pages/mobile/home/index.js'))),
  },
  {
    path: '/login',
    element: lazyLoad(lazy(() => import('@/pages/loginNew/index.js'))),
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: lazyLoad(lazy(() => import('@/components/ErrorMessage/404.js'))),
  },
  {
    path: '/app/home',
    element: lazyLoad(lazy(() => import('@/pages/mobile/home/index.js'))),
  },
  {
    path: '/app/contractUs',
    element: lazyLoad(lazy(() => import('@/pages/mobile/contactUs/index.js'))),
  },
  {
    path: '/app/apple/detail',
    element: lazyLoad(lazy(() => import('@/pages/mobile/detail/index.js'))),
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
/* 导出路由数组 */
export { routerArray }
export default Router
