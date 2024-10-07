/*
  @author:hyl
  @date:2024-09-03
  顶部标签处理
*/
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "../../../config/config.js";
import { connect } from "react-redux";
import { setTabsList } from "../../../redux/modules/tabs/action";
import { routerArray } from "../../../routers/index.js";
import { searchRoute } from "../../../utils/util";
import "./index.less";
import React from "react";
const LayoutTabs = (props) => {
  /* 存储的菜单路径信息 */
  const { tabsList } = props.tabsReducer;
  const { setTabsList } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState(pathname);

  /* 初始化执行 ｜ 组件更新渲染执行 使用场景：初次渲染页面时访问接口加载页面数据 */
  useEffect(() => {
    addTabs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* 点击标签 */
  const clickTabs = (path) => {
    navigate(path);
  };

  /* 添加标签 */
  const addTabs = () => {
    const route = searchRoute(pathname, routerArray);
    /* 深拷贝，防止tabsList被修改 */
    let newTabsList = JSON.parse(JSON.stringify(tabsList));
    /* array.every()返回 Boolean值，表示所有元素是否都满足条件*/
    if (tabsList.every((item) => item.path !== route.path)) {
      newTabsList.push({
        label: route.meta.title,
        path: route.path,
        key: route.path,
      });
    }
    setTabsList(newTabsList);
    setActiveValue(pathname);
  };

  /* 删除标签 */
  const delTabs = (tabPath) => {
    /* 若当前路径是首页 返回 不处理 */
    if (tabPath === HOME_URL) return;
    /* 当前路径等于删除的路径 */
    if (pathname === tabPath) {
      tabsList.forEach((item, index) => {
        if (item.path !== pathname) return;
        const nextTab = tabsList[index + 1] || tabsList[index - 1];
        if (!nextTab) return;
        navigate(nextTab.path);
      });
    }
    // message.success('你删除了Tabs标签 😆😆😆')
    setTabsList(tabsList.filter((item) => item.path !== tabPath));
  };

  return (
    <>
      <div className="tabs">
        <Tabs
          defaultActiveKey="/home/index"
          items={tabsList}
          animated
          activeKey={activeValue}
          onChange={clickTabs}
          hideAdd
          type="editable-card"
          onEdit={(path) => {
            delTabs(path);
          }}
        />
        {/* <MoreButton tabsList={tabsList} delTabs={delTabs} setTabsList={setTabsList}></MoreButton> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
