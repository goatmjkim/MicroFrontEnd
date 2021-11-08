import React from 'react';
import { Link } from 'react-router-dom';

function GridCards(props) {

    const setVoteClass = (vote) => {
        if(vote >= 7) {
            return "green"
        }
        else if (vote >= 5){
            return "orange"
        }
        else {
            return "red"
        }
    }

    return (
        <div className="movie">
            <Link to ={`/movie/${props.movieId}`}>
                <img src={props.img} />
            </Link>
            <div className="movie-info">
                <h3>{props.movieName}</h3>
                <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
            </div>
            <div className="overview">
                <h3>Overview</h3>
                <p>{props.overView}</p>
            </div>
        </div>
    )
}

export default GridCards;