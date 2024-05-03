import React from 'react';
import { Movie } from "../../../types/LatestMovies";

interface SimilarMoviesProps {
    movies?: Movie[]; 
}

export const SimilarMovies: React.FC<SimilarMoviesProps> = ({ movies }) => {
    return (
        <div>
            {movies && movies.length > 0 && (
                <div>
                    <h2>Similar Movies:</h2>
                    
                    <ul className='grid grid-cols-2 gap-4'>
                       
                        {movies.map(movie => (
                            <>
                            <li key={movie.id}>
                                <div>

                                <a href={`/movies/${movie.id}`}>
                                    <img src={movie.medium_cover_image} alt="" className='rounded border-4 border-white hover:border-[#94e652]'/>
                                </a>
                                </div>
                            </li>
                            </>
                            
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
