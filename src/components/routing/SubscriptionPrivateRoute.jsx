import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const SubscriptionPrivateRoute = ({ component: Component, ...rest }) => {
    const user_profile = useSelector((state) => state.user_profile);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth.isAuthenticated()) {
                    if (
                        user_profile.subscription_data &&
                        !user_profile.subscription_data.expired_subscription
                    ) {
                        return <Component {...props} />;
                    } else {
                        return (
                            <Redirect
                                to={{
                                    // pathname: "/tech-schooling/",
                                    pathname: "/dashboard/",
                                }}
                            />
                        );
                    }
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/dashboard/",
                                search: `?action=login&next=${props.location.pathname}`,
                            }}
                        />
                    );
                }
            }}
        />
    );
};
