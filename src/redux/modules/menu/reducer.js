import produce from 'immer'
import { UPDATE_COLLAPSE, SET_MENU_LIST } from '@/redux/mutation-types'
/* 定义默认数据 */
const menuState = {
  isCollapse: false,
  menuList: [],
  aa: '呼吁阿里',
}

/* 导出一个函数 传实际的参数了，就用实际的参数，否则就用defaultState*/
const menuReducer = (state = menuState, { type, payload }) => {
  console.log(type, payload, 'meneReducer--action')
  return state
  // produce(state, draftState => {
  //   switch (type) {
  //     case UPDATE_COLLAPSE:
  //       draftState.isCollapse = false
  //       break
  //     case SET_MENU_LIST:
  //       draftState.menuList = []
  //       // action.menuList
  //       break
  //     default:
  //       return draftState
  //   }
  // })
}
export default menuReducer
