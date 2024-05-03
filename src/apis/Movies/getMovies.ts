import { axiosInstance } from "../../config/axios";

export const getMovies = async (page: number) => {
  try {
    const response = await axiosInstance.get(`/list_movies.json?page=${page}`);
    console.log('got All Movies')
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
