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

    
    //let data = await getMovieByID(review.MOVIE_MOVIE_ID)

    //console.log(data)

}


const Home = () => {
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])

    
    
    useEffect(()=>{
        /*
        getReviews().then(json=>{
            setReviews(json);
            //console.log(json)
            
        })
        */
       getHomeDispRev().then(
        json=>{
            setReviews(json)
        }
       )


    }, [])



   
   

    
    //console.log(movies)
    


    
   
    /*
    
    */

    

   

    console.log("Home Page Renders");

    //reviews?.map(review => getMovies(review.MOVIE_MOVIE_ID).then(json=>{setMovies(json)}))

   

   //const results = movies?.map((movie, key) => <ReviewList src={movie[0].POSTER} title={movie[0].TITLE} review={reviews[key]["RATING"].toString()} desc={reviews[key]["REVIEW_TEXT"]}/>)
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



/*


            <div style={homeContainer}>

                
               
                <ReviewList src="../../inception.jpg" title="Inception" desc="Inception is a science fiction heist thriller film directed by Christopher Nolan, 
                released in 2010. The movie is known for its complex narrative structure and exploration of dreams and reality. The story revolves around Dom Cobb, 
                a skilled thief who specializes in the dangerous art of extraction, which involves entering a person's dreams to steal their secrets from their subconscious mind." 
                review="5" />


                <ReviewList src="./interstellar.jpg" title="Interstellar" desc="Interstellar is a science fiction film also directed by Christopher Nolan, released in 2014. 
                The movie is known for its ambitious storytelling, stunning visuals, and exploration of space travel, time dilation, and human survival in the face of a global food crisis."
                review="4.5" />


                <ReviewList src="./pulpfiction.jpg" title="Pulp Fiction" desc="Pulp Fiction is a cult classic crime film directed by Quentin Tarantino, released in 1994. The film is renowned 
                for its non-linear narrative, eclectic soundtrack, and its mix of dark humor, violence, and pop culture references. The story is divided into several interconnected vignettes 
                that follow the lives of various characters involved in the criminal underworld of Los Angeles."
                review="2.5" />



                <ReviewList src="./theshawshankredepmtion.jpg" title="Shawshank Redepmtion" desc="The Shawshank Redemption is a drama film directed by Frank Darabont, released in 1994. The film is based on 
                a novella by Stephen King titled Rita Hayworth and Shawshank Redemption. It is widely regarded as one of the greatest movies of all time and has gained a loyal following over 
                the years." 
                review="0.5" />



            </div>



*/