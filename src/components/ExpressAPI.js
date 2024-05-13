import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:9000'

} 
)

//------------------------------------- EXPRESS API ------------------------------------ (---> API Express ---> API to SQL DB)
export const postReview = async (movieID, review, rating, userID) => {
    const response = await api.post('/reviews',
    {
        movieID: movieID,
        review: review,
        rating: rating,
        userID: userID
    })

    return response.data
}


export const postAuth = async(username)=>{
    const response = await api.post('/auth',
    {
        username:username
    })

    return response.data
}


export const getUserByID = async(uid) =>{
    const response = await api.get('/users/' + uid)
    return response.data

}

export const getHomeDispRev = async() => {
    const response = await api.get('/homeRev')
    return response.data
}

export const getRevFromMID = async(mid) =>{
    const response = await api.get('/getRevFromMID/' + mid)
    return response.data

}

export const getRevFromUID = async(uid) =>{
    const response = await api.get('/getReviewsFromUID/' + uid)
    return response.data

}

export const getRevByRID = async(rid) =>{
    const response = await api.get('/reviews/' + rid)
    return response.data

}


export const getUserByEmail = async (email) =>{
    const response = await api.get('/users/' + email)
    return response.data
}



export const getReviews = async() => {
    const response = await api.get('/reviews')
    return response.data
}

export const getLikesByUID = async(uid) => {
    const response = await api.get('/likes/user/' + uid)
    return response.data
}


export const getLikesByReview = async(rid) => {
    const response = await api.get("/likes/review/" + rid)
    return response.data

}

export const getLikesUIDandMID = async(uid, mid) => {
    const response = await api.get("/likes/movie/" + uid + "/" + mid)
    return response.data

}

export const postLike = async (reviewID, userID, movieID) => {
    const response = await api.post('/likes',
    {
        reviewID: reviewID,
        userID: userID,
        movieID:movieID
    })

    return response.data
}


let tmdbCounter = 0
//----------------------------- TMDB Controller ------------------------- (---> API Express ---> API to TMDB)
export const getRecentMovies = async()=>{
    const resposne = await api.get('/recents')
    tmdbCounter++
    console.log("TMDB Rate Counter : " + tmdbCounter)
    return resposne.data 
}

export const getMovieByID = async(mid)=>{
    const resposne = await api.get('/movie/' + mid)
    tmdbCounter++
    console.log("TMDB Rate Counter : " + tmdbCounter)
    return resposne.data 
}

export const searchTMDB = async(search) =>{
    const resposne = await api.get('/search/' + search)
    tmdbCounter++
    console.log("TMDB Rate Counter : " + tmdbCounter)
    return resposne.data 
    
}



