import React from "react";
import lazyLoad from "../../routers/utils/lazyLoad";
import { LayoutIndex } from "../../routers/constant.js";
/* 表单模块 */
const formRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/form/basicForm",
        element: lazyLoad(
          React.lazy(() => import("@/pages/form/basicForm/index.js"))
        ),
        meta: {
          requiresAuth: true,
          title: "基础表单",
          key: "basicForm",
        },
      },
      {
        path: "/form/dynamicForm",
        element: lazyLoad(
          React.lazy(() => import("@/pages/form/dynamicForm/index.js"))
        ),
        meta: {
          requiresAuth: true,
          title: "动态表单",
          key: "dynamicForm",
        },
      },
      {
        path: "/form/validateForm",
        element: lazyLoad(
          React.lazy(() => import("@/pages/form/validateForm/index.js"))
        ),
        meta: {
          requiresAuth: true,
          title: "表单校验",
          key: "validateForm",
        },
      },
    ],
  },
];

export default formRouter;
