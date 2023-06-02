import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Search from "./components/Search";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=138732b2a48c4ba4a769231c78b6327b&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const API_KEY = "138732b2a48c4ba4a769231c78b6327b";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function getClassByVote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
const FetchFromAPI = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm && searchTerm !== "") {
      const url = SEARCH_API + searchTerm;
      getMovies(url);
    } else {
      getMovies(API_URL);
    }
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <MovieList
        movies={movies}
        imgPath={IMG_PATH}
        getClassByVote={getClassByVote}
      />
    </div>
  );
};

export default FetchFromAPI;
