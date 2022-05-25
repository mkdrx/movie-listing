import React, { createContext, useState } from "react";

// Creates UserContext
const UserContext = createContext();

// Initial dummy user
const initialUser = { id: 1, name: "Mrk", favoriteMovies: [1, 2, 3] };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  // Logic to add / remove favorite movies
  const toggleFavorite = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((favMovId) => favMovId !== movieId)
      : [...user.favoriteMovies, movieId];
    setUser({
      ...user,
      favoriteMovies,
    });
  };

  const data = { user, login, logout, toggleFavorite };

  // Wrapper for the childrens within the component - See App.js
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
