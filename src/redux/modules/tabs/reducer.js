import { HOME_URL } from "../../../config/config.js";
import produce from "immer";
import * as types from "../../mutation-types.js";

const tabsState = {
  // tabsActive 其实没啥用，使用 pathname 就可以了😂
  tabsActive: HOME_URL,
  tabsList: [{ label: "首页", path: HOME_URL, key: HOME_URL }],
};

// tabs reducer
const tabsReducer = (state = tabsState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case types.SET_TABS_LIST:
        draftState.tabsList = action.tabsList;
        break;
      case types.SET_TABS_ACTIVE:
        draftState.tabsActive = action.tabsActive;
        break;
      default:
        return draftState;
    }
  });

export default tabsReducer;
