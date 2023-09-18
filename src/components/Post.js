const Post = ({post}) => {
    return(
        <article>
            <h2>{post.TITLE}</h2>
            <p>{post.PLOT}</p>
            
        </article>
    )
    
}
export default Post