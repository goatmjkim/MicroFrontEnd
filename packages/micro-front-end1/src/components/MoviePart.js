import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMG_BASE_URL} from "../Config";
import GridCards from "./commons/GridCards";
import { Grid } from "@material-ui/core";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function MoviePart() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage]= useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
        fetchMovies(endpoint)
    }, []);

    const fetchMovies =(endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response.results)
                setMovies([...Movies, ...response.results])
                setCurrentPage(response.page)
                setMainMovieImage(response.results[0])
            })
    }

    const loadMoreItems =() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage +1}`;
        fetchMovies(endpoint)
    }

        return (
            <div style = {{width :'100%', margin : '0'}}>

                <div style = {{width :'95%', margin : '1rem auto'}}>
                    <h2>Popular Movies</h2>
                    <hr/>
                    <ScrollMenu
                        onWheel={onWheel}
                    >
                        {Movies && Movies.map((movie, index) => (
                        <GridCards
                                    img = {movie.poster_path ? `${IMG_BASE_URL}w400${movie.poster_path}` : null}
                                    movieId = {movie.id}
                                    movieName = {movie.original_title}
                                    overView = {movie.overview}
                                    vote_average = {movie.vote_average}
                                    key={index}
                                />
                        ))}

                    {/*</Grid>*/}
                    </ScrollMenu>

                </div>

                <div style = {{display :'flex', justifyContent : 'center'}}>
                    <button onClick={loadMoreItems}>Load More</button>
                </div>
            </div>
        );

}

function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}
export default MoviePart;