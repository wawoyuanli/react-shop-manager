import { lazy } from "react";
import lazyLoad from "../../routers/utils/lazyLoad.js";

/* 常用组件模块 */
const appRouter = [
  {
    path: "/app/home",
    element: lazyLoad(lazy(() => import("@/pages/mobile/home/index.js"))),
  },
  {
    path: "/app/contractUs",
    element: lazyLoad(lazy(() => import("@/pages/mobile/contactUs/index.js"))),
  },
  {
    path: "/app/apple/detail",
    element: lazyLoad(lazy(() => import("@/pages/mobile/detail/index.js"))),
  },
];

export default appRouter;
