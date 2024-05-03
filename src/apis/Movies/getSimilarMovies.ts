import { axiosInstance } from "../../config/axios";

export const getSimilarMovies = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/movie_suggestions.json?movie_id=${id}`,{
        params:{
            limit: 4,
          },
    });
    return response.data.data.movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};