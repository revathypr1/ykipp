import React, {
    Suspense,
    lazy,
    useEffect,
    useState,
    useRef,
    useContext,
} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import RouteLoading from "../RouteLoading";
import styled from "styled-components";
import Support from "../../learn/screens/support/Support";
import SupportPackages from "../../learn/screens/support/SupportPackages";
import PreviousSupport from "../../learn/includes/supportRequest/PreviousSupport";
import SupportModal from "../../learn/includes/premium-assist/SupportModal";
import SupportCoins from "../../learn/screens/support/SupportCoins";
import { SupportEngineerContext } from "../../contexts/stores/SupportEngineerStore";

function SupportRouter() {
    const history = useHistory();
    const { supportEngineerState } = useContext(SupportEngineerContext);

    useEffect(() => {
        const { active_premium_assist } = supportEngineerState;
        if (active_premium_assist.premium_assist) {
            history.push(
                `/premium-assist/view/${active_premium_assist.premium_assist}`
            );
        }
    }, [Object.keys(supportEngineerState.active_premium_assist).length]);

    return (
        <Suspense fallback={<RouteLoading />}>
            <Container>
                <Wrapper>
                    <Switch>
                        <Route
                            exact
                            path="/premium-assist/"
                            render={() => <Support />}
                        />
                        <Route
                            exact
                            path="/premium-assist/packages/"
                            component={SupportPackages}
                        />
                    </Switch>
                    <PreviousSupport />
                </Wrapper>
            </Container>
        </Suspense>
    );
}

export default SupportRouter;
const Container = styled.div`
    overflow-x: hidden;
    min-height: calc(100vh - 130px);
    overflow-y: hidden;
    padding: 20px 0;
    @media all and (max-width: 1100px) {
        padding: unset;
        margin: 0 -10px -120px -10px;
    }
`;
const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-gap: 20px;
    transition: 0.4s ease;
    @media all and (max-width: 1300px) {
        grid-template-columns: 1fr;
    }
    @media all and (max-width: 400px) {
        /* display: block; */
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }
`;
