import React, { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "../../../assets/css/Style.css";
import PrimeProgramStore from "../../contexts/stores/PrimeProgramStore";
import SupportEngineerStore from "../../contexts/stores/SupportEngineerStore";
import RouteLoading from "../RouteLoading";

const StudentRouter = lazy(() => import("./StudentRouter"));
const Error404 = lazy(() => import("../../error-pages/Error404"));

export default function LearnRouter(props) {
    const user_profile = useSelector((state) => state.user_profile);

    const dispatch = useDispatch();
    const [subscriptionType, setSubscriptionType] = useState("");

    useEffect(() => {
        if (
            user_profile.subscription_data &&
            user_profile.subscription_data.has_active_subscription
        ) {
            if (!user_profile.subscription_data.expired_subscription) {
                if (user_profile.subscription_data.is_paid_subscription) {
                    setSubscriptionType("paid_subscription");
                } else {
                    setSubscriptionType("trial_active");
                }
            } else {
                if (user_profile.subscription_data.is_paid_subscription) {
                    setSubscriptionType("expired_subscription");
                } else {
                    setSubscriptionType("trial_end");
                }
            }
        }
    }, [user_profile.subscription_data.end_timestamp]);

    useEffect(() => {
        dispatch({
            type: "UPDATE_SUBSCRIPTION_TYPE",
            userSubscriptionType: subscriptionType,
        });
    }, [subscriptionType]);

    return (
        <Suspense fallback={<RouteLoading />}>
            <Switch>
                {/* Student Pages */}
                <Route path="/">
                    <SupportEngineerStore>
                        <PrimeProgramStore>
                            <StudentRouter {...props} />
                        </PrimeProgramStore>
                    </SupportEngineerStore>
                </Route>

                <Route component={Error404} />
            </Switch>
        </Suspense>
    );
}
