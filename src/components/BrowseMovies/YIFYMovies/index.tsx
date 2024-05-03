import { useEffect, useState } from 'react';
import { Movies } from '../../MoviesList/Movies';
import { Data } from '../../../types/LatestMovies';
import { getMovies } from '../../../apis/Movies/getMovies';
import { searchMovies } from '../../../apis/Movies/searchMovies';
import Pagination from '../../General/Pagination';

interface YIFYMoviesProps {
  searchQuery?: string;
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
    if (searchQuery !== undefined && searchQuery !== '') {
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
    <div className='py-6'>
      <div className='text-center text-[#5da93c] text-xl flex justify-center'>
        <p>YIFY Movies</p>
        {currentPage > 1 && <p> - page {currentPage}</p>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(moviesData.movie_count / 20)}
        primaryColor={'bg-[#5da93c]'}
        onPageChange={handlePageChange}
      />
      <Movies movies={moviesData.movies} gridcolcss='grid-cols-5' />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(moviesData.movie_count / 20)}
        primaryColor={'bg-[#5da93c]'}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
