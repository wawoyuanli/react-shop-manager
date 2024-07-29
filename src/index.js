/* 路由管理 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Login from './pages/Login'
import Edit from './pages/admin/products/Edit.js'
const router = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={createHashRouter(router)} />
  </React.StrictMode>
)

reportWebVitals()
