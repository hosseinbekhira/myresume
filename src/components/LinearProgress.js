import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "./linearprogress.scss";

const animationBar = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${(props) => props.ration}%;
  }
`;

const BarProgress = styled.div`
  width: ${(props) => props.ration}%;
  background-color: ${(props) => props.bgColor};
  animation: ${animationBar} ${(props) => props.duration}ms linear;
`;

function LinearProgress(props) {
  const [count, setCount] = useState(0);
  const [myState, setmyState] = useState(true);

  const {
    title = "Default",
    barColor = "#ffcc00",
    ration = 50,
    duration = 1000,
  } = props;

  const timeInterval = duration / ration;

  useEffect(() => {
    let interval;
    if (myState) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, timeInterval);
    }
    if (count === ration) {
      setmyState(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [myState, count, ration, timeInterval]);

  return (
    <div className="linear-progress">
      <div className="name-ration-progress">
        <span className="title-pro">{title}</span>
        <span className="ration-pro">{count}%</span>
      </div>
      <div className="container-bar">
        <BarProgress
          className="bar-progress"
          bgColor={barColor}
          duration={duration}
          ration={ration}
        ></BarProgress>
      </div>
    </div>
  );
}

export default LinearProgress;
