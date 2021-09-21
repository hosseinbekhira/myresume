import React, { useState, useEffect, useContext } from "react";
import { aboutContext } from "../pages/Home";
import styled from "styled-components";
import "./about.scss";

const SlidePart = styled.div`
  background-image: url("${(props) => props.urlpicture}");
`;

function About() {
  let randomNumber = Math.floor(Math.random() * 5);
  const myArrayWord = ["Be patient", "and", "you will get", "what you want"];
  const [number, setNumber] = useState(randomNumber);
  const [count, setCount] = useState(0);
  const pathImg = useContext(aboutContext);
  const { src, intro } = pathImg;
  let pictureUrl = `/images/slide-${number}.jpg`;

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(Math.floor(Math.random() * 5));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      if (count === 3) {
        setCount((count) => (count = 0));
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <div className="about">
        <SlidePart className="slide-part" urlpicture={pictureUrl}>
          <div className="overlay"></div>
          <div className="text-animation">
            <h2 className="auther">Ali ibn Abi Talib</h2>
            <h2 className="slogane f-word">{myArrayWord[count]}</h2>
          </div>
        </SlidePart>

        <div className="intro-part">
          <div className="container-center">
            <p>{intro}</p>
            <img src={src} alt="singature" className="singature" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
