import { Navigate, useRoutes } from "react-router-dom";
import React from "react";
// import aa from "./modules/app.js";
/* 登录 */
import LoginNew from "../pages/loginNew/index.js";
import AppHome from "../pages/mobile/home/index.js";
import ContactUs from "../pages/mobile/contactUs/index.js";
import AppDetail from "../pages/mobile/detail/index.js";
/* 配置路由映射 （不同的路由对应渲染不同的页面组件） */

/* 导入所有router */
// const metaRouters = import.meta.globEager("./modules/*.js");
/* 处理路由 */
const routerArray = [];
// Object.keys(metaRouters).forEach((item) => {
//   Object.keys(metaRouters[item]).forEach((key) => {
//     routerArray.push(...metaRouters[item][key]);
//   });
// });

const rootRouter = [
  {
    path: "/app/home",
    element: <AppHome />,
  },
  {
    path: "/app/contractUs",
    element: <ContactUs />,
  },
  {
    path: "/app/apple/detail",
    element: <AppDetail />,
  },
  {
    path: "/",
    element: <LoginNew />,
  },
  {
    path: "/login",
    element: <LoginNew />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  ...routerArray,
  // ...aa,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};
/* 导出路由数组 */
export { routerArray };
export default Router;
