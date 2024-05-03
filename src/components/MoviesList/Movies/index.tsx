import { Movie } from "../../../types/LatestMovies";
import { MovieCard } from "../MovieCard";

interface MoviesProps {
  title?: string,
  urltitle?: string,
  url?: string,
  movies: Movie[];
  gridcolcss: string;

}

export const Movies = ({ title = '', urltitle = '', url='', movies, gridcolcss }: MoviesProps) => {
  return (
    <>
    <div className="my-16 mx-32">
      {title === '' ? <div></div> :
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-lg">
            {title}
          </div>
          <div className="text-sm font-bold text-[#ac9a8a]">
            <a href={url}>{urltitle}</a>
          </div>
        </div>}
      
        <div className={`grid ${gridcolcss} gap-16`}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>

  );
};
