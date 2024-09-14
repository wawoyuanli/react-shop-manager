/* 
 登录模块
*/
import { PORT1 } from '@/api/config/servicePort.js'
import http from '@/api/index.js'

/* 用户登录接口 */
export const loginApi = params => {
  return http.get(PORT1 + `/getData`, params)
}

export const getAuthorButtons = () => {
  return http.get(PORT1 + `/auth/buttons  `)
}

export const getMenuList = () => {
  return http.get(PORT1 + `/menu/list`)
}
