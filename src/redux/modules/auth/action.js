import { SET_AUTH_BUTTONS, SET_AUTH_ROUTER } from "../../mutation-types.js";

// * setAuthButtons
export const setAuthButtons = (authButtons) => ({
  type: SET_AUTH_BUTTONS,
  authButtons,
});

// * setAuthRouter
export const setAuthRouter = (authRouter) => ({
  type: SET_AUTH_ROUTER,
  authRouter,
});
