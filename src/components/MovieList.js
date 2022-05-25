import React from "react";
import initialMovies from "../constants/initialMovies";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div className="container">
      <div className="row">
        {initialMovies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
