import React from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { MoviesProvider } from "./contexts/MovieContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <MoviesProvider>
        <NavBar />
        <MovieList />
      </MoviesProvider>
    </UserProvider>
  );
}

export default App;
