import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Post = (props) => {
    console.log("Post Component Renders")

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();
    
    /*
    useEffect(
        ()=>{
            if(shouldRedirect === true){
                navigate("/movie", {state : {movieID: post.MOVIE_ID, title: post.TITLE, poster: post.POSTER}});
                setShouldRedirect(false)
            }
        }, [shouldRedirect]
    )
    */

    
    const titleStyle = {
        color: 'white',
        padding:"40px"
    }

    const pStyle = {
        color:"white"
    }

    const imgStyle = {
        maxWidth:"10%",
        height:"auto"
    }

    const searchResCont = {
        backgroundColor: "#202020",
        marginBottom:"10px",
        padding:"10px",
        paddingLeft:"20px",
        display:"flex",
        alignItems:"center"
    }

    const PosterLink = "https://image.tmdb.org/t/p/w500/" + props.poster


    

    
    

    return(
        <div style={searchResCont} onClick={()=>setShouldRedirect(true)}>
            <img style={imgStyle} src={PosterLink} alt="" onerror="this.onerror=null; this.src='/error-noimage.png'" />
            <h2 style={titleStyle}>{props.title}</h2>
            <p style={pStyle}>{'('}{props.date}{')'}</p>
            
        </div>
    )
    
}
export default Post