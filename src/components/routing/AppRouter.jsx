import React, { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import VacationPopup from "../web/screens/steyp-landing-page/VacationPopup";

import RouteLoading from "./RouteLoading";

const WebRouter = lazy(() => import("./web/WebRouter"));
const SteypTermsAndCondition = lazy(() =>
    import("../learn/screens/terms&condition/SteypTermsAndCondition")
);

const NewTermsAndConditions = lazy(() =>
    import("../web/screens/NewTermsAndConditions")
);
const PrivacyPolicy = lazy(() => import("../web/screens/PrivacyPolicy"));
const ContactUs = lazy(() => import("../web/screens/ContactUs"));
const AboutUs = lazy(() => import("../web/screens/AboutUs"));

function AppRouter() {
    const dispatch = useDispatch();
    const { tidioSettings, user_profile } = useSelector((state) => state);
    const [isToast, setToast] = useState(false);

    const handleTidioClick = (bool) => {
        dispatch({
            type: "UPDATE_TIDIO_SETTINGS",
            tidioSettings: {
                isOpened: bool,
            },
        });
    };

    useEffect(() => {
        document.addEventListener("tidioChat-open", () => {
            setToast(false);
            handleTidioClick(true);
        });

        if (window.tidioChatApi) {
            window.tidioChatApi.on("ready", () => {
                setToast(true);
            });

            document.tidioIdentify = {
                distinct_id: user_profile.user_id, // Unique visitor ID in your system
                email: user_profile?.email, // visitor email
                name: user_profile.name, // Visitor name
                phone: `+91 ${user_profile.phone}`, //Visitor phone
            };

            window.tidioChatApi.setContactProperties({
                user_id: user_profile.user_id,
                program: user_profile.program?.name,
                rm: user_profile.rm_name,
            });

            window.tidioChatApi.setVisitorData({
                distinct_id: user_profile.user_id, // Unique visitor ID in your system
                email: user_profile?.email, // visitor email
                name: user_profile.name, // Visitor name
                phone: `+91 ${user_profile.phone}`, //Visitor phone
            });
        } else {
            document.addEventListener("tidioChat-ready", () => {
                setToast(true);
                document.tidioIdentify = {
                    distinct_id: user_profile.user_id, // Unique visitor ID in your system
                    email: user_profile?.email, // visitor email
                    name: user_profile.name, // Visitor name
                    phone: `+91 ${user_profile.phone}`, //Visitor phone
                };

                window.tidioChatApi.setContactProperties({
                    user_id: user_profile.user_id,
                    program: user_profile.program?.name,
                    rm: user_profile.rm_name,
                });

                window.tidioChatApi.setVisitorData({
                    distinct_id: user_profile.user_id, // Unique visitor ID in your system
                    email: user_profile?.email, // visitor email
                    name: user_profile.name, // Visitor name
                    phone: `+91 ${user_profile.phone}`, //Visitor phone
                });
            });
        }
    }, [user_profile, window.tidioChatApi]);

    return (
        <>
            {!tidioSettings.isOpened && isToast && (
                <BubbleCard>
                    <span className="shape"></span>
                    <Emoji>🥳</Emoji>
                    <Para>
                        Welcome to <span>Steyp!</span> <br />
                        We're here to assist you✨
                    </Para>
                    <Close
                        onClick={() => {
                            setToast(false);
                            handleTidioClick(true);
                        }}
                        src={require("../../assets/images/web/Landing-page/new/close-icon-gray.svg")}
                        alt="Icon"
                    />
                </BubbleCard>
            )}

            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <Route
                        exact
                        path="/tos/"
                        component={SteypTermsAndCondition}
                    />
                    <Route
                        exact
                        path="/termsand-conditions/"
                        component={NewTermsAndConditions}
                    />
                    <Route
                        exact
                        path="/privacy-policy/"
                        component={PrivacyPolicy}
                    />
                    <Route exact path="/contact-us/" component={ContactUs} />
                    <Route exact path="/about-us/" component={AboutUs} />
                    {/* Website Pages */}
                    <Route path="/" component={WebRouter} />
                </Switch>
            // </Suspense>
        </>
    );
}

export default AppRouter;

const BubbleCard = styled.div`
    position: fixed;
    background: #fff;
    box-shadow: rgb(0 18 46 / 16%) 0px 8px 36px 0px;
    bottom: 133px;
    right: 26px;
    border-radius: 11px;
    pointer-events: auto;
    z-index: 9999;
    left: auto;
    padding: 18px 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    span.shape {
        width: 0px;
        height: 0px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 13px solid rgb(255, 255, 255);
        position: absolute;
        right: 17px;
        bottom: -8px;
    }
    @media (max-width: 768px) {
        bottom: 112px;
        right: 17px;
    }
    @media (max-width: 480px) {
        bottom: 109px;
        right: 13px;
    }
`;
const Emoji = styled.span`
    font-size: 29px;
`;
const Para = styled.p`
    font-family: "gordita_regular";
    font-size: 14px;
    color: #2d2d2d;
    span {
        font-family: "gordita_medium";
        text-transform: uppercase;
    }
`;
const Close = styled.img`
    position: absolute;
    right: 11px;
    top: 13px;
    width: 9px;
    display: block;
    cursor: pointer;
`;
