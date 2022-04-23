import React, { lazy, useContext, useEffect, useState } from "react";
import { Suspense } from "react";
import RouteLoading from "../RouteLoading";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";

import styled from "styled-components";
import MerchandiseFilter from "../../merchandise/includes/modals/MerchandiseFilter";
import ProductSingle from "../../merchandise/screens/ProductSingle";
import MyCart from "../../merchandise/screens/MyCart";
import { coinsConfig } from "../../../axiosConfig";
import { MerchandiseContext } from "../../contexts/stores/MerchandiseStore";
import BuyNow from "../../merchandise/screens/BuyNow";
import TalropTechSchoolingHelmet from "../../helpers/TalropTechSchoolingHelmet";
import MerchandiseHeader from "../../merchandise/includes/MerchandiseHeader";

const MerchandiseHome = lazy(() =>
    import("../../merchandise/screens/MerchandiseHome")
);
const Error404 = lazy(() => import("../../error-pages/Error404"));

const MyOrders = lazy(() => import("../../merchandise/screens/MyOrders"));

const MerchandiseRouter = () => {
    const { divMainClass } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

    const user_data = useSelector((state) => state.user_data);
    const { merchandiseDispatch } = useContext(MerchandiseContext);

    useEffect(() => {
        dispatch({ type: "ACTIVE_MENU", active_menu: "merchandise" });

        const getUsableEarnedCoins = () => {
            const access_token = user_data.access_token;
            coinsConfig
                .get("/main/merchandise/usable-earned-coins/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((response) => {
                    const { StatusCode, data } = response.data;
                    if (StatusCode === 6000) {
                        merchandiseDispatch({
                            type: "UPDATE_EARNED_COINS",
                            earned_coins: data,
                        });
                    } else {
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        getUsableEarnedCoins();
    }, [user_data]);

    return (
        <>
            <Suspense fallback={<RouteLoading />}>
                <Container id="main" className={divMainClass}>
                    <MerchandiseHeader setIsModal={setIsModal} />
                    <MerchandiseFilter
                        isModal={isModal}
                        setIsModal={setIsModal}
                    />
                    <TalropTechSchoolingHelmet title="Merchandise" />
                    <Switch>
                        <Route
                            exact
                            path="/merchandise/products/"
                            component={MerchandiseHome}
                        />

                        <Route
                            exact
                            path="/merchandise/my-orders/"
                            component={MyOrders}
                        />
                        <Route
                            exact
                            path="/merchandise/buy-now/products/:product_id/"
                            component={BuyNow}
                        />
                        <Route
                            exact
                            path="/merchandise/my-cart/"
                            component={MyCart}
                        />
                        <Route
                            exact
                            path="/merchandise/products/:product_id/"
                            component={ProductSingle}
                        />
                        <Route component={Error404} />
                    </Switch>
                </Container>
            </Suspense>
        </>
    );
};

export default MerchandiseRouter;
const Container = styled.div`
    @media (max-width: 480px) {
        margin: 0 -21px !important;
    }
`;
