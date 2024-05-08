/* eslint-disable react/prop-types */
import { useState } from 'react';

import searchIcon from '../assets/icons/icon-search.png';

const SearchBar = ({ onSetCity, error, errorMessage, onFocus }) => {
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSetCity(textInput);
    setTextInput('');
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col'>
      <div className='flex items-center'>
        <input
          onChange={inputHandler}
          onFocus={onFocus}
          className='w-[250px] sm:w-[220px] md:w-[220px] lg:w-[220px] sm:mx-0 md:mx-0 lg:mx-0 px-6 py-1.5 rounded-full opacity-40 focus-visible:outline-none'
          type='text'
          value={textInput}
          placeholder={'City name...'}
        ></input>
      </div>

      <div className='flex justify-between'>
        <div className='text-white font-light pl-6'>
          {error ? <p>{errorMessage}</p> : null}
        </div>
        <button type='submit' className='w-5 h-5 opacity-70 mt-[-28px] mr-3'>
          <img src={searchIcon} alt='Search icon' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
