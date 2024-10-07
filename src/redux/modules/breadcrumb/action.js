import * as types from "../../mutation-types.js";

// * setBreadcrumbList
export const setBreadcrumbList = (breadcrumbList) => ({
  type: types.SET_BREADCRUMB_LIST,
  breadcrumbList,
});
