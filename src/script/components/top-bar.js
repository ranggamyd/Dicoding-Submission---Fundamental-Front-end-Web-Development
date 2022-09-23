class TopBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">Akhirnya, ada juga tempat untuk menonton drama, film, anime, dan variety show yang original dan populer! RyFlix mempersembahkan acara pilihan dan drama terbaik dari berbagai negara di Asia mulai dari series original Indonesia, drama Tiongkok, drama Korea, drama Jepang atau j-dorama, dan banyak konten lainnya.</p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Follow on Twitter</a></li>
                            <li><a href="#" class="text-white">Like on Facebook</a></li>
                            <li><a href="#" class="text-white">Email me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <img src="../dist/images/logo.png" alt="RyFlix" width="30" style="margin-right: 10px">
                    <strong>RyFlix</strong>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>`;
  }
}

customElements.define("top-bar", TopBar);
