import React, { Suspense, lazy } from "react";
import "../../../assets/css/web.css";
import "../../../assets/css/fancybox.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import auth from "../auth";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteLoading from "../RouteLoading";
import { AuthRoute } from "../AuthRoute";
import StudentInfo from "../../web/screens/StudentInfo";
import SignupInfo from "../../web/screens/SignupInfo";
import PromocodeInfo from "../../web/screens/PromocodeInfo";
import PromocodeUsers from "../../web/screens/PromocodeUsers";
import ReferralToken from "../../web/screens/ReferralToken";
import ReferralTokenInfo from "../../web/screens/ReferralTokenInfo";

const LearnRouter = lazy(() => import("../learn/LearnRouter"));
const Web404 = lazy(() => import("../../error-pages/Web404"));
const AuthRouter = lazy(() => import("../authentication/AuthRouter"));
const LogoutRoute = lazy(() => import("../LogoutRoute"));
const VacationLandingPage = lazy(() =>
    import("../../web/explore-pages/vacation/screens/VacationLandingPage")
);
const TechiesClubSingle = lazy(() =>
    import("../../web/screens/techies-club-single-page/TechiesClubSingle")
);

const PrimeLandingPage = lazy(() =>
    import("../../web/explore-pages/prime-program/screens/PrimeLandingPage")
);
const LandingPage = lazy(() =>
    import("../../web/screens/steyp-landing-page/LandingPage")
);

const TechiesHubSingle = lazy(() =>
    import("../../web/screens/techies-hub-page/TechiesHubSingle")
);
const TechDegreeLanding = lazy(() =>
    import("../../web/screens/tech-degree/TechDegreeLanding")
);
const SteypTermsAndCondition = lazy(() =>
    import("../../learn/screens/terms&condition/SteypTermsAndCondition")
);
const NewTermsAndConditions = lazy(() =>
    import("../../web/screens/NewTermsAndConditions")
);
// const PrivacyPolicy = lazy(() => import("../../learn/screens/terms&condition/PrivacyPolicy"));
// const ContactUs = lazy(() => import("../../web/screens/steyp-landing-page/ContactUs"));
const PrivacyPolicy = lazy(() => import("../../web/screens/PrivacyPolicy"));
const ContactUs = lazy(() => import("../../web/screens/ContactUs"));

//explore pages
const TechiesClubExplore = lazy(() =>
    import("../../web/explore-pages/techies-club/screens/TechiesClubExplore")
);
// const VacationLandingPage = lazy(() =>
//     import("../../web/explore-pages/genera")
// );
class WebRouter extends React.PureComponent {
    render() {
        return (
            <Suspense fallback={<RouteLoading />}>
                {/* <NewBuyNowModal
                    location={props.location}
                    action={action}
                    closeModal={closeModal}
                /> */}
                <Switch>
                    <AuthRoute path="/auth/" component={AuthRouter} />
                    <Route
                        exact
                        path="/get-info/refferal-token/712ee99b-260f-42e2-807f-b7690458d17e/"
                        component={StudentInfo}
                    />
                    <Route
                        exact
                        path="/get-info/refferal-token/712ee99b-260f-42e2-807f-b7690458d17e/:phone/"
                        component={SignupInfo}
                    />
                    <Route
                        exact
                        path="/get-info/promo-token/712ee99b-260f-42e2-807f-b7690458d17e/"
                        component={PromocodeInfo}
                    />
                    <Route
                        exact
                        path="/get-info/promo-token/712ee99b-260f-42e2-807f-b7690458d17e/:token/"
                        component={PromocodeUsers}
                    />
                    <Route
                        exact
                        path="/get-info/referral-token/712ee99b-260f-42e2-807f-b7690458d17e/"
                        component={ReferralTokenInfo}
                    />
                    <Route
                        exact
                        path="/get-info/referral-token/712ee99b-260f-42e2-807f-b7690458d17e/:token/"
                        component={ReferralToken}
                    />
                    <LogoutRoute exact path="/auth/logout/" />
                    {/* web pages */}
                    
                        <Route exact path="/" component={LandingPage} />
                    
                    <Route
                        exact
                        path="/techies-club/"
                        component={TechiesClubSingle}
                    />
                    <Route
                        exact
                        path="/prime-programs/"
                        component={PrimeLandingPage}
                    />
                    <Route
                        exact
                        path="/techies-hub/"
                        component={TechiesHubSingle}
                    />
                    <Route
                        exact
                        path="/tech-degree/"
                        component={TechDegreeLanding}
                    />
                    <Route
                        exact
                        path="/mlp/techies-club/"
                        component={TechiesClubExplore}
                    />
                    <Route
                        exact
                        path="/mlp/vacation-program/"
                        component={VacationLandingPage}
                    />
                    <Route
                        exact
                        path="/terms-of-service/"
                        component={NewTermsAndConditions}
                    />
                    <Route
                        exact
                        path="/privacy-policy/"
                        component={PrivacyPolicy}
                    />
                    <Route exact path="/contact-us/" component={ContactUs} />
                    {/* <Route path="/" component={LearnRouter} /> */}
                    <Route path="/" component={LearnRouter} />
                    {/* Error Pages */}
                    <Route component={Web404} />
                </Switch>
            </Suspense>
        );
    }
    styles = {
        overlay: {
            backgroundColor: "rgba(255,255,255,0.7)",
            height: "100%",
            width: "100%",
            display: "block",
            position: "absolute",
            zIndex: 3,
        },
        modal: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            borderRadius: "10px",
        },
    };
}

export default WebRouter;
