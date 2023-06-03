import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Paginate from "./components/Paginate";

const API_KEY = "138732b2a48c4ba4a769231c78b6327b";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
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

const fetchFromAPI = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const getMovies = async () => {
    const url = `${API_URL}&page=${currentPage}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
    const url = searchTerm ? `${SEARCH_API}${searchTerm}` : API_URL;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  const handlePageChange = (event, newPage) => {
    event.preventDefault();
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <MovieList
        movies={movies}
        imgPath={IMG_PATH}
        getClassByVote={getClassByVote}
      />
      <Paginate
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default fetchFromAPI;
