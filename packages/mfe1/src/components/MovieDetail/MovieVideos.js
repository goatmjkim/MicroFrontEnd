
import React, {useEffect, useState} from 'react'
import {API_KEY, API_URL} from "../../Config";

export default function MovieVideos(props) {
    const [Video, setVideo] = useState(null);
    const [Video1, setVideo1] = useState(null);

    useEffect(() => {
        let videosUrl = `${API_URL}movie/${props.movieId}/videos?api_key=${API_KEY}&language=ko`

        fetch(videosUrl)
            .then((response) => response.json())
                .then(response => {
                     console.log(response)
                     console.log(response.results[1])
                     setVideo(`https://www.youtube.com/embed/${response.results[0].key}`)
                     setVideo1(`https://www.youtube.com/embed/${response.results[1].key}`)
                 })
    }, '');

    return (
        <div>
            <div>
             <iframe id="ytplayer" type="text/html" width="560" height="315"
             src = {Video}
             frameborder="0">
            </iframe>
            </div> 
            {/* <div style={{width : '50%'}}>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
             src = {Video1}
             frameborder="0">
            </iframe>
            </div> */}
        </div>
    )
}