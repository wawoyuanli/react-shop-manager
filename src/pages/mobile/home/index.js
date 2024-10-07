import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import apple1 from "../../../assets/images/apple1.jpg";
import apple2 from "../../../assets/images/apple2.jpg";
import apple3 from "../../../assets/images/apple3.jpg";
import apple4 from "../../../assets/images/apple4.jpg";
import apple5 from "../../../assets/images/apple5.jpg";
import "./index.less";
const AppHome = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/app/contractUs");
  };
  const seeDetail = () => {
    navigate("/app/apple/detail");
  };
  return (
    <div className="app-home">
      <Carousel afterChange={onChange} style={{ width: "100vw" }}>
        <div className="apple-image">
          <img src={apple1} alt="apple1" />
        </div>
        <div className="apple-image">
          <img src={apple2} alt="apple1" />
        </div>
        <div className="apple-image">
          <img src={apple3} alt="apple1" />
        </div>
      </Carousel>
      <div className="hot-product">
        <div className="box-title">推荐品类</div>
        <div className="intro">
          <img src={apple1} alt="a" onClick={seeDetail} />
          <img src={apple3} alt="a" onClick={seeDetail} />
        </div>
        <div className="detail">
          <div>红富士苹果</div>
          <div>秦冠苹果</div>
        </div>
        <div className="intro">
          <img src={apple4} alt="a" onClick={seeDetail} />
          <img src={apple5} alt="a" onClick={seeDetail} />
        </div>
        <div className="detail">
          <div>黄元帅苹果</div>
          <div>红元帅苹果</div>
        </div>
      </div>
      <div className="hot-product">
        <div className="box-title">大小规格</div>
        <div className="intro">
          <img src={apple1} alt="a" onClick={seeDetail} />
          <img src={apple3} alt="a" onClick={seeDetail} />
          <img src={apple3} alt="a" onClick={seeDetail} />
        </div>
        <div className="detail">
          <div>小果 40元/箱</div>
          <div>中果 60元/箱</div>
          <div>大果 80元/箱</div>
        </div>
      </div>
      <div className="bottom">
        <div className="home-tab">首页</div>
        <div className="contract-tab" onClick={nextPage}>
          联系我们
        </div>
      </div>
    </div>
  );
};
export default AppHome;
