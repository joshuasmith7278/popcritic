import React, {useState, useEffect} from 'react';
import ReactDOM from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Rating } from '@mui/material';
import { getMovies } from '../components/axios';
import DisplaySearchBar from '../components/header';
import ReviewList from '../components/HomeRevDisp';
import { getRevFromMID } from '../components/axios';
import { useLocation } from 'react-router-dom';
import PrevReviews from '../components/PrevReviews';


const Movie = () => {
    console.log("Movie Page renders")
    const [movie, setMovie] = useState(
        {
            "id":null,
            "title":null,
            "poster":null
        }
    );

    const [revs, setRevs] = useState([]);
    const location = useLocation();



    useEffect(()=>{
        if(location.state != null){
            setMovie({id:location.state.movieID, title:location.state.title, poster:location.state.poster})
        }
       

    }, [location.state])

    useEffect(()=>{
        console.log("Trying to get reviews for " + movie.id)
        if(movie.id != null){
            getRevFromMID(movie.id).then(json=>{
                setRevs(json)
    
            })

        }
      

    }, [movie.id])

    console.log(movie.poster)



    const reviewPage = {
        margin:"65px"
    }

    const reviewTitle = {
        color:"white"
    }

    const starStyle = {
        color:"#DAA520"
    }

    const reviewBox = {
        display:'flex',
        flexDirection:'column',
        width:"550px",
        marginTop:"10px"
    
    }

    const textBox = {
        borderRadius:"15px" ,
        backgroundColor:'#202020',
        border:"black",
        color:"white",
        fontSize:"18px",
        padding:"10px"
      
    }


    const reviewPostButton = {
        marginTop:"15px",
        width:"100px",
        height:"30px",
        backgroundColor:"#121212",
        color:"white",
        borderRadius:"10px",
        border:"3px solid white"
    }

    const revPage = {
        display:"flex",
        marginTop:"30px",
        marginLeft:"45px"
    }

    const mvImg = {
        maxWidth:"80%",
        maxHeight:"70%"
    }
    
    return(
        <div style={revPage}>

                <div>
                    <h1 style={reviewTitle}>{movie.title}</h1>
                    <img style={mvImg} src={movie.poster}/>
                </div>
                
                <div id='reviewForm'>
                    <h1 style={reviewTitle}>Post Review</h1>
                    <form>
                        <Rating name='half-rating' defaultValue={0} precision={0.5} emptyIcon={<StarBorderIcon style={starStyle}/>}/>
                        <div style={reviewBox}>
                            <textarea name="review" style={textBox} rows="10" cols={"20"}/>
                            <button style={reviewPostButton}>Post Review</button>
                        </div>
                    </form>

                    <h1 style={reviewTitle}>Previous Reviews</h1>
                    <PrevReviews reviews={revs}/>

                    
                    
                    
                </div>
           
        </div>

    );
}

export default Movie;