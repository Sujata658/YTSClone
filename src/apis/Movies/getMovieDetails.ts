import { axiosInstance } from '../../config/axios';

export const getMovieDetails = async (id:string) => {
    try {
      const response = await axiosInstance.get(`/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
      console.log('data.movie:', response.data.data.movie);
      return response.data.data.movie;
    } catch (error) {
      console.error(error);
      return null; 
    }
};
