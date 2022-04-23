import React, { Suspense, useEffect, useState } from "react";
import {
    Route,
    Switch,
    Redirect,
    useHistory,
    useLocation,
    useParams,
} from "react-router-dom";

import styled from "styled-components";
import ProgramNavBar from "../../learn/includes/techschooling/general/ProgramNavBar";
import TechSchoolingTopicSingle from "../../learn/screens/techschooling/learning/TechSchoolingTopicSingle";
import TechSchoolingPractices from "../../learn/screens/techschooling/practices/TechSchoolingPractices";
import TechSchoolingWorkshops from "../../learn/screens/techschooling/workshops/TechSchoolingWorkshops";
import AllPractices from "../../learn/screens/techschooling/practices/AllPractices";
import AssessmentsMainRouter from "./assessments/AssessmentsMainRouter";
import TechSchoolingWorkshop from "../../learn/screens/techschooling/workshops/inner-pages/TechSchoolingWorkshop";
import AllWorkshops from "../../learn/screens/techschooling/workshops/AllWorkshops";
import TechSchoolingProfessions from "../../learn/screens/techschooling/learning/TechSchoolingProfessions";
import SkillsPage from "../../learn/screens/techschooling/learning/SkillsPage";
import LessonsListPage from "../../learn/screens/techschooling/learning/LessonsListPage";
import auth from "../auth";
import { useSelector } from "react-redux";
import RouteLoading from "../RouteLoading";
import { PrivateRoute } from "../PrivateRoute";
import TechSchoolingExplore from "../../learn/screens/techschooling/TechSchoolingExplore";
import { TechSchoolingRoute } from "../TechSchoolingRoute";
import { SubscriptionPrivateRoute } from "../SubscriptionPrivateRoute";
import TechSchoolingSubscription from "../../learn/screens/techschooling/TechSchoolingSubscription";
import queryString from "query-string";
import SubscribeModal from "../../learn/includes/techschooling/subscribe/SubscribeModal";
import NewContent from "../../learn/includes/techschooling/new-content/NewContent";
import NewContentRouter from "./new-content/NewContentRouter";
import CertificateHome from "../../learn/includes/techschooling/certification/CertificateHome";
import Certificate from "../../learn/includes/techschooling/certification/Certificate";
import Error500 from "../../error-pages/Error500";
import Error401 from "../../error-pages/Error401";
import Error404 from "../../error-pages/Error404";
import Error403 from "../../error-pages/Error403";
import CertificateSinglePage from "../../learn/includes/techschooling/certification/CertificateSinglePage";
import ProgramDashboard from "../../learn/screens/techschooling/ProgramDashboard";

function ProgramInnerRouter({ subject_slug }) {
    const user_profile = useSelector((state) => state.user_profile);
    const user_data = useSelector((state) => state.user_data);

    const history = useHistory();
    const location = useLocation();

    const [action, setAction] = useState("");

    useEffect(() => {
        let { search } = location;

        const values = queryString.parse(search);
        const action = values.action;
        setAction(action);
    }, [location.search]);

    const closeModal = () => {
        setAction("");
        history.push({
            pathname: location.pathname,
        });
    };

    const menuHeader = () => {
        if (
            auth.isAuthenticated() &&
            ((user_profile.subscription_data &&
                user_profile.subscription_data.has_active_subscription) ||
                (user_profile.subscription_data &&
                    !user_profile.subscription_data.has_active_subscription))
        ) {
            return <ProgramNavBar subject_slug={subject_slug} />;
        }
    };

    useEffect(() => {
        menuHeader();
    }, [Object.keys(user_profile).length]);

    return (
        <Container>
            {menuHeader()}
            {action === "subscribe" && (
                <SubscribeModal closeModal={closeModal} />
            )}
            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <PrivateRoute exact path={`/${subject_slug}/`}>
                        <ProgramDashboard subject_slug={subject_slug} />
                    </PrivateRoute>

                    {/* <TechSchoolingRoute
                        exact
                        path={`/${subject_slug}/explore/`}
                    >
                        <TechSchoolingExplore />
                    </TechSchoolingRoute> */}
                    <PrivateRoute path={`/${subject_slug}/assessments/`}>
                        <AssessmentsMainRouter subject_slug={subject_slug} />
                    </PrivateRoute>
                    <Route exact path={`/${subject_slug}/`}>
                        <Redirect
                            to={{
                                pathname: `/${subject_slug}/professions/`,
                            }}
                        />
                    </Route>
                    <PrivateRoute exact path={`/${subject_slug}/professions/`}>
                        <TechSchoolingProfessions subject_slug={subject_slug} />
                    </PrivateRoute>
                    <SubscriptionPrivateRoute
                        exact
                        path={`/${subject_slug}/professions/:id/`}
                    >
                        <SkillsPage subject_slug={subject_slug} />
                    </SubscriptionPrivateRoute>
                    <SubscriptionPrivateRoute
                        exact
                        path={`/${subject_slug}/lessons/:id/`}
                    >
                        <LessonsListPage subject_slug={subject_slug} />
                    </SubscriptionPrivateRoute>
                    <SubscriptionPrivateRoute
                        exact
                        path={`/${subject_slug}/topics/view/:id/`}
                    >
                        <TechSchoolingTopicSingle subject_slug={subject_slug} />
                    </SubscriptionPrivateRoute>
                    <PrivateRoute exact path={`/${subject_slug}/practices/`}>
                        <TechSchoolingPractices subject_slug={subject_slug} />
                    </PrivateRoute>
                    <PrivateRoute
                        exact
                        path={`/${subject_slug}/practices/all/`}
                    >
                        {" "}
                        <AllPractices subject_slug={subject_slug} />
                    </PrivateRoute>
                    <PrivateRoute exact path={`/${subject_slug}/workshops/`}>
                        {" "}
                        <TechSchoolingWorkshops subject_slug={subject_slug} />
                    </PrivateRoute>
                    {/* <PrivateRoute
                        exact
                        path={`/${subject_slug}/subscribe/`}
                        component={() => (
                            <TechSchoolingSubscription is_subscribe={true} />
                        )}
                    /> */}
                    <PrivateRoute
                        exact
                        path={`/${subject_slug}/workshops/all/`}
                    >
                        <AllWorkshops subject_slug={subject_slug} />
                    </PrivateRoute>
                    <SubscriptionPrivateRoute
                        exact
                        path={`/${subject_slug}/workshops/view/:id/`}
                    >
                        <TechSchoolingWorkshop subject_slug={subject_slug} />
                    </SubscriptionPrivateRoute>
                    <PrivateRoute exact path={`/${subject_slug}/new-content/`}>
                        <Redirect
                            to={{
                                pathname: `/${subject_slug}/new-content/skills/`,
                            }}
                        />
                    </PrivateRoute>
                    <PrivateRoute
                        exact
                        path={`/${subject_slug}/new-content/skills/`}
                    >
                        {" "}
                        <NewContent subject_slug={subject_slug} />
                    </PrivateRoute>
                    <PrivateRoute
                        path={`/${subject_slug}/new-content/skills/:id/`}
                    >
                        <NewContentRouter subject_slug={subject_slug} />
                    </PrivateRoute>
                    <PrivateRoute
                        exact
                        path={`/${subject_slug}/certification/`}
                    >
                        <CertificateHome subject_slug={subject_slug} />
                    </PrivateRoute>
                    <Route
                        exact
                        path={`/${subject_slug}/certification/:id/`}
                        component={CertificateSinglePage}
                    />

                    {/* <PrivateRoute
                        exact
                        path={`/${subject_slug}/qa-spot/`}
                        component={TechSchoolingQASpot}
                    />
                    <PrivateRoute
                        exact
                        path={`/${subject_slug}/doubt-hub/`}
                        component={TechSchoolingDoubtHub}
                    /> */}

                    <PrivateRoute path={`/${subject_slug}/401/`}>
                        <ErrorWrap>
                            <Error401 />
                        </ErrorWrap>
                    </PrivateRoute>

                    <PrivateRoute path={`/${subject_slug}/403/`}>
                        <ErrorWrap>
                            <Error403 />
                        </ErrorWrap>
                    </PrivateRoute>

                    <PrivateRoute path={`/${subject_slug}/500/`}>
                        <ErrorWrap>
                            <Error500 />
                        </ErrorWrap>
                    </PrivateRoute>

                    <Route component={Error404} />
                </Switch>
            </Suspense>
        </Container>
    );
}

export default ProgramInnerRouter;

const Container = styled.div`
    padding: 20px 0;
`;
const ErrorWrap = styled.div`
    min-height: calc(100vh - 270px);
    position: relative;
`;
