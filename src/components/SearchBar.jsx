import React from 'react';

import searchIcon from '../assets/icon-search.png';

const SearchBar = () => {
  return (
    <form className='mt-[252px]'>
      <input
        className='w-48 h-8 rounded-full opacity-50'
        type='text'
        placeholder={'     location...'}
      ></input>
      <button>
        <img src={searchIcon} alt='Search icon' className='w-5' />
      </button>
    </form>
  );
};

export default SearchBar;
