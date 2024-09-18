import axios from 'axios'
import { isFunction } from '@/utils/is/index'
import qs from 'qs'
let pendingMap = new Map()

/* 序列化参数 */
export const getPendingUrl = config => {
  return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.param)].join('&')
}

export class AxiosCanceler {
  /* 添加请求 */
  addPending(config) {
    /* 在请求开始前，对之前的请求做检查取消操作 @TODO */
    // this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) {
          /* 如果pending中不存在当前请求，则添加进去 */
          pendingMap.set(url, cancel)
        }
      })
  }
  /* 移除请求 */
  removePending(config) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      /* 如果在pending中存在当前请求标识，需要取消当前请求，并移除 */
      const cancel = pendingMap.get(url)
      cancel && cancel()
      pendingMap.delete(url)
    }
  }
  /* 清空所有pending */
  removeAllPending() {
    pendingMap.forEach(cancel => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }
  /* 重置 */
  reset() {
    pendingMap = new Map()
  }
}
