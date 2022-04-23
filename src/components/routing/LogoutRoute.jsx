import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import auth from "./auth";

const LogoutRoute = () => {
    useEffect(() => {
        localStorage.clear();
        window.location = "/dashboard/";
        auth.logout(() => {
            return "Success";
        });
    }, []);

    return (
        <Redirect
            to={{
                pathname: "/dashboard/",
            }}
        />
    );
};
export default LogoutRoute;
