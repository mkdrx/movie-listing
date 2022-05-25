import React from "react";

const Movie = ({ movie }) => {
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  const isFavorite = false;

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
        >
          Favorite
        </button>
      </div>
      <h1>Movie</h1>
    </div>
  );
};

export default Movie;
