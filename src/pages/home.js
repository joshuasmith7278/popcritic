import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../components/HomeRevDisp';
import { getMovies, getReviews, getMovieByID, getHomeDispRev } from '../components/axios';
import DisplaySearchBar from '../components/header';

let reviewText = []
let reviewRat = []
let reviewPoster = []
let reviewTitle = []
let reviewMID = []


const homeContainer = {
    display:'flex',
    padding:"35px",
    justifyContent:"center",
    flexWrap:"wrap"
}


async function getMovieFromRev(review){
    console.log(review)
    for(let i = 0; i < review.length; i++){
        let data = await getMovieByID(review[i])
        reviewTitle.push(data[0].TITLE)
        reviewPoster.push(data[0].POSTER)
        
    }

   
}


const Home = () => {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])

    
    //GET REVIEW DATA
    useEffect(()=>{
       getHomeDispRev().then(
        json=>{
            setReviews(json)
        }
       )
    }, [])
   

    console.log("Home Page Renders");
   

    //FORMAT REVIEW DATA
    const content = reviews?.map(
        review=>
        <ReviewList src={review.POSTER} title={review.TITLE} desc={review.REVIEW_TEXT} review={review.RATING.toString()} movieID={review.MOVIE_MOVIE_ID} />
    )

    

    return(



        <div>
            <div id='reviewDisp' style={homeContainer}>
                {content}
            </div>
        </div>
        

    );


}

export default Home;
