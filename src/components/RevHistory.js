import printStars from "./printStars"

const RevHistory = ({review}) =>{

    console.log("Review History Component Renders")

    console.log(String(review.RATING))

    const historyDisplay = {
        display:"flex",
        flexDirection:"row",
        padding:"8px",
        border:"2px solid gold",
        alignItems:"center"

    }

    const reviewText = {
        color:"white",
        paddingLeft:"10px"
    }

    const userText = {
        color:"gold",
        paddingLeft:"10px"
    }

    return(
        <div style={historyDisplay}>
            {printStars(String(review.RATING))}
            <p style={reviewText}>{review.REVIEW_TEXT}</p>
            <p style={userText}>User: {review.USERS_USER_ID}</p>
            

        </div>

    )

}

export default RevHistory