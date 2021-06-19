import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homePage"
import CreateVot from "./pages/createVot/createVotPage"
import VotPage from "./pages/vot/votPage"
import VotList from "./pages/VotList/votListPage"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/create">
                    <CreateVot />
                </Route>
                <Route path="/list">
                    <VotList />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode >,
    document.getElementById('root')
);

