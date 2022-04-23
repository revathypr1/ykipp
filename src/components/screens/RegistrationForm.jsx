import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import DatePicker from "react-multi-date-picker";
import "../../App.css";
import Underline from "../../assets/images/langing/Asset15.png";
import India from "../../assets/images/langing/india.png";

import Successfull from "../includes/modal/Successfull";
import ReactDatePicker from "react-datepicker";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@material-ui/core";
import moment from 'moment'
// import "antd/dist/antd.css                                                                                                                                                   ";

export default function RegistrationForm() {
  // const [value, setValue] = useState(new Date());
  const [value, setValue] = useState("");
  const todaysDate = moment().format("YYYY-MM-DD");
  const [isModal, SetModal] = useState(false);
  const handleModal = () => {
    SetModal(!isModal);
  };
  return (
    <div>
      <Successfull
        isModal={isModal}
        SetModal={SetModal}
        handleModal={handleModal}
      />
      <MainContainer>
        <WrapperContainer>
          <TopContainer>
            <MainTitle>
              <SubTitle>Registration</SubTitle> Form
            </MainTitle>
            <TitleImage src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/Asset15.png" alt="Image" />
            <MainDescription>
              The time you contribute helps thousands of students from Kerala,
              India for <br /> operation abilities and to initiate the cultural
              transfer.
            </MainDescription>
          </TopContainer>
          <BottomContainer>
            <FormContainer>
              <LeftContainer>
                <Form>
                  <InputLabel>Full Name</InputLabel>
                  <InputName type="text" placeholder="Full Name" />
                </Form>
                <Form>
                  <InputLabel>Email</InputLabel>
                  <InputEmail type="email" placeholder="Email" />
                </Form>
                <Form>
                  <InputLabel>Availability Comments</InputLabel>
                  <InputContent
                    type="textarea"
                    placeholder="I’m available on  every saturdays"
                  />
                </Form>
              </LeftContainer>
              <RightContainer>
                <Form>
                  <InputLabel>Country</InputLabel>
                  <InputName type="text" placeholder="Country" />
                </Form>
                <Form>
                  <InputLabel>Whatsapp Number</InputLabel>
                  <Container>
                    <CountyContainer>
                      <CountryImg src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/ykipp/22-04-2022/india.png" alt="Image" />
                      <WebCodeContainer>+91</WebCodeContainer>
                    </CountyContainer>
                    <InputNameCont
                      className="phoneNumber"
                      type="text"
                      placeholder="0000 000 000"
                    />
                  </Container>
                </Form>
                <Form>
                  <InputLabel>Select Date</InputLabel>
                  <TextField
                    id="date"
                    format="YYYY-MM-DD"
                    className="dateField"
                    // label="Select date"
                    type="date"
                    defaultValue={todaysDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Form>
                <Form>
                  <InputButton
                    onClick={() => {
                      SetModal(true);
                      console.log(isModal);
                    }}
                  >
                    Register
                  </InputButton>
                </Form>
              </RightContainer>
            </FormContainer>
          </BottomContainer>
        </WrapperContainer>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  background-color: #f8f9fc;
`;
const WrapperContainer = styled.div`
  padding: 100px 0;
`;
const TopContainer = styled.div`
      margin-bottom: 50PX;
  position: relative;

  @media all and (max-width: 768px) {
    padding-bottom: 50px;
  }
  @media all and (max-width: 360px) {
    padding-top: 35px;
  }
`;
const MainTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-family: "gordita_medium";
  color: #0a3e61;
`;
const SubTitle = styled.span`
  color: #d3b442;
  font-size: 30px;
`;
const MainDescription = styled.p`
  text-align: center;
  font-size: 16px;
  margin-top: 40px;
  color: #9e9e9e;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
  @media all and (max-width: 360px) {
    display: none;
  }
`;
const TitleImage = styled.img`
  position: absolute;
  left: 559px;
  width: 13%;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const BottomContainer = styled.div`
  
`;
const FormContainer = styled.div`
  width: 76%;
  background-color: #fff;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;

  @media all and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* justify-content: space-evenly; */
  width: 45%;
  @media all and (max-width: 768px) {
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom:22px;
  /* justify-content: space-evenly; */
  width: 45%;
  @media all and (max-width: 768px) {
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 22px;
  :last-child {
    margin-bottom: 0px;
  }
`;
const InputLabel = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
  color: #a3a3a3;
`;
// const TextField = styled.input`
//    width: 100%;
//   border-radius: 5px;
//   height: 43px;

//   &:focus {
//     outline: none;
//     border-color: #0a4771;
//   }
// `;
const InputNameCont = styled.input``;
const InputName = styled.input`
  border: 1px solid #e8e8e8;
  width: 100%;
  border-radius: 5px;
  height: 43px;

  &:focus {
    outline: none;
    border-color: #0a4771;
  }
`;
const InputEmail = styled.input`
  border: 1px solid #e8e8e8;
  width: 100%;
  padding: 3%;
  height: 43px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #0a4771;
  }
`;
const InputContent = styled.textarea`
  border: 1px solid #e8e8e8;
  /* width: 87%; */
  width: 100%;
  padding: 10px;
  height: 110px;
  resize: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #0a4771;
  }
`;
const Container = styled.div`
  border: 1px solid #e8e8e8;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 43px;
  border-radius: 8px;
  @media all and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const CountyContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const CountryImg = styled.img`
  display: block;
  width: 100%;
`;
const WebCodeContainer = styled.h4`
  font-size: 14px;
`;
const DatepickerContainer = styled.div`
  width: 6%;
  position: absolute;
  right: 15%;
  bottom: 16%;
`;
const DateImg = styled.img`
  display: block;
  width: 100%;
`;
const InputButton = styled.span`
  border: 2px solid #e8e8e8;
  width: 100%;
  padding: 3%;
  height: 43px;
  color: #fff;
  background: linear-gradient(90deg, #0a4771 1.55%, #1d74af 100%);
  display: inline;
  text-align: center;
  font-family: "gordita_medium";
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
