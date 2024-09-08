/* 顶级react组件 */
import { getBrowserLang } from '@/utils/util.js'
import { HashRouter } from 'react-router-dom'
import AuthRouter from "@/routers/utils/authRouter";
import Router from './routers/index.js'
import { ConfigProvider } from 'antd'
import { setLanguage } from './redux/modules/global/action.js'
import i18n from 'i18next'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import { useState, useEffect } from 'react'
/* 引入连接器 */
import { connect } from 'react-redux'
// import useTheme from './hooks/useTheme.js'
import React from 'react'
import 'moment/dist/locale/zh-cn'
function App(props) {
  console.log(props,'app-props')
  const { language, assemblySize } = props
  const [i18nLocale, setI18nLocale] = useState(zhCN)
  /* 全局使用主题 */
  // useTheme(themeConfig)
  /* 设置antd语言国际化 */
  const setAntdLanguage = () => {
    /* 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言 */
    if (language && language === 'zh') return setI18nLocale(zhCN)
    if (language && language === 'en') return setI18nLocale(enUS)
    if (getBrowserLang() === 'zh') return setI18nLocale(zhCN)
    if (getBrowserLang() === 'en') return setI18nLocale(enUS)
  }
	useEffect(() => {
    console.log(getBrowserLang(),'getBrowserLang()')
		// 全局使用国际化
		// i18n.changeLanguage(getBrowserLang());
		// setLanguage(language || getBrowserLang());
		// setAntdLanguage()
	}, [language])

  return (
    <HashRouter>
      <ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
        <AuthRouter>
            <Router />
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  )
}
const mapStateToProps = state => {
  return state.globalReducer
}
const mapDispatchToProps = { setLanguage }
/* connect(state映射，dispatch映射)(当前组件) */
export default connect(mapStateToProps, mapDispatchToProps)(App)
