import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import RouteLoading from "../RouteLoading";
import Menu from "../../learn/includes/profile/general/Menu";
import styled from "styled-components";
import { connect } from "react-redux";
import HorizontalMenu from "../../learn/includes/profile/general/HorizontalMenu";

function mapStateToProps(state) {
    return {
        divMainClass: state.divMainClass,
        active_profile_menu: state.active_profile_menu,
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        updateActiveMenu: (active_menu) =>
            dispatch({
                type: "ACTIVE_MENU",
                active_menu: active_menu,
            }),
    };
}

const ProfileRouter = lazy(() => import("./profile/ProfileRouter"));
const CoinRouter = lazy(() => import("./profile/CoinRouter"));

function SettingsRouter(props) {
    useEffect(() => {
        props.updateActiveMenu("profile");
    }, []);
    useEffect(() => {}, [props.active_profile_menu]);
    return (
        <Suspense fallback={<RouteLoading />}>
            <Container id="main" className={props.divMainClass}>
                <Wrapper>
                    {/* <Test> */}
                    <Menu />
                    <InnerContainer>
                        <HorizontalMenu />
                        <Switch>
                            <PrivateRoute
                                path="/profile/"
                                component={ProfileRouter}
                            />
                            <PrivateRoute
                                path="/coins/"
                                component={CoinRouter}
                            />
                        </Switch>
                    </InnerContainer>
                    {/* </Test> */}
                </Wrapper>
            </Container>
        </Suspense>
    );
}

export default connect(mapStateToProps, mapDispatchtoProps)(SettingsRouter);
const Test = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Container = styled.div``;
const Wrapper = styled.div`
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
`;
const InnerContainer = styled.div`
    width: 78%;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    margin-left: 296px;

    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 1100px) {
        // margin-left: 287px;
    }
    @media (max-width: 980px) {
        margin-left: 0;
        width: 100%;
    }
    @media (max-width: 640px) {
        padding: 0;
    }
`;
