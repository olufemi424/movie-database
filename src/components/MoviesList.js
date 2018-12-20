import React, { Component } from "react";
import Movie from "./Movie";
import Search from "./Search";

const baseURL = "https://api.themoviedb.org/3/";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.movieSearch = this.movieSearch.bind(this);
  }

  state = {
    movies: []
  };

  async componentDidMount() {
    // try to fetch data
    try {
      const res = await fetch(
        `${baseURL}movie/now_playing?api_key=56cbdfc579474a601e5ee545721a625f&language=en-US&page=1`
      );
      const movies = await res.json();
      //set state to the reseult object
      this.setState({
        keyword: "",
        movies: movies.results
      });
      //catch the error
    } catch (error) {
      console.log(error);
    }
  }

  updateInputValue = val => {
    this.setState({
      keyword: val
    });
  };

  movieSearch = e => {
    let url = "".concat(
      baseURL,
      "search/movie?api_key=",
      "56cbdfc579474a601e5ee545721a625f&language=en-US",
      "&query=",
      this.state.keyword
    );
    // try to fetch data
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Search
            movieSearch={this.movieSearch}
            updateInputValue={this.updateInputValue}
          />
          <div className="row mt-4">
            {this.state.movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesList;
