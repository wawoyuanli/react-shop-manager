/* 主要用来创建仓库，引用reducer,并导出store */
import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import globalReducer from "./modules/global/reducer.js";
import menuReducer from "./modules/menu/reducer.js";
import tabsReducer from "./modules/tabs/reducer.js";
import auth from "./modules/auth/reducer.js";
import breadcrumb from "./modules/breadcrumb/reducer.js";
// 创建reducer(拆分reducer)
/* 将多个 reducer 函数合并成为一个更大的 reducer */
const rootReducer = combineReducers({
  menuReducer,
  globalReducer,
  tabsReducer,
  auth,
  breadcrumb,
});

/* 定义redux 持久化配置 */
const persistConfig = {
  key: "redux-state",
  storage: storage,
};
/* 将 reducer 与持久化配置整合 */
const persistReducerConfig = persistReducer(persistConfig, rootReducer);

/* 开启 redux-devtools  compose：将多个 store 增强器合并成一个单一的 store 增强器 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* 使用 redux 中间件： 将多个中间件组合成一个 store 增强器 */
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

/* 实际创建一个 Redux 存储实例 */
const store = createStore(persistReducerConfig, composeEnhancers(middleWares));
/* 创建持久化 store */
const persistor = persistStore(store);

export { store, persistor };
