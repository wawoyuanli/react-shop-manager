import { SET_TABS_LIST, SET_TABS_ACTIVE } from "../../mutation-types.js";

/* setTabsList */
export const setTabsList = (tabsList) => {
  return {
    type: SET_TABS_LIST,
    tabsList,
  };
};
/* setTabsActive */
export const setTabsActive = (tabsActive) => {
  return {
    type: SET_TABS_ACTIVE,
    tabsActive,
  };
};
