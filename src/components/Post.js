const Post = ({post}) => {

    const titleStyle = {
        color: 'white'
    }

    const pStyle = {
        color:"white"
    }

    const searchResCont = {
        backgroundColor: "#202020",
        marginBottom:"10px",
        padding:"10px",
        paddingLeft:"20px"
    }

    return(
        <article style={searchResCont}>
            <h2 style={titleStyle}>{post.TITLE}</h2>
            <p style={pStyle}>{post.PLOT}</p>
            
        </article>
    )
    
}
export default Post