import React from "react";
import styled from "styled-components";

export default function PlaceHolder({ paddingTop, isLoading }) {
    return (
        <Container
            style={{
                display: isLoading ? "block" : "none",
                paddingTop: isLoading ? paddingTop : "0",
            }}
        >
            <InnerContainer style={{ display: isLoading ? "flex" : "none" }}>
                <LogoImage
                    alt="Logo"
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/steyp/steyp1.gif"
                />
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;
const InnerContainer = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    background: #f3f3f3;
    top: 0;
    align-items: center;
    justify-content: center;
`;
const LogoImage = styled.img`
    display: block;
    width: 34%;
`;
