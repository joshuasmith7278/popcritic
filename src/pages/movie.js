import React, {useState, useEffect} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PrevReviews from '../components/MovieComponents/MovieReviews';
import { postReview, getRevFromMID, getLikesUIDandMID } from '../components/ExpressAPI';
import '../css/MoviePage.css';


const Movie = () => {
    //Create state variables for the movie information
    const [movie, setMovie] = useState(
        {
            "id":null,
            "title":null,
            "poster":null
        }
    );
    const [reviews, setReviews] = useState([]);

    const [likedReview, setLikedReviews] = useState([])

    const location = useLocation();

    console.log("Movie Page displaying Movie ID : " + movie.id)

    useEffect(()=>{
        if(location.state != null){
            setMovie({id:location.state.movieID, title:location.state.title, poster:location.state.poster})
        }
       

    }, [location.state])

    
    //Get reviews for the movie on the page once the movie info renders
    useEffect(()=>{
        if(movie.id != null){
            getRevFromMID(movie.id).then(json=>{setReviews(json)})

            getLikesUIDandMID(1, movie.id).then(json=>{setLikedReviews(json)})



        }
      

    }, [movie.id])


    const getReviews = () =>{
        if(movie.id != null){
            getRevFromMID(movie.id).then(json=>{setReviews(json)})

        }
    }

   
    const validateForm = (event) =>{
        event.preventDefault();
        let reviewRating = document.forms["reviewForm"]["half-rating"].value;
        let reviewText = document.getElementById('reviewText').value
        console.log("---- Submitting Review -------")
        postReview(movie.id, reviewText, reviewRating, 1).then(()=> getReviews())
        document.forms["reviewForm"]["half-rating"].defaultValue = 0
        document.getElementById('reviewText').value = ""
    }
    
   

    const getAvgRating = (ratings) =>{
        let sum = 0
        for(let i = 0; i < ratings.length; i++){
            sum += ratings[i].RATING
        }
        return sum/ratings.length
    }


    const avgRating = getAvgRating(reviews)
    

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
                            <textarea id='reviewText' name="review" className='textBox' rows="10" cols={"20"}/>
                            <button type="submit" className='reviewPostButton'>Post Review</button>
                        </div>
                    </form>

                    <div>
                        
                        <h4 className='reviewTitle'>Total Reviews: {reviews.length}</h4>
                        <h4 className='reviewTitle'>Average Rating: {avgRating}</h4>

                    </div>

                    
                    
                    

                    
                    
                    
                </div>

                <div className='prevReviewContainer'>
                    <h1 className='reviewTitle'>Previous Reviews</h1>
                    <PrevReviews reviews={reviews} movieID={movie.id} likedPost={likedReview}/>

                </div>
           
        </div>

    );
}

export default Movie;