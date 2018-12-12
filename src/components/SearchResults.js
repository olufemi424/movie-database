import React, { Component } from "react";
import Movie from "./Movie";
import { MovieGrid } from "./MoviesList";

class SearchResults extends Component {
  render() {
    let movieResults;
    if (this.props.movies) {
      movieResults = this.props.movies.map(movie => {
        return <Movie movie={movie} key={movie.id} />;
      });
    }
    return <MovieGrid>{movieResults}</MovieGrid>;
  }
}

export default SearchResults;
