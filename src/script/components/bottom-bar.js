class BottomBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <p class="float-end mb-1">
            <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Dicoding Submission - Belajar Fundamental Front-end Web Development</p>
        </div>`;
  }
}

customElements.define("bottom-bar", BottomBar);
