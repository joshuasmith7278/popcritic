import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import FollowingFeed from '../components/HomeComponents/FollowingFeed';
import RecentsFeed from "../components/HomeComponents/RecentFeed"
import { getHomeDispRev, getRecentMovies} from '../components/ExpressAPI';



const FeedStyle = {
    display:'flex',
    justifyContent:"center",
    flexWrap:"wrap"
}

const HomeTextStyle = {
    color:"#DAA520",
    margin:"15px 0px 10px 55px",
    
}



const Home = () => {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])
    const [poster, setPoster] = useState([])

    
    useEffect(()=>{

        //Get Following Feed
       getHomeDispRev().then(json=>{setReviews(json)}).catch(error=>setReviews(null))

       //Get Recent Movie Feed
       getRecentMovies().then(json=>{setMovies(json)})
       
    }, [])


    console.log("Home Page Renders");
    console.log(reviews);

    /*
    https://image.tmdb.org/t/p/w500/[IMG PATH]

    
    */

    const FollowingText ={
        color:"gold"
    }

    //FORMAT REVIEW DATA
    const FollowingContent = reviews != "No results" ? reviews?.map(
        review=>
        <FollowingFeed  desc={review.REVIEW_TEXT} review={review.RATING} movieID={review.MOVIE_ID} />
    ) : <p style={FollowingText}>Unavailable</p>
    

    const RecentContent = movies.results?.slice(0,9).map(
        recent =>
        <RecentsFeed src={recent.poster_path} date={recent.release_date} title={recent.original_title} id={recent.id} />
        
    )
    


    return(

        <div>
            <h2 style={HomeTextStyle}>- New Releases -</h2>
             <div style={FeedStyle}>
                {RecentContent}
            </div>
            <h2 style={HomeTextStyle}>- My Following -</h2>
            <div id='reviewDisp' style={FeedStyle}>
                {FollowingContent}
            </div>
           
        </div>
        

    );


}

export default Home;
