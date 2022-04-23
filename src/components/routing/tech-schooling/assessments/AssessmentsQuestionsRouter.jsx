import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import styled from "styled-components";
import Aside from "../../../learn/includes/techschooling/assessments/Aside";
import RouteLoading from "../../RouteLoading";

const ObjectiveQuestions = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/ObjectiveQuestions"
    )
);
const DescriptiveQuestions = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/DescriptiveQuestions"
    )
);
const Challengequestions = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/Challengequestions"
    )
);

export default function AssessmentsQuestionsRouter({ subject_slug }) {
    const location = useLocation();

    return (
        <>
            <BottomContainer>
                <Aside subject_slug={subject_slug} />
                <Suspense fallback={<RouteLoading />}>
                    <Switch>
                        <Route
                            exact
                            path={`/${subject_slug}/assessments/view/:id/questions/`}
                        >
                            <Redirect
                                push
                                to={{
                                    pathname: `${location.pathname}descriptives/`,
                                }}
                            />
                        </Route>
                        <Route
                            exact
                            path={`/${subject_slug}/assessments/view/:id/questions/descriptives/`}
                            component={DescriptiveQuestions}
                        />
                        <Route
                            exact
                            path={`/${subject_slug}/assessments/view/:id/questions/objectives/`}
                            component={ObjectiveQuestions}
                        />
                        <Route
                            exact
                            path={`/${subject_slug}/assessments/view/:id/questions/challenge/`}
                            component={Challengequestions}
                        />
                    </Switch>
                </Suspense>
            </BottomContainer>
        </>
    );
}
const BottomContainer = styled.div`
    display: flex;
    padding: 29px 10px;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        padding: 4px;
    }
`;
