import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../components/MovieRating';
import DisplaySearchBar from '../components/header';




const homeContainer = {
    display:'flex',
    padding:"35px",
    justifyContent:"center",
    flexWrap:"wrap"
}




console.log("Home Page Renders");
const Home = () => {


    return(



        <div>
            <DisplaySearchBar movies={null} setSearchResults={null}/>

            

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



                <ReviewList src="./shawshank.jpg" title="Shawshank Redepmtion" desc="The Shawshank Redemption is a drama film directed by Frank Darabont, released in 1994. The film is based on 
                a novella by Stephen King titled Rita Hayworth and Shawshank Redemption. It is widely regarded as one of the greatest movies of all time and has gained a loyal following over 
                the years." 
                review="0.5" />



            </div>





        </div>
        

    );


}

export default Home;