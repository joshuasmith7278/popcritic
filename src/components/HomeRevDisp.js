import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import {Routes, Route, Link, useHistory, useNavigate} from 'react-router-dom';
import PageRoutes from '../routes';
import printStars from './printStars';



const ReviewList = (props) => {

    const [movie, setMovie] = useState(
        {
            "src":props.src,
            "title":props.title,
            "desc":props.desc,
            "review":props.review,
            "movie_id":props.movieID
        }
        );

    const movieDisplay = {
        width:"550px",
        backgroundColor: "#202020",
        margin:"15px"
    }

    const moviePoster = {
        width:"550px"
    }

    const movieTitle = {
        color:"white",
        fontSize:"30px",
        fontWeight:"bold"

    }

    const movieDesc = {
        color:"white",
        fontSize:"18px"

    } 

   

    const movieTextContainer = {
        padding:"25px"
    }

    


        const [shouldRedirect, setShouldRedirect] = useState(false);
        const navigate = useNavigate();
        useEffect( () => {
            if(shouldRedirect === true) navigate("/movie", {state : {movieID: movie.movie_id, title: movie.title, poster:movie.src}});
        }, [shouldRedirect] );
    

        return(

            
            <div style={movieDisplay} onClick={() => setShouldRedirect(true)}>

                
                    <img style={moviePoster} src={movie.src} />

                    <div style={movieTextContainer}>
                        <p style={movieTitle}>{movie.title}</p>
                        <p style={movieDesc}>{movie.desc}</p>
                        {printStars(movie.review)}

                    </div>
                
                
           
                
                
                

                
            </div>

        );
}


export default ReviewList;