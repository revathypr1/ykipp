import React from "react";
import styled from "styled-components";


import line from "../../assets/images/langing/asset-white.svg";
import "../../assets/css/style.css";

export default function Communicate() {
  const leftData = [
    {
      id: 1,
      content:
        "Giving experience of speaking in English for the students from Kerala, India",
    },
    {
      id: 2,
      content: "Contribute 1 hour session via Google Meet",
    },
    {
      id: 3,
      content: "Interact with the students",
    },
    {
      id: 4,
      content: "Sharing life experience with the students",
    },
  ];
  const rightData = [
    {
      id: 1,
      content: "Improving the operational abilities of the students",
    },
    {
      id: 2,
      content: "Initiating the cultural transfer",
    },
    {
      id: 3,
      content: "Improve the confidence of students in comunication",
    },
    {
      id: 4,
      content: "sharing life experience with the students",
    },
  ];
  return (
    <div>
      <MainContainer>
        <WrapperContainer className="wrapper">
          <TopContainer>
            <Heading>
              Features, Benefits
              <Small>
                 and <br /> the
              </Small>
              Vision
            </Heading>
            <DashContainer>
              <Dash src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/asset-white.svg" alt="images" />
            </DashContainer>
          </TopContainer>
          <BottomContainer>
            <LeftContainer>
              <TopDiv>
                <Sentence>What we are expecting from you?</Sentence>
              </TopDiv>
              <BottomDiv>
                {leftData.map((item) => (
                  <BoxContainer type="left">
                    <LeftDiv>
                      <BorderDiv type="left">
                        <FillSpan type="left"></FillSpan>
                      </BorderDiv>
                    </LeftDiv>
                    <RightDiv>
                      <Paragraph type="left">{item.content}</Paragraph>
                    </RightDiv>
                  </BoxContainer>
                ))}
              </BottomDiv>
            </LeftContainer>
            <RightContainer>
              <TopDiv>
                <SentenceOne>How our students benefit?</SentenceOne>
              </TopDiv>
              <BottomDiv>
                {rightData.map((item) => (
                  <BoxContainer>
                    <LeftDiv>
                      <BorderDiv>
                        <FillSpan></FillSpan>
                      </BorderDiv>
                    </LeftDiv>
                    <RightDiv>
                      <Paragraph>{item.content}</Paragraph>
                    </RightDiv>
                  </BoxContainer>
                ))}
              </BottomDiv>
            </RightContainer>
          </BottomContainer>
          <LastDiv>
            <LastParagraph>
              The time you contribute helps thousands of students from Kerala,
              India for
              <Top>
                <br />
                improving communication confidence,
              </Top>
              operation abilities and to initiate the cultural transfer.
            </LastParagraph>
          </LastDiv>
        </WrapperContainer>
      </MainContainer>
    </div>
  );
}
const MainContainer = styled.div`
  margin-top: 90px;
  background-color: #0a3e61;
  padding: 9% 0;
  /* margin-bottom: 50px; */
`;
const WrapperContainer= styled.div``;
const TopContainer = styled.div`
  position: relative;
`;
const Heading = styled.h2`
  color: #efc337;
  font-size: 30px;
  font-family: "gordita_medium";
  text-align: center;
`;
const Small = styled.span`
  font-size: 32px;
  color: #fff;
  font-family: "gordita_medium";
  margin-left: 2px;
`;
const DashContainer = styled.div`
  width: 13%;
  position: absolute;
  left:468px;
  top:94px;

  @media all and (max-width: 1280px) {
    left: 445px;
  }
  @media all and (max-width: 1080px) {
    left: 408px;
  }
  @media all and (max-width: 980px) {
    left: 336px;
  }
  @media all and (max-width: 768px) {
    left: 254px;
  }
  @media all and (max-width: 640px) {
    
    display:none;
  }
 
`;
const Dash = styled.img`
  width: 100%;
  display: block;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  align-items: center;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  padding:0 15px;
  position: relative;
  @media all and (max-width: 768px) {
    width:100%;
    margin-bottom:30px;
  }
`;
const TopDiv = styled.div`
  margin-bottom: 15px;
  @media all and (max-width:1080px) {
    margin-bottom: 25px;
    }
  &:after {
    content: "";
    width: 215px;
    height: 1px;
    background-color: #fff;
    position: absolute;
    right:15px;
    top: 10px;
    @media all and (max-width:1080px) {
      top:25px;
      left:15px;
    }
    
  }
`;
const Sentence = styled.h5`
  color: #ffff;
  font-size: 14px;
  font-family: "gordita_medium";

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
`;
const BoxContainer = styled.div`
  display: flex;
  background-color: ${({type})=> type === 'left' ? "#fff" : ""};
  border:1px solid #fff;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
  height:100px;
  /* width: 239px;
  margin-top: 16px;
  margin-left: 15px;
  height: 103px;
  position: relative; */
`;
const LeftDiv = styled.div`
 margin-right: 15px;
  /* display: flex; */
  /* align-items: center; */
  /* margin-left: 13px; */
  width: 10%;
  
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 19px;
`;
const Gap = styled.img`
  position: absolute;
  left: 17px;
  width: 11px;
  height: 10px;
  top: 47px;

  @media all and (max-width: 1280px) {
    top: 42px;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  padding: 0 15px;
  position: relative;
  @media all and (max-width: 768px) {
    width:100%
  }
`;
const TopperDiv = styled.div`
  &:after {
    content: "";
    width: 310px;
    height: 1px;
    background-color: #efc337;
    position: absolute;
    left: 36%;
    top: 10px;

    @media all and (max-width: 1280px) {
      width: 139px;
      left: 58%;
    }
    @media all and (max-width: 1080px) {
      width: 109px;
      left: 66%;
    }
    @media all and (max-width: 980px) {
      display: none;
    }
  }
`;
const BottomDiv = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  @media all and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;
const SentenceOne = styled.h5`
  color: #efc337;
  font-size: 14px;
  font-family: "gordita_bold";
  
`;
const RightDiv = styled.div`
  width: 90%;
`;
const Paragraph = styled.p`
  color: ${({type})=> type === 'left' ? "#232b57" : "#fff"};
  font-size: 14px;
  /* width: 180px; */
  font-family: gordita_regular;
`;
const Box = styled.div`
  display: flex;
  background-color: #0a3e61;
  border-radius: 5px;
  align-items: center;
  /* width: 239px; */
  /* margin-top: 16px; */
  /* height: 103px; */
  /* position: relative; */
  border: 1px solid #fff;
  /* margin-left: 15px; */
  padding: 15px 10px;
  &:nth-child(2) {
    /* margin-top: 20px; */
  }

  @media all and (max-width: 1280px) {
    width: 298px;
    height: 94px;
  }
  @media all and (max-width: 360px) {
    margin-left: 0;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  align-items: center;
`;
const FillSpan = styled.span`
  width: 10px;
  height: 10px;
  background: ${({ type }) => (type === "left" ? "#0a3e61" : "#fff")};
  border-radius: 50%;
`;
const BorderDiv = styled.div`
  width: 20px;
  height: 20px;
  /* padding:3px; */
  border: 1px solid ${({ type }) => (type === "left" ? "#0a3e61" : "#fff")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageOne = styled.img`
  width: 19px;
`;
const GapOne = styled.img`
  position: absolute;
  left: 17px;
  width: 11px;
  height: 10px;
  top: 46px;

  @media all and (max-width: 1280px) {
    top: 41px;
  }
`;
const ParagraphOne = styled.p`
  color: #fff;
  font-size: 14px;
  width: 180px;
`;
const LastDiv = styled.div`
  width: 70%;
  margin: 0 auto;

  @media all and (max-width: 980px) {
    width: 85%;
  }
  @media all and (max-width: 768px) {
    width: 90%;
  }
`;
const LastParagraph = styled.p`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 40px;

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Top = styled.span`
  font-size: 16px;
  color: #efc337;

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;
