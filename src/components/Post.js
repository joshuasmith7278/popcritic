import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();
    useEffect(
        ()=>{
            if(shouldRedirect === true){
                navigate("/movie");
                setShouldRedirect(false)
            }
        }, [shouldRedirect]
    )

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

    const posterSrc = post.POSTER;
    const d = new Date(post.RELEASE_DATE);
    console.log(d.getFullYear())

    return(
        <div style={searchResCont} onClick={()=>setShouldRedirect(true)}>
            <img style={imgStyle} src={posterSrc}/>
            <h2 style={titleStyle}>{post.TITLE}</h2>
            <p style={pStyle}>{'('}{d.getFullYear()}{')'}</p>
            
        </div>
    )
    
}
export default Post