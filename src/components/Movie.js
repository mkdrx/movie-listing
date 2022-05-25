import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  // Consumes UserContext provider
  const { user, toggleFavorite } = useContext(UserContext);

  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  const isFavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        <button
          className={`btn ${
            isFavorite ? "btn-success" : "btn-outline-primary"
          }`}
          onClick={() => toggleFavorite(movie.id)}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Movie;
