import React, { lazy, Suspense, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { learnConfig } from "../../../../axiosConfig";
import { AssessmentContext } from "../../../contexts/stores/AssessmentStore";
import RouteLoading from "../../RouteLoading";

function mapDispatchtoProps(dispatch) {
    return {
        updateTechSchoolActiveMenu: (tech_schooling__active_menu) =>
            dispatch({
                type: "TECH_SCHOOL_ACTIVE_MENU",
                tech_schooling__active_menu: tech_schooling__active_menu,
            }),
    };
}

function mapStatetoProps(state) {
    return { user_data: state.user_data };
}

const AssessmentsQuestionsRouter = lazy(() =>
    import("./AssessmentsQuestionsRouter")
);
const Dashboard = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/Dashboard"
    )
);
const Header = lazy(() =>
    import("../../../learn/includes/techschooling/assessments/Header")
);
const ImprovmentPage = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/ImprovmentPage"
    )
);
const ReavluationsPage = lazy(() =>
    import(
        "../../../learn/screens/techschooling/assessments/inner-pages/RevaluationPage"
    )
);

function AssessmentsInnerRouter(props) {
    useEffect(() => {
        props.updateTechSchoolActiveMenu("assessments");
        fetchAssessment();
    }, []);

    const { id } = useParams();

    const { assessmentDispatch } = useContext(AssessmentContext);

    //Fetching datas from API
    const fetchAssessment = () => {
        let { user_data } = props;
        let { access_token } = user_data;

        learnConfig
            .get(`/assessments/view/${id}/`, {
                headers: { Authorization: "Bearer " + access_token },
            })
            .then((response) => {
                const { StatusCode, data } = response.data;
                if (StatusCode === 6000) {
                    assessmentDispatch({
                        type: "UPDATE_ASSESSMENT",
                        assessment: data,
                    });
                    if (data.status === "attending") {
                        sendCurrentQuestion();
                    }
                } else if (StatusCode === 6001) {
                }
            })
            .catch((error) => {});
    };

    const sendCurrentQuestion = () => {
        let { user_data } = props;
        let { access_token } = user_data;

        learnConfig
            .post(
                `assessments/send-current-question/${id}/`,
                {},
                {
                    headers: { Authorization: `Bearer ${access_token}` },
                }
            )
            .then((response) => {
                const { StatusCode, data } = response.data;

                if (StatusCode === 6000) {
                    assessmentDispatch({
                        type: "UPDATE_CURRENT_QUESTION",
                        current_question: data,
                    });
                }
            })
            .catch((error) => {});
    };

    return (
        <>
            <TopContainer>
                <Header subject_slug={props.subject_slug} />
            </TopContainer>
            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <Route
                        exact
                        path={`/${props.subject_slug}/assessments/view/:id/`}
                    >
                        <Dashboard subject_slug={props.subject_slug} />
                    </Route>
                    <Route
                        exact
                        path={`/${props.subject_slug}/assessments/view/:id/revaluation/`}
                    >
                        <ReavluationsPage subject_slug={props.subject_slug} />
                    </Route>
                    <Route
                        exact
                        path={`/${props.subject_slug}/assessments/view/:id/improvement/`}
                    >
                        <ImprovmentPage subject_slug={props.subject_slug} />
                    </Route>
                    <Route
                        path={`/${props.subject_slug}/assessments/view/:id/questions/`}
                    >
                        <AssessmentsQuestionsRouter
                            subject_slug={props.subject_slug}
                        />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}
const TopContainer = styled.div`
    display: flex;
    padding-top: 15px;
    @media all and (max-width: 768px) {
        padding-top: 10px;
    }
`;
const BottomContainer = styled.div`
    display: flex;
    padding: 10px;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        padding: 4px;
    }
`;
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(AssessmentsInnerRouter);
