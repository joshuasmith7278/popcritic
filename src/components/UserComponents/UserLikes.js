import LikeComponent from "./LikeComponent";

const UserLikes = ({likes}) => {
    console.log("User's Likes History Component Renders")

    console.log(likes)
    let results;

    const noRevText = {
        color:"white"
    }
    if(likes == []){
        results = <article><h3 style={noRevText}>No Likes Yet!</h3></article>
    }else{
        results = likes.map(like=> <LikeComponent like={like}/>)
    }


    return(

        <div>
            <main>{results}</main>
        </div>
    )
    



}

export default UserLikes