import React from "react";

const ShowVideo = ({ movies, IMG_PATH }) => {
  function getClassByVote(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  return (
    <div id="main">
      {movies.map((movie) => {
        const { id, title, poster_path, vote_average, overview } = movie;
        return (
          <div className="movie" key={id}>
            <img src={IMG_PATH + poster_path} alt={title} />
            <div className="movie-info">
              <h3>{title}</h3>
              <span className={getClassByVote(vote_average)}>
                {vote_average}
              </span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              {overview}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowVideo;
