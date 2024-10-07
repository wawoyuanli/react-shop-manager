import React from "react";
import { Button } from "antd";
import qrcode from "../../../assets/images/wx.jpg";
import "./index.less";
import { useNavigate } from "react-router-dom";
const ContractUs = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/app/home");
  };
  return (
    <div className="contract-us">
      <Button type="primary" onClick={onBack}>
        返回
      </Button>
      <div>联系方式：13239600527</div>
      <div className="qrcode">
        <div>扫码加微信</div>
        <img src={qrcode} alt="b" />
      </div>
    </div>
  );
};
export default ContractUs;
