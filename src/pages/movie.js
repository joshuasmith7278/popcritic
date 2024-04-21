import React, {useState, useEffect} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating } from '@mui/material';
import { getRevFromMID } from '../components/axios';
import { useLocation } from 'react-router-dom';
import PrevReviews from '../components/PrevReviews';
import '../css/MoviePage.css';


const Movie = () => {
    console.log("Movie Page renders")
    
    //Create state variables for the movie information
    const [movie, setMovie] = useState(
        {
            "id":null,
            "title":null,
            "poster":null
        }
    );

    const [revs, setRevs] = useState([]);
    const location = useLocation();


    //Set the movie state information once the location of the page renders
    //LOOK INTO THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(()=>{
        if(location.state != null){
            setMovie({id:location.state.movieID, title:location.state.title, poster:location.state.poster})
        }
       

    }, [location.state])

    
    //Get reviews for the movie on the page once the movie info renders
    useEffect(()=>{
        if(movie.id != null){
            getRevFromMID(movie.id).then(json=>{
                setRevs(json)
    
            })

        }
      

    }, [movie.id])

   
    const validateForm = (event) =>{
        event.preventDefault();
        let reviewRating = document.forms["reviewForm"]["half-rating"].value;
        console.log("SUBMITTING REVIEW")
    }
    
    console.log("Movie Page displaying Movie ID : " + movie.id)

    return(
        <div className='revPage'>

                <div className='movieDiv'>
                    <h1 className='reviewTitle'>{movie.title}</h1>
                    <img className='mvImg' src={movie.poster}/>
                </div>
                
                <div id='reviewForm'>
                    <h1 className='reviewTitle'>Post Review</h1>
                    <form name="reviewForm" onSubmit={validateForm}>
                        <Rating name='half-rating' defaultValue={0} precision={0.5} emptyIcon={<StarBorderIcon className='starStyle'/>}/>
                        <div className='reviewBox'>
                            <textarea name="review" className='textBox' rows="10" cols={"20"}/>
                            <button type="submit" className='reviewPostButton'>Post Review</button>
                        </div>
                    </form>

                    <h1 className='reviewTitle'>Previous Reviews</h1>
                    <PrevReviews reviews={revs}/>

                    
                    
                    
                </div>
           
        </div>

    );
}

export default Movie;