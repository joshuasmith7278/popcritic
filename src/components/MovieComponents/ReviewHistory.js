import printStars from "../PrintStars"
import { getLikesByReview, postLike, getUserByID } from "../ExpressAPI"
import { useEffect } from "react"
import { useState } from "react"

const RevHistory = ({review, movieID, likedPost}) =>{

    console.log("Individual Movie Reviews Component Renders")
    const [likes, setLikes] = useState();
    const [user, setUser] = useState();
    
  

    useEffect(()=>{
        getLikesByReview(review.REVIEW_ID).then(json=>setLikes(json))
        getUserByID(review.USER_ID).then(json=>setUser(json))

    }, [review])


    const getLikes = () =>{
        getLikesByReview(review.REVIEW_ID).then(json=>setLikes(json))
    }


    const handleLike = (e) =>{
        console.log("LIKED REVIEW")
        postLike(review.REVIEW_ID, 1, movieID).then(()=> getLikes())
        console.log(likes)
        e.target.style.backgroundColor = "pink"
        
        

    }

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
        width:"40%"
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

    let likeCount = likes ? likes.length : 0
    let username = user ? user[0].NAME : "Unavailable"

    console.log(review.REVIEW_ID)
    for(let i = 0; i < likedPost.length; i++){
        console.log(likedPost[i].REVIEW_ID)

        if(review.REVIEW_ID === likedPost[i].REVIEW_ID){
            LikeStyle.backgroundColor = "pink"
        }
    }


    

    return(
        <div style={historyDisplay}>
            {printStars(review.RATING)}
            <p style={reviewText}>{review.REVIEW_TEXT}</p>
            <p style={userText}>{username}</p>
            <div style={LikeContainer}>
                <img src="LikeSymbol.png" style={LikeStyle} id="likebutton" onClick={handleLike}/>
                <p style={LikeText}>{likeCount}</p>
            </div>
        </div>

    )

}

export default RevHistory