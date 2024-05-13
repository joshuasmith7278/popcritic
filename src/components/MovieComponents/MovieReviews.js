import RevHistory from "./ReviewHistory"

const PrevReviews = ({reviews, movieID, likedPost}) => {
    console.log("Movie Review History Component Renders")

    console.log(likedPost)
    let results;

    const noRevText = {
        color:"white"
    }
    if(reviews == []){
        results = <article><h3 style={noRevText}>No Reviews Yet!</h3></article>
    }else{
        results = reviews.map(review=> <RevHistory review={review} movieID={movieID} likedPost={likedPost}/>)
    }


    return(

        <div>
            <main>{results}</main>
        </div>
    )
    



}

export default PrevReviews