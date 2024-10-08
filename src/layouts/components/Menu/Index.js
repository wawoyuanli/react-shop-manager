import React, { useEffect, useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Spin } from "antd";
import {
  findAllBreadcrumb,
  getOpenKeys,
  handleRouter,
  searchRoute,
} from "../../../utils/util.js";
import { setMenuList } from "../../../redux/modules/menu/action";
import { setBreadcrumbList } from "../../../redux/modules/breadcrumb/action";
import { setAuthRouter } from "../../../redux/modules/auth/action";
import { connect } from "react-redux";
import * as Icons from "@ant-design/icons";
import Logo from "./components/Logo";
import menuUrls from "./constant/index";
import "./index.less";
const ThemeContext = createContext(null);
const LayoutMenu = (props) => {
  const { pathname } = useLocation();
  const {
    isCollapse,
    setBreadcrumbList,
    setAuthRouter,
    setMenuList: setMenuListAction,
  } = props;
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [openKeys, setOpenKeys] = useState([]);

  /* 刷新页面菜单保持高亮 */
  useEffect(() => {
    // const connection = createConnection(serverUrl, roomId);
    setSelectedKeys([pathname]);
    if (!isCollapse) {
      setOpenKeys(getOpenKeys(pathname));
    }
  }, [pathname, isCollapse]);

  /* 设置当前展开的 subMenu */
  const onOpenChange = (openKeys) => {
    if (!openKeys.length) return false;
    if (openKeys.length && openKeys.length === 1) return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(latestOpenKey);
    setOpenKeys([latestOpenKey]);
    /* 选择那个路径 那个高亮 */
    setSelectedKeys([latestOpenKey]);
  };

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  // 动态渲染 Icon 图标
  const customIcons = Icons;
  const addIcon = (name) => {
    return React.createElement(customIcons[name]);
  };

  /* 处理后台返回菜单 key 值为 antd 菜单需要的 key 值*/
  const deepLoopFloat = (menuList, newArr = []) => {
    menuList.forEach((item) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length) {
        return newArr.push(getItem(item.title, item.path, addIcon(item.icon)));
      } else {
        newArr.push(
          getItem(
            item.title,
            item.path,
            addIcon(item.icon),
            deepLoopFloat(item.children)
          )
        );
      }
    });
    return newArr;
  };

  // 获取菜单列表并处理成 antd menu 需要的格式
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMenuData = async () => {
    setLoading(true);
    try {
      // const { data } = await getMenuList()
      if (!menuUrls.length) return;
      setMenuList(deepLoopFloat(menuUrls));
      // 存储处理过后的所有面包屑导航栏到 redux 中
      setBreadcrumbList(findAllBreadcrumb(menuUrls));
      // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
      const dynamicRouter = handleRouter(menuUrls);
      setAuthRouter(dynamicRouter);
      setMenuListAction(menuUrls);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenuData();
  }, []);

  /* 点击当前菜单跳转页面 */
  const navigate = useNavigate();
  /* 点击 MenuItem 调用此函数 */
  const clickMenu = (item) => {
    const route = searchRoute(item.key, props.menuList);
    if (route.isLink) {
      window.open(route.isLink, "_blank");
      return;
    }
    navigate(item.key);
  };
  return (
    <div className="menu">
      <Spin spinning={loading} tip="Loading...">
        <Logo></Logo>
        {/* openKeys:当前展开的 SubMenu 菜单项 key 数组 */}
        <Menu
          theme="dark"
          mode="inline"
          triggerSubMenuAction="click"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          items={menuList}
          onClick={clickMenu}
          onOpenChange={onOpenChange}
        ></Menu>
      </Spin>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.menuReducer;
};
const mapDispatchToProps = { setMenuList, setBreadcrumbList, setAuthRouter };
/* 属性，事件 */
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
