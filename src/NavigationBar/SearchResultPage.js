import React from "react";
import { useLocation } from "react-router-dom";


const SearchResultsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || null;

  return (
    <div>
      {searchResults ? (
        <div>
          <h2>Search Result:</h2>
          <div>
            <h3>{searchResults.title}</h3>
            <p>{searchResults.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${searchResults.poster_path}`}
              alt={searchResults.title}
            />
            {/* Render other details of the movie as needed */}
          </div>
        </div>
      ) : (
        <h1>No movies found</h1>
      )}
    </div>
  );
};

export default SearchResultsPage;
