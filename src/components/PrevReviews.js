import RevHistory from "../components/RevHistory"

const PrevReviews = ({reviews}) => {
    console.log("Previous Posts Component Renders")

    console.log(reviews)
    let results;

    const noRevText = {
        color:"white"
    }
    if(reviews == []){
        results = <article><h3 style={noRevText}>No Reviews Yet!</h3></article>
    }else{
        results = reviews.map(review=> <RevHistory review={review} />)
    }


    return(

        <div>
            <main>{results}</main>
        </div>
    )
    



}

export default PrevReviews