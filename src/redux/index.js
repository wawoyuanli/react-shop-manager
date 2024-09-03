/* 主要用来创建仓库，引用reducer,并导出store */
import { legacy_createStore as createStore, combineReducers, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import globalReducer from '@/redux/modules/global/reducer.js'
import menuReducer from '@/redux/modules/menu/reducer.js'
import tabsReducer from './modules/tabs/reducer'
import auth from './modules/auth/reducer'
import breadcrumb from './modules/breadcrumb/reducer'
// 创建reducer(拆分reducer)
const rootReducer = combineReducers({
  menuReducer: menuReducer || null,
  globalReducer: globalReducer || null,
  tabsReducer,
  auth,
  breadcrumb,
})

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage,
}
const persistReducerConfig = persistReducer(persistConfig, rootReducer)

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares))
// const store = createStore(rootReducer)
// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
