import React from 'react';
import fallbackimage from '../../assets/images/fallbackimage.png'

interface FallbackUIProps {
  
}

const FallbackUI: React.FC<FallbackUIProps> = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <p className='text-3xl font-bold'>You sure It's our Fault???</p>
      <img src={fallbackimage}></img>
     <a href='/'>
         <button className="bg-webthemeprim text-white font-bold py-2 px-4 rounded" >
        Go to HomePage
      </button>
      </a>
    </div>
  );
};

export default FallbackUI;
