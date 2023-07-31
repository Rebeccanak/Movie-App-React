import React from "react";

const MovieDetails = ({ movie }) => {
  
  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path } = movie;

  return (
    <div className="movie-details">
      <h1>{title}</h1>
      <img
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${poster_path}`}
        alt={title}
      />
      <p>{overview}</p>
      
    </div>
  );
};

export default MovieDetails;

