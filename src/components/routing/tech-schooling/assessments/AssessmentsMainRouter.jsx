import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const TechSchoolingAssessments = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/TechSchoolingAssessments"
    )
);
const AllAssessments = lazy(() =>
    import("../../../learn/screens/techschooling/assessments/AllAssessments")
);

export default function AssessmentsMainRouter({ subject_slug }) {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={`/${subject_slug}/assessments/`}
                    component={() => (
                        <TechSchoolingAssessments subject_slug={subject_slug} />
                    )}
                />
                <Route
                    exact
                    path={`/${subject_slug}/assessments/all/`}
                    component={() => (
                        <AllAssessments subject_slug={subject_slug} />
                    )}
                />
            </Switch>
        </>
    );
}

const Container = styled.div`
    padding: 25px 0;
`;
