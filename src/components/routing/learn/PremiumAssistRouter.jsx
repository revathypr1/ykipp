import React, { Suspense, useState, useContext } from "react";
import { Switch } from "react-router-dom";
import RouteLoading from "../RouteLoading";
import SupportRouter from "./SupportRouter";
import { PrivateRoute } from "../PrivateRoute";
import PremiumChat from "../../learn/screens/support/PremiumChat";
import { SupportEngineerContext } from "../../contexts/stores/SupportEngineerStore";
import { learnConfig } from "../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatList from "../../learn/screens/chat-with-support-engineer/ChatList";
import ChatListAllStudents from "../../learn/screens/chat-with-support-engineer/ChatListAllStudents";

function PremiumAssistRouter() {
    const { user_data, divMainClass } = useSelector((state) => state);
    const { supportEngineerState, supportEngineerDispatch } = useContext(
        SupportEngineerContext
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "ACTIVE_MENU",
            active_menu: "premium_assist",
        });
    }, []);

    useEffect(() => {
        // Get previous PAs
        const getPreviousPAs = () => {
            const { access_token } = user_data;
            supportEngineerDispatch({
                type: "TOGGLE_PREVIOUS_ASSISTS_LOADING",
                is_previous_assists_loading: true,
            });
            learnConfig
                .get("premium-assists/student/previous-assists/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((response) => {
                    const { StatusCode, data } = response.data;

                    if (StatusCode === 6000) {
                        supportEngineerDispatch({
                            type: "UPDATE_PREVIOUS_PREMIUM_ASSISTS",
                            previous_premium_assists: data,
                        });
                        supportEngineerDispatch({
                            type: "TOGGLE_PREVIOUS_ASSISTS_LOADING",
                            is_previous_assists_loading: false,
                        });
                    } else {
                        supportEngineerDispatch({
                            type: "TOGGLE_PREVIOUS_ASSISTS_LOADING",
                            is_previous_assists_loading: false,
                        });
                    }
                })
                .catch(() => {
                    supportEngineerDispatch({
                        type: "TOGGLE_PREVIOUS_ASSISTS_LOADING",
                        is_previous_assists_loading: false,
                    });
                });
        };

        if (user_data) {
            getPreviousPAs();
        }
    }, []);

    useEffect(() => {
        // Check active session
        const checkActive = () => {
            const { access_token } = user_data;
            learnConfig
                .get("premium-assists/check-active/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((response) => {
                    const { StatusCode, data } = response.data;

                    if (StatusCode === 6000) {
                        const { is_reviewed, ended_by, is_resolved } = data;
                        supportEngineerDispatch({
                            type: "UPDATE_ACTIVE_PREMIUM_ASSIST",
                            active_premium_assist: data,
                        });
                        is_resolved === false
                            ? supportEngineerDispatch({
                                  type: "UPDATE_MODAL",
                                  is_modal: true,
                                  modal_type: "reassign",
                              })
                            : is_reviewed === false &&
                              (ended_by === "student"
                                  ? supportEngineerDispatch({
                                        type: "UPDATE_MODAL",
                                        is_modal: true,
                                        modal_type: "negative_rating",
                                    })
                                  : supportEngineerDispatch({
                                        type: "UPDATE_MODAL",
                                        is_modal: true,
                                        modal_type: "se_end_chat",
                                    }));
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        if (
            user_data &&
            !supportEngineerState.active_premium_assist.premium_assist
        ) {
            checkActive();
        }
    }, [Object.keys(supportEngineerState.active_premium_assist)]);

    return (
        <Suspense fallback={<RouteLoading />}>
            <div id="main" className={divMainClass}>
                <Switch>
                    <PrivateRoute exact path="/premium-assist/view/all/">
                        <ChatListAllStudents isAllPage={true} />
                    </PrivateRoute>
                    <PrivateRoute
                        exact
                        path="/premium-assist/view/:id/"
                        component={PremiumChat}
                    />
                    <PrivateRoute
                        path="/premium-assist/"
                        component={SupportRouter}
                    />
                </Switch>
            </div>
        </Suspense>
    );
}

export default PremiumAssistRouter;
