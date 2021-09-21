import React, { useState } from "react";
import "./topscroll.scss";

function TopScroll() {
  const [isScroll, setisScroll] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 60) {
      setisScroll((isScroll) => true);
    } else {
      setisScroll(false);
    }
  };

  const handlClick = () => {
    window.scrollTo(null, 0);
  };

  return (
    <div
      className={isScroll ? "scroll-top activescroll" : "scroll-top"}
      onClick={handlClick}
    >
      <i className="fas fa-angle-double-up"></i>
    </div>
  );
}

export default TopScroll;
