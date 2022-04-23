import React from "react";
import styled from "styled-components";
import left from "../../../assets/images/langing/cross.svg";
import tk from "../../../assets/images/langing/tick.svg";

export default function Successfull({ isModal, SetModal, handleModal }) {
  return (
    <BackContainer style={{ transform: isModal && "scale(1,1)" }}>
      <Overlay onClick={() => handleModal()}></Overlay>
      <Modal>
        <TopDiv>
          <LeftDiv>
            <ImageContainer>
              <Image src={tk} alt="images" />
            </ImageContainer>
            <ParagraphDiv>
              <Title>Successfull</Title>
            </ParagraphDiv>
          </LeftDiv>
          <RightDiv>
            <CrossContainer>
              <Cross
                onClick={() => {
                  SetModal(false);
                }}
                src={left}
                alt="images"
              />
            </CrossContainer>
          </RightDiv>
        </TopDiv>
        <BottomDiv>
          <Paragraph>
          Thank you for your contribution. We will reach you soon for further discussions and confirming the slots.
          </Paragraph>
          <ButtonDiv>
            <Button>Continue</Button>
          </ButtonDiv>
        </BottomDiv>
      </Modal>
    </BackContainer>
  );
}

const BackContainer = styled.div`
  position: fixed;
  transition: 0.3s;
  transform: scale(0, 0);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
`;
const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  backdrop-filter: blur(2px);
  background: rgba(9, 53, 83, 0.2);
`;
const Modal = styled.div`
  width: 90%;
  max-width: 415px;
  max-height: 85vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 101;
  background: #fff;
  padding: 25px 20px;
  border-radius: 5px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
    position: absolute;
    bottom: 0;
  }
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;
const ImageContainer = styled.div`
  width: 35px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const ParagraphDiv = styled.div``;
const Title = styled.h4`
  color: #0a3e61;
  font-size: 16px;
  font-family: "gordita_medium";
  margin-left: 10px;
`;
const RightDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const CrossContainer = styled.div`
  width: 15px;
`;
const Cross = styled.img`
  width: 100%;
  display: block;
`;
const BottomDiv = styled.div`
  margin-top: 15px;
`;
const Paragraph = styled.p`
  color: #6b6b6b;
  font-size: 14px;
  width: 100%;
  margin-bottom: 20px;
`;
const Button = styled.div`
  background-image: linear-gradient(to right, #03385c, #2787cc);
  color: #ffff;
  font-size: 16px;
  font-family: "gordita_medium";
  border-radius: 5px;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
