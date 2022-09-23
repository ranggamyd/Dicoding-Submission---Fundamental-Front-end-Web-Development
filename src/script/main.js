import "./components/top-bar";
import "./components/search-hero";
import "./components/movie-list";
import "./components/bottom-bar";
import DataSource from "./dataSource";

const main = () => {
  const movieList = document.querySelector("movie-list");

  const renderResult = (results) => {
    movieList.movies = results;
  };

  const fallbackResult = (error) => {
    movieList.renderError(error);
  };

  const getMovie = async () => {
    try {
      const keyword = document.querySelector("#searchInput").value;
      if (keyword) {
        const result = await DataSource.searchMovie(keyword);
        renderResult(result);
      } else {
        showAllMovies();
      }
    } catch (error) {
      fallbackResult(error);
    }
  };

  document.querySelector("#searchBtn").addEventListener("click", getMovie);

  document.querySelector("#searchInput").addEventListener("keyup", getMovie);

  const showAllMovies = async () => {
    try {
      const result = await DataSource.movieList();
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };

  showAllMovies();
  document
    .querySelector("#showAllBtn")
    .addEventListener("click", showAllMovies);
};

export default main;
