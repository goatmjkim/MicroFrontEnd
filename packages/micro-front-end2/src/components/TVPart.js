import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMG_BASE_URL} from "../Config";
import GridCards from "./commons/GridCards";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function TVPart() {

    const [TVs, setTVs] = useState([]);
    const [MainTVImage, setMainTVImage] = useState(null);
    const [CurrentPage, setCurrentPage]= useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=ko&page=1`;
        fetchTVs(endpoint)
    }, []);

    const fetchTVs =(endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setTVs([...TVs, ...response.results])
                setCurrentPage(response.page)
                setMainTVImage(response.results[0])
            })
    }

    const loadMoreItems =() => {
        const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage +1}`;
        fetchTVs(endpoint)
    }

        return (
            <div style = {{width :'100%', margin : '0'}}>

                <div style = {{width :'95%', margin : '1rem auto'}}>
                    <h2>Popular TV Shows</h2>
                    <hr/>
                    <ScrollMenu
                        onWheel={onWheel}
                    >
                        {TVs && TVs.map((TV, index) => (
                        <GridCards
                            img = {TV.poster_path ? `${IMG_BASE_URL}w400${TV.poster_path}` : null}
                            TVId = {TV.id}
                            TVName = {TV.original_name}
                            overView = {TV.overview}
                            vote_average = {TV.vote_average}
                            key={index}
                                />
                        ))}
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

export default TVPart;