import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css"

import HomePage from "./pages/home/homePage"
import CreateVot from "./pages/createVot/createVotPage"
import VotPage from "./pages/vot/votPage"

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    {/* <CreateVot /> */}
    <VotPage />
  </React.StrictMode>,
  document.getElementById('root')
);

