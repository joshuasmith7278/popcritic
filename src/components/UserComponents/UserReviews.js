import ReviewComponent from "./ReviewComponent"

const UserReviews = ({reviews}) => {
    console.log("User's Review History Component Renders")

    console.log(reviews)
    let results;

    const noRevText = {
        color:"white"
    }
    if(reviews == []){
        results = <article><h3 style={noRevText}>No Reviews Yet!</h3></article>
    }else{
        results = reviews.map(review=> <ReviewComponent review={review}/>)
    }


    return(

        <div>
            <main>{results}</main>
        </div>
    )
    



}

export default UserReviews