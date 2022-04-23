import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch, Redirect, useParams, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { learnConfig } from "../../../../axiosConfig";
import NewAssessment from "../../../learn/includes/techschooling/new-content/NewAssessment";
// import NewContent from "../../../learn/includes/techschooling/new-content/NewContent";
import NewContentSinglePage from "../../../learn/includes/techschooling/new-content/NewContentSinglePage";
import NewLessons from "../../../learn/includes/techschooling/new-content/NewLessons";
import NewTopics from "../../../learn/includes/techschooling/new-content/NewTopics";
import Practices from "../../../learn/includes/techschooling/new-content/Practices";
import WorkShop from "../../../learn/includes/techschooling/new-content/WorkShop";
import { PrivateRoute } from "../../PrivateRoute";
import RouteLoading from "../../RouteLoading";
// import { useSelector } from "react-redux";
// import { data } from "jquery";
import AssessmentPage from "../../../learn/includes/techschooling/new-content/AssessmentPage";
import PracticePage from "../../../learn/includes/techschooling/new-content/PracticePage";
import TechSchoolingWorkshop from "../../../learn/screens/techschooling/workshops/inner-pages/TechSchoolingWorkshop";
import AssessmentStore from "../../../contexts/stores/AssessmentStore";
import NewContentNavBar from "../../../learn/includes/techschooling/new-content/NewContentNavBar";

export default function NewContentRouter({ subject_slug }) {
    return (
        <Suspense fallback={<RouteLoading />}>
            <NewContentNavBar subject_slug={subject_slug} />
            <Switch>
                <PrivateRoute
                    exact
                    path={`/${subject_slug}/new-content/skills/topics/lessons/`}
                >
                    <Redirect
                        to={{
                            pathname: `/${subject_slug}/new-content/skills/`,
                        }}
                    />
                </PrivateRoute>
                <PrivateRoute
                    exact
                    path={`/${subject_slug}/new-content/skills/:id/`}
                >
                    <Redirect
                        to={{
                            pathname: `/${subject_slug}/new-content/skills/`,
                        }}
                    />
                </PrivateRoute>
                <PrivateRoute
                    path={`/${subject_slug}/new-content/skills/:id/lessons/`}
                >
                    <NewLessons subject_slug={subject_slug} />
                </PrivateRoute>
                <PrivateRoute
                    path={`/${subject_slug}/new-content/skills/:id/topics/`}
                    // component={NewTopics}
                >
                    <NewTopics subject_slug={subject_slug} />
                </PrivateRoute>
                {/* <PrivateRoute
                    path="/tech-schooling/new-content/skills/:id/practices/"
                    component={Practices}
                />
                <PrivateRoute
                    path="/tech-schooling/new-content/practices/view/:id/"
                    component={PracticePage}
                />
                <PrivateRoute
                    path="/tech-schooling/new-content/skills/:id/workshops/"
                    component={WorkShop}
                />
                <PrivateRoute
                    path="/tech-schooling/new-content/skills/workshops/view/:id/"
                    component={TechSchoolingWorkshop}
                />
                <PrivateRoute
                    path="/tech-schooling/new-content/skills/:id/assessments/"
                    component={NewAssessment}
                />
                <PrivateRoute
                    path="/tech-schooling/new-content/skills/assessments/view/:id/"
                    component={() => (
                        <AssessmentStore>
                            <AssessmentPage />
                        </AssessmentStore>
                    )}
                /> */}
                <PrivateRoute
                    path={`/${subject_slug}/new-content/skills/topics/view/:id/`}
                >
                    <NewContentSinglePage subject_slug={subject_slug} />
                </PrivateRoute>
                {/* <PrivateRoute
                    path="/tech-schooling/new-content/skills/:id/workshops/"
                    component={WorkShop}
                /> */}
            </Switch>
        </Suspense>
    );
}
