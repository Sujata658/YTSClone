import React from 'react'
import { Movie } from '../../../types/LatestMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div >
      <Link to={`/movies/${movie.id}`}>
        <div className='relative group rounded border-[6px] hover:border-webthemeprim '>
          <img
            src={movie.medium_cover_image ? movie.medium_cover_image : movie.large_cover_image}
            alt={movie.title}
            className='cover w-full min-h-[30vh] border-bkgprim group-hover:opacity-10 filter blur-0 transition-all duration-300 '
          />
          <div className='absolute top-1/2 left-1/2 grid gap-1 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group group-hover:opacity-100 filter  transition-all duration-300'>
            <div className='text-3xl text-center text-webthemeprim group-hover:opacity-100 filter  transition-all duration-300'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            
            <div className='text-center text-xl font-bold group-hover:opacity-100 filter  transition-all duration-300'>
              <p>{movie.rating}</p>
            </div>
           
            <div className='text-center py-2'>
              {movie.genres?.slice(0, 2).map((genre, index) => (
                <div key={index} className='text-xl font-bold'>{genre}</div>
              ))}
            </div>
            <div className='group-hover:border-webthemeprim'>
              <div className='bg-webthemeprim p-2 rounded justify-center items-center text-center'>
                View Details
              </div>
            </div>
          </div>
        </div>

        <div className='font-bold text-sm'>

          <h2>{movie.title}</h2>
        </div>
        <div className='text-xs'>
          <p>{movie.year}</p>

        </div>
      </Link>

    </div>
  );
};
