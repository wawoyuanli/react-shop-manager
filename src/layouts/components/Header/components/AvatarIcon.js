import { useRef } from "react";
import { Avatar, Modal, message } from "antd";
import { Dropdown, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../../../../config/config.js";
import { connect } from "react-redux";
import { setToken } from "../../../../redux/modules/global/action";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "../../../../assets/images/avatar.png";
import React from "react";
import "../../../../assets/iconfont/iconfont.less";
const AvatarIcon = (props) => {
  const { setToken } = props;
  const navigate = useNavigate();

  const passRef = useRef(null);
  const infoRef = useRef(null);

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "温馨提示 🧡",
      icon: <ExclamationCircleOutlined />,
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        setToken("");
        message.success("退出登录成功！");
        navigate("/login");
      },
    });
  };

  const items = [
    {
      key: "1",
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate(HOME_URL),
    },
    {
      key: "2",
      label: <span className="dropdown-item">个人信息</span>,
      // onClick: () => infoRef.current.showModal({ name: 11 }),
    },
    {
      key: "3",
      label: <span className="dropdown-item">修改密码</span>,
      // onClick: () => passRef.current.showModal({ name: 11 }),
    },
    {
      key: "4",
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ];
  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <Avatar size="large" src={avatar} />
          </Dropdown>
        </Space>
      </Space>
      <InfoModal innerRef={infoRef}></InfoModal>
      <PasswordModal innerRef={passRef}></PasswordModal>
    </>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(AvatarIcon);
