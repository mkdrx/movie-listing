import React, { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  // Consumes MovieContext provider
  const { movies } = useContext(MovieContext);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
