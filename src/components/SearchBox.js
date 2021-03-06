import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
      aria-label='Search Robots'
      type='search'
      placeholder='search robots'
      className='pa3 ba b--green bg-lighttest-blue'
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;