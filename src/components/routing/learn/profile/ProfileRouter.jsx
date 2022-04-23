import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../../PrivateRoute";
import Notification from "../../../learn/screens/notification/Notification";
import Error404 from "../../../error-pages/Error404";
import RouteLoading from "../../RouteLoading";
import ProfilePage from "../../../learn/screens/profile/ProfilePage";
import ProfileNewUi from "../../../learn/screens/profile/ProfileNewUi";
import ReferAndEarn from "../../../learn/screens/profile/ReferAndEarn";

const ProfileRouter = () => {
    return (
        <Suspense fallback={<RouteLoading />}>
            <Switch>
                {/* <PrivateRoute exact path="/profile/" component={ProfilePage} /> */}
                <PrivateRoute exact path="/profile/" component={ProfileNewUi} />
                <PrivateRoute exact path="/profile/refer/:param/" component={ReferAndEarn} />
                <PrivateRoute exact path="/profile/notifications/" component={Notification} />

                <Route component={Error404} />
            </Switch>
        </Suspense>
    );
};

export default ProfileRouter;
