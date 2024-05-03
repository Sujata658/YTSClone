import { axiosInstance } from "../../config/axios";



export const searchMovies = async ({query, quality, genre, rating, year, language, orderby}:SearchProps) => {
    try {
      console.log('Searching api: ', `/list_movies.json?query_term=${query}&quality=${quality}&genre=${genre}&rating=${rating}&year=${year}&language=${language}&orderby=${orderby}`)
      const response = await axiosInstance.get(`/list_movies.json?query_term=${query}&quality=${quality}&genre=${genre}&rating=${rating}&year=${year}&language=${language}&orderby=${orderby}`);
      console.log('searched movies')
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };