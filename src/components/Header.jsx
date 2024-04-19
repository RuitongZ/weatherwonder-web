import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='flex justify-around'>
      <div>
        <p className='text-base text-white mt-[252px]'>12:00, Mon, dd, mm</p>
        <p className='text-5xl font-medium text-white'>Toronto</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
