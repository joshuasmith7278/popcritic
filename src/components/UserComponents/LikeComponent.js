import printStars from "../PrintStars"
import { getLikesByReview, postLike, getUserByID, getRevByRID, getMovieByID } from "../ExpressAPI"
import { useEffect } from "react"
import { useState } from "react"

const LikeComponent = ({like}) =>{

    console.log("User's Individual Likes Component Renders")
    const [likes, setLikes] = useState();
    const [review, setReview] = useState();
    const [movie, setMovie] = useState();

    console.log(like.MOVIE_ID)



    
    useEffect(()=>{
        getLikesByReview(like.REVIEW_ID).then(json=>setLikes(json))
        getRevByRID(like.REVIEW_ID).then(json=>setReview(json))
        getMovieByID(like.MOVIE_ID).then(json => setMovie(json))

    }, [like])




    const historyDisplay = {
        display:"flex",
        flexDirection:"row",
        padding:"8px",
        alignItems:"center",
        backgroundColor:'#202020',
        borderRadius:"8px",
        marginBottom:"10px",
        height:"100px",
        width:"90%"

    }

    const reviewText = {
        color:"white",
        paddingLeft:"30px",
        width:"40%",
        fontSize:"12px"
    }

    const userText = {
        color:"gold",
        paddingLeft:"10px",
        width:"10%"
    }

    const LikeContainer = {
        marginLeft:"0px",
        marginRight:"10px",
        marginTop:"5px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"10%"
        
    }

    const LikeStyle ={
        height:"36px",
        backgroundColor:"grey",
        borderRadius:"11px"
        
    }

    const LikedStyle ={
        height:"36px",
        backgroundColor:"pink",
        borderRadius:"11px"
        
    }

    const LikeText = {
        color:"grey",
        fontSize:"16px",
        margin:"4px",
        marginTop:"8px"
    }

    const LikeMovie ={
        height:"100px",
        backgroundColor:"grey",
        borderRadius:"11px"
        
    }

    let likeCount = likes ? likes.length : 0
    let rating = review ? review[0].RATING : 0
    let text = review ? review[0].REVIEW_TEXT : 0

   

    console.log(movie)

    
    if(movie != null){
        console.log(movie)

    }
   
    let PosterLink = movie ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path : ""

    
    
    return(
        <div style={historyDisplay}>
            {printStars(rating)}
            <p style={reviewText}>{text}</p>
            <div style={LikeContainer}>
                <img src="LikeSymbol.png" style={LikeStyle} id="likebutton"/>
                <p style={LikeText}>{likeCount}</p>
            </div>
            <img src={PosterLink} style={LikeMovie} id="reviewposter"/>
        </div>

    )
    
    

}

export default LikeComponent