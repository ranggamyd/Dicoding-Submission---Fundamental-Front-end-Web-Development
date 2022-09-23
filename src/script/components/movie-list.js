import "./movie-item.js";

class MovieList extends HTMLElement {
  /**
   * @param {any} movies
   */
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" id="movieContainer">
                </div>
            </div>
        </div>`;

    this._movies.forEach((movie) => {
      const movieItem = document.createElement("movie-item");
      movieItem.movie = movie;
      document.querySelector("#movieContainer").appendChild(movieItem);
    });
  }

  renderError(error) {
    this.innerHTML = `<span>${error}</span>`;
  }
}

customElements.define("movie-list", MovieList);
