class SearchHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-2">
                <h1 class="display-5 fw-bold text-white">Explore your Movies</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">RyFlix mempersembahkan acara pilihan dan drama terbaik dari berbagai
                        negara di Asia mulai dari series original Indonesia, drama Tiongkok, drama Korea, drama Jepang
                        atau j-dorama, dan banyak konten lainnya.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div class="form-floating me-sm-3">
                            <input type="text" class="form-control form-control-lg" id="searchInput" placeholder="Telusuri film">
                            <label for="search">Telusuri film</label>
                        </div>
                        <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" id="searchBtn">Search</button>
                        <button type="button" class="btn btn-outline-light btn-lg px-4" id="showAllBtn">All Movies</button>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

customElements.define("search-hero", SearchHero);
