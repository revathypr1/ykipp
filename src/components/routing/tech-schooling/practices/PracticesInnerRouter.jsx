import React, { lazy, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { learnConfig } from "../../../../axiosConfig";
import { PracticeContext } from "../../../contexts/stores/PracticeStore";
import Header from "../../../learn/includes/techschooling/practices/Header";

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
    return {
        user_data: state.user_data,
    };
}

const PracticeSingleDashboard = lazy(() =>
    import(
        "../../../learn/screens/techschooling/practices/inner-pages/PracticeSingleDashboard"
    )
);
const Revaluation = lazy(() =>
    import(
        "../../../learn/screens/techschooling/practices/inner-pages/Revaluation"
    )
);
const Improvement = lazy(() =>
    import(
        "../../../learn/screens/techschooling/practices/inner-pages/Improvement"
    )
);

function PracticesInnerRouter(props) {
    useEffect(() => {
        props.updateTechSchoolActiveMenu("practices");
        fetchPractice();
    }, []);

    const { practiceDispatch } = useContext(PracticeContext);

    //Fetching datas from API
    const fetchPractice = () => {
        let { user_data } = props;
        let { access_token } = user_data;

        learnConfig
            .get(`/practices/view/${id}/`, {
                headers: { Authorization: "Bearer " + access_token },
            })
            .then((response) => {
                const { StatusCode, data, workshop_data } = response.data;
                if (StatusCode === 6000) {
                    practiceDispatch({
                        type: "UPDATE_PRACTICE",
                        practice: data,
                    });
                    practiceDispatch({
                        type: "UPDATE_WORKSHOP",
                        workshop: workshop_data,
                    });
                } else if (StatusCode === 6001) {
                }
            })
            .catch((error) => {});
    };

    const { id } = useParams();

    return (
        <>
            <TopContainer>
                <Header subject_slug={props.subject_slug} />
            </TopContainer>
            <Switch>
                <Route
                    exact
                    path={`/${props.subject_slug}/practices/view/:id/`}
                >
                    <PracticeSingleDashboard
                        subject_slug={props.subject_slug}
                    />
                </Route>
                <Route
                    exact
                    path={`/${props.subject_slug}/practices/view/:id/revaluation/`}
                >
                    <Revaluation subject_slug={props.subject_slug} />
                </Route>
                <Route
                    exact
                    path={`/${props.subject_slug}/practices/view/:id/improvement/`}
                >
                    <Improvement subject_slug={props.subject_slug} />
                </Route>
            </Switch>
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
)(PracticesInnerRouter);
