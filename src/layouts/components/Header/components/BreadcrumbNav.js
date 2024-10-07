import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import React, { Fragment } from "react";

const BreadcrumbNav = (props) => {
  const { pathname } = useLocation();
  // const { themeConfig } = props.globalReducer
  // const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || []
  const items = [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ];
  return (
    <Fragment>
      {/* >=5.3.0 可用 ,推荐写法*/}
      <Breadcrumb items={items}></Breadcrumb>
    </Fragment>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(BreadcrumbNav);
