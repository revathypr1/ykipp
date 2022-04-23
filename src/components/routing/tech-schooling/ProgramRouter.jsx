import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import "../../../assets/css/Style.css";
import RouteLoading from "../RouteLoading";
import queryString from "query-string";
import PracticeStore from "../../contexts/stores/PracticeStore";
import AssessmentStore from "../../contexts/stores/AssessmentStore";
import SupportModal from "../../learn/includes/premium-assist/SupportModal";
// import { learnConfig } from "../../../axiosConfig";
// import { SupportEngineerContext } from "../../contexts/stores/SupportEngineerStore";
import { SubscriptionPrivateRoute } from "../SubscriptionPrivateRoute";
import SubscribeModal from "../../learn/includes/techschooling/subscribe/SubscribeModal";

const Error404 = lazy(() => import("../../error-pages/Error404"));
const TestimonialsPage = lazy(() =>
    import("../../learn/screens/techschooling/TestimonialsPage")
);
const ProgramInnerRouter = lazy(() => import("./ProgramInnerRouter"));
const AssessmentsInnerRouter = lazy(() =>
    import("./assessments/AssessmentsInnerRouter")
);
const PracticesInnerRouter = lazy(() =>
    import("./practices/PracticesInnerRouter")
);
const PremiumAssistRouter = lazy(() => import("../learn/PremiumAssistRouter"));

function mapStateToProps(state) {
    return {
        divMainClass: state.divMainClass,
    };
}

function ProgramRouter(props) {
    // User data present in redux
    const user_data = useSelector((state) => state.user_data);
    const dispatch = useDispatch();

    const { subject_slug } = useParams();
    const updateUserData = (user_data) => {
        dispatch({
            type: "UPDATE_USER_DATA",
            user_data: user_data,
        });
    };

    useEffect(() => {
        dispatch({ type: "ACTIVE_MENU", active_menu: ":subject_slug" });
    }, []);

    const [action, setAction] = useState("");
    const history = useHistory();

    const closeModal = () => {
        setAction("");
        history.push({
            pathname: props.location.pathname,
        });
    };

    useEffect(() => {
        let { location } = props;
        let { search } = location;

        const values = queryString.parse(search);
        const action = values.action;
        setAction(action);
    }, [props.location.search]);

    return (
        <div id="main" className={props.divMainClass}>
            {action === "subscribe" && (
                <SubscribeModal
                    user_data={user_data}
                    updateUserData={updateUserData}
                    closeModal={closeModal}
                />
            )}

            <SupportModal />
            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <Route
                        exact
                        path={`/${subject_slug}/testimonials/`}
                        component={TestimonialsPage}
                    />
                    <SubscriptionPrivateRoute
                        path={`/${subject_slug}/assessments/view/:id/`}
                    >
                        <AssessmentStore>
                            <AssessmentsInnerRouter
                                subject_slug={subject_slug}
                            />
                        </AssessmentStore>
                    </SubscriptionPrivateRoute>

                    <SubscriptionPrivateRoute
                        path={`/${subject_slug}/practices/view/:id/`}
                    >
                        <PracticeStore>
                            <PracticesInnerRouter subject_slug={subject_slug} />
                        </PracticeStore>
                    </SubscriptionPrivateRoute>

                    <Route path={`/${subject_slug}/`}>
                        <ProgramInnerRouter subject_slug={subject_slug} />
                    </Route>

                    <Route component={Error404} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default connect(mapStateToProps)(ProgramRouter);
