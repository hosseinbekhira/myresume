import React, { useContext } from "react";
import { imageboxContext } from "../pages/Home";
import "./imagesbox.scss";

function ImageBox() {
  const info = useContext(imageboxContext);
  const { src, text, secondText } = info;
  return (
    <div className="img-prof-box">
      <div className="img-box">
        <img src={src} alt="Hossein" />
      </div>
      <div className="box-color">
        <h2>{text}</h2>
        <h2>{secondText}</h2>
      </div>
    </div>
  );
}

export default ImageBox;
