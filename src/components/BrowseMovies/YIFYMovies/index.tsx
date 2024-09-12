import { useEffect, useState } from 'react';
import Movies  from '../../MoviesList/Movies';
import { Data } from '../../../types/LatestMovies';
import { getMovies } from '../../../apis/Movies/getMovies';
import { searchMovies } from '../../../apis/Movies/searchMovies';
import Pagination from '../../General/Pagination';

interface YIFYMoviesProps {
  searchQuery?: SearchProps;
}

export const YIFYMovies = ({ searchQuery }:YIFYMoviesProps) => {
  const [moviesData, setMoviesData] = useState<Data>({
    movie_count: 0,
    limit: 0,
    page_number: 0,
    movies: []
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (searchQuery !== undefined && searchQuery.query !== '') {
      searchMovies(searchQuery).then((movieData) => {
        setMoviesData(movieData)
      });

    } else {
      getMovies(currentPage).then((movieData) => setMoviesData(movieData));
    }
  }, [currentPage, searchQuery]);
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    moviesData.movie_count ===0? <div className='flex items-center justify-center h-[32vh] w-full'>Sorry Movie Not Found</div>
    :<div className='py-6'>
      <div className='text-center text-webthemeprim text-xl flex justify-center'>
        <p>YIFY Movies</p>
        {currentPage > 1 && <p> - page {currentPage}</p>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(moviesData.movie_count / 20)}
        primaryColor={'bg-webthemeprim'}
        onPageChange={handlePageChange}
        hoverColor='hover:hover-webthemeprim'
      />
      <Movies movies={moviesData.movies} gridcolcss='md:grid-cols-5' />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(moviesData.movie_count / 20)}
        primaryColor={'bg-webthemeprim'}
        onPageChange={handlePageChange}
        hoverColor='hover:hover-webthemeprim'
      />
    </div>
  );
};
