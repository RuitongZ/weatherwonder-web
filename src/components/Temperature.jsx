import React from 'react';

import cloudy from '../assets/icon-cloudy.png';

const Temperature = () => {
  return (
    <div className='flex items-center'>
      <p className='text-white font-medium text-[140px]'>12°</p>
      <div>
        <img src={cloudy} alt='icon' className='w-20 h-20' />
        <p className='text-white font-medium text-xl'>Rainy</p>
        <p className='text-white text-sm'>H:10 L:6</p>
      </div>
    </div>
  );
};

export default Temperature;
