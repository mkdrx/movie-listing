import React, { createContext } from "react";
import initialMovies from "../constants/initialMovies";

// Creates context
const MovieContext = createContext();

// Children so it affects every component within
const MoviesProvider = ({ children }) => {
  const data = { movies: initialMovies };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MoviesProvider };
export default MovieContext;
