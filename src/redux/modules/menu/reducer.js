import { produce } from "immer";
import { UPDATE_COLLAPSE, SET_MENU_LIST } from "@/redux/mutation-types.js";
const menuState = {
  isCollapse: false,
  menuList: [],
};

/* menu减速器 */
const menuReducer = (state = menuState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case UPDATE_COLLAPSE:
        draftState.isCollapse = action.isCollapse;
        break;
      case SET_MENU_LIST:
        draftState.menuList = action.menuList;
        break;
      default:
        return draftState;
    }
  });
export default menuReducer;
