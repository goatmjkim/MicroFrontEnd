import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import TVPart from "./components/TVPart";
import TVDetail from "./components/TVDetail/TVDetail";

const Routes = () => {
    const { path } = useRouteMatch();
    console.log("path :"+ path)

    return (
        <>
            <Route exact path={path}>
                <TVPart/>
            </Route>
            <Route path={`/tv/:TVId`}>
                <TVDetail/>
            </Route>
        </>
    );
};

export default Routes;
