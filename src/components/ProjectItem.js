import React, { useState, useRef } from "react";
import Popup from "./Popup";
import "./projectitem.scss";

function ProjectItem(props) {
  const {
    src,
    icon,
    category,
    name,
    kinddata,
    id,
    srcifram,
    showVideo,
    linkvisit,
  } = props;
  const [isShow, setIsShow] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [proinfoarr, setProinfoarr] = useState([]);

  const projectItemRef = useRef();

  const onHoverFunction = () => {
    setIsShow(true);
  };
  const leaveHoverFunction = () => {
    setIsShow(false);
  };

  const handleClick = () => {
    const projectData = projectItemRef.current.dataset;
    let projectDataArray = [];
    for (const key in projectData) {
      projectDataArray.push(projectData[key]);
    }
    setProinfoarr(projectDataArray);

    document.body.classList.add("stop-scrolling");
    setShowPop(true);
  };

  return (
    <>
      <div
        className="project-item"
        data-kind={kinddata}
        data-id={id}
        data-src={src}
        data-category={category}
        data-title={name}
        data-icon={icon}
        data-srcifram={srcifram}
        data-showvideo={showVideo}
        data-visit={linkvisit}
        ref={projectItemRef}
        onClick={handleClick}
      >
        <div
          className={isShow ? "overlay-img onhover" : "overlay-img"}
          onMouseEnter={onHoverFunction}
          onMouseLeave={leaveHoverFunction}
        >
          <i className={isShow ? `${icon} onhoveri` : icon}></i>
          <h3 className={isShow ? "category-name onhoverhn" : "category-name"}>
            {category}
          </h3>
          <h3 className={isShow ? "title-name onhovertitn" : "title-name"}>
            {name}
          </h3>
        </div>
        <img className="img-project" src={src} alt="project" />
      </div>
      {showPop && (
        <Popup
          infoArray={proinfoarr}
          closePop={(showPop) => setShowPop(showPop)}
        />
      )}
    </>
  );
}

export default ProjectItem;
