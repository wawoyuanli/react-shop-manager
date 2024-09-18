/*
 http请求封装
*/
/* 引入页面加载进度条 */
import NProgress from '@/config/nprogress.js'
/* 引入axios */
import axios from 'axios'
/* 引入取消请求的组件 */
import { AxiosCanceler } from '@/api/helper/axiosCancel'
/* 引入请求loading */
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
/* 引入store */
import { store } from '@/redux/index.js'
/* 引入token  action */
import { setToken } from '@/redux/modules/global/action.js'
/* 引入信息框 */
import { message } from 'antd'
import { ResultEnum } from '@/enums/httpEnum.js'
/* 引入接口请求状态判断 */
import { checkStatus } from './helper/checkStatus.js'
/* 实例化AxiosCanceler */
const axiosCanceler = new AxiosCanceler()
const config = {
  /* 接口域名路径 */
  baseURL: import.meta.env.VITE_API_URL2,
  /* 超时时间 */
  timeout: 10000,
  /* 跨域时允许携带凭证 */
  withCredentials: true,
}
class RequestHttp {
  constructor(config) {
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      config => {
        /* 动画 */
        NProgress.start()
        /* 将当前请求添加到pending中 */
        axiosCanceler.addPending(config)
        /* 
          如果当前请求不需要显示 loading ,在api服务中通过指定的第三个参数
          {headers: { noLoading: true } } 来控制不显示loading，参见loginApi
        */
        config.headers.noLoading || showFullScreenLoading()
        const token = store.getState().globalReducer.token
        return { ...config, headers: { ...config.headers, 'x-access-token': token } }
      },
      error => {
        return Promise.reject(error)
      }
    )
    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      response => {
        const { data, config } = response
        NProgress.done()
        // * 在请求结束后，移除本次请求(关闭loading)
        axiosCanceler.removePending(config)
        tryHideFullScreenLoading()
        /* 登录失效（code == 599） */
        if (data.code === ResultEnum.OVERDUE) {
          store.dispatch(setToken(''))
          message.error(data.msg)
          window.location.hash = '/login'
          return Promise.reject(data)
        }
        /* 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错） */
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        /* 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑） */
        return data
      },
      async error => {
        const { response } = error
        NProgress.done()
        tryHideFullScreenLoading()
        // 请求超时单独判断，请求超时没有 response
        if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试')
        // 根据响应的错误状态码，做不同的处理
        if (response) checkStatus(response.status)
        // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) window.location.hash = '/500'
        return Promise.reject(error)
      }
    )
  }
  /* 常用请求方法封装 */
  get(url, params) {
    return this.service.get(url, params)
  }
  post(url, params) {
    return this.service.post(url, params)
  }
}
const requestHttp = new RequestHttp(config)
export default requestHttp
