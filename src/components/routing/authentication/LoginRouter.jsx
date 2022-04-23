import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginInitial from "../../learn/includes/authentication/login/LoginInitial";
import LoginEnterPassword from "../../learn/includes/authentication/login/LoginEnterPassword";
import LoginWithOtp from "../../learn/includes/authentication/login/LoginWithOtp";

class LoginRouter extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route exact path="/auth/login/" component={LoginInitial} />
                <Route
                    exact
                    path="/auth/login/verify/"
                    component={LoginEnterPassword}
                />
                <Route
                    exact
                    path="/auth/login/verify-otp/"
                    component={LoginWithOtp}
                />
            </Switch>
        );
    }
}

export default LoginRouter;
