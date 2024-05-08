import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
            width:"189px",
            height:"420px",
            backgroundColor: "#202020",
            margin:"10px"
        }
    
        const moviePoster = {
            width:"189px",
            height:"280px"
    
        }
    
        const movieTitle = {
            color:"white",
            fontSize:"12px",
            fontWeight:"bold"
    
        }
    
        const movieDesc = {
            color:"white",
            fontSize:"10px",
            marginBottom:"25px"
            
        } 
    
       
    
        const movieTextContainer = {
            padding:"7px",
            height:"85px",
            textAlign:"center",
            justifyContent:"center"
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