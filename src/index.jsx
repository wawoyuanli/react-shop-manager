/* 项目入口页 */
import "./styles/reset.less";
import "./styles/common.less";
/* StrictMode可让你在开发过程中及早发现组件中的常见错误 */
import React ,{StrictMode}from 'react'
import ReactDOM from 'react-dom/client'
import "./language/index";
import App from './App.jsx'
/* 引入提供器 */
import { Provider } from 'react-redux'
/* 引入store*/
import { store, persistor } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'
// import WaterMark from './components/WaterMark/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  /*  将Redux的store放在React的context中，‌使得任何嵌套在Provider内部的React组件都可以访问到Redux的store */
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StrictMode>
        {/* <WaterMark></WaterMark> */}
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
)
