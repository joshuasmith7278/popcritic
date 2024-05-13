import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import printStars from '../PrintStars';
import { getMovieByID } from '../ExpressAPI';




const ReviewList = (props) => {

    const [movie, setMovie] = useState([]);
    

    useEffect(()=>{
        
        if(props.movieID != 1){
            console.log("Movie ID")
            console.log(props.movieID)
            getMovieByID(props.movieID).then(json=>setMovie(json))


        }
        
    }, [props.movieID])



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
    

    
        var PosterLink = "https://image.tmdb.org/t/p/w500/" + movie.poster_path

        const [shouldRedirect, setShouldRedirect] = useState(false);
        const navigate = useNavigate();
        useEffect( () => {
            if(shouldRedirect === true) navigate("/movie", {state : {movieID: props.movieID, title: movie.original_title, poster:PosterLink}});
        }, [shouldRedirect] );


        
        

        return(

            
            <div style={movieDisplay} onClick={() => setShouldRedirect(true)}>
                    <img style={moviePoster} src={PosterLink} />
                    <div style={movieTextContainer}>
                        <p style={movieTitle}>{movie.original_title}</p>
                        <p style={movieDesc}>{props.desc}</p>
                        {printStars(props.review)}
                    </div>
            </div>

        );
}


export default ReviewList;