import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AvatarProps {
    imageUrl?: string;
    altText?: string;
    size?: 'sm' | 'md' | 'lg';
  }
  

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = 'md' }) => {
  return (
    <div className={`flex items-center justify-center rounded-full bg-gray-300 ${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : 'w-16 h-16'}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="rounded-full w-full h-full object-cover" />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <FontAwesomeIcon icon={faUser}/>
        </div>
      )}
    </div>
  );
};

export default Avatar;