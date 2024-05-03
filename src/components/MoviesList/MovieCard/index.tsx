import React from 'react'
import { Movie } from '../../../types/LatestMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../General/Button';

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div >
      <a href={`/movies/${movie.id}`}>
        <div className='relative group'>
          <img src={movie.medium_cover_image ? movie.medium_cover_image : movie.large_cover_image} alt={movie.title} className='rounded border-8 border-white hover:border-[#5da93c] hover:opacity-30' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center'>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <p>{movie.rating}</p>
            </div>
            <div className=''>
              <Button background={'bg-[#5da93c]'} content={'View Details'} />
            </div>

          </div>
        </div>
        <div className='font-bold text-sm'>

          <h2>{movie.title}</h2>
        </div>
        <div className='text-xs'>
          <p>{movie.year}</p>

        </div>
      </a>

    </div>
  );
};
