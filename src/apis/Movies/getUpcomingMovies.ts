import { axiosInstance } from "../../config/axios";


export const getUpcomingMovies = ()=>{
    // console.log('Got UpcomingMovies')
    return axiosInstance.get("/list_movies.json", {
        params: {
            sort_by: 'date_added',
            limit: 6
        }
    }).then(response=>{
        return response.data.data.movies;
    }).catch(error=>{
        console.log('Error in getUpcomingMovies:' , error)
        return [];
    })
}