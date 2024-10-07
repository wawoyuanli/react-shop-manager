import produce from "immer";
import { SET_AUTH_BUTTONS, SET_AUTH_ROUTER } from "../../mutation-types.js";

const authState = {
  authButtons: {},
  authRouter: [],
};

/* auth reducer */
const auth = (state = authState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case SET_AUTH_BUTTONS:
        draftState.authButtons = action.authButtons;
        break;
      case SET_AUTH_ROUTER:
        draftState.authRouter = action.authRouter;
        break;
      default:
        return draftState;
    }
  });

export default auth;
