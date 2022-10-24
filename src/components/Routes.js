import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FourthPage from "../pages/FourthPage";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={FirstPage} />
                    <Route path="/second" component={SecondPage} />
                    <Route path="/third" component={ThirdPage} />
                    <Route path="/fourth" component={FourthPage} />
                </Switch>
            </Router>
        )
    }
}