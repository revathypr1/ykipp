import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/langing/ykkip.svg";
import "../../assets/css/style.css";

export default function Header() {
  return (
    <div>
      <HeaderContainer>
        <WrapperContainer className="wrapper">
          <LeftContainer>
            <LogoContainer>
              <Image src={logo} alt="Images" />
            </LogoContainer>
          </LeftContainer>
          <RightContainer>
            <ButtonDiv>Register Now</ButtonDiv>
          </RightContainer>
        </WrapperContainer>
      </HeaderContainer>
    </div>
  );
}
const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
`;
const LeftContainer = styled.div`
  width: 5%;
  /* margin-left: 96px; */

  @media all and (max-width: 980px) {
    width: 6%;
  }
  @media all and (max-width: 640px) {
    width: 13%;
    margin-left: 47px;
  }
  @media all and (max-width: 480px) {
    width: 13%;
    margin-left: 28px;
  }
`;
const LogoContainer = styled.h1``;
const Image = styled.img`
  width: 100%;
  display: block;
`;

const RightContainer = styled.div``;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.button`
  background-color: #d7b641;
  font-size: 15px;
  height: 50px;
  border: none;
  border-radius: 5px;
  width: 160px;
  color: #fff;
  font-family: gordita_medium;
  align-items: center;
  cursor: pointer;

  @media all and (max-width: 640px) {
    height: 46px;
    width: 142px;
  }
  @media all and (max-width: 480px) {
    height: 44px;
    width: 122px;
    font-size: 13px;
  }
  @media all and (max-width: 360px) {
    margin-left: 17px;
    padding: none;
  }
`;
