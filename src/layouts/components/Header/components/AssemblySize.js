import { Dropdown } from "antd";
import { setAssemblySize } from "../../../../redux/modules/global/action";
import { connect } from "react-redux";
import React from "react";
const AssemblySize = (props) => {
  const { assemblySize, setAssemblySize } = props;

  // 切换组件大小
  const onClick = (e) => {
    setAssemblySize(e.key);
  };
  const items = [
    {
      key: "1",
      disabled: assemblySize === "middle",
      label: <span>默认</span>,
    },
    {
      key: "2",
      disabled: assemblySize === "large",
      label: <span>大型</span>,
    },
    {
      key: "3",
      disabled: assemblySize === "small",
      label: <span>小型</span>,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <i className="icon-style iconfont icon-contentright"></i>
      </Dropdown>
    </>
  );
};

const mapStateToProps = (state) => {
  return state.globalReducer;
};
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
