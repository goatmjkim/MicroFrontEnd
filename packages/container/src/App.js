import React, { Suspense } from 'react';
import Dashboard from './components/Dashboard';
import {  BrowserRouter as Router,
    Switch, Route, useRouteMatch} from "react-router-dom";


function App() {
    // const { path } = useRouteMatch();

    
    return (
        <Router>
            <Switch>
                    <Dashboard />
            </Switch>
        </Router>
    );
}


export default App;