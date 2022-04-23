import React, { Suspense, lazy, useEffect, useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import RouteLoading from "../RouteLoading";
import Error401 from "../../error-pages/Error401";
import Error403 from "../../error-pages/Error403";
import Error404 from "../../error-pages/Error404";
import Error500 from "../../error-pages/Error500";
import styled from "styled-components";
import Header from "../../learn/includes/general/Header";
import MessagePopUp from "../../learn/includes/general/MessagePopUp";
import Sidebar from "../../learn/includes/general/Sidebar";
import CoinAlert from "../../learn/screens/CoinAlert";
import { communicationsConfig, learnConfig } from "../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import WebSocketMessagesInstance from "../../../messages-socket";
import { PrivateRoute } from "../PrivateRoute";
import TechSchoolingStore from "../../contexts/stores/TechSchoolingStore";
import { SupportEngineerContext } from "../../contexts/stores/SupportEngineerStore";
import { SubscriptionPrivateRoute } from "../SubscriptionPrivateRoute";
import TrialGiftModal from "../../learn/includes/general/TrialGiftModal";
import SubscriptionDiscountModal from "../../learn/includes/general/SubscriptionDiscountModal";
import ValidationModal from "../../learn/includes/general/ValidationModal";
import InvitationModal from "../../learn/screens/profile/InvitationModal";
import PaymentLinkModal from "../../learn/includes/general/PaymentLinkModal";
import MerchandiseStore from "../../contexts/stores/MerchandiseStore";
import { PrimeProgramContext } from "../../contexts/stores/PrimeProgramStore";
import CertificateModal from "../../learn/includes/techschooling/certification/CertificateModal";
import MainErrorPage from "../../error-pages/MainErrorPage";
import AdmissionForm from "../../learn/screens/profile/AdmissionForm";
import ProgramSubject from "../../learn/includes/techschooling/dashboard/ProgramSubject";
import PremiumAssistRouter from "./PremiumAssistRouter";
import PrimeProgramSucessModal from "../../learn/screens/prime-programs/PrimeProgramSucessModal";

// const MyActivities = lazy(() =>
//     import("../../learn/screens/student-activities/MyActivities")
// );
const NewDashboard = lazy(() =>
    import("../../learn/screens/techschooling/dashboard/NewDashboard")
);
const ProgramPlans = lazy(() =>
    import("../../web/screens/techies-club-single-page/ProgramPlans")
);
const PrimeProgramsCertificate = lazy(() =>
    import("../../learn/screens/prime-programs/PrimeProgramsCertificate")
);

const MerchandiseRouter = lazy(() =>
    import("../merchandise/MerchandiseRouter")
);
const MyclubRouter = lazy(() => import("../my-club/MyclubRouter"));
const MerchandiseLanding = lazy(() =>
    import("../../merchandise/screens/MerchandiseLanding")
);

const ProgramRouter = lazy(() => import("../tech-schooling/ProgramRouter"));
const PrimeProgramsRouter = lazy(() =>
    import("../prime-programs/PrimeProgramsRouter")
);
const PrimeProgramsInnerRouter = lazy(() =>
    import("../prime-programs/PrimeProgramsInnerRouter")
);
// const Promotion = lazy(() =>
//     import("../../learn/screens/promotions/Promotion")
// );

const ChallengesHome = lazy(() =>
    import("../../learn/screens/challenges/ChallengesHome")
);
const ChallengeView = lazy(() =>
    import("../../learn/screens/challenges/ChallengeView")
);
const WinnersPage = lazy(() =>
    import("../../learn/screens/challenges/WinnersPage")
);

const CeoTalks = lazy(() => import("../../learn/screens/ceo-talks/CeoTalks"));

const ComplaintBox = lazy(() =>
    import("../../learn/screens/complaint-box/ComplaintBox")
);

// const Guidance = lazy(() => import("../../learn/screens/guidance/Guidance"));
// const CeoTalks = lazy(() => import("../../learn/screens/ceo-talks/CeoTalks"));
// const ComplaintBox = lazy(() =>
//     import("../../learn/screens/complaint-box/ComplaintBox")
// );

// const Guidance = lazy(() => import("../../learn/screens/guidance/Guidance"));

const SearchResult = lazy(() =>
    import("../../learn/screens/searchresult/SearchResult")
);
const SettingsRouter = lazy(() => import("./SettingsRouter"));
const ChatWithRM = lazy(() =>
    import("../../learn/screens/chat-with-rm/ChatWithRM")
);
const FreeGround = lazy(() =>
    import("../../learn/screens/free-ground/FreeGround")
);
const FreeLessonsTopic = lazy(() =>
    import("../../learn/screens/free-ground/FreeLessonsTopic")
);

const StudentRouter = (props) => {
    const user_data = useSelector((state) => state.user_data);
    const errorState = useSelector((state) => state.errorState);

    const dispatch = useDispatch();

    const { supportEngineerDispatch } = useContext(SupportEngineerContext);

    const { primeProgramDispatch } = useContext(PrimeProgramContext);

    useEffect(() => {
        const fetchRMSession = (access_token) => {
            communicationsConfig
                .post(
                    "chat/student/rm-chat-session/start/",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                )
                .then((response) => {
                    const { StatusCode, data } = response.data;
                    if (StatusCode === 6000) {
                        dispatch({
                            type: "UPDATE_RM_SESSION",
                            rm_session: data,
                        });
                        initializeMessages(data.chat_profile);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        if (user_data) {
            let { access_token } = user_data;
            if (access_token) {
                fetchRMSession(access_token);
            }

            let coins_settings_stored = localStorage.getItem("coins_settings");
            let coins_settings_value = JSON.parse(coins_settings_stored);

            primeProgramDispatch({
                type: "UPDATE_IS_PURCHASED_COINS_VALUE",
                coins_settings: coins_settings_value,
            });
        }
    }, [user_data && Object.keys(user_data).length]);

    const initializeMessages = (chatProfile) => {
        waitForSocketConnection(() => {
            WebSocketMessagesInstance.addCallbacks(setMessages, addMessage);
            WebSocketMessagesInstance.fetchMessages(chatProfile);
        });
        if (!WebSocketMessagesInstance.isConnected) {
            WebSocketMessagesInstance.connect(
                `student/messages/${chatProfile}`
            );
        }
    };

    const setMessages = (message) => {
        dispatch({
            type: "SET_MESSAGES",
            message: message,
        });
    };

    const addMessage = (message) => {
        if (message.message_type === "premium_assist_picked") {
            supportEngineerDispatch({
                type: "OPEN_PREMIUM_ASSIST",
            });
            supportEngineerDispatch({
                type: "UPDATE_ACTIVE_PA_CHAT_SESSION",
                active_pa_chat_session: message.pa_chat_session,
            });
            supportEngineerDispatch({
                type: "UPDATE_ACTIVE_PA_CHAT_SESSION_ID",
                active_pa_chat_session_id: message.pa_chat_session_id,
            });
        } else {
            dispatch({
                type: "ADD_MESSAGE",
                message: message,
            });
        }
    };

    const waitForSocketConnection = (callback) => {
        setTimeout(() => {
            if (WebSocketMessagesInstance.state() === 1) {
                callback();
                return;
            } else {
                waitForSocketConnection(callback);
            }
        }, 100);
    };

    const handleIdUploadModal = () => {
        dispatch({
            type: "TOGGLE_STUDENT_UPLOAD_MODAL",
        });
    };

    useEffect(() => {
        const fetchCampusData = () => {
            let campus_data_stored = localStorage.getItem("campus_data");
            if (!campus_data_stored) {
                localStorage.setItem(
                    "campus_data",
                    JSON.stringify(campus_data_stored)
                );
                campus_data_stored = localStorage.getItem("campus_data");
            }
            let campus_data_value = JSON.parse(campus_data_stored);
            dispatch({
                type: "UPDATE_CAMPUS_DATA",
                campus_data: campus_data_value,
            });
        };

        fetchCampusData();
    }, []);

    useEffect(() => {
        const fetchPrograms = () => {
            let { access_token } = user_data;
            learnConfig
                .get(`learn/programs/`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((response) => {
                    let { StatusCode, data } = response.data;

                    if (StatusCode === 6000) {
                        dispatch({
                            type: "UPDATE_PROGRAMS",
                            loading: false,
                            programs: data,
                        });
                    }
                })
                .catch(() =>
                    dispatch({
                        type: "UPDATE_PROGRAMS",
                        loading: false,
                        programs: [],
                    })
                );
        };
        if (user_data?.access_token) fetchPrograms();
    }, [user_data && user_data.access_token]);

    return (
        <div id="main-container">
            <PrimeProgramSucessModal />
            <TrialGiftModal />
            <CertificateModal />
            <MessagePopUp />
            <Header {...props} />
            <Sidebar {...props} />
            <InvitationModal />
            <PaymentLinkModal />
            <SubscriptionDiscountModal
                handleIdUploadModal={handleIdUploadModal}
            />
            <ValidationModal handleIdUploadModal={handleIdUploadModal} />
            {errorState.isError ? (
                <MainErrorPage />
            ) : (
                <Suspense fallback={<RouteLoading />}>
                    <Switch>
                        {/* <Route exact path="/">
                            <DashboardNew />
                        </Route> */}
                        <Route exact path="/">
                            <Redirect
                                to={{
                                    pathname: "/dashboard/",
                                }}
                            />
                        </Route>
                        {/* Free-ground routes are here */}
                        {/* <Route
                            exact
                            path="/dashboard/"
                            component={DashboardNew}
                        /> */}
                        <PrivateRoute
                            exact
                            path="/dashboard/"
                            component={NewDashboard}
                        />
                        {/* <PrivateRoute
                            exact
                            path="/my-activities/"
                            component={MyActivities}
                        /> */}
                        <Route
                            exact
                            path="/free-ground/"
                            component={FreeGround}
                        />
                        <Route
                            exact
                            path="/free-ground/topics/view/:pk/"
                            component={FreeLessonsTopic}
                        />
                        <Route
                            exact
                            path="/profile/admission/"
                            component={AdmissionForm}
                        />
                        <Route
                            exact
                            path="/dashboard/techies-club/"
                            render={() => (
                                <ProgramPlans
                                    title="Techies Club"
                                    program="techies-club"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/dashboard/techies-hub/"
                            render={() => (
                                <ProgramPlans
                                    title="Techies Hub"
                                    program="techies-hub"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/dashboard/techies-degree/"
                            render={() => (
                                <ProgramPlans
                                    title="Tech Degree"
                                    program="techies-degree"
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/dashboard/program/techies-club/:id"
                            render={() => (
                                <ProgramSubject title="Techis Club" />
                            )}
                        />
                        <Route
                            exact
                            path="/dashboard/program/techies-hub/:id/"
                            render={() => <ProgramSubject title="Techis Hub" />}
                        />
                        <Route
                            exact
                            path="/dashboard/program/tech-degree/:id"
                            render={() => (
                                <ProgramSubject title="Tech Degree" />
                            )}
                        />
                        {/* Profile routes are here */}
                        <Route
                            exact
                            active_role="student"
                            path="/profile/coin-alert/"
                            component={CoinAlert}
                        />
                        <Route path="/profile/" component={SettingsRouter} />
                        {/* Chat with rm routes are here */}
                        <SubscriptionPrivateRoute
                            path="/chat-with-rm/"
                            component={ChatWithRM}
                        />
                        <Route path="/coins/" component={SettingsRouter} />
                        {/* <PrivateRoute
                        exact
                        path="/promotions/"
                        component={Promotion}
                    />

                    <PrivateRoute
                        exact
                        path="/search/"
                        component={SearchResult}
                    />
                    {/* merchandise routes are here */}
                        <PrivateRoute
                            exact
                            path="/merchandise/"
                            component={MerchandiseLanding}
                        />
                        {/* <PrivateRoute
                            path="/merchandise/"
                            component={() => (
                                <MerchandiseStore>
                                    <MerchandiseRouter />
                                </MerchandiseStore>
                            )}
                        />{" "} */}
                        <Route
                            exact
                            path="/talrop-talks/"
                            component={CeoTalks}
                        />
                        <PrivateRoute
                            path="/prime-programs/courses/"
                            component={PrimeProgramsRouter}
                        />
                        <PrivateRoute
                            path="/prime-programs/"
                            component={PrimeProgramsInnerRouter}
                        />
                        <PrivateRoute
                            path="/my-club/"
                            component={MyclubRouter}
                        />
                        <Route
                            exact
                            path="/certificate/"
                            component={PrimeProgramsCertificate}
                        />
                        <PrivateRoute
                            path="/my-club/"
                            component={MyclubRouter}
                        />

                        {/* <PrivateRoute
                            path="/merchandise/"
                            component={() => (
                                <MerchandiseStore>
                                    <MerchandiseRouter />
                                </MerchandiseStore>
                            )}
                        /> */}
                        <Route
                            exact
                            path="/challenges/"
                            component={ChallengesHome}
                        />
                        <Route
                            exact
                            path="/challenges/:id/"
                            component={ChallengeView}
                        />
                        <Route
                            exact
                            path="/challenges/result/:id/"
                            component={WinnersPage}
                        />

                        <Route
                            exact
                            path="/techies-club/explore/"
                            component={WinnersPage}
                        />
                        <PrivateRoute
                            exact
                            path="/complaint-box/"
                            component={ComplaintBox}
                        />
                        <PrivateRoute
                            exact
                            path="/search/"
                            component={SearchResult}
                        />
                        {/* Premium assist router*/}
                        <SubscriptionPrivateRoute
                            path="/premium-assist/"
                            component={PremiumAssistRouter}
                        />
                        <PrivateRoute path="/401/">
                            <ErrorWrap>
                                <Error401 />
                            </ErrorWrap>
                        </PrivateRoute>
                        <PrivateRoute path="/403/">
                            <ErrorWrap>
                                <Error403 />
                            </ErrorWrap>
                        </PrivateRoute>
                        <PrivateRoute path="/500/">
                            <ErrorWrap>
                                <Error500 />
                            </ErrorWrap>
                        </PrivateRoute>
                        {/* Tech-schooling routes are here */}
                        <PrivateRoute path="/:subject_slug/">
                            <TechSchoolingStore>
                                <ProgramRouter {...props} />
                            </TechSchoolingStore>
                        </PrivateRoute>
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            )}
        </div>
    );
};

export default StudentRouter;
const ErrorWrap = styled.div`
    min-height: calc(100vh);
    position: relative;
`;
