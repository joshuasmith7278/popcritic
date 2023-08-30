import React, {useState} from 'react';
import ReactDOM from 'react';
import ReviewList from '../components/reviewList';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DisplaySearchBar from '../components/header';
import { height, width } from '@mui/system';





const Movie = () => {

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
        marginTop:"15px"
        
        
       
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





    return(
        <div>

            <DisplaySearchBar />



                
           
            
                
                <div style={reviewPage}>
                    <h1 style={reviewTitle}>Post Review</h1>
                    <StarBorderIcon style={starStyle}/>
                    <StarBorderIcon style={starStyle}/>
                    <StarBorderIcon style={starStyle}/>
                    <StarBorderIcon style={starStyle}/>
                    <StarBorderIcon style={starStyle}/>
                    <div style={reviewBox}>
                        <textarea name="review" style={textBox} rows="10" cols={"20"}/>
                        <button style={reviewPostButton}>Post Review</button>


                    </div>
                    
                    
                </div>
           
                
                    


          
               



        </div>

    );
}

export default Movie;