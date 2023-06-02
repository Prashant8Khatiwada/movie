import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, imgPath, getClassByVote }) => {
  return (
    <div id="main">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          imgPath={imgPath}
          getClassByVote={getClassByVote}
        />
      ))}
    </div>
  );
};

export default MovieList;
