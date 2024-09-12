import { Movie } from "../../../types/LatestMovies";
import { MovieCard } from "../MovieCard";

interface MoviesProps {
  title?: string,
  urltitle?: string,
  url?: string,
  movies: Movie[];
  gridcolcss: string;

}

const Movies = ({ title = '', urltitle = '', url='', movies, gridcolcss }: MoviesProps) => {
  return (
    <>
    <div className="my-16 mx-12 md:mx-32">
      {title === '' ? <div></div> :
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-lg">
            {title}
          </div>
          <div className="text-sm font-bold text-textprim">
            <a href={url}>{urltitle}</a>
          </div>
        </div>}
      
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridcolcss} gap-6 lg:gap-16`}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>

  );
};
export default Movies
