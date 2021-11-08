import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMG_BASE_URL} from "../../Config";
import MainImage from '../commons/MainImage'
import TVInfo from "./TVInfo";
import GridCards from "../commons/GridCards";
import { useParams } from 'react-router-dom';


function TVDetail(props){
    const { TVId } = useParams();

    const [TvShow, setTvShow] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ActorToggle, setActorToggle] = useState(false);


    useEffect(() => {
        let endpointCrew = `${API_URL}tv/${TVId}/credits?api_key=${API_KEY}&language=ko`;
        let endpointInfo = `${API_URL}tv/${TVId}?api_key=${API_KEY}&language=ko`

        fetch(endpointInfo)
            .then((response) => response.json())
            .then(response => {
                setTvShow(response)
            })

        fetch(endpointCrew)
            .then((response) => response.json())
            .then(response => {
                setCasts(response.cast)
            })
    }, []);

    const toggleActorView = ()=> {
        setActorToggle(!ActorToggle);
    }


    return (
        <div style={{width : '100%', height: '100%', margin : 'auto auto auto 3rem'}}>
            {/* Header */}
            {TvShow?.backdrop_path && <MainImage image = {`${IMG_BASE_URL}w1280${TvShow.backdrop_path}`}
                    title = {TvShow.original_title}
                    description = {TvShow.overview}
            />}

            {/* Body */}
            <div style={{width : '100%', margin : '1rem auto'}}>
                <TVInfo tv = {TvShow}/>
                <br/>
                <div style={{display : 'flex', justifyContent : 'center', margin : '2rem'}}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>


                {ActorToggle && <Row gutter={[16, 16]}>
                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                img={cast.profile_path ? `${IMG_BASE_URL}w500${cast.profile_path}` : null}
                                characterName={cast.name}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                }

            </div>
        </div>
    );

}

export default TVDetail;