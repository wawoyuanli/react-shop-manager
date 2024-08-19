import { Navigate, useRoutes } from 'react-router-dom'
/* 登录 */
import Login from '../pages/login/index'
/* 首页 */
import Home from '../pages/home/index'
/* 面板 */
import Panel from '../pages/panel/index'
import React from 'react'
// 配置路由映射 （不同的路由对应渲染不同的页面组件）

// * 导入所有router
const metaRouters = import.meta.globEager('./modules/*.js')
/* 处理路由 */
export const routerArray = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach(key => {
    routerArray.push(...metaRouters[item][key])
  })
})
const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
