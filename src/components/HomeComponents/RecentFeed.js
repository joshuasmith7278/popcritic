import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import printStars from '../PrintStars';
import { height } from '@mui/system';



const RecentList = (props) => {

    const [movie, setMovie] = useState(
        {
            "src":props.src,
            "title":props.title,
            "date":props.date,
           
        }
        );

    const movieDisplay = {
        width:"189px",
        height:"370px",
        backgroundColor: "#202020",
        margin:"10px"
    }

    const moviePoster = {
        width:"189px",
        height:"280px"

    }

    const movieTitle = {
        color:"white",
        fontSize:"13px",
        fontWeight:"bold"

    }

    const movieDesc = {
        color:"grey",
        fontSize:"11px",
        
    } 

   

    const movieTextContainer = {
        padding:"7px",
        height:"85px",
        textAlign:"center",
        justifyContent:"center"
    }

    


        const [shouldRedirect, setShouldRedirect] = useState(false);
        const navigate = useNavigate();
        /*
        useEffect( () => {
            if(shouldRedirect === true) navigate("/movie", {state : {movieID: movie.movie_id, title: movie.title, poster:movie.src}});
        }, [shouldRedirect] );
        */

        var PosterLink = "https://image.tmdb.org/t/p/w500/" + movie.src
        return(

            
            <div style={movieDisplay} onClick={() => setShouldRedirect(true)}>
                    <img id="img"style={moviePoster} src={PosterLink} />
                    <div style={movieTextContainer}>
                        <p style={movieTitle}>{movie.title}</p>
                        <p style={movieDesc}>{movie.date}</p>
                    </div>
            </div>

        );
}


export default RecentList;