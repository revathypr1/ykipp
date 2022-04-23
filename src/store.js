import { createStore } from "redux";
import { stringify } from "flatted";

const initialState = {
    programsState: {
        loading: true,
        programs: [],
    },
    profile_menu_right: "-400px",
    menu_type: "normal",
    divMainClass: "responsive",
    active_menu: "dashboard",
    tech_schooling__active_menu: "dashboard",
    active_profile_menu: "",
    respSideMenuClass: "",
    respSearch: false,
    isSignupUser: false,
    isProfessionCompleted: false,
    nextDesignationData: {},
    user_data: {},
    userSubscriptionType: "",
    campus_data: {},
    signup_data: {},
    isUserDataLoading: false,
    user_profile: {
        subscription_data: {},
        program: {},
    },
    rm_session: {},
    designation: {},
    nextPath: "/dashboard/",

    notifications: [],
    notifications_count: 0,

    message: {},
    isStudentUploadModal: false,
    isInvitationModal: false,
    is_validationModal: false,
    // Payment Link
    isPaymentLinkModal: false,
    payment_plan: {},
    isProfileModel: false,
    profileModalType: "",

    error: "",
    errorState: {
        isError: false,
        errorData: {
            status: 200,
            redirectLink: "",
            errorMessage: "An error occured, please try later",
        },
    },
    isTechDegreeForm: false,
    tidioSettings: {
        isOpened: false,
    },
    popupSettings: {
        isViewed: false,
    },
    prime_subscription: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PROGRAMS":
            return {
                ...state,
                programsState: {
                    loading: action.loading,
                    programs: action.programs,
                },
            };
        case "TOGGLE_PROFILE_MODAL":
            return {
                ...state,
                isProfileModel: !state.isProfileModel,
            };

        case "UPDATE_PROFILE_MODAL":
            return {
                ...state,
                profileModalType: action.profileModalType,
            };
        case "UPDATE_PRIME_PROGRAM_PLAN":
            return {
                ...state,
                primeSubscriptionPlan: action.primeSubscriptionPlan,
            };

        case "UPDATE_PRIME_SUBSCRIPTION":
            return {
                ...state,
                prime_subscription: action.primeSubscription,
            };
        case "UPDATE_ERROR":
            //  default state of error status
            let isError = action.isError ? action.isError : true;
            let status = 400;
            // if the there is a error message from components then the error message is show else default error message is shown
            let errorMessage = action.errorMessage
                ? action.errorMessage
                : "An error occured, please try later";
            // used to update the redirect link in case of redirect link available
            let redirectLink = action.redirectLink ? action.redirectLink : "";

            // if there is a responce in error state
            if (action.error.response) {
                status = action.error.response.status;
            }
            // updates the store
            return {
                ...state,
                errorState: {
                    isError: true,
                    errorData: {
                        status: status,
                        errorMessage: errorMessage,
                        redirectLink: redirectLink,
                    },
                },
            };
        case "RESET_ERROR":
            return {
                ...state,
                errorState: {
                    isError: false,
                    errorData: {},
                },
            };
        case "TOGGLE_VALIDATION_MODAL":
            return {
                ...state,
                is_validationModal: !state.is_validationModal,
            };
        case "TOGGLE_TECH_DEGREE_FORM_MODAL":
            return {
                ...state,
                isTechDegreeForm: !state.isTechDegreeForm,
            };

        case "TOGGLE_PAYMENT_LINK_MODAL":
            return {
                ...state,
                isPaymentLinkModal: !state.isPaymentLinkModal,
            };

        case "UPDATE_PAYMENT_LINK_MODAL":
            return {
                ...state,
                payment_plan: action.payment_plan,
            };
        case "UPDATE_SUBSCRIPTION_TYPE":
            return {
                ...state,
                userSubscriptionType: action.userSubscriptionType,
            };
        case "TOGGLE_PROFILE_MENU":
            if (state.profile_menu_right === 0) {
                return {
                    ...state,
                    profile_menu_right: "-400px",
                };
            } else {
                return {
                    ...state,
                    profile_menu_right: 0,
                };
            }
        case "TOGGLE_STUDENT_UPLOAD_MODAL":
            return {
                ...state,
                isStudentUploadModal: !state.isStudentUploadModal,
            };

        case "TOGGLE_INVITATION_MODAL":
            return {
                ...state,
                isInvitationModal: !state.isInvitationModal,
            };
        case "TOGGLE_SIGNUP_USER":
            return {
                ...state,
                isSignupUser: action.bool,
            };
        case "UPDATE_PROFESSION_STATUS":
            return {
                ...state,
                isProfessionCompleted: action.bool,
            };
        case "MENU_TYPE":
            if (action.menu_type === "normal") {
                return {
                    ...state,
                    menu_type: action.menu_type,
                    divMainClass: "",
                };
            } else if (action.menu_type === "hidden") {
                return {
                    ...state,
                    menu_type: action.menu_type,
                    divMainClass: "responsive-mini",
                };
            } else {
                return {
                    ...state,
                    menu_type: action.menu_type,
                    divMainClass: "responsive",
                };
            }

        case "TOGGLE_RESP_SIDE_MENU":
            if (action.value === "hide") {
                return {
                    ...state,
                    respSideMenuClass: "",
                };
            }
            if (state.respSideMenuClass === "") {
                return {
                    ...state,
                    respSideMenuClass: "show",
                };
            } else {
                return {
                    ...state,
                    respSideMenuClass: "",
                };
            }

        case "SET_MENU_ICON_REF":
            return {
                ...state,
                menuIconRef: action.ref,
            };

        case "ACTIVE_MENU":
            return {
                ...state,
                active_menu: action.active_menu,
            };

        case "TECH_SCHOOL_ACTIVE_MENU":
            return {
                ...state,
                tech_schooling__active_menu: action.tech_schooling__active_menu,
            };

        case "ACTIVE_PROFILE_MENU":
            return {
                ...state,
                active_profile_menu: action.active_profile_menu,
            };

        case "UPDATE_DESIGNATION":
            return {
                ...state,
                designation: action.designation,
            };

        case "UPDATE_NEXT_DESIGNATION":
            return {
                ...state,
                nextDesignationData: action.nextDesignationData,
            };

        case "UPDATE_PRACTICE_FILTER":
            return {
                ...state,
                practiceFilter: action.practiceFilter,
            };

        case "UPDATE_LESSONS":
            return {
                ...state,
                lessons: action.lessons,
            };
        case "TOGGLE_LESSONS_LOADING": {
            return {
                ...state,
                isLessonsLoading: !state.isLessonsLoading,
            };
        }
        case "TOGGLE_TOPICS_LOADING": {
            return {
                ...state,
                isTopicsLoading: !state.isTopicsLoading,
            };
        }

        case "UPDATE_TOPICS":
            return {
                ...state,
                topics: action.topics,
            };

        //Update freeSkills, freeDesignations, freeLessons, freeTopics
        case "UPDATE_FREE_DESIGNATION":
            return {
                ...state,
                freeDesignation: action.freeDesignation,
            };
        case "TOGGLE_FREE_DESIGNATIONS_LOADING":
            return {
                ...state,
                isFreeDesignationsLoading: !state.isFreeDesignationsLoading,
            };

        case "UPDATE_FREE_SKILLS":
            return {
                ...state,
                freeSkills: action.freeSkills,
            };
        case "UPDATE_FREE_LESSONS":
            return {
                ...state,
                freeLessons: action.freeLessons,
            };

        case "UPDATE_SUBSCRIPTION_DISCOUNT_STATUS": {
            return {
                ...state,
                subscriptionDiscountStatus: action.subscriptionDiscountStatus,
            };
        }
        case "UPDATE_USER_DATA":
            localStorage.setItem("user_data", JSON.stringify(action.user_data));
            return {
                ...state,
                user_data: action.user_data,
            };

        case "UPDATE_TIDIO_SETTINGS":
            const tidioSettings = {
                ...state.tidioSettings,
                ...action.tidioSettings,
            };
            localStorage.setItem(
                "tidioSettings",
                JSON.stringify(tidioSettings)
            );

            return {
                ...state,
                tidioSettings: action.tidioSettings,
            };

        case "UPDATE_VACATION_POPUP_SETTINGS":
            const popupSettings = {
                ...state.popupSettings,
                ...action.popupSettings,
            };
            localStorage.setItem(
                "popupSettings",
                JSON.stringify(popupSettings)
            );
            return {
                ...state,
                popupSettings: action.popupSettings,
            };

        case "TOGGLE_FREE_SKILLS_LOADING":
            return {
                ...state,
                isFreeSkillsLoading: !state.isFreeSkillsLoading,
            };

        case "UPDATE_FREE_LESSONS":
            return {
                ...state,
                freeLessons: action.freeLessons,
            };
        //Challenge page
        // case "UPDATE_CHALLENGES":
        //     return {
        //         ...state,
        //         challenges: action.challenges,
        //     };
        case "UPDATE_SUBSCRIPTION_DISCOUNT_STATUS": {
            return {
                ...state,
                subscriptionDiscountStatus: action.subscriptionDiscountStatus,
            };
        }

        case "UPDATE_CAMPUS_DATA":
            localStorage.setItem(
                "campus_data",
                JSON.stringify(action.campus_data)
            );
            return {
                ...state,
                campus_data: action.campus_data,
            };

        case "UPDATE_SIGNUP_DATA":
            localStorage.setItem(
                "signup_data",
                JSON.stringify(action.signup_data)
            );
            return {
                ...state,
                signup_data: action.signup_data,
            };

        case "UPDATE_USER_PROFILE":
            return {
                ...state,
                user_profile: action.user_profile,
            };
        case "TOGGLE_PROFILE_LOADING":
            return {
                ...state,
                isUserDataLoading: !state.isUserDataLoading,
            };
        case "UPDATE_NEXT_PATH":
            return {
                ...state,
                nextPath: action.nextPath,
            };

        case "TOGGLE_RESP_SEARCH":
            if (action.respSearch) {
                return {
                    ...state,
                    respSearch: action.respSearch,
                };
            }

            return {
                ...state,
                respSearch: !state.respSearch,
            };

        case "UPDATE_NOTIFICATIONS":
            return {
                ...state,
                notifications: action.notifications,
                notifications_count: action.notifications_count,
            };
        // Update RM session
        case "UPDATE_RM_SESSION":
            return {
                ...state,
                rm_session: action.rm_session,
            };
        case "SET_MESSAGES":
            return {
                ...state,
                message: action.message,
            };
        case "ADD_MESSAGE":
            let message = state.message;
            if (action.message?.message_type === "start_typing") {
                if (action.message?.contact !== state.rm_session.chat_profile) {
                    message.last_message = "typing...";
                }
            } else if (action.message?.message_type === "start_recording") {
                if (action.message?.contact !== state.rm_session.chat_profile) {
                    message.last_message = "recording audio...";
                }
            } else if (action.message?.message_type === "read_message") {
                if (action.message?.contact === state.rm_session.chat_profile) {
                    message.unread_messages_count = 0;
                }
            } else {
                message.last_message = action.message?.last_message;
                if (action.message?.message_type === "session_update") {
                    message.unread_messages_count =
                        action.message?.student_unread_messages_count;
                }
            }
            const newState = {
                ...state,
                message: message,
            };
            return newState;
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
