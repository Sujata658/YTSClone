import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface MidDetailProps {
    title: string | undefined;
    year: number | undefined;
    genres: string[] | undefined;
    available?: string[];
    like_count: number | undefined;
    rating: number | undefined;
}

export const MidDetail: React.FC<MidDetailProps> = ({ title, year, genres, available, like_count }) => {
    return (
        <div className='grid grid-flow-row gap-8'>
            <div className='text-4xl font-bold'>{title}</div>
            <div className='text-xl font-bold'>

                <div>{year}</div>
                {genres && (
                    <div>
                        {genres.join('/ ')}
                    </div>
                )}
            </div>
            {available && (
                <div className="flex gap-2 items-center">
                    <div className='text-lg'>Available in:</div>
                    <span className='flex gap-2'>
                        {available.map((item, index) => (
                            <div key={index} className='py-1 px-2 border border-white rounded'>
                                {item}
                            </div>
                        ))}
                    </span>
                </div>
            )}
            <div className='flex'>

            <div className='py-1 px-2 border border-white rounded flex'>
                <FontAwesomeIcon icon={faDownload} className='mr-2 text-[#5eb424]' />
                <div>Download Subtitles</div>
            </div>
            </div>


            <div className='flex items-center '><FontAwesomeIcon icon={faHeart} className='mr-16 text-[#5eb424]'/> 
            <div className='font-bold text-lg'>
            {like_count}
                </div></div>
        </div>
    );
};
