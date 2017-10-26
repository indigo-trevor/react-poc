// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/styles.scss";

// Components
import Logo from './components/Logo';
import Scoreboard from './components/Scoreboard';

var rootContainer = document.getElementById("app-container");
var modals = (
  <div>
    <Logo />
    <Scoreboard />
  </div>
);

ReactDOM.render(modals, rootContainer);
