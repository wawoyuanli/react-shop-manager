import produce from 'immer'
import * as types from '@/redux/mutation-types.js'

const globalState = {
  token: '',
  userInfo: '',
  assemblySize: 'middle',
  language: '',
  themeConfig: {
    // 默认 primary 主题颜色
    primary: '#1890ff',
    // 深色模式
    isDark: false,
    // 色弱模式(weak) || 灰色模式(gray)
    weakOrGray: '',
    // 面包屑导航
    breadcrumb: true,
    // 标签页
    tabs: true,
    // 页脚
    footer: true,
  },
}

// global reducer
const globalReducer = (state = globalState, action) =>
  produce(state, draftState => {
    console.log(state, 'state-global')
    // if (state.themeConfig.isDark) {
    //   document.getElementsByClassName('login-container')[0].style.backgroundColor = '#141414'
    //   document.getElementsByClassName('login-box')[0].style.backgroundColor = '#000c'
    //   document.getElementsByClassName('login-form')[0].style.boxShadow = '5px 5px 15px #fff3'
    // } else {
    //   let style = document.getElementsByClassName('login-container')
    //   if (style.length) {
    //     document.getElementsByClassName('login-container')[0].style.backgroundColor = '#eee'
    //     document.getElementsByClassName('login-box')[0].style.backgroundColor = '#fffc'
    //   }
    // }
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token
        break
      case types.SET_ASSEMBLY_SIZE:
        draftState.assemblySize = action.assemblySize
        break
      case types.SET_LANGUAGE:
        draftState.language = action.language
        break
      case types.SET_THEME_CONFIG:
        draftState.themeConfig = action.themeConfig
        break
      default:
        return draftState
    }
  })
export default globalReducer
