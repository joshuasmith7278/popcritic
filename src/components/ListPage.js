import Post from "../components/Post"

const ListPage =({searchResults})=>{
    console.log("List Page Renders")

    const errorStyle = {
        color:"white"
    }

   

    console.log(searchResults)
    const results = searchResults?.map(post => <Post key={post.MOVIE_ID} 
        post={post} />)


    console.log(results)


    const content = results?.length ? <article><p>{results}</p></article> : <article><p style={errorStyle}>No Matching Posts</p></article>
    return(
        <div>
            <main>{content}</main>


        </div>
    )
}

export default ListPage