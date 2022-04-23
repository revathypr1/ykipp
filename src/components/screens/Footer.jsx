import React from "react";
import Styled from "styled-components";
import logo from "../../assets/images/langing/ykipp-logo.svg";
import insta from "../../assets/images/langing/Insta.svg";
import tb from "../../assets/images/langing/Youtube.svg";
import fb from "../../assets/images/langing/facebook.svg";
import tw from "../../assets/images/langing/twitter.svg";
import lk from "../../assets/images/langing/linked-in.svg";
import styledComponents from "styled-components";
import "../../assets/css/style.css";

export default function Footer() {
  return (
      <MainContainer>
        <FooterContainer className="wrapper">
          <TopContainer>
            <ImageContainer>
              <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/ykipp-logo.svg" alt="image" />
            </ImageContainer>
            <BottomContainer>
              <ImageTop>
                <ImageOne>
                <Top src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Insta.svg" alt="image" />
                </ImageOne>
                <ImageOne type="facebook">
                <Top src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/facebook.svg" alt="image" />
                </ImageOne>
                <ImageOne>
                <Top src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/twitter.svg" alt="image" />
                </ImageOne>
                <ImageOne>
                <Top src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/linked-in.svg" alt="image" />
                </ImageOne>
                <ImageOne>
                <Top src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Youtube.svg" alt="image" />
                </ImageOne>  
              </ImageTop>
              <BorderDiv></BorderDiv>
            </BottomContainer>
          </TopContainer>
          <TopContent>
            <Content>&copy; 2022 , Ykkip Private Limited</Content>
          </TopContent>
        </FooterContainer>
      </MainContainer>
  );
}
const MainContainer = Styled.div`
    background-color:#3d3d3d;
    /* margin-bottom:40px; */
   
`;
const FooterContainer = Styled.div`

  margin:0 auto;
  position:relative;   
`;
const TopContainer = Styled.div`
    padding-top:79px;
    margin-bottom:20px;
`;
const ImageContainer = Styled.div`
    width:56px;
    margin:0 auto;   
`;
const Image = Styled.img`
    display:block;
    width:100%;
    
`;
const BottomContainer = Styled.div`
  margin-top:30px;
`;
const ImageTop = Styled.div`
    width:18%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;

 @media all and (max-width:768px){
  width:36%;
 }
 @media all and (max-width:480px){
  width:56%;
 }
`;
const BorderDiv = Styled.div`
   border-bottom:1px solid #625c5bcf;
   width: 70%;
  margin:0 auto;
    padding:15px 0;
`;
const ImageOne=Styled.div`
  width:${({type})=> type === "facebook" ? "10px" : "25px"};
  margin-right: 10px;
  :last-child {
    margn-right:0px;
  }
`;
const Top = Styled.img`
    width:100%;
    display:block; 
   
`;
const TopContent = Styled.div`
    padding-bottom:40px;
    text-align:center;
`;
const Content = Styled.span`
    color:#fff;
    font-size:14px;
    margin:0 auto;
      
`;
