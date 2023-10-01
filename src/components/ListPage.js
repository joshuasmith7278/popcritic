import Post from "../components/Post"

const ListPage =({searchResults})=>{
    console.log("List Post Component Renders")

    const errorStyle = {
        color:"white"
    }


    console.log(searchResults)
   
  
//If Search Results exist, create a Post Component for each result
    const results = searchResults?.map(post => 
   <Post key={post.MOVIE_ID}  post={post} />)

   

 

   

   
  
   const content = results.length ? <article><p>{results}</p></article> : <article><h1 style={errorStyle}>No movie with that name in our database. Try another.</h1></article>

    
    

    return(
        <div>
            <main>{content}</main> 


        </div>
    )
}

export default ListPage