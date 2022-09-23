class MovieItem extends HTMLElement {
  /**
   * @param {any} movie
   */
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const poster_path = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this._movie.poster_path}`;
    const title = (this._movie.title = "Untitled Movie"
      ? this._movie.title
      : this._movie.name);
    const year = this._movie.release_date.split("-");
    const date = this._movie.release_date;
    const overview = this._movie.overview;
    const url =
      "https://www.themoviedb.org/movie/" +
      this._movie.id +
      "-" +
      encodeURI(title);

    this.innerHTML = `
        <div class="col">
            <div class="card shadow-sm">
                <img src="${poster_path}" class="bd-placeholder-img card-img-top movie-thumbnail" role="img">
                <div class="card-body">
                    <h5 class="card-title movie-title">${title} (${year[0]})</h5>
                      <p class="card-text movie-overview">${overview}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="${url}" class="btn btn-sm btn-outline-success">View Detail</a>
                        </div>
                        <small class="text-muted">${date}</small>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

customElements.define("movie-item", MovieItem);
