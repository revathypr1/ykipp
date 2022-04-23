import React from 'react';
import styled from "styled-components";


function Test() {
  return (
     <MainContainer>
       <Left>
           <P>vsvsvvvvvsvsvsvfvsvssfv</P> 
       </Left>
       <Right>
       <p>vsvsvvvvvsvsvsvfvsvssfv</p> 
       </Right>
     </MainContainer>
  )
}

export default Test;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
`;
const Left = styled.div`
    width:60%;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: right;
`;
const P =styled.p`
    margin-right: 30%;
`;
const Right = styled.div`
    width:40%;
    height: 300px;
    background-color: #093e62;
    border-radius: 0 0 0 10px;
`;