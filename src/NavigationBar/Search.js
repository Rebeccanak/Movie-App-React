// import React from "react";

// const Search=()=>{
//     return <button className="search-button">Search</button>;
    
// }
// export default Search;





// import React, { useState } from "react";

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     // Perform the search logic here using the searchQuery state
//     // For example, you can make an API call to fetch the search results
//     console.log("Performing search for:", searchQuery);
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         className="search-input"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button className="search-button" onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default Search;








// import React, { useState } from "react";
// import { getMovies } from "../utilis/utilities";


// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const movies = await getMovies(searchQuery);
//       console.log({movies})
//       setSearchResults(movies.results);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         className="search-input"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button className="search-button" onClick={handleSearch}>
//         Search
//       </button>

//       {loading && <h1>Loading search results...</h1>}

//       {searchResults.length > 0 && (
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {searchResults.map((movie) => (
//               <li key={movie.id}>{movie.title}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {searchResults.length === 0 && !loading && (
//         <h1>No movies found for the search query.</h1>
//       )}
//     </div>
//   );
// };

// export default Search;



// import React, { useState } from "react";
// import { searchMovies } from "../utilis/utilities";


// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState(null); // Change the initial state to null
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const movies = await searchMovies(searchQuery); // Fetch movies based on the search query
//       console.log({ movies });
//       setSearchResults(movies.results[0]); // Store only the first movie in the searchResults
//       setSearchQuery(""); // Reset the searchQuery after fetching results
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         className="search-input"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button className="search-button" onClick={handleSearch}>
//         Search
//       </button>

//       {loading && <h1>Loading search results...</h1>}

//       {searchResults && ( // Check if searchResults is not null before rendering
//         <div>
//           <h2>Search Result:</h2>
//           <div>
//             <h3>{searchResults.title}</h3>
//             <p>{searchResults.overview}</p>
//                <img
//               src={`https://image.tmdb.org/t/p/w500/${searchResults.poster_path}`}
//               alt={searchResults.title}
//             />
//             {/* Render other details of the movie as needed */}
//           </div>
//         </div>
//       )}

//       {!loading && !searchResults && ( // Display "No movies found" only if not loading and searchResults is null
//         <h1></h1>
//       )}
//     </div>
//   );
// };

// export default Search;
