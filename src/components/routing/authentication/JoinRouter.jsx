import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import EnterPhone from "../../learn/includes/authentication/join/EnterPhone";
import VerifyOtp from "../../learn/includes/authentication/join/VerifyOtp";
import SetPassword from "../../learn/includes/authentication/join/SetPassword";
import EnterName from "../../learn/includes/authentication/join/EnterName";
import EnterReferral from "../../learn/includes/authentication/join/EnterReferral";

class LoginRouter extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/auth/join/enter/phone/"
                    component={EnterPhone}
                />
                <Route
                    exact
                    path="/auth/join/verify/phone/"
                    component={VerifyOtp}
                />
                <Route
                    exact
                    path="/auth/join/set/password/"
                    component={SetPassword}
                />
                <Route
                    exact
                    path="/auth/join/enter/name/"
                    component={EnterName}
                />
                <Route
                    exact
                    path="/auth/join/enter/referral-code/"
                    component={EnterReferral}
                />
            </Switch>
        );
    }
}

export default LoginRouter;

const Container = styled.div`
    display: flex;
`;
