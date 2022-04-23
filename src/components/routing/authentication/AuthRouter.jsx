import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import LeftBox from "../../learn/includes/authentication/general/LeftBox";
import LoginRouter from "./LoginRouter";
import ResetRouter from "./ResetRouter";
import JoinRouter from "./JoinRouter";
import RouteLoading from "../RouteLoading";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountsConfig } from "../../../axiosConfig";

export default function AuthRouter() {
    return (
        <Container style={{ minHeight: "100vh" }}>
            <LeftBox />
            <Switch>
                <Suspense fallback={<RouteLoading />}>
                    <Route path="/auth/login/" component={LoginRouter} />
                    <Route path="/auth/reset/" component={ResetRouter} />
                    <Route path="/auth/join/" component={JoinRouter} />
                </Suspense>
            </Switch>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;
