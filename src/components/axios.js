import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:9000'

}  
)


//---------------- GET Methods ------------------------
export const getMovies = async () => {
    const resposne = await api.get('/movies')
    return resposne.data
}

export const getMovieByID = async (name) => {
    const response = await api.get('/getMovie/' + name)
    return response.data
}

export const getHomeDispRev = async() => {
    const response = await api.get('/homeRev')
    return response.data
}

export const getRevFromMID = async(mid) =>{
    console.log('/getRevFromMID/' + mid)
    const response = await api.get('/getRevFromMID/' + mid)
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


// -------------------- Post Method ---------------------------
export const addMovietoDB = async() =>{
    
}

