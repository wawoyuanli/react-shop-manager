import { produce } from "immer";
import { SET_BREADCRUMB_LIST } from "@/redux/mutation-types";

const breadcrumbState = {
  breadcrumbList: {},
};

// breadcrumb reducer
const breadcrumb = (state = breadcrumbState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case SET_BREADCRUMB_LIST:
        draftState.breadcrumbList = action.breadcrumbList;
        break;
      default:
        return draftState;
    }
  });

export default breadcrumb;
