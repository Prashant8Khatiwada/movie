import React from "react";

const Movie = ({ movie, imgPath, getClassByVote }) => {
  const { id, title, poster_path, vote_average, overview } = movie;

  return (
    <div className="movie" key={id}>
      <img src={imgPath + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getClassByVote(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
