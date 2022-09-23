class DataSource {
  static async movieList() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=219c38b35cae2c3d8b4d532709dd0db8"
    );
    const responseJson = await response.json();

    if (responseJson.results) {
      return Promise.resolve(responseJson.results);
    } else {
      return Promise.reject("Not Found");
    }
  }

  static async searchMovie(keyword) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=219c38b35cae2c3d8b4d532709dd0db8&query=${keyword}`
    );
    const responseJson = await response.json();

    if (responseJson.results.length > 0) {
      return Promise.resolve(responseJson.results);
    } else {
      return Promise.reject("Result Not Found");
    }
  }
}

export default DataSource;
