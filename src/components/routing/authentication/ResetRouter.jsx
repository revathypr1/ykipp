import React from "react";
import { Route, Switch } from "react-router-dom";
import ResetPasswordEnterPhone from "../../learn/includes/authentication/login/ResetPasswordEnterPhone";
import ResetPasswordVerify from "../../learn/includes/authentication/login/ResetPasswordVerify";
import PasswordReset from "../../learn/includes/authentication/login/PasswordReset";

class ResetRouter extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/auth/reset/password/phone/enter/"
                    component={ResetPasswordEnterPhone}
                />
                <Route
                    exact
                    path="/auth/reset/password"
                    component={PasswordReset}
                />
                <Route
                    exact
                    path="/auth/reset/password/phone/verify/"
                    component={ResetPasswordVerify}
                />
            </Switch>
        );
    }
}

export default ResetRouter;
