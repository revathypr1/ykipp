import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";
import "../../../assets/css/Style.css";
import RouteLoading from "../RouteLoading";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import TalropEdtechHelmet from "../../helpers/TalropEdtechHelmet";

const PrimeProgramsTopic = lazy(() =>
    import("../../learn/screens/prime-programs/PrimeProgramsTopic")
);

const PurchasedTopic = lazy(() =>
    import("../../learn/screens/prime-programs/PurchasedTopic")
);

const Error404 = lazy(() => import("../../error-pages/Error404"));

function mapStateToProps(state) {
    return {
        divMainClass: state.divMainClass,
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        updateActiveMenu: (active_menu) =>
            dispatch({
                type: "ACTIVE_MENU",
                active_menu: active_menu,
            }),
    };
}

function PrimeProgramsInnerRouter(props) {
    useEffect(() => {
        props.updateActiveMenu("prime-programs");
    }, []);

    return (
        <>
            <TalropEdtechHelmet title="Prime Programs" />
            <div id="main" className={props.divMainClass}>
                <Suspense fallback={<RouteLoading />}>
                    <Switch>
                        <Route
                            exact
                            path="/prime-programs/:course_id/"
                            component={PrimeProgramsTopic}
                        />
                        <Route
                            exact
                            path="/prime-programs/course/:course_id/"
                            component={PrimeProgramsTopic}
                        />
                        <Route
                            exact
                            path="/prime-programs/:course_id/info/"
                            component={PrimeProgramsTopic}
                        />
                        <Route
                            exact
                            path="/prime-programs/course/:course_id/info/"
                            component={PrimeProgramsTopic}
                        />
                        <PrivateRoute
                            exact
                            path="/prime-programs/:course_slug/:topic_pk/"
                            component={PurchasedTopic}
                        />
                        <Route
                            exact
                            path="/prime-programs/course/:course_slug/:topic_pk/"
                            component={PurchasedTopic}
                        />
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </div>
        </>
    );
}
export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(PrimeProgramsInnerRouter);
