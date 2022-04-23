import React, { useState } from "react";
import styled from "styled-components";

import Video from "../includes/modal/Video";

import polygon from "../../assets/images/langing/Vector.svg";
import playButton from "../../assets/images/langing/play-button.svg";
import youtube from "../../assets/images/langing/Profile.svg";
import team from "../../assets/images/langing/speak-english.svg";

import line from "../../assets/images/langing/Asset.svg";

export default function Spotlight() {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <Video play={play} setPlay={setPlay} />
      <MainContainer>
        <LeftContainer>
          <SpeakDiv>
            <Speak
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/speak-english.svg"
              alt="images"
            />
          </SpeakDiv>
          <Content>
            <Title>
              Want to <Color>Help Students</Color> to Speak English?
            </Title>
            <ContentImage
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Asset.svg"
              alt="image"
            />
          </Content>
          <Sentence>
            Ykipp in association with Lekshmi Vilasom High School, introducing
            Speak English. A project for school students from Kerala, India to
            break the barriers for communicating in English and to enhance the
            confidence and operational abilities.
          </Sentence>
          <TotalImage>
            <Image
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/group-speak.svg"
              alt="image"
            />
          </TotalImage>
          <ButtonContainer>Register Now</ButtonContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            {/* <VideoImg src={youtube} alt="images" /> */}
            <PlayContainer>
              <PlayButton
                onClick={() => {
                  setPlay(true);
                  console.log(play);
                }}
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/play-button.svg"
                alt="images"
              />
            </PlayContainer>
          </ImageContainer>
        </RightContainer>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap:wrap; */
  padding-bottom: 70px;
  min-width: 1250px;
  /* padding-bottom:40%; */

  @media all and (max-width: 1080px) {
  }
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }

  @media all and (max-width: 360px) {
  }
`;
const LeftContainer = styled.div`
  width: 60%;
  /* padding-left: 106px; */
  padding-left: 131px;

  @media all and (max-width: 1280px) {
    width:62%;
    /* padding-left: 97px; */
  }
  @media all and (max-width: 1080px) {
        width:50%;
        /
  
  }
  @media all and (max-width: 980px) {
    padding-left: 100px;
    width:100%;
  }
  @media all and (max-width: 768px) {
      padding-left:113px; 
  }

 
  @media all and (max-width: 640px) {
    padding-left:70px;
  }
  
  @media all and (max-width: 480px) {
    padding-left:33px;
  }
  @media all and (max-width: 360px) {
    padding-left:21px;
  }
`;
const SpeakDiv = styled.div`
  width: 35%;
  margin-top: 17%;

  @media all and (max-width: 1280px) {
    width: 48%;
    margin-top: 27%;
  }
  @media all and (max-width: 1080px) {
    width: 49%;
    margin-top: 21%;
  }
  @media all and (max-width: 980px) {
    width: 23%;
    margin-top: 10%;
  }
  @media all and (max-width: 360px) {
    width: 20%;
  }

  @media all and (max-width: 480px) {
    width: 22%;
  }
`;
const Speak = styled.img`
  width: 100%;
  display: block;
`;
const Content = styled.div`
  margin-top: 30px;
  position: relative;
`;
const Title = styled.h2`
  color: #0a4771;
  font-size: 36px;
  width: 65%;
  font-family: gordita_medium;

  @media all and (max-width: 1280px) {
    width: 68%;
  }
  @media all and (max-width: 1080px) {
    width: 80%;
    font-size: 32px;
  }
  @media all and (max-width: 980px) {
    width: 45%;
  }
  @media all and (max-width: 640px) {
    width: 32%;
  }
  @media all and (max-width: 480px) {
    font-size: 27px;
    width: 27%;
  }
  @media all and (max-width: 360px) {
    font-size: 25px;
    width: 25%;
  }
`;
const ContentImage = styled.img`
  width: 28%;
  position: absolute;
  left: 90px;
  top: 98px;
  @media all and (max-width: 1280px) {
  }
  @media all and (max-width: 1080px) {
  }
  @media all and (max-width: 980px) {
    width: 14%;
    top: 90px;
  }
  @media all and (max-width: 768px) {
    width: 15%;

    left: 70px;
    top: 92px;
  }
  @media all and (max-width: 640px) {
    width: 16%;
    top: 81px;
  }

  @media all and (max-width: 640px) {
  }
  @media all and (max-width: 480px) {
    width: 14%;
    top: 73px;
  }
`;
const Color = styled.span`
  color: #ebc13a;
`;
const Sentence = styled.p`
  color: #878787;
  font-size: 16px;
  font-family: gordita_regular;
  width: 72%;
  font-family: gordita_regular;

  margin-top: 30px;
  margin-bottom: 40px;

  @media all and (max-width: 1080px) {
    width: 71%;
  }
  @media all and (max-width: 980px) {
    width: 48%;
  }
  /* @media all and (max-width:px) {
    width:50%;
  } */
  @media all and (max-width: 768px) {
    width: 41%;
  }
  @media all and (max-width: 640px) {
    width: 34%;
  }
  @media all and (max-width: 480px) {
    width: 28%;
  }
  @media all and (max-width: 480px) {
    width: 24%;
    font-size: 14px;
  }
`;
const TotalImage = styled.div`
  width: 55%;
  margin-bottom: 35px;

  @media all and (max-width: 980px) {
    width: 40%;
  }
  @media all and (max-width: 640px) {
    width: 31%;
  }
  @media all and (max-width: 480px) {
    width: 25%;
  }
  @media all and (max-width: 360px) {
    width: 19%;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const ButtonContainer = styled.button`
  background: linear-gradient(90deg, #0a4771 1.55%, #1d74af 100%);
  color: #ffff;
  font-size: 16px;
  font-family: "gordita_medium";
  border-radius: 8px;
  width: 172px;
  height: 46px;
  margin: 0 auto;
  cursor: pointer;

  @media all and (max-width: 980px) {
    width: 147px;
    height: 40px;
  }
  @media all and (max-width: 640px) {
  }
  @media all and (max-width: 480px) {
    width: 138px;
    height: 37px;
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
  }
`;
const RightContainer = styled.div`
  width: 40%;
  background-color: #093e62;
  border-radius: 0 0 0 10px;
  display: flex;
  align-items: center;
  @media all and (max-width: 1080px) {
    width: 50%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    margin-top: 40px;
    justify-content: center;
  }
  @media all and (max-width: 768px) {
    background-color: unset;
  }
  @media all and (max-width: 640px) {
    background-color: unset;
    width: 70%;
  }
`;
const ImageContainer = styled.div`
  width: 90%;
  height: 285px;
  transform: translateX(-15%);
  /* background:red; */
  border-radius: 10px;
  background-image: url(${"https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Profile.svg"});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  @media all and (max-width: 1280px) {
    transform: translateX(-34%);
  }
  @media all and (max-width: 1080px) {
    width: 66%;
    transform: translateX(-22%);
  }
  @media all and (max-width: 980px) {
    width: 72%;
    transform: translateX(-3%);
  }

  @media all and (max-width: 768px) {
    width: 58%;
    margin: 0 auto;
    transform: unset;
  }

  @media all and (max-width: 640px) {
    width: 46%;
    transform: translateX(-49%);
  }
  @media all and (max-width: 480px) {
    width: 35%;
    transform: translateX(-83%);
  }
  @media all and (max-width: 360px) {
    width: 33%;
    transform: translateX(-95%);
  }
  /* @media all and (max-width:768px) {
        transform:translateX(9%);
}

@media all and (max-width:640px) {
    transform: translateX(12%);
    width: 31%;
    margin-top: 50px;
       
}
@media all and (max-width:480px) {
   width:23%;
       
}
@media all and (max-width:360px) {
    transform: translateX(7%);
         */
`;
const VideoImg = styled.img`
  width: 100%;
  display: block;
`;
const PlayContainer = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  @media all and (max-width: 1080px) {
    right: 5%;
    width: 59px;
  }
  @media all and (max-width: 980px) {
    right: 46%;
    width: 59px;
    top: 10px;
  }
  @media all and (max-width: 768px) {
    right: 4%;
    width: 59px;
    top: -10px;
  }

  @media all and (max-width: 480px) {
    right: 6%;
    width: 47px;
    top: -60px;
  }
`;
const PlayButton = styled.img`
  width: 100%;
  display: block;
`;
