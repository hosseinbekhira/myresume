import React from "react";

function Popup(props) {
  let [kinddata, id, src, title, name, icon, srcifram, showvideo, linkvisit] =
    props.infoArray;

  const showValue = (string) => {
    if (string.toLowerCase() === "true") {
      return "part-video-project";
    } else if (string.toLowerCase() === "false") {
      return "part-video-project hidev";
    } else {
      return null;
    }
  };

  const disableDownload = (kinddata) => {
    if (kinddata === "website") {
      return "download-btn disabled";
    } else {
      return "download-btn";
    }
  };

  const disableVisit = (kinddata) => {
    if (kinddata === "magazine") {
      return "visit-btn disabled";
    } else {
      return "visit-btn";
    }
  };

  const changeLinkVisitToDownload = (kinddata) => {
    if (kinddata === "magazine") {
      return linkvisit;
    } else {
      return src;
    }
  };

  return (
    <>
      <div className="container-popup">
        <div
          className="btn-close"
          onClick={() => {
            props.closePop(false);
            document.body.classList.remove("stop-scrolling");
          }}
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="content-project">
          <div className="part-img-project">
            <img src={src} alt="Project" className="img-project" />
          </div>
          <div className={showValue(showvideo)}>
            <iframe
              src={srcifram}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="info-project">
          <div className="part-left">
            <h2>Category: {title}</h2>
            <h3>Title: {name}</h3>
          </div>
          <div className="part-right">
            <div className="container-down-visit">
              <a
                className={disableDownload(kinddata)}
                href={changeLinkVisitToDownload(kinddata)}
                download
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <a
                className={disableVisit(kinddata)}
                href={linkvisit}
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>

            <div className="container-number-icon">
              <i className={icon}></i>
              <div className="number-project">{id}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
