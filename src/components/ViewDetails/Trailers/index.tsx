import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

interface TrailersProps {
  yt: string | undefined;
  screenshots: (string | undefined)[];
}


export const Trailers: React.FC<TrailersProps> = ({ yt, screenshots }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(undefined);

  const openPopup = (videoUrl: string | undefined) => {
    setSelectedVideo(videoUrl);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedVideo(undefined);
    setShowPopup(false);
  };

  return (
    <div className='grid gap-1 grid-cols-3 mx-32 my-16'>
      {screenshots.map((screenshot, index) => (
        index === 0 ? (
          <div key={index} className="relative" onClick={() => openPopup(screenshot)}>
            <img src={screenshot} alt={`Screenshot ${index + 1}`} className='h-full'/>
            <div className="absolute top-[40%] left-[40%] bg-slate-500 rounded-[25px]">
              <FontAwesomeIcon icon={faPlayCircle} className="text-5xl" />
            </div>
          </div>
        ) : (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className='w-full' onClick={() => openPopup(screenshot)} />
        )
      ))}
      {showPopup && selectedVideo && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    <div className="relative">
      <button className="absolute top-2 right-2 text-white" onClick={closePopup}>Close</button>
      <div className="w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${yt}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='w-full h-full'
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  </div>
)}

    </div>
  );
};
