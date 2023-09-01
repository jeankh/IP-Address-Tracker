import React, { useState } from 'react';
import './search.css';
import arrow from "../assets/icon-arrow.svg";

function Search({ handleSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
    setInputValue('');
  };
  return (
    <div className='search'>
        <div className='search-from'>
        <h1>IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder='Search for any IP adress or domain '/>
                <button  type='submit' ><img  src={arrow} alt="SVG arrow " /></button>
            </form>
        </div>
        
    </div>
  )
}

export default Search