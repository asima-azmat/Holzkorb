import React from 'react'
import {Switch, Route, Redirect, Router} from 'react-router-dom'
import {SearchPage} from "./pages/SearchPage";
import {AuthPage} from "./pages/AuthPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {RegistrationOkPage} from "./pages/RegistrationOkPage"
import history from "./history";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/search" exact>
                    <SearchPage/>
                </Route>
                <Route path="/registrationOk" exact>
                    <RegistrationOkPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Route path="/registration">
                    <RegistrationPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}