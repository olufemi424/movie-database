import React, { Component } from "react";
import Movie from "./Movie";

class SearchResults extends Component {
  render() {
    let movieResults;
    if (this.props.movies) {
      movieResults = this.props.movies.map(movie => {
        return <Movie movie={movie} key={movie.id} />;
      });
    }
    return <div>{movieResults}</div>;
  }
}

export default SearchResults;
