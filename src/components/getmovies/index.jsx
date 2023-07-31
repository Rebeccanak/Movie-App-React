
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ImageContainer from "../../atoms/ImageContainer";
import { getMovies } from "../../utilis/utilities";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const moviesData = await getMovies();
      console.log({ moviesData });
      setMovies(moviesData.results);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  return (
    <div className="container">
      {movies && !loading && movies.length > 0 && movies.map(
        (movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
           
            <ImageContainer movie={movie} />
          </Link>
        )
      )}
      {movies && !loading && movies.length === 0 && <h1>No movies</h1>}
    </div>
  );
};

export default GetMovies;
