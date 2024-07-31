/* 入口页 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'
// import 'virtual:svg-icons-register'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /*  将Redux的store放在React的context中，‌使得任何嵌套在Provider内部的React组件都可以访问到Redux的store */
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
