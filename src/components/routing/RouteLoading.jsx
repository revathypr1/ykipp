import React from "react";
import styled from "styled-components";

class RouteLoading extends React.PureComponent {
    render() {
        return (
            <Container>
                <LogoImage
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/steyp/steyp1.gif"
                    alt="Steyp"
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
`;
const LogoImage = styled.img`
    display: block;
    width: 100px;
    @media (max-width: 980px) {
        width: 90px;
    }
`;

export default RouteLoading;
