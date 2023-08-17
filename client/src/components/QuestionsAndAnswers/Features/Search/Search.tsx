import React from 'react';
import '../../qa-styles/Search.styles.css'

function Search({ setQuery }) {
//   const setSearch = (event: any) => {
//     setQuery(event.target.value)
//   };

  return (
    <div className="search-container">
      <input className="border-none flex-grow focus:outline-none focus:border-b-[black] focus:border-b focus:border-solid"
      // onChange={(e) => setSearch(e)}
      onChange={(e) => setQuery(e.target.value)}
      type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS?" />
      <i className="fa-solid fa-magnifying-glass p-[0.313rem] text-xl " />
    </div>
  );
}

export default Search;