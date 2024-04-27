/* eslint-disable react/prop-types */
import { useState } from 'react';

import searchIcon from '../assets/icon-search.png';

const SearchBar = ({ onSetCity, error }) => {
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSetCity(textInput);
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col'>
      <div className='flex items-center'>
        <input
          onChange={inputHandler}
          className='w-[220px] px-6 py-1.5 rounded-full opacity-50 focus-visible:outline-none'
          type='text'
          placeholder={'City name...'}
        ></input>
        <button type='submit' className='w-5 h-5 opacity-70 ml-[-36px]'>
          <img src={searchIcon} alt='Search icon' />
        </button>
      </div>
      <div className='text-white pl-6'>
        {error ? <p>Invalid city name!</p> : null}
      </div>
    </form>
  );
};

export default SearchBar;
