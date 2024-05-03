import { axiosInstance } from "../../config/axios";

export const getLatestMovies = () => {
  return axiosInstance
    .get("/list_movies.json", {
      params: {
        sort_by: "title",
        limit: 8,
      },
    })
    .then(response => {
      return response.data.data.movies;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};
