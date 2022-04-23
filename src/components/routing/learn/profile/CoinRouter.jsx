import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { PrivateRoute } from "../../PrivateRoute";
import RouteLoading from "../../RouteLoading";
import Error404 from "../../../error-pages/Error404";

const ManageCoins = lazy(() =>
    import("../../../learn/screens/profile/coins/ManageCoins")
);
// const Subscriptions = lazy(() =>
//     import("../../../learn/screens/profile/coins/Subscriptions")
// );
const Details = lazy(() =>
    import("../../../learn/screens/profile/coins/Details")
);
const TransactionHistory = lazy(() =>
    import("../../../learn/screens/profile/coins/TransactionHistory")
);

const FundTransfers = lazy(() =>
    import("../../../learn/screens/profile/coins/FundTransfers")
);

const CoinPurchases = lazy(() =>
    import("../../../learn/screens/profile/coins/CoinPurchases")
);

const FundTransferInvoice = lazy(() =>
    import("../../../learn/screens/profile/coins/FundTransferInvoice")
);

const CoinPurchaseInvoice = lazy(() =>
    import("../../../learn/screens/profile/coins/CoinPurchaseInvoice")
);

// const CoinPurchaseReceipt = lazy(() =>
//     import("../../../learn/screens/profile/coins/CoinPurchaseReceipt")
// );

const CoinRouter = () => {
    return (
        <Suspense fallback={<RouteLoading />}>
            <Switch>
                <PrivateRoute exact path="/coins/">
                    <Redirect
                        to={{
                            pathname: "/coins/manage/",
                        }}
                    />
                </PrivateRoute>
                <PrivateRoute
                    exact
                    path="/coins/manage"
                    component={ManageCoins}
                />
                {/* <PrivateRoute
                    exact
                    path="/coins/subscriptions/"
                    component={Subscriptions}
                /> */}
                <PrivateRoute
                    exact
                    path="/coins/transactions/"
                    component={TransactionHistory}
                />
                <PrivateRoute
                    exact
                    path="/coins/fund-transfers/"
                    component={FundTransfers}
                />
                <PrivateRoute
                    exact
                    path="/coins/coin-purchases/"
                    component={CoinPurchases}
                />
                <PrivateRoute
                    exact
                    path="/coins/fund-transfers/:pk/"
                    component={FundTransferInvoice}
                />
                <PrivateRoute
                    exact
                    path="/coins/coin-purchases/:pk/"
                    component={CoinPurchaseInvoice}
                />
                {/* <PrivateRoute
                    exact
                    path="/coins/subscriptions/:pk/"
                    component={CoinPurchaseReceipt}
                /> */}

                <PrivateRoute exact path="/coins/info/" component={Details} />
                <Route component={Error404} />
            </Switch>
        </Suspense>
    );
};

export default CoinRouter;
