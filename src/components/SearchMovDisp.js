import Post from "./Post"
import React,{useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import { redirect, useNavigate, useLocation} from 'react-router-dom';
import addMovie from "../pages/addMovie";

let focusStatus = false;

const ListPage =({searchResults})=>{
    console.log("List Post Component Renders")

    const navigate = useNavigate();

    const [shouldRedirect, setShouldRedirect] = useState(false); 
    useEffect( () => {
        if(shouldRedirect === true) {
            navigate("/addmovie");
            setShouldRedirect(false);
            focusStatus = false;
            
        }
    }, [shouldRedirect] );

    const errorStyle = {
        color:"white"
    }


    console.log(searchResults)
   
  
//If Search Results exist, create a Post Component for each result
    const results = searchResults?.map(post => 
   <Post key={post.MOVIE_ID}  post={post} />)

   

  
 

   
    
   
  
   const content = results.length ? <article><p>{results}</p></article> : <article><h1 style={errorStyle}>No movie with that name in our database. Click below to add a movie. </h1><button onClick={() => setShouldRedirect(true)}>Click</button></article>

    
    

    return(
        <div>
            <main>{content}</main> 


        </div>
    )
}

export default ListPage