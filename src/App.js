/* 入口文件 */
import { getBrowserLang } from './utils/util.js'
import { HashRouter } from 'react-router-dom'
import Router from './routers/index.js'
import { ConfigProvider } from 'antd'
import { setLanguage } from './redux/modules/global/action.js'
import i18n from 'i18next'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import useTheme from './hooks/useTheme'
// import 'moment/dist/locale/zh-cn'
function App(props) {
  const { language, assemblySize, themeConfig, setLanguage } = props
  const [i18nLocale, setI18nLocale] = useState(zhCN)

  /* 全局使用主题 */
  useTheme(themeConfig)

  /* 设置antd语言国际化 */
  const setAntdLanguage = () => {
    /* 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言 */
    if (language && language == 'zh') return setI18nLocale(zhCN)
    if (language && language == 'en') return setI18nLocale(enUS)
    if (getBrowserLang() == 'zh') return setI18nLocale(zhCN)
    if (getBrowserLang() == 'en') return setI18nLocale(enUS)
  }
  return (
    <HashRouter>
      <ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}
const mapStateToProps = state => state.global
const mapDispatchToProps = { setLanguage }
export default connect(mapStateToProps, mapDispatchToProps)(App)
