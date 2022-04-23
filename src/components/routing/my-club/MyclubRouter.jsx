import React, { Suspense, lazy, useEffect } from "react";
import Error404 from "../../error-pages/Error404";
import { Route, Switch } from "react-router-dom";
import TalropEdtechHelmet from "../../helpers/TalropEdtechHelmet";
import RouteLoading from "../RouteLoading";
import { connect } from "react-redux";
import StudentActivities from "../../my-club/screen/StudentActivities";

const MyClubDashboard = lazy(() =>
    import("../../my-club/screen/MyClubDashboard")
);
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

function MyclubRouter(props) {
    useEffect(() => {
        props.updateActiveMenu("my_club");
    }, []);
    return (
        <>
            <TalropEdtechHelmet title="My Club" />
            <div id="main" className={props.divMainClass}>
                <Suspense fallback={<RouteLoading />}>
                    <Switch>
                        <Route
                            exact
                            path="/my-club/"
                            component={MyClubDashboard}
                        />
                        <Route
                            exact
                            path="/my-club/:id/"
                            component={StudentActivities}
                        />

                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </div>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchtoProps)(MyclubRouter);
