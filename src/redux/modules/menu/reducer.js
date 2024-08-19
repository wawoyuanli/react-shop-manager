import produce from 'immer'
import * as types from '@/redux/mutation-types'
/* 定义默认数据 */
const menuState = {
  isCollapse: false,
  menuList: [],
}

/* 导出一个函数 传实际的参数了，就用实际的参数，否则就用defaultState*/
const menuReducer = (state = menuState, action) => {
  console.log(action, 'meneReducer')
  return state
  // produce(state, draftState => {
  //   switch (action.type) {
  //     case types.UPDATE_COLLAPSE:
  //       draftState.isCollapse = action.isCollapse
  //       break
  //     case types.SET_MENU_LIST:
  //       draftState.menuList = action.menuList
  //       break
  //     default:
  //       return draftState
  //   }
  // })
}
export default menuReducer
