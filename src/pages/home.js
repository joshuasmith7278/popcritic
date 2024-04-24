import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../components/HomeRevDisp';
import { getHomeDispRev, getRecentMovies } from '../components/axios';



const homeContainer = {
    display:'flex',
    padding:"35px",
    justifyContent:"center",
    flexWrap:"wrap"
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

      
       getRecentMovies().then(json=>{setMovies(json)})
       
    }, [])


   

    console.log("Home Page Renders");

    let recentMovies = []
    let recentReleaseDates = []

    if(movies.results != null){
        for(let i = 0; i < 10; i++){
            recentMovies += movies.results[i].title
            recentReleaseDates += movies.results[i].release_date

        }
        
    }

    console.log(recentMovies)
   

    //FORMAT REVIEW DATA
    const content = reviews?.map(
        review=>
        <ReviewList src={review.POSTER} title={review.TITLE} desc={review.REVIEW_TEXT} review={review.RATING.toString()} movieID={review.MOVIE_MOVIE_ID} />
    )

    

    return(



        <div>
             <div>
                <h4>New Releases</h4>
                {recentMovies}
                {recentReleaseDates}
                
            </div>
            <div id='reviewDisp' style={homeContainer}>
                {content}
            </div>
           
        </div>
        

    );


}

export default Home;
