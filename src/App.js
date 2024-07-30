/* 入口文件 */
import { HashRouter } from 'react-router-dom'
import Router from './routers/index.js'
import { ConfigProvider } from 'antd'
const mapStateToProps = state => state.global
function App() {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
