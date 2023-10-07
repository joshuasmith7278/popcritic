import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {Routes, Route, Link, useHistory, useNavigate} from 'react-router-dom';
import PageRoutes from '../routes';



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

    const starStyle = {
        color:"#DAA520"
    }

    const movieTextContainer = {
        padding:"25px"
    }

    const printStars = (rating) => {
       if(rating === "5"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
            </div>
        )
       }
       else if (rating === "4.5"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarHalfIcon style={starStyle}/>            
            </div>
        )
       }
       else if (rating === "4"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>            
            </div>
        )
       }
       else if (rating === "3.5"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarHalfIcon style={starStyle}/>  
                <StarBorderIcon style={starStyle}/>        
            </div>
        )
       }
       else if (rating === "3"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
            </div>
        )
       }
       else if (rating === "2.5"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarHalfIcon style={starStyle}/>  
                <StarBorderIcon style={starStyle}/>   
                <StarBorderIcon style={starStyle}/>        
            </div>
        )
       }
       else if (rating === "2"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
            </div>
        )
       }
       else if (rating ==="1.5"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarHalfIcon style={starStyle}/> 
                <StarBorderIcon style={starStyle}/>   
                <StarBorderIcon style={starStyle}/>   
                <StarBorderIcon style={starStyle}/>        
            </div>
        )
       }
       else if (rating === "1"){
        return(
            <div>
                <StarIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
            </div>
        )
       }
       else if (rating === "0.5"){
        return(
            <div>
                <StarHalfIcon style={starStyle}/> 
                <StarBorderIcon style={starStyle}/>  
                <StarBorderIcon style={starStyle}/>   
                <StarBorderIcon style={starStyle}/>   
                <StarBorderIcon style={starStyle}/>        
            </div>
        )
       }
       else {
        return (
            <div>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
                <StarBorderIcon style={starStyle}/>
            </div>

        )
       }
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