import React from 'react'
import { Movie } from '../../../types/LatestMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../General/Button';

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div >
      <a href={`/movies/${movie.id}`}>
        <div className='relative group rounded border-8 group-hover:border-webthemeprim hover:opacity-30 filter blur-0 transition-all duration-300'>
          <img
            src={movie.medium_cover_image ? movie.medium_cover_image : movie.large_cover_image}
            alt={movie.title}
            className=' border-bkgprim '
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group group-hover:opacity-100 filter  transition-all duration-300'>
            <div className='text-3xl text-center text-webthemeprim'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            
            <div className='text-center'>
              <p>{movie.rating}</p>
            </div>
           
            <div className='text-center'>
              {movie.genres?.slice(0, 2).map((genre, index) => (
                <div key={index}>{genre}</div>
              ))}
            </div>
            <div className='group-hover:border-webthemeprim'>
              <Button background={'bg-webthemeprim'} content={'View Details'} />
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
