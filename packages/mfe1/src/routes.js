import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import MoviePart from './components/MoviePart';
import MovieDetail from './components/MovieDetail/MovieDetail';

const Routes = () => {
    const { path } = useRouteMatch();
    console.log("path :"+ path)

    return (
        <>
            <Route exact path={path}>
                <MoviePart/>
            </Route>
            <Route path={`/movie/:movieId`}>
                <MovieDetail/>
            </Route>
        </>
    );
};

export default Routes;
