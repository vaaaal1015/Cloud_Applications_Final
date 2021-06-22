import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homePage"
import CreateVot from "./pages/createVot/createVotPage"
import VotPage from "./pages/vot/votPage"
import VotList from "./pages/votList/votListPage"
import VotResult from "./pages/result/resultPage"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/create">
                    <CreateVot />
                </Route>
                <Route path="/vot/:id/result" children={<VotResult />} />
                <Route path="/vot/:id" children={<VotPage />} />
                <Route path="/list">
                    <VotList />
                </Route>
                {/* <Route path="/result/:id" children={<VotResult />} /> */}
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode >,
    document.getElementById('root')
);

