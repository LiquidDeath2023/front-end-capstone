import React, { useState } from 'react';

function Search({ filterQuestions }) {
  const [query, setQuery] = useState('');

  React.useEffect(() => {
    filterQuestions(query);
  }, [query]);

  const setSearch = (event) => {
    setQuery(event.target.value)
  };

  return (
    <div className="search-container">
      <input onChange={(e) => setSearch(e)} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS?" />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  );
}
// remove later
export default Search;
