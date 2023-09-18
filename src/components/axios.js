import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:9000'

}  
)

export const getMovies = async () => {
    const resposne = await api.get('/movies')
    return resposne.data
}