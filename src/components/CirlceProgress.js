import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "./cirlceProgress.scss";

// Start Function for calculing the percent Progress
const caclProgressLeft = (per) => {
  let resultfirstValue;
  if (per <= 50) {
    resultfirstValue = (per * 180) / 50;
    return resultfirstValue;
  } else if (per > 50 && per <= 100) {
    return 180;
  } else {
    return 0;
  }
};

const caclProgressRight = (per) => {
  let resultsecondValue,
    newPer = per - 50;
  if (per <= 50) {
    return 0;
  } else if (per > 50 && per <= 100) {
    resultsecondValue = (newPer * 180) / 50;
    return resultsecondValue;
  } else {
    return 0;
  }
};
// End Function for calculing the percent Progress

// Start Code Style

const NumberStyle = styled.div`
  color: ${(props) => props.color};
`;

const Styleleft = styled.div`
  z-index: 1;
  background-color: ${(props) => props.color};
  animation: ${(props) => props.animationleft} ${(props) => props.duration}ms
    ease-in both;
`;

const Styleright = styled.div`
  background-color: ${(props) => props.color};
  animation: ${(props) => props.animationright} ${(props) => props.duration}ms
    ease-out both;
  animation-delay: ${(props) => props.duration}ms;
`;
// End Code Style

function CirlceProgress(props) {
  const [count, setCount] = useState(0);
  const [myState, setmyState] = useState(true);

  let {
    title = "default",
    numpercent = 50,
    duration = 500,
    colorpercent = "#ffcc00",
    colorprogress = "#ffcc00",
    colorinnerc = "#2b2c2c",
  } = props;

  // Start Code of Style
  const Animationleft = keyframes`
  100% { transform: rotate(${caclProgressLeft(numpercent)}deg);} `;

  const Animationright = keyframes`
  100% { transform: rotate(${caclProgressRight(numpercent)}deg);} `;
  // End Code of Style

  // Start Set Data of Circle Progress
  const chanePercent = (per) => {
    if (per > 100) {
      return 0;
    } else {
      return per;
    }
  };
  numpercent = chanePercent(numpercent);

  const timeInterval = duration / numpercent;
  // End Set Data of Circle Progress

  useEffect(() => {
    let interval;
    if (myState) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, timeInterval);
    }
    if (count === numpercent) {
      setmyState(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [myState, count, numpercent, timeInterval]);

  return (
    <div className="circle-progress">
      <div className="inner" style={{ backgroundColor: colorinnerc }}></div>
      <NumberStyle className="numb" color={colorpercent}>
        {`${count}%`}
      </NumberStyle>

      <div className="circle">
        <div className="bar left">
          <Styleleft
            animationleft={Animationleft}
            color={colorprogress}
            duration={duration}
            className="progress"
          ></Styleleft>
        </div>

        <div className="bar right">
          <Styleright
            animationright={Animationright}
            color={colorprogress}
            duration={duration}
            className="progress"
          ></Styleright>
        </div>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default CirlceProgress;
