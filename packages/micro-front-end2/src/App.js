import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Routes from './routes';



ReactDOM.render(
    <Router>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
    , document.getElementById('microFrontend2'),
);

