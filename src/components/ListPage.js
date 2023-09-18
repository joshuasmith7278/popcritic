import Post from "../components/Post"

const ListPage =({searchResults})=>{
    console.log("List Page Renders")

    console.log(searchResults)
    const results = searchResults?.map(post => <Post key={post.MOVIE_ID} 
        post={post} />)


    console.log(results.length)


    const content = results?.length ? <article><p>Found {results.length} Posts</p></article> : <article><p>No Matching Posts</p></article>
    return(
        <main>{results}</main>
    )
}

export default ListPage