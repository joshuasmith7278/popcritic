import Post from "./Post"
import React,{useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import { redirect, useNavigate, useLocation} from 'react-router-dom';

let focusStatus = false;

const ListPage =({searchResults})=>{
    console.log("Search Results Component Renders")

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



    //setSearchRes(searchResults)
    const searchRes = searchResults.results
    console.log(searchRes)


    if(searchRes != null && searchRes.length > 1){

        var content = searchRes?.map(post => <Post title={post.title}  date={post.release_date} poster={post.poster_path} id={post.id}/>)
        

    }else{
        var content = <article><h1 style={errorStyle}>No movie with that name in our database.</h1></article>
    }
    


  
//If Search Results exist, create a Post Component for each result
    
/*

   

  
 

   
    
   
  

    
    */

    return(
        <div>
            <main><article><p>{content}</p></article></main> 

        </div>
    )
}

export default ListPage