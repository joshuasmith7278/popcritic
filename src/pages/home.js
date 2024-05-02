import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../components/HomeRevDisp';
import { getHomeDispRev, getRecentMovies, getMoviePoster } from '../components/axios';



const homeContainer = {
    display:'flex',
    padding:"35px",
    justifyContent:"center",
    flexWrap:"wrap"
}

const getPoster = async(movies) =>{
    let posters = []
    if(movies.results != null){
        for(let i = 0; i < 10; i++){
            console.log(movies.results[i].id)
            posters.push(getMoviePoster(movies.results[i].id).then(json => json))
        }
        
    }

    return posters


}

const Home = () => {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])
    const [poster, setPoster] = useState([])

    /*

    [ 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
    [poster 1 , poster 2, 
    */
   
   
    
    //GET REVIEW DATA
    useEffect(()=>{
       getHomeDispRev().then(
        json=>{
            setReviews(json)
        }
       )
       getRecentMovies().then(json=>{setMovies(json)})
       
    }, [])



   
    useEffect(()=>{
        let posters = []
        if(movies.results != null){
            for(let i = 0; i < 10; i++){
                console.log(movies.results[i].id)
                posters.push(movies.results[i].poster_path)
            }
            
        }

        setPoster(posters)
           

        
    }, [movies])


 

   

    console.log("Home Page Renders");

    let recentMovies = []
    let recentReleaseDates = []

    if(movies.results != null){
        for(let i = 0; i < 10; i++){
            recentMovies.push(movies.results[i].id)
            recentReleaseDates.push(movies.results[i].release_date)

        }
        
    }

    console.log(recentMovies)
    console.log(poster)


    /*
    https://image.tmdb.org/t/p/w500/[IMG PATH]

    */


   

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
