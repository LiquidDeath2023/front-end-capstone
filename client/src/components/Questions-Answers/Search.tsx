import React from 'react';

function Search({ filterQs }) {
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    filterQs(query);
  }, [query]);

  const setSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-container">
      <input onChange={(e) => setSearch(e)} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS?" />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  );
}

export default Search;
