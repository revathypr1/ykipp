import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth.isAuthenticated()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/dashboard/",
                                // pathname: "/tech-schooling/",
                            }}
                        />
                    );
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    );
};
