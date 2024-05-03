import { axiosInstance } from "../../config/axios";

export const searchMovies = async (query: string) => {
    try {
      const response = await axiosInstance.get(`/list_movies.json?query_term=${query}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };