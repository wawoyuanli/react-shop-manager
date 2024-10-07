import React from "react";
import { Button } from "antd";
import "./index.less";
import { useNavigate } from "react-router-dom";
const Detail = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/app/home");
  };
  return (
    <div className="contract-us">
      <Button type="primary" onClick={onBack}>
        返回
      </Button>
      <div className="title">产品特点</div>
      <div className="product-intro">
        庆阳苹果是蕴涵陇东黄土高原独特风情的金秋佳果，产于农业部区划的中国优质苹果栽培的最佳优生带，
        气候条件完全符合农业部优势苹果生产的七项生态指标。盛产的红富士、华冠、皇家嘎拉、红将军等苹果果面洁净、
        果形端庄典雅，色泽鲜艳靓丽；果肉硬度适宜，酸甜适中，营养丰富；食之脆甜爽口，香味浓郁；耐藏性好，品质优异，绿色有机。
        是鲜食、加工、储藏的上佳品种。
      </div>
      <div className="title">产品详情</div>
      <div className="product-intro">此处可以放视频和描述文字</div>
      <div className="bottom-box">
        <div>加入购入车</div>
      </div>
    </div>
  );
};
export default Detail;
