import { useEffect, useState } from 'react'
import { Movie } from '../../../types/LatestMovies';
import { Movies } from '../../MoviesList/Movies';
import { getLatestMovies } from '../../../apis/Movies/getLatestMovies';

export const Latest = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getLatestMovies().then((movies) => setMovies(movies)).catch((error)=>console.log(error));
  }, []);

  return (
    <div className='dark:bg-black py-1'>

      <Movies title='Latest YIFY Movies Torrents' urltitle='Browse All' url='/browse-movies' movies={movies} gridcolcss={'grid-cols-4'}/>
    </div>
  )
}
