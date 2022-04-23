import React from "react";
import styled from "styled-components";
import line from "../../assets/images/langing/Asset.svg";
import Person from "../../assets/images/langing/person.svg";
import "../../assets/css/style.css";

export default function MentorPage() {
  return (
    <div>
      <MainContainer className="wrapper">
        <LeftContainer>
          <ImageContainer>
            <Image
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/person.svg"
              alt="image"
            />
          </ImageContainer>
          <NameContainer>
            Dr.John Honai
            {/* <Name>Dr.John Honai</Name> */}
            <LineContainer>
              <Line src={line} alt="images" />
            </LineContainer>
          </NameContainer>
        </LeftContainer>
        <RightContainer>
          <Title>
            Our <Small>Mentor</Small>
          </Title>
          <ImageLine>
            <UnderLine
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Asset.svg"
              alt="images"
            />
          </ImageLine>
          <Paragraph>
            Amet, ipsum dolor sit amet, consectetur adipis cing elit. Sed sit
            euismod viverra amet posuere id consequat et.{" "}
            <Color>Dr.John Honai</Color> sed.
          </Paragraph>
          <Sentence>
            Consectetur dolor sit amet, consectetur adipis cing elit. Sed uit
            euismod viverra amet posuere id consequat et sed. Sed sit euismod
            viverra amet posuere id consequat.
          </Sentence>
        </RightContainer>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  background-color: #f8f9fc;
  border-radius: 5px;
  padding-bottom: 151px;

  @media all and (max-width: 980px) {
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`;
const LeftContainer = styled.div`
  width: 45%;
  position: relative;

  @media all and (max-width: 980px) {
    width: 72%;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 82%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: "gordita-medium";
  color: #fff;
  width: 56%;
  height: 94px;
  border-radius: 7px;
  position: absolute;
  bottom: -25px;
  right: -39px;
  text-align: center;
  background: rgba(10, 62, 98, 0.8);
  backdrop-filter: blur(34px);
  @media all and (max-width: 1280px) {
    width: 65%;
    height: 74px;
    bottom: 40px;
    right: -43px;
  }
  @media all and (max-width: 1080px) {
    width: 70%;
    bottom: 83px;
    font-size: 30px;
  }

  @media all and (max-width: 980px) {
    bottom: -32px;
    font-size: 28px;
    width: 52%;
  }
  @media all and (max-width: 480px) {
    width: 72%;
    height: 81px;
    right: -38px;
  }
  @media all and (max-width: 360px) {
    width: 78%;
    height: 81px;
    right: -38px;
    font-size: 28px;
  }
`;
const Name = styled.span`
  font-size: 32px;
  font-family: gordita-medium;
  color: #fff;
  margin-top: 30px;
  display: inline-block;

  @media all and (max-width: 1080px) {
    font-size: 30px;
  }
  @media all and (max-width: 360px) {
    font-size: 28px;
  }
`;
const LineContainer = styled.div`
  width: 41%;
  position: absolute;
  left: 36px;
  top: 64px;

  @media all and (max-width: 1280px) {
    width: 45%;

    left: 28px;
    top: 52px;
  }
`;
const Line = styled.img`
  width: 100%;
  display: block;
`;
const RightContainer = styled.div`
  width: 55%;
  margin-left: 84px;
  @media all and (max-width: 980px) {
    width: 100%;
    margin-top: 12%;
    margin-left: 0;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 480px) {
    margin-top: 22%;
  }
`;

const Title = styled.h3`
  color: #d3b442;
  font-size: 30px;
  font-family: "gordita_medium";

  @media all and (max-width: 980px) {
    text-align: center;
  }
  @media all and (max-width: 480px) {
    text-align: unset;
  }
  @media all and (max-width: 360px) {
    /* margin-left: -21px; */
  }
`;
const Small = styled.span`
  font-size: 30px;
  color: #0a3d60;
  font-family: "gordita_medium";
`;
const ImageLine = styled.div`
  width: 27%;
  @media all and (max-width: 980px) {
    margin-left: 38%;
  }
  @media all and (max-width: 480px) {
    width: 55%;
    margin-left: 12%;
  }
`;
const UnderLine = styled.img`
  width: 100%;
  display: block;
`;
const Paragraph = styled.p`
  color: #a4a4a4;
  font-size: 16px;
  font-family: "gordita_regular";
  margin-top: 30px;
  width: 87%;

  @media all and (max-width: 640px) {
    font-size: 14px;
  }
  @media all and (max-width: 480px) {
  }
`;

const Color = styled.span`
  color: #d3b442;
  font-family: "gordita_bold";
`;
const Sentence = styled.p`
  color: #a4a4a4;
  font-size: 16px;
  font-family: "gordita_regular";
  width: 87%;
  line-height: 1.7em;
  margin-top: 13px;

  @media all and (max-width: 640px) {
    font-size: 14px;
  }

  @media all and (max-width: 1080px) {
  }
  @media all and (max-width: 980px) {
  }
  @media all and (max-width: 640px) {
  }

  @media all and (max-width: 480px) {
  }
  @media all and (max-width: 480px) {
  }
`;
