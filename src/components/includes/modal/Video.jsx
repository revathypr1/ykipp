import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

export default function video({ play, setPlay }) {
  const playclose = () => {
    setPlay(!play);
  };
  return (
    <Videocontianer className={play ? "active" : ""}>
      <Videoportion>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U%27"
          width="100%"
          height="100%"
        />
      </Videoportion>
      <Closebutton onClick={playclose}>
        <Close
          src={require("../../../assets/images/langing/cross.svg").default}
        />
      </Closebutton>
    </Videocontianer>
  );
}

const Videocontianer = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0, 0);
  z-index: 500;
  height: 100vh;
  &.active {
    transform: scale(1, 1);
  }
`;
const Videoportion = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 350px;
`;
const Closebutton = styled.div`
  position: fixed;
  top: 57px;
  right: 95px;
`;
const Close = styled.img``;
